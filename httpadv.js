
const http = require('http');

const myserver = http.createServer((req, res) => {
    if(req.url=="/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h2>Good Morning</h2>\n");
        res.write("Hello World.\n");
        res.end("Last Line");
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write("<h1 style='color:red'>404 Page not Found</h1>");
        res.end();
    }
}).listen(5021,()=>console.log("listening at 5021"));


