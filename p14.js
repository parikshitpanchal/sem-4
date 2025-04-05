// create a json obj as given bellow student={}.
// was to do the following:-
// 1.write the above obj in a file name j.txt.read file in console and print only employee id.
// 2.Display the json obj in browser when '/' path is called else print 404 error.

const http=require('http');
const fs=require('fs');
student={"name":"Fenil","EmpId":"241","age":20};
data=JSON.stringify(student);
fs.writeFileSync("j.txt",data);
var d=fs.readFileSync('j.txt','utf-8');
var d2=JSON.parse(d);
console.log("Employee id is "+d2.EmpId);
const myserver=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.write(d);
        res.end();
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write("<h1 style='color:red'>404 Page not Found</h1>");
        res.end();
    }
}).listen(5044,()=>console.log("listening at 5044"));