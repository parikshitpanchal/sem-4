// was to create a module having a function to check wether no. from 2 to 50 prime or not.

function isprime(num){
    flag=0;
    for(i=2;i<num;i++){
        if(num%i==0){
            flag=1;
            break;
        }
        else{
            flag=0;
        }
    }
    if(flag==1){
        console.log("Not Prime number "+num);
    }
    else{
        console.log("Prime number "+num);
    }
}
module.exports.isprime=isprime;