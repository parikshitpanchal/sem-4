const os=require('os');
// console.log("Arch "+os.arch());
// console.log("platform "+os.platform());
// console.log("temp dir "+os.tmpdir());
// console.log("Name of pc "+os.hostname());
// console.log("Available memory "+os.freemem());
// console.log("total memory "+os.totalmem());


// In your temp directory create a folder aa using code.Insided a file must be created demo.txt.If you have free memory greater then 1gb right suffiecent memory in file else right insuffiecent memory.

const fs=require('fs');
var t=os.tmpdir();
fs.mkdirSync(t+"/AA");
var f=os.freemem()/1024/1024/1024;
if(f>1){
    fs.writeFileSync(t+"/AA/demo.txt","suffiecent memory");
}
else{
    fs.writeFileSync(t+"/AA/demo.txt","insuffiecent memory");
}