// status code
// 1xx=No Response
// 2xx=Ok
// 3xx=Redirection
// 4xx=Client Error
// 5xx=Server Error

// 1.Require http module
const http = require('http');
// 2.Create server
const myserver = http.createServer((req, res) => {
    console.log(req.url);
    res.write("<h2>Good Morning</h2>\n");
    res.write("Hello World.\n");
    res.end("Last Line");
});
myserver.listen(5000);
console.log("Server started has port no 5000");
        // a.Read request
        // b.write reaponse
        // c.write headers
        // d.End response(compulson)
// 3.Configure server to listen to particuler port(0-65535)
