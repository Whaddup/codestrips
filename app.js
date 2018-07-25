const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

const PORT = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


modules.exports = app;
