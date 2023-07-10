// ---------------- 1st eg -------------------
// Here the inner function has the access to use the data of outer function, this is called closuer.
function fun1(){
    let a=2;
    function fun2(){
        console.log(a);
    }
    return fun2;
}

let value = fun1();
value();



// ---------------- 2nd eg -----------------  
// Here in this case the inner function takes the reference of outer variable not the value, so it will take the update value as a reference.
function fun12(){
    let b=2;
    function fun3(){
        console.log(b);
    }
    b=5;
    return fun3;
}

let value2 = fun12();
value2();