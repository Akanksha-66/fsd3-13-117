import {EventEmitter} 
from "node:events";
   const task = new EventEmitter();
   const sayHi = (name) => {
    console.log(`Logged In ${name}`);
};
const starts = () => {
console.log("System started");

};
// task.on("greet", starts); //for every line
task.once("greet", starts); //for one time only
task.on("greet", sayHi);   //event and method binding 
task.on("greet", (name) => {
    console.log(`&{name} logged out`);
}); //can also use one here for getting one time only
task.emit("greet", "Akanksha Dixit"); //announcement
task.emit("greet", "aditi");