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

/*
https://www.codewars.com/kata/56530b444e831334c0000020/train/javascript
*/

function chromosomeCheck(sperm) {
  if (sperm === 'XX') {
    return "Congratulations! You're going to have a daughter."
  } else if (sperm === 'XY') {
    return "Congratulations! You're going to have a son."
  }
}

console.log(chromosomeCheck('XY'));
console.log(chromosomeCheck('XX'));

/*
https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript
*/
function tripleTrouble(one, two, three){
  let result = '';
  for (let i = 0; i < one.length; i++) {
    result += one[i] + two[i] + three[i];
  }
  return result;
 }
 console.log(tripleTrouble("aaa","bbb","ccc"));
 console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc"));
 console.log(tripleTrouble("burn", "reds", "roll"));
 console.log(tripleTrouble("Sea","urn","pms")); 
 console.log(tripleTrouble("LLh","euo","xtr"));

/*
https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript
*/

function getDrinkByProfession(param){
  if (param === "JABRONI") {
    return "Patron Tequila";
  // } else if (param === "School Counselor"){
  //   return "Anything with Alcohol";
  // } else {
  //   return "Beer";
  }

}

console.log(getDrinkByProfession("jabrOni"));
// console.log(getDrinkByProfession("scHOOl counselor"));
// console.log(getDrinkByProfession("prOgramMer"));
// console.log(getDrinkByProfession("bike ganG member"));
// console.log(getDrinkByProfession("poLiTiCian"));
// console.log(getDrinkByProfession("rapper"));
// console.log(getDrinkByProfession("pundit"));
// console.log(getDrinkByProfession("Pug"));
