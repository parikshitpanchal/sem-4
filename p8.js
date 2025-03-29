// was to use http module to fatch and html file with respect to specified url by the user.
const http=require('http');
const fs=require('fs');
const url=require('url');
var myserver=http.createServer((req,res)=>{
    var p=url.parse(req.url,true);
    if(p.pathname==="/home.html" || p.pathname=="/about.html" || p.pathname=="/contact.html"){
        res.writeHead(200,{'Content-Type':'text/html'});
        var data=fs.readFileSync("."+p.pathname,"UTF-8");
        res.write(data);
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write("<h1 style='color:red;'>404 page not found</h1>");
    }
    res.end();
});
myserver.listen(5080);
console.log("listeining to 5080......");