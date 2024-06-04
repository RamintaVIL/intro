/*
https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript
*/

function feast(beast, dish) {
    const firstLetter = beast[0] === dish[0];
    const lastLetter = beast [beast.length - 1] === dish[dish.length - 1];

    return firstLetter && lastLetter;
 
   }
console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bear", "bear claw"));