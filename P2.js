var person=[{"name":"abc","age":20},{"name":"def","age":21},{"name":"mno","age":22}];
person.sort((a,b)=>b.age-a.age);
console.log(JSON.stringify(person));