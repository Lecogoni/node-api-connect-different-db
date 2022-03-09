const http = require ('http');
const dt = require('./modules/myDt');

console.log(dt.myDT());


http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.write('Hello World!');
  res.write('nous sommes le ' + dt.myDT());
  res.end();
}).listen(8080);