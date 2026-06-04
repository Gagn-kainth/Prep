//WHAT IS ES6+?
//ES6, also known as ECMAScript 2015, is a major update to the JavaScript language that introduced many new features and improvements. ES6+ refers to the versions of ECMAScript that were released after ES6, including ES7 (ECMAScript 2016), ES8 (ECMAScript 2017), and so on. These versions continue to add new features and enhancements to the JavaScript language, making it more powerful and easier to use for developers. Some of the key features introduced in ES6+ include arrow functions, classes, template literals, destructuring assignment, promises, async/await, and many more.

// Example usage of some ES6+ features:
//DESTRUCTURING ASSIGNMENT
const person = {
    name: "John",
    age: 30,
    city: "New York"
};  
    const {name, age, city} = person;
    console.log(name); // Output: John
    console.log(age); // Output: 30
    console.log(city); // Output: New York  

//ARROW FUNCTIONS
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

//CLASSES
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

const dog = new Animal("Dog");
dog.speak(); // Output: Dog makes a noise.

//TEMPLATE LITERALS
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is John and I am 30 years old.

//PROMISES
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
};

fetchData().then(data => console.log(data)); // Output: Data fetched successfully! (after 2 seconds)

//ASYNC/AWAIT
const fetchDataAsync = async () => {
    try {   
        const data = await fetchData();
        console.log(data); // Output: Data fetched successfully!
    } catch (error) {
        console.error(error);
    }       
};

fetchDataAsync();   

