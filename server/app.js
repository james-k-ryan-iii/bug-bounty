const express = require('express');
const app = express();

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

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`----> App is running at http://0.0.0.0:${port}...`)
});
