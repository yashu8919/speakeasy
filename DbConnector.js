var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Yash@123",
    database: 'speakez',
    port: 3306,
  });
  
  let status=con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!to database");
    
  });
 


  module.exports.status=status;
  module.exports.conn=con;