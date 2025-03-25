const fs=require('fs');

//1.Create folder
// fs.mkdirSync("test",(err)=>{
//     if(err){
//         console.log("Folder not created");
//     }
//     else{
//         console.log("Folder created");
//     }
//     });
// console.log("Hello");

// 2.Write File(Create)
// fs.writeFile("test/a1.txt","Some text return in file.",
//     (err)=>{
//         if(err){
//             console.log("File not writing"+err);
//         }
//         else{
//             console.log("File writing"+err);
//         }
//     });

// 3.Append File(Create)
// console.log("File writen");
// fs.appendFile("test1/a2.txt","Hello World",
//     (err)=>{
//         if(err){
//             console.log("File not writing"+err);
//         }
//         else{
//             console.log("File writing"+err);
//         }
//     }
// );
// console.log("File appended");

// 4.Read File
// var data=fs.readFile("./test/a1.txt","UTF-8",
//     (err,data)=>{
//         if(err){
//             console.log("File not read"+err);
//         }
//         else{
//             console.log(data);
//         }
//     }
// ); //or UTF-8


// 6.Rename File
// fs.rename("./test1/a.txt","./test1/a2.txt",(err)=>{console.log(err)});

// 5.Delete File
// fs.unlink("./test1/a2.txt",(err)=>{console.log(err)});

// 7.Delete Folder
// fs.rmdir("./test1",(err)=>{console.log(err)}); 