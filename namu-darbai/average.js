/*
https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
*/

function getAverage(marks){
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
  let average = sum / marks.length
  return Math.floor(average);
  }
  
  console.log(getAverage([2,2,2,2]));
  console.log(getAverage([1,2,3,4,5,]),3);
  console.log(getAverage([1,1,1,1,1,1,1,2]),1);