const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '[設定したパスワード]',
  database: 'list_app'
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});

app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM users',
    (error, results) => {
      console.log(results);
      res.render('index.ejs');
    }
  );
});

app.get('/slide', (req, res) => {
  res.render('slide.ejs');
});

app.get('/rank', (req, res) => {
  res.render('rank.ejs');
});

app.get('/help', (req, res) => {
  res.render('help.ejs');
});

app.get('/course', (req, res) => {
  res.render('course.ejs');
});

app.listen(3000);
