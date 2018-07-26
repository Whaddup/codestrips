const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './db.sqlite')

const PORT = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


app.get("/strips", (req, res, next) => {
  db.all("SELECT * FROM Strip", (error, x) => {
    if (error){
      res.status(404).send()
    }
    else {
    console.log(x)
    res.send({strips: x})
    }
  })
})


modules.exports = app;
