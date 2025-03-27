// const path=require('path');
// var s="D:/abc/test/demo/myfile.txt";
// console.log("Directory"+path.dirname(s));
// console.log("File name"+path.basename(s));
// console.log("Extension"+path.extname(s));


// In the given path check weather the file is an image or not.If it is a image print the file name and root directry.
const path=require('path');
var s="D:/abc/demo/test/myfile.jpg";
var p=path.parse(s);
console.log(p);
if(p.ext==".jpg"||p.ext==".gif"||p.ext==".png"||p.ext==".jfif"){
    console.log("File name is "+p.name+" is a image in root directry "+p.root);
}
else{
    console.log("File is not an image");
}