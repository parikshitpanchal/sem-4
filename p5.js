// create a script using which three messages are printed but in reverse order of which there are coded.
function f1(){
    console.log('Hello');
}
// setTimeout(f1,3000);
setTimeout(()=>{
    console.log('World');
},3000);

// use callback Es6 fun that displays addition of 2 no. which are incremented every two second.
let a=1;
let b=1;
function fun(a,b){
    console.log(a+b);
}
 setInterval(()=>fun(++a,++b),2000);

// or
setInterval(()=>{
    ++a;
    ++b;
    console.log(a+b);
},2000);