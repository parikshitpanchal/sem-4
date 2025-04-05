// was create a class named person by asinging name and age.create 2 obj and a method name elder in this class.get the elder person end print their ditails in console.
class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    elder(){
        if(this.age>20){
            return this.name+" is elder";
        }
        else{
            return this.name+" is not elder";
        }
    }
}
let a1=new person("sai",25);
let a2=new person("sri",18);
console.log(a1.elder());
console.log(a2.elder());