// console.log(a); // undefined
// var a = 5;
// console.log(a); // 5
// Explanation:
// In JavaScript, variable declarations using 'var' are hoisted to the top of their scope. This means that the declaration of 'a' is moved to the top of the code, but its assignment (a = 5) remains in place. Therefore, when we first log 'a', it is declared but not yet assigned a value, resulting in 'undefined'. After the assignment, logging 'a' again will output 5.
//in simple terms , declarations are hoisted but not the initializations. So, the variable 'a' is declared at the top of the scope, but it is not assigned a value until the line 'var a = 5;' is executed.

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 10;
// console.log(b); // 10
// Explanation:
// In JavaScript, variables declared with 'let' and 'const' are also hoisted, but they are not initialized until their declaration is evaluated. This means that while the declaration of 'b' is hoisted, it is not accessible before the line 'let b = 10;' is executed. Attempting to access 'b' before its initialization results in a ReferenceError. After the initialization, logging 'b' will output 10.
//they are in a temporal dead zone from the start of the block until the declaration is processed. This means that you cannot access 'b' before it is declared and initialized, which is why we get a ReferenceError when trying to log 'b' before its declaration.

//Function hoisting example:
// console.log(add(2, 3)); // 5

// function add(x, y) {
//   return x + y;
// }
// Explanation:
// In JavaScript, function declarations are hoisted to the top of their scope. This means that the entire function definition is moved to the top of the code, allowing you to call the function before it is defined in the code. In this example, we can call 'add(2, 3)' before the function declaration, and it will work correctly, returning 5.

//but we cannot do the same thing to the function expression:
// console.log(subtract(5, 2)); // TypeError: subtract is not a function

// var subtract = function(x, y) {
//   return x - y;
// };