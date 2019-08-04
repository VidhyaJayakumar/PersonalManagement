var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '',
  database: 'test_pgmt'
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

app.get('/', function(req, res) {
  var html='';
  html +="<body>";
  html += "<form action='/thank'  method='post' name='form1'>";
  html += "Name:</p><input type= 'text' name='name'>";
  html += "Email:</p><input type='text' name='email'>";
  html += "address:</p><input type='text' name='address'>";
  html += "Mobile number:</p><input type='text' name='mobilno'>";
  html += "<input type='submit' value='submit'>";
  html += "<INPUT type='reset'  value='reset'>";
  html += "</form>";
  html += "</body>";
  res.send(html);  
});

app.post('/thank', urlencodedParser, function (req, res){
  var reply='';
  reply += "Your name is" + req.body.name;
  reply += "Your E-mail id is" + req.body.email; 
  reply += "Your address is" + req.body.address;
  reply += "Your mobile number is" + req.body.mobilno;
  reply += "This will be inserted into database"
  res.send(reply);

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    var sql = 'INSERT INTO customers (name, address) VALUES (' + req.body.name + ',' + req.body.address + ')';
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });

 });
 


});
