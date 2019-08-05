var mysql = require('mysql');

var con = mysql.createConnection({
  host: '',
  user: 'root@localhost',
  password: '',
  database: 'test_pgmt',
  socketPath: '/tmp/mysql.sock'
});

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    var sql = "INSERT INTO customers (name, address) VALUES ('Vidhya','Scarborough')";
    con.query(sql, function (err, result) {
      if (err) {
        console.error('error during connection:'+err.stack)
        throw err;
      }
      console.log("1 record inserted");
    });

 });
 

