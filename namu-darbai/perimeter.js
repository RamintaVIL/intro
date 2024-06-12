/*
https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
*/

const areaOrPerimeter = function(l , w) {
    if (w === l) {
      return w * l;
    } else {
      return 2 * (l + w);
    }
  } 
  
  
  console.log(areaOrPerimeter(3, 3),  9);
  console.log(areaOrPerimeter(6, 10), 32);
  
  // areaOrPerimeter = (_,__) =>_==__?_**2:2*(_+__)