/*
https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript
*/
function alienLanguage(str) {
    let string = str.split(' ');
    let result = [];

    for (let i = 0; i < string.length; i++) {
        let words = string[i];
        let lastLetter = words.slice(-1).toLowerCase();
        let otherLetters = words.slice(0, -1).toUpperCase();
        result.push(otherLetters + lastLetter);
    }
    return result.join(' ');
}

console.log(alienLanguage("My name is John"));
console.log(alienLanguage("this is an example"));
console.log(alienLanguage("Hello World"));
console.log(alienLanguage("HELLO WORLD"));