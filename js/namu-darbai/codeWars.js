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

// // arrow funkcija parašyta:
//  const getLength = arr => arr.length;
//  const getFirst = arr => arr[0];
//  const getLast = arr => arr[arr.length - 1];
//  const pushElement = arr => arr.push(4);
//  const popElement = arr => arr.pop();

// console.log(getLength([1,2,3]));
// console.log(getFirst([1,2,3]));
// console.log(getLast([1,2,3]));
// console.log(pushElement([1,2,3]));
// console.log(popElement([1,2,3]));
    
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

