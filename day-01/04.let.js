//redeclare but not within same scope
//reassign
function hello() {
    let x = 10;
    //let x = 20; //gives error
}
let name = "Gowtham";
let age = 28;
age =27;
console.log(`Name: ${name}, age: ${age}`);