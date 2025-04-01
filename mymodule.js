//1.create a method required
// function print(){
//     console.log("Hello world");
// 
// }
print = ()=>console.log("Hello world");
add = (a,b)=>console.log("Addition "+(a+b));
sub = (a,b)=>console.log("Substraction "+(a-b));
    
// 2.Export the function
module.exports.print = print;
module.exports.a = add;
module.exports.s = sub;
