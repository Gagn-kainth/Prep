//what is promise in js?
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more manageable and readable way. A Promise can be in one of three states: pending, fulfilled, or rejected. When a Promise is fulfilled, it means the asynchronous operation completed successfully, and when it is rejected, it means the operation failed. Promises provide methods like .then() for handling successful outcomes and .catch() for handling errors.

// Example of a Promise:
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulating a successful asynchronous operation
            if (success) {
                resolve("Data fetched successfully!"); // Resolving the promise with a success message
            } else {
                reject("Failed to fetch data."); // Rejecting the promise with an error message
            }
        }, 1000); // Simulating a delay of 1 second
    }); 
}

fetchData()
    .then((message) => {
        console.log(message); // Logging the success message if the promise is fulfilled
    })
    .catch((error) => {
        console.error(error); // Logging the error message if the promise is rejected
    });

    