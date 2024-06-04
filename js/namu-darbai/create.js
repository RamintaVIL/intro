/*
https://www.codewars.com/kata/55c28f7304e3eaebef0000da
*/

function createArray(number){
    let newArray = [];
    for(let counter = 1; counter <= number; counter ++){
      newArray.push(counter);
    }
    return newArray;
  }
  
  console.log(createArray(1),[1]);
  console.log(createArray(2),[1,2]);
  console.log(createArray(3),[1,2,3]);
  console.log(createArray(4),[1,2,3,4]);
  console.log(createArray(5),[1,2,3,4,5]);