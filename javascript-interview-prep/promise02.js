const myPromise = new Promise((resolve, reject) => {
document.getElementById("btn1").addEventListener("click", () => {
    resolve("Promise resolved successfully!");
})
document.getElementById("btn2").addEventListener("click", () => {
    reject("Error!");
})

})

myPromise
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
})