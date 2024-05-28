// https://www.codewars.com/kata/571effabb625ed9b0600107a

function getLength(arr) {
    return arr.length;
}
function getFirst(arr) {
    let f = arr[0];
    return (f);
}
function getLast(arr) {
    let l = arr[arr.length - 1];
    return (l);
}
function pushElement(arr) {
    let el = 1;
    arr.push(el);
    return arr;
}
function popElement(arr) {
    arr.pop();
    return arr;
}

 console.log(getLength([1,2,3]));
 console.log(getFirst([1,2,3]));
 console.log(getLast([1,2,3]));
 console.log(pushElement([1,2,3]));
 console.log(popElement([1,2,3]));
    
// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
function strCount(str, letter){ 
    let count = 0; 
 for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
        count ++;
    }  
}
return count
}

function strCount(str, letter){  
    return str.split(letter).length-1
  }
  
  console.log(strCount('Hello', 'o'));
  console.log(strCount('Hello', 'l'));
  console.log(strCount('', 'z'));

 // https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript
//  "This white dog has 4 legs."
 function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
  }
  console.log(animal({name:"dog",legs:4,color:"white"}));
  console.log(animal({name:"cock",legs:2,color:"red"}));
  console.log(animal({name:"rabbit",legs:4,color:"gray"}));

 // https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript
  function zeroFuel (distanceToPump, mpg, fuelLeft) {
    const maxDistance = mpg * fuelLeft;
    if (maxDistance >= distanceToPump) {
        return true;
    } else {
        return false;
    }
  };
  console.log(zeroFuel(50, 25, 2));
  console.log(zeroFuel(100, 50, 1));

  // https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript
  function grabDoll(dolls){
    let bag=[];
    for (let i = 0; i <= dolls.length; i++){
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
        bag.push(dolls[i]);
    } else { 
        continue; 
       } 
        if (bag.length === 3){
        break;  
} 
  }
  return bag;
}
console.log(grabDoll(["Mickey Mouse","Hello Kitty","Snow white"]));
console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]));
console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]));
console.log(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]));

 //  https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript

 function cubeChecker(volume, side){
    if (volume > 0 && side > 0 && volume ===  side * side * side ) {
        return true;
    } else {
        return false;
    }
    }
  
  console.log(cubeChecker(  8, 3));
  console.log(cubeChecker(  8, 2));
  console.log(cubeChecker( -8,-2));
  console.log(cubeChecker(  0, 0));
  console.log(cubeChecker(  1, 5));
  console.log(cubeChecker(125, 5));

  // https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript
  function feast(beast, dish) {
     const firstLetter = beast[0] === dish[0];
     const lastLetter = beast [beast.length - 1] === dish[dish.length - 1];

     return firstLetter && lastLetter;
  
    }
console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bear", "bear claw"));

// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript
function differenceInAges(ages){
    let maxAges = Math.max(...ages);
    let minAges = Math.min(...ages);
    let ageDifference = maxAges - minAges;
   
    return [minAges, maxAges, ageDifference];
   
 } 

console.log(differenceInAges([82, 15, 6, 38, 35]));
console.log(differenceInAges([57, 99, 14, 32]));

// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/javascript
function switchItUp(number){

    switch (number) {
    case 1:
    return 'One';

    case 2:
    return'Two'; 
    
    case 3:
    return'Three' ;

    case 4:
    return'Four'; 

    case 5:
    return'Five';  

    case 6:
    return'Six';
    
    case 7:
    return'Seven';

    case 8:
    return'Eight';

    case 9:
    return'Nine';  
    
    case 0:
    return'Zero';
    
}
}
console.log(switchItUp(1));
console.log(switchItUp(3));
console.log(switchItUp(5));

// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
function bmi(weight, height) {
    let bmi = weight / (height ** 2);
    if (bmi <= 18.5) {
      return "Underweight";
    } else if (bmi <= 25.0) {
      return "Normal";
    } else if (bmi <= 30.0) {
      return "Overweight";
    } else if (bmi > 30) {
      return "Obese";
  }
    }
console.log(bmi(80, 1.80));
console.log(bmi(110, 1.70));
console.log(bmi(75, 1.70));
console.log(bmi(45, 1.70));




// https://www.codewars.com/kata/5732b0351eb838d03300101d/train/javascript

// function blackAndWhite(arr) {
//     if (!Array.isArray(arr)) {
//         console.log("It's a fake array");
//     } else if (arr === 5) {
//         console.log("It's a black array");
//     } else if (arr === 13) {
//         console.log("It's a black array");
//     } else {
//         console.log("It's a white array");
//     }
// }
  
//   console.log(blackAndWhite(5,13));
//   console.log(blackAndWhite([5,13]));
//   console.log(blackAndWhite([5,12]));
