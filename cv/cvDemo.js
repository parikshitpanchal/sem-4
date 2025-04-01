import ch from 'chalk';
// console.log(ch.red("hello bea.."));
// console.log(ch.bgYellow("hello bea.."));
// console.log(ch.bold("hello bea.."));
// console.log(ch.italic("hello bea.."));
// console.log(ch.underline("hello bea.."));
// console.log(ch.blue.bgYellow.bold.italic.underline("hello bea.."));

import v from 'validator';
if(v.isEmail('abc.def')){
    console.log(ch.green("Vaild email"));
}
else{
    console.log(ch.red("Invaild email"));
}
if(v.isURL('https://stake.com')){
    console.log(ch.green("Vaild url"));
}
else{
    console.log(ch.red("Invaild url"));
}
if(v.isEmpty('https://www.google.com')){
    console.log(ch.green("Vaild Empty"));
}
else{
    console.log(ch.red("Invaild Empty"));
}
if(v.isUppercase('https://www.google.com')){
    console.log(ch.green("Vaild uppercase"));
}
else{
    console.log(ch.red("Invaild uppercase"));
}
if(v.isLowercase('https://www.google.com')){
    console.log(ch.green("Vaild lowercase"));
}
else{
    console.log(ch.red("Invaild lowercase"));
}
