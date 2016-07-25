const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 3001));

// Allow requests from pages served by Webpack
const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};
app.use(allowCrossDomain);

app.get('/api/forecast', (req, res) => {
  res.json({
    text: 'Server says: Another scorcher!',
  });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
