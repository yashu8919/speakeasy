const express = require('express');
const app = express();
const path=require('path')
var mysql = require('mysql2');
var sql=require('./DbConnector.js');





//-------------------------------------------------SQL CONNECTION--------------------------------------------------------------
var con=sql.conn; 
//-----------------------------------------------------------------------------------------------------------------------------

const port = 80;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
