//what is eventloop in js?
//js is single-threaded, meaning it can only execute one task at a time. However, JavaScript is designed to handle asynchronous operations efficiently, and this is where the event loop comes into play.

// The event loop is a fundamental concept in JavaScript that allows for asynchronous programming. It is responsible for managing the execution of code, handling events, and coordinating the execution of tasks in a non-blocking manner.

// In JavaScript, there are two main components that work together to enable asynchronous behavior: the call stack and the event loop.
// The call stack is a data structure that keeps track of the currently executing functions. When a function is called, it is added to the call stack, and when it finishes executing, it is removed from the stack. If a function calls another function, the new function is added to the top of the stack.

// The event loop, on the other hand, is responsible for monitoring the call stack and the task queue. The task queue is where asynchronous tasks, such as callbacks from events or promises, are placed when they are ready to be executed. The event loop continuously checks the call stack and the task queue. If the call stack is empty, it takes the first task from the task queue and pushes it onto the call stack for execution. This process allows JavaScript to handle multiple tasks without blocking the main thread, enabling a responsive user experience even when performing time-consuming operations.

console.log("Start");
setTimeout(() => {
  console.log("Inside setTimeout");// setTimeout is a macrotask, it will be executed after the current call stack is empty and all microtasks are completed
}, 0);
Promise.resolve().then(() => {// Promise is a microtask, it will be executed before the setTimeout callback
  console.log("Inside Promise");
});
console.log("End");
// Output:
// Start
// End
// Inside Promise
// Inside setTimeout

// In this example, the event loop ensures that the synchronous code (console.log("Start") and console.log("End")) is executed first, followed by the microtask (the Promise callback), and finally the macrotask (the setTimeout callback).