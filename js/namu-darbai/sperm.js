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