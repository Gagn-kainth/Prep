let arr=[1,3,5,4,9,6];
let left = 0;
let right = arr.length-1;

while(left<right){
    let temp = arr[left];
    arr[left]= arr[right];
    arr[right]= temp;
left++;
right--;
}
console.log(arr)


//let reverse=[];
// for(let i =arr.length-1;i>=0;i--){
//     reverse.push(arr[i])
// }
// console.log(reverse)