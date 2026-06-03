//what is closure in javascript?
//closure is a function that has access to the variables in its outer scope, even after the outer function has returned.
//closure allows a function to access and manipulate variables that are defined in its outer scope, even after the outer function has finished executing. This is because the inner function retains a reference to the variables in its outer scope, creating a closure. Closures are commonly used for data privacy and to create functions with persistent state.
// function add(num){
//     function innerAdd(x){
//         console.log (num + x);
//     }
//     return innerAdd;
// }
// let adding5 = add(5); // creating a closure with num = 5
// adding5(10); // Output: 15, innerAdd has access to num through the closure

// In this example, the 'add' function creates a closure by defining the 'innerAdd' function inside it. The 'innerAdd' function has access to the 'num' variable from the outer 'add' function, even after 'add' has finished executing. When we call 'adding5(10)', it uses the value of 'num' (which is 5) from the closure to calculate and log the result (15).

//additional thing making a star pattern 

for(let i=1; i<=5; i++){
    let pattern = "";
    for(let j=1; j<=i; j++){
        pattern += "* ";
    }
    console.log(pattern);
}

