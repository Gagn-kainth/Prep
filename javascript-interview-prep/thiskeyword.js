//What is 'this'?
// 'this' refers to the object that is executing the current function. Its value depends on HOW the function is called, not where it's defined.
//example 1: In a method, 'this' refers to the object that owns the method.

const person ={
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name); // 'this' refers to the 'person' object
    }
}
person.greet(); // Output: Hello, Alice
//exaple 2 : arrow function does not have its own 'this', it inherits 'this' from the enclosing scope.
const person2 = {
    name: "Bob",
    greet: () => {  
        console.log("Hello, " + this.name); // 'this' does not refer to 'person2', it refers to the global object (window in browsers)
    }
}
person2.greet(); // Output: Hello, undefined (in strict mode) or Hello, [object Window] (in non-strict mode)
//example 3: In a regular function, 'this' refers to the global object (window in browsers) or undefined in strict mode.
function showThis() {
    console.log(this); // 'this' refers to the global object (window in browsers) or undefined in strict mode
}
showThis(); // Output: [object Window] (in non-strict mode) or undefined (in strict mode)