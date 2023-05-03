let data = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("some issues")
    }, 2000)
})
// console.log(data)
data.then((item)=>{
    console.log(item)
}).catch((err)=>{
    console.log("Ho gya kya?")
})