const ee=require('events');
const e=new ee();
e.on('print',(m)=>console.log("Hello world "+m));
e.on('add',(a,b)=>console.log("Hello world "+(a+b)));
e.on('sub',(a,b)=>console.log("Hello world "+(a-b)));
e.emit('print','from Fp');
e.emit('add',30,40);
e.emit('sub',30,40);