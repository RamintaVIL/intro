/* 
https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript
*/

function reverseWords(str) {
    let words = str.split(' '); // padalina eilutę į žodžius
    let reverseWords = words.reverse(); // apverčia žodžių tvarką masyve
    return reverseWords.join(' '); // sujungia žodius į vieną sakinį
}

console.log(reverseWords("hello world!"));
console.log(reverseWords("yoda doesn't speak like this" ));
console.log(reverseWords("foobar"));
console.log(reverseWords("kata editor"));
console.log(reverseWords("row row row your boat"));
console.log(reverseWords(""));