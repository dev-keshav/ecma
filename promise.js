let a = undefined;

// This function will take 4sec 
setTimeout(()=> {
    a=34;
    console.log(a);
}, 4000);

console.log(a);
 

// Using Promise 
let b="nahi hua hai abhi";
let yefun = new Promise((resolved, reject)=>{
    setTimeout(() => {
        b="Ho gya";
        resolved("Done")
    }, 2000)
})

yefun.then(()=> {
    console.log(b);
})
