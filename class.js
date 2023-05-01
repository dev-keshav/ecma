class Fruits{
    name= "orange"

    constructor(){
        this.name = "Apple"
        // console.log(this.name);
    }

    demo(){
        console.log(this.name)
        // return this.name;
    }
}

var f1 = new Fruits;
f1.demo();