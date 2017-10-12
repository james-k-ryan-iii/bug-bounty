const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`----> App is running at http://0.0.0.0:${port}...`)
});
