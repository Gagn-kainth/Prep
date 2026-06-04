const evenNumbers = numbers.filter(numbers => numbers % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

//reduce() example to calculate the sum of all numbers in the array
const accumalated =numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
