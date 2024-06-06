/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number
*/
// baigtine reiksme, kuria gali uzrasyti skaitmenimis
console.log(number.isFinite(1522222));
console.log(number.isFinite(-1522222));
console.log(number.isFinite(1522.222));
console.log(number.isFinite(-1522.222));
console.log(number.isFinite(0));
console.log(number.isFinite(Infinity));
console.log(number.isFinite(-Infinity));
console.log(number.isFinite(NaN));

console.log('----------------------');
console.log('isFinite()');

console.log(isFinite(1522222));
console.log(isFinite(-1522222));
console.log(isFinite(1522.222));
console.log(isFinite(-1522.222));
console.log(isFinite(0));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log(isFinite(NaN));

console.log('----------------------');
console.log('isNaN()');
console.log(isNaN(1522222));
console.log(isNaN(1522222));
console.log(isNaN(-1522222));
console.log(isNaN(1522.222));
console.log(isNaN(-1522.222));
console.log(isNaN(0));
console.log(isNaN(Infinity));
console.log(isNaN(-Infinity));
console.log(isNaN(NaN));

console.log('----------------------');
console.log('parseInt()');

console.log(parseInt('87'));
const a = '87';
const b = parseInt('87');
console.log(typeof a);
console.log(typeof b);
console.log(typeof parseInt('87'));

console.log(parseInt('87'));
console.log(parseInt('-99'));
console.log(parseInt('0'));
console.log(parseInt('3.14'));
console.log(parseInt('-3.14'));
console.log(parseInt('NaN'));
console.log(parseInt('Infinity'));
console.log(parseInt('-Infinity'));
console.log(parseInt('Grybu karas'));
console.log(parseInt(''));
console.log(parseInt('123abc'));
console.log(parseInt('abc123'));
console.log(parseInt('23abc123'));
console.log(parseInt('abc23abc123'));
console.log(parseInt('2.3abc123'));

console.log('----------------------');
console.log('parseFloat()');

console.log(parseFloat('87'));
console.log(parseFloat('-99'));
console.log(parseFloat('0'));
console.log(parseFloat('3.14'));
console.log(parseFloat('-3.14'));
console.log(parseFloat('NaN'));
console.log(parseFloat('Infinity'));
console.log(parseFloat('-Infinity'));
console.log(parseFloat('Grybu karas'));
console.log(parseFloat(''));
console.log(parseFloat('123abc'));
console.log(parseFloat('abc123'));
console.log(parseFloat('23abc123'));
console.log(parseFloat('abc23abc123'));
console.log(parseFloat('2.3abc123'));
console.log(parseFloat('12.3abc23abc123'));
console.log(parseFloat('2.3abc.123'));
console.log(parseFloat('7e5')); // skaiciaus standartine israiska
// 100 -> 1 * 10^2 -> 1e2
// 1.000.000 -> 1 * 10^6 -> 1e6
// 125 -> 1.25 * 10^2 -> 1.25e
// 0.001 -> 1 * 10^3 -> 1e-3
// 0.00125 -> 1.25 * 10^3 -> 1.25e-3

console.log('----------------------');
console.log('number.toFixed()');

const d = 5;
// reikia gauti 5.00 nurodo kiek skaitmenu po kablelio norime matyti
console.log(d);
console.log(d.toFixed(45)); // kiekis po kablelio
console.log(d.toFixed(20)); // kiekis po kablelio

// narsykleje nuo 0-20, o JS programoje 0-100

const e = 5.1485;
console.log(e); 
console.log(e.toFixed(20));
