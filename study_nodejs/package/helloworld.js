// var http = require('http')
// var server = http.createServer(function (req,res) {
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.end('<h1>Hello world</h1>');
// });
// server.listen(80);
var mybuffer = new Buffer('1111111','base64');
console.log(mybuffer);
require('fs').writeFile('my.png',mybuffer);