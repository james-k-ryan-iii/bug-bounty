module.exports = class BountiesController {
  constructor(app, connect) {
    this._app = app;
    this._connect = connect;
    this._collection = 'bounties';

    app.get('/api/v1/bounties', this.getBounties.bind(this))
  }

  /**
   * @swagger
   * Route: /api/v1/bounties
   */
  getBounties(req, res) {
    this._connect().then((db) => {
      const bounties = db.collection(this._collection);
      return bounties.find({}).toArray();
    }).then((bounties) => {
      res.status(200);
      res.write(JSON.stringify(bugs));
      res.end();
    }).catch((error) => {
      res.status(500);
      res.write(JSON.stringify({
        error,
        message: 'Failed to look up bounties in database.',
      }));
      res.end();
    });
  }
}
