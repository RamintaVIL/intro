/*
https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript
*/

function dutyFree(normPrice, discount, hol){
    const savePerBottle = normPrice * discount / 100;
    const coverHoliday = hol / savePerBottle;
return Math.floor(coverHoliday);
}

console.log(dutyFree(12, 50, 1000));
console.log(dutyFree(17, 10, 500));
console.log(dutyFree(24, 35, 3000));

// function dutyFree(normPrice, discount, hol){
//     return(Math.floor(hol / normPrice / discount * 100))
//   }

// const dutyFree = (normPrice, discount, hol) =>
//   hol / (normPrice * discount / 100) ^ 0;