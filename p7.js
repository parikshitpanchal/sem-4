// write a script to show a simple html file as home page using http server.

const fs=require('fs');
const http = require('http');
const myserver = http.createServer((req, res) => {
    if(req.url=="/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(fs.readFileSync('./home.html','utf-8'));
        res.end();
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write("<h1 style='color:red'>404 Page not Found</h1>");
        res.end();
    }
}).listen(5021,()=>console.log("listening at 5021"));