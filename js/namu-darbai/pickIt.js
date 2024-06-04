/*
https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript
*/
function pickIt(arr){
    let odd=[];
    even=[];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return [odd,even];
  }
  
  console.log(pickIt([1,2]));
  console.log(pickIt([1,2,3]));
  console.log(pickIt([3,2,1]));
  console.log(pickIt([10,20,30]));
  console.log(pickIt([11,21,31]));
  console.log(pickIt([8,1,5,4,6,1,1]));