//what is prototype in javascript?
//prototype is a built-in object in JavaScript that allows you to add properties and methods to all instances of a particular constructor function. Every JavaScript object has a prototype, which is an object itself. When you access a property or method on an object, JavaScript first looks for it on the object itself, and if it doesn't find it, it looks up the prototype chain until it finds it or reaches the end of the chain (null).
let obj={
    name:"Alice",
};

let obj2 ={
    age: 30,
    greet(){
        console.log(`hello my name is ${this.name} and my age is ${this.age}`); // 'this' refers to the object that calls the greet method
    }
}

// we can set obj2 as the prototype of obj
Object.setPrototypeOf(obj, obj2);
//obj.__proto__ = obj2; // another way to set the prototype of obj to obj2
obj.greet(); // Output: hello my name is Alice and my age is 30, obj can access properties and methods of obj2 through the prototype chain