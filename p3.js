// write a function name first last that text and array and returns and obj such that first element of array is key of obj and last element is it value.Display the obj in terminal.

// var In=["pen","pencil","marker","ink"];
// function firstlast(ar){
//     var out={};
//     out[ar[0]]=ar[ar.length-1];
//     return out;
// }
// console.log(JSON.stringify(firstlast(In)));


// create a function list to obj that text a 2d array as input where first element of inner array becomes key and second element becomes values of and obj.return an array of such obj.

var ar1=[["car1","bmw"],["car2","mastang"],["car3","porsche"]];
function text(ar){
    var out={};
    for(var i=0;i<ar.length;i++){
        out[ar[i][0]]=ar[i][1];
    }
    return out;
}

//OR
// function text1(ar){
//     var out=[];
//     for(i in ar){
//         o={};
//         o[a[i][0]]=a[i][1];
//         out.push(o);
//     }
//     return out;
// }

console.log(JSON.stringify(text(ar1)));