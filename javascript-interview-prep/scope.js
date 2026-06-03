let a =45; // global scope

function outerFunction() {
    let b = 10; // local scope of outerFunction


function innerFunction() {
    var r=15; // fuction scope of innerFunction
    let c = 20; // local scope of innerFunction
    console.log(a); // Accessing global variable 'a'
    console.log(b); // ReferenceError: b is not defined
}   
}
//block scope example
if (true) {
    let d = 30; // block scope of the if statement
    console.log(d); // 30
}


//Scope chain example
let outer = "outer";

function parent() {
  let mid = "mid";
  function child() {
    let inner = "inner";
    console.log(outer); //  found via scope chain
    console.log(mid);   //  found in parent
    console.log(inner); //  found locally
  }
  child();
}