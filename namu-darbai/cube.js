/*
https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript
*/

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