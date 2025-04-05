// was to handle
// 1.write a data file appended data in file and read the data display in console.
const ee=require('events');
const e=new ee();
const fs=require('fs');
e.on('writef',()=>{
    fs.appendFile('a1.txt','Hello world! sometext',(err)=>{
        if(err){
            console.log('can not write');
        } 
        else{
            console.log('file is written');
        }
    });
    e.emit('appendf');
});
e.on('appendf',()=>{
    fs.appendFile('a1.txt'," Hi....... ",(err)=>{
        if(err){
            console.log('can not appended');
        }
        else{
            console.log('file is appended');
            e.emit('readf');
        }
    });
});
e.on('readf',()=>{
    fs.readFile('a1.txt','UTF-8',(err,data)=>{
        if(err){
            console.log('can not read');
        } 
        else{
            console.log('file is read '+data);
        }
    });
});
e.emit('writef');