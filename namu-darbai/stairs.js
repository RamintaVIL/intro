/*
https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript
*/

function drawStairs(n) {
    let stairs = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            stairs += ' ';
        }
        stairs += 'I'
        if (i < n -1){
            stairs += '\n';
        }
    }
    return stairs;
}
  

console.log(drawStairs(1));
console.log(drawStairs(3));
console.log(drawStairs(5));