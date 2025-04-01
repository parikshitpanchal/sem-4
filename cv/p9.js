// to check weather given string is in uppercase.if true write an file uppercase else write lowercase.Print contains of file in megenta color in console.
import ch from 'chalk';
import v from 'validator';
import fs from 'fs';

var string="This HAS SOME data";
if(string==string.toUpperCase()){
    fs.writeFileSync('file.txt',string.toUpperCase(),(err)=>{
        if(err) throw err;
        console.log("THis file has been saved!");
    });
}
else{
    fs.writeFile('file.txt',string.toLowerCase(),(err)=>{
        if(err) throw err;
        console.log("This file has been saved!");
    });
}