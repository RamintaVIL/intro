/*
https://www.codewars.com/kata/5951d30ce99cf2467e000013/train/javascript
*/

function isPythagoreanTriple(integers) {
    integers.sort((a, b) => a - b);
    const [a, b, c] = integers
    return a * a + b * b === c * c;
     }
  
  console.log(isPythagoreanTriple([3, 4, 5]), true);
  console.log(isPythagoreanTriple([3, 5, 9]), false);