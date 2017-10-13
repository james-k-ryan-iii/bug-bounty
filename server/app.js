const express = require('express');
const app = express();

const prefix = (str) => {
  return `-----> ${str}`;
}

const isDevelopment = process.env.NODE_ENV !== 'production';
const isNotApiRequest = (pathName) => {
  return !pathName.match('^/api');
};

if (isDevelopment) {
  const proxy = require('http-proxy-middleware')
  app.use('/', proxy(isNotApiRequest, { target: 'http://localhost:8080', changeOrigin: true }));
} else {
  const path = require('path');
  app.use(express.static(path.join(__dirname, '../client/dist')));
}

console.log(prefix('Configuring MongoDB client'));
const MongoClient = require('mongodb').MongoClient;
const mongoUrl = "mongodb://mongodb:27017/bugbounty";
const connect = () => MongoClient.connect(mongoUrl);

console.log(prefix('Building API...'));

const BountiesController= require('./bounties/bounties.controller.js');
new BountiesController(app, connect);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(prefix(`App is running at http://0.0.0.0:${port}...`));
});
