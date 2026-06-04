//what are array methods?
//Array methods are built-in functions that allow you to perform various operations on arrays in JavaScript. They provide a convenient way to manipulate and work with arrays, such as adding, removing, or transforming elements. Some common array methods include:
//1. push(): Adds one or more elements to the end of an array and returns the new length of the array.
//2. pop(): Removes the last element from an array and returns that element.
//3. shift(): Removes the first element from an array and returns that element.
//4. unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
//5. map(): Creates a new array with the results of calling a provided function on every element in the calling array.
//6. filter(): Creates a new array with all elements that pass the test implemented by the provided function.   
//7. reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
//8. forEach(): Executes a provided function once for each array element.
//9. slice(): Returns a shallow copy of a portion of an array into a new array object.
//10. splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// // Example usage of some array methods:
const numbers = [1, 2, 3, 9, 12, 4, 5,8];

// // Using push() to add an element to the end of the array
// numbers.push(6);
// console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// // Using pop() to remove the last element from the array
// const lastElement = numbers.pop();
// console.log(lastElement); // Output: 6
// console.log(numbers); // Output: [1, 2, 3, 4, 5]

// // Using map() to create a new array with each element multiplied by 2

// const twostables = numbers.map(numbers=> numbers * 2);
// console.log(twostables); // Output: [2, 4, 6, 8, 10]

// //2nd example of map() to create a new array with each element squared
// const squares = numbers.map(numbers=> numbers * numbers);
// console.log(squares); // Output: [1, 4, 9, 16, 25]

// //3rd example of map() to create a new array with each element converted to a string
// const stringNumbers = numbers.map(numbers=> numbers.toString());
// console.log(stringNumbers); // Output: ["1", "2", "3", "4", "5"]

// //4th example of map() to create a new array with each element converted to an object
// const objects = numbers.map(numbers=> ({number: numbers}));
// console.log(objects); // Output: [{number: 1}, {number: 2}, {number: 3}, {number: 4}, {number: 5}]


// //filter() example to create a new array with only even numbers
// const evenNumbers = numbers.filter(numbers => numbers % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// //reduce() example to calculate the sum of all numbers in the array
// const accumalated =numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(accumalated); // Output: 15

//forEach() example to log each number in the array
//numbers.forEach(numbers => console.log(numbers*2)); // Output: 1 2 3 4 5

//reducer example to calculate the product of all numbers in the array
// const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
// console.log(product); // Output: 120

// const max1 =numbers.reduce((accumulator, currentValue) => {
//     console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
//     return currentValue > accumulator ? currentValue : accumulator;
// }, numbers[0]); // Output: Accumulator: 0, Current Value: 1
// console.log(max1); // Output: 5

// const max =Math.max(...numbers);
// console.log(max); // Output: 5

//slice() example to create a new array with a portion of the original array
// const slicedNumbers = numbers.slice(3,5 );//start index is inclusive and end index is exclusive
// console.log(slicedNumbers); // Output: [2, 3, 4]    

//splice() example to remove elements from the array
// numbers.splice(3, 2); //start index is 3 and remove 2 elements
// console.log(numbers); // Output: [1, 2, 3, 5]

// const min=Math.min(...numbers);
// console.log(min); // Output: 1

//how to seperate even and odd numbers in an array?
const evenNumbers = numbers.filter(numbers => numbers % 2 === 0);
const oddNumbers = numbers.filter(numbers => numbers % 2 !== 0);
console.log(evenNumbers); // Output: [2, 4, 8]
console.log(oddNumbers); // Output: [1, 3, 9, 12, 5]

//how to concatenate two arrays?
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

//how to find duplicate elements in an array?
const arrayWithDuplicates = [1, 2, 3, 4, 5, 2, 3];
const duplicates = arrayWithDuplicates.filter((item, index) => 
    arrayWithDuplicates.indexOf(item) !== index);
console.log(duplicates); // Output: [2, 3]