let otherfruits = ['Pineapple', 'Lichi'];
let fruits=["Apple", 'orange', ...otherfruits, 'mango', 'kiwi'];

function printAll(a, b, c, d){
    console.log(a, b, c, d);
}
function printAll2(...a){       // rest operator
    console.log(a);
}

// without using spread operator 
printAll(fruits[0], fruits[1], fruits[2], fruits[3]);      

// using spread operator
printAll2(...fruits);      // spread operator