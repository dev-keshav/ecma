let data = [23, 34, 11, 9, 35, 69, 31, 80, 84, 104, 22];

let normalFun = data.map(function(idx){
    return idx*3;
})
console.log(normalFun);


let arrorFun = data.map((item)=>item*4)
console.warn(arrorFun)


let items = {
    name: 'Anil',
    getName:function(){
        console.log("Normal->", this)
    },
    getNameArrow:()=>{
        console.log("Arrow ->", this)
    }
}

items.getName();
items.getNameArrow();