
// without destructuring 
let fruits = ["Apple", "Orange", "mango", "Kiwi"];
console.log(fruits[2]);

// using destructuring 
let [f1, f2, f3]=fruits;
console.log(f2);

// with rest operator 
let [a1, ...other] = fruits;
console.log(other);