function sayHello(name) {
    console.log(`Welcome to ${name}`);
}
const sayHi = (name) => {
    console.log(`Welcome to ${name}`);
};

function sum(a,b) {
    return a+b;
}
//const findsum = (a,b) => {
  //  return a+b;
//}
const findsum = (a,b) => a+b;

sayHello('Akanksha Dixit'); 
sayHi("Akanksha");
console.log(`sum of 2 and 5 is ${sum(2,5)}`);
console.log(`sum of 2 and 5 is ${findsum(2,5)}`);
console.log("hello");