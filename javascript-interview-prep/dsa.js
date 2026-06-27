// let arr=[1,3,5,4,9,6];
// let left = 0;
// let right = arr.length-1;

// while(left<right){
//     let temp = arr[left];
//     arr[left]= arr[right];
//     arr[right]= temp;
// left++;
// right--;
// }
// console.log(arr)

//let reverse=[];
// for(let i =arr.length-1;i>=0;i--){
//     reverse.push(arr[i])
// }
// console.log(reverse)

//let arr = [87, 43, 232, 56, 37, 97, 443, 2];

// let largest = arr[0];

// function largestNum(arr) {
//   for (i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }
//console.log(largestNum(arr));

function findLargestNum(arrr) {
    let largest = arrr[0];
  
    for (let num of arrr) {
      if (num > largest) {
        largest = num;
      }
    }
  
    return largest;
  }
  
  console.log(findLargestNum([87, 43, 232, 56, 37, 97, 443, 2]));