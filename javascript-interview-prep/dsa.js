/* let arr=[1,3,5,4,9,6];
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

 let reverse=[];
  for(let i =arr.length-1;i>=0;i--){
      reverse.push(arr[i])
  }
  console.log(reverse)

 let arr = [87, 43, 232, 56, 37, 97, 443, 2];

  let largest = arr[0];

  function largestNum(arr) {
    for (i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }
 console.log(largestNum(arr));

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

 let arr=[1,2,3,3,4,4,5,6,7,7]
  let unique=[...new Set(arr)]

  console.log(unique)

  let unique =arr.filter((item ,index)=>{
      return arr.indexOf(item)===index;
  })
  console.log(unique)

  let arr=[8,7,6,5];

  function secondLargest(arr){
      let largest =0;
      let secondlargest = 0;
    
      for(let num of arr){
          if(num>largest){
              secondlargest = largest;
              largest =num;
          }
          else if (num > secondlargest && num !== largest) {
              secondlargest = num;
          }
      }
      return secondlargest
  }
  console.log(secondLargest(arr))

function reverseString(str){
    let reverse ='';


    for(let i = str.length - 1;i>=0;i--){
        reverse += str[i]
    }
    return reverse;
}

console.log(reverseString('Hello World'))

other way 

function reverseString(str) {
    let arr = str.split("");
    let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    
    left++;
    right--;
}
return arr.join("");
}

console.log(reverseString('how are you ??'))


easiest way

function backstr(str){
    return str.split('').reverse().join('');
}
console.log(backstr('this is best'))

PALIDROM NUM

function checkPalidrom(num){
    let str = num.toString();
    let reverse=''
    
    for(let i = str.length -1 ;i>=0;i--){
        reverse+=str[i]
    }
    return str === reverse;
}
console.log(checkPalidrom(127))
*/
