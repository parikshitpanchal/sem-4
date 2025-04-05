// was to create a module having a function to check wether no. from 2 to 50 prime or not
// 800 lsg 1400
// 736 pbks 1400

isprime=(num)=>{
    flag=0;
    for(i=2;i<num;i++){
        if(num%i==0){
            flag++;
            break;
        }
    }
    if(flag==0){
        console.log(num+" is prime")
    }
    else{
        console.log(num+" not prime")
    }
}
module.exports={isprime};
