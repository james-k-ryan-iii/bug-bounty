const { check } = require('express-validator/check');
const { enforceValidation, returnError } = require('../helpers/api.js');

const parseGitHubIssueUrl = /github.com\/([^\/]+)\/([^\/]+)\/issues\/([0-9]+)$/;
const isValidBounty = [
  check('gitHubIssueUrl').matches(parseGitHubIssueUrl),
];

module.exports = function(app, bounties, gitHub) {
  app.get('/api/v1/bounties', getBounties);
  app.post('/api/v1/bounties', [isValidBounty], enforceValidation.bind(null, addBounty));
  app.delete('/api/v1/bounties', deleteBounties);

  function deleteBounties(req, res) {
    bounties.collection.drop((err) => {
      if (err) {
        res.status(500);
        res.json({
          error: err,
          code: 'Failed to DROP',
        });
      } else {
        res.status(200);
      }
      res.end();
    });
  }

  function getBounties(req, res) {
    bounties.find({}).then((bounties) => {
      res.write(JSON.stringify(bounties));
      res.status(200);
      res.end();
    }).catch((error) => {
      res.json({
        error,
        code: 'Failed to look up bounties in database.',
      });
      res.status(500);
      res.end();
    });
  }

  function addBounty(req, res) {
    const parsed = parseGitHubIssueUrl.exec(req.body.gitHubIssueUrl);
    const issueId = parseInt(parsed[3], 10)
    const owner = parsed[1];
    const repo = parsed[2];

    gitHub.getIssues(owner, repo).getIssue(issueId).catch((error) => {
      if (error && error.status === 404) {
        res.json({
          code: 'E_INVALID_ISSUE',
          error,
        });
        res.status(400);
        res.end();
      }

      res.json({
        error: 'E_LOAD_ISSUE_FAILED',
        error,
      });
      res.status(500);
      res.end();
    }).then((response) => {
      const issueData = response.data;
      const newBounty = {
        title: issueData.title,
        body: issueData.body,
        authorId: issueData.user.id,
        postedOn: new Date(),
        status: 'Open',
        gitReference: {
          gitHubIssueUrl: req.body.gitHubIssueUrl,
        },
      };

      return bounties.create(newBounty);
    }).catch((error) => {
      res.json({
        code: 'E_CREATE_ISSUE_FAILED',
        error,
      });
      res.status(500);
      res.end();
    }).then((result) => {
      res.status(200);
      res.json(result);
      res.end();
    });
  }
}
