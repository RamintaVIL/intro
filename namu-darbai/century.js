/*
https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
*/

function century(year) {
    return Math.ceil(year / 100);
}    

console.log(century(1705), 18, 'consoleing for year 1705');
console.log(century(1900), 19, 'Testing for year 1900');
console.log(century(1601), 17, 'Testing for year 1601');
console.log(century(2000), 20, 'Testing for year 2000');
console.log(century(89), 1, 'Testing for year 89');