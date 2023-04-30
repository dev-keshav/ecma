let a=10;
if(true){
    let a=20;
    console.log(a)  //20
}
console.log(a)    //10


var b=5;
if(true){
    var b=6;
    console.log(b);   //6
}
console.log(b)     //6


// In this case it will always print 10 because the scope of var is global 
// and we have set time of 1sec, so befor 1sec the value of i will be 10
for(var i=0; i<10; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000)
}

for(let j=0; j<10; j++){
    setTimeout(() => {
        console.log(j);
    }, 1000);
}