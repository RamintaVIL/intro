/*
https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
*/
function addLength(str) {
    let word = str.split(" ");
    let result = [];
    for (let i = 0; i < word.length; i++) {
        result.push(word[i] + " " + word[i].length)
    }
      return result;  
}
console.log(addLength("apple ban"));


function addLength(str) {
    return str.split(' ').map(v => v + ' ' + v.length);
}

function addLength(str) {
    return str.split(" ").map(s => `${s} ${s.length}`)
}