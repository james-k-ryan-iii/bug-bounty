const express = require('express');
const app = express();
const Mongoose = require('mongoose');

const prefix = (str) => {
  return `-----> ${str}`;
}

const isDevelopment = process.env.NODE_ENV !== 'production';
const isNotApiRequest = (pathName) => {
  return !pathName.match('^/api');
};

const bodyParser = require('body-parser');
app.use(bodyParser.json());

if (isDevelopment) {
  const proxy = require('http-proxy-middleware')
  app.use('/', proxy(isNotApiRequest, { target: 'http://localhost:8080', changeOrigin: true }));
} else {
  const path = require('path');
  app.use(express.static(path.join(__dirname, '../client/dist')));
}

console.log(prefix('Configuring MongoDB client'));
const mongoUrl = "mongodb://mongodb:27017/bugbounty";

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl);

const GitHub = require('github-api');
const gitHubApi = new GitHub();

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log(prefix('Connected to MongoDB')))

const BugBounties = require('./bounties/bug-bounty.js')(db);

console.log(prefix('Building API...'));
require('./bounties/bounties.controller.js')(app, BugBounties, gitHubApi);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(prefix(`App is running at http://0.0.0.0:${port}...`));
});
