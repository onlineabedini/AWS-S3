const express = require('express');

// application1 ---------------------
const application1 = require('./app')

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app! . .')
});

app.listen(3000, () => {
  console.log('server started . . . ');
});