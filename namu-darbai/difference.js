/*
https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript
*/

function differenceInAges(ages){
    let maxAges = Math.max(...ages);
    let minAges = Math.min(...ages);
    let ageDifference = maxAges - minAges;
   
    return [minAges, maxAges, ageDifference];
   
 } 

console.log(differenceInAges([82, 15, 6, 38, 35]));
console.log(differenceInAges([57, 99, 14, 32]));