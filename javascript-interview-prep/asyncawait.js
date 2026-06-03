//what is async/await?
// async/await is a syntactic sugar built on top of Promises in JavaScript. It allows you to write asynchronous code in a more synchronous and readable manner. The async keyword is used to declare a function as asynchronous, and the await keyword is used to pause the execution of the function until a Promise is resolved or rejected.

// Example of async/await:
// async function fetchData() {
//     try {
//         let response=await fetch('https://api.example.com/data'); // Awaiting the fetch promise to resolve
//         let data=await response.json(); // Awaiting the response to be parsed as JSON
//         console.log(data); // Logging the fetched data
//     } catch (error) {
//         console.error('Error fetching data:', error); // Handling any errors that occur during the fetch
//     }
// }

// fetchData(); // Calling the async function to fetch data

//example 2
function getdata(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(dataId){
                resolve({id:dataId, name:"Sample Data"}); // Resolving the promise with sample data if dataId is provided
            }else{
                reject("Invalid data ID"); // Rejecting the promise with an error message if dataId is not provided
            }
        }, 1000);
})};

async function displayData(dataId){
    try{
        let data=await getdata(dataId); // Awaiting the getdata promise to resolve and storing the result in 'data'
        console.log("Data fetched:", data); // Logging the fetched data
    }catch(error){
        console.error("Error:", error); // Handling any errors that occur during the data fetching
    }   
}
displayData(1); // Calling the async function to display data with a valid dataId
displayData(); // Calling the async function to display data without a dataId, which will trigger an error
