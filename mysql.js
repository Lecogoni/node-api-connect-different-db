const dt = require('./modules/myDt');
const mysql = require('mysql');


console.log(dt.myDT());

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.write('Hello World!');
  res.write('nous sommes le ' + dt.myDT());
  res.end();
}).listen(8080);


// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM user", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });



/* SQL Request exemple
------------------------------------------------------------------*/


//var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//var sql = "INSERT INTO customers (name, address) VALUES ?";
var values = [
  ['John', 'Highway 71'],
  ['Peter', 'Lowstreet 4'],
  ['Amy', 'Apple st 652'],
  ['Hannah', 'Mountain 21'],
  ['Michael', 'Valley 345'],
  ['Sandy', 'Ocean blvd 2'],
  ['Betty', 'Green Grass 1'],
  ['Richard', 'Sky st 331'],
  ['Susan', 'One way 98'],
  ['Vicky', 'Yellow Garden 2'],
  ['Ben', 'Park Lane 38'],
  ['William', 'Central st 954'],
  ['Chuck', 'Main Road 989'],
  ['Viola', 'Sideway 1633']
];
