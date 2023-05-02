export default function script(){
    console.warn("hello world")
}

export function otherFunction(){
    console.log("Other function")
}
script();
otherFunction();

export class Userclass{
    test(){
        console.log("User class test function");
    }
}