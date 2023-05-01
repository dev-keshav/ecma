class Category{
    dryFruit(){
        return "This is dry fruits";
    }
    generalFruit(){
        return "This is general fruits";
    }
}

class Fruits extends Category{
    constructor(){
        super()
        console.log("Constructor");
    }
    getFruits(){
        return "You get apple"
    }
}

var f1 = new Category;
var f2 = new Fruits;

console.log(f2.generalFruit());

