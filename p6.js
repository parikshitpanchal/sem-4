// write a script to write no. in file a.txt seprated by space.
// read this file sort number in ascending number and write in b.txt.

const fs=require('fs');
//fs.mkdirSync("test1");



//fs.writeFileSync("./test1/a.txt","4 2 6 1 3 7 9");

var data=fs.readFileSync("./test1/a.txt","UTF-8");

var ar=data.split(" ");
ar.sort((a,b)=>a-b);

fs.writeFileSync("./test1/b.txt",ar.toString());
