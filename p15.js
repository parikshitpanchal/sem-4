// pb94.was to print welcome to home page with two links above to send the conctant us on home page of server.In above as page display welcome to lju in bold and blue color.contact us page should display email,abc@google.com in italic and red color.any other requst will give page not found message.
const http=require('http');
http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(`<html><body>
            <h1>Welcome to home page</h1>
            <a href="http://localhost:5020/about">About Us</a>
            <a href="http://localhost:5020/contact">Contact Us</a>
            </body></html>`);
        res.end();
    }
    else if(req.url=="/about"){
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write(`<h1 style='color:blue; font-weight:bold;'>Welcome to lju</h1>`);
        res.end();
    }
    else if(req.url=="/contact"){
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write(`<h1 style='color:red; font-style:italic;'>abc@google.com</h1>`);
        res.end();
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write(`<h1 style='color:red'>404 Page not Found</h1>`);
        res.end();
    }
}).listen(5020,()=>console.log("listening at 5020"));