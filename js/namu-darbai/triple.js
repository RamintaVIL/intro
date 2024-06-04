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