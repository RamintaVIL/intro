/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

console.log(Math.E);
console.log(Math.PI);
console.log(Math.LOG2E);

// Math bibliotekos metodai
// abs - absoliutine verte, paprasciau skaiciai be zenklo - (skaiciaus teigiama reiksme)
console.log(Math.abs(7));
console.log(Math.abs(-7));
console.log(Math.abs(-3.14));
console.log(Math.abs(3.14));

// kubine saknis
console.log(Math.cbrt(8));
console.log(Math.cbrt(27));
console.log(Math.cbrt(64));
console.log(Math.cbrt(125));

// ceil - lubos, skaiciaus apvalinimas i didesne, virsu 
console.log(Math.ceil(5));
console.log(Math.ceil(0));
console.log(Math.ceil(-5));
console.log(Math.ceil(3.14));
console.log(Math.ceil(-3.14));

//floor - grindys, skaicius apvalinimas i mazesne, apacia
console.log(Math.floor(5));
console.log(Math.floor(3.14));
console.log(Math.floor(-3.14));

//round - matematinis apvalinimas, taip kaip mokykloje
console.log(Math.round(5));
console.log(Math.round(3.000001));
console.log(Math.round(3.499999));
console.log(Math.round(3.5));
console.log(Math.round(3.500001));
console.log(Math.round(3.999999));
console.log(Math.round(3.14));
console.log(Math.round(-3.14));
console.log(Math.round(-3.000001));
console.log(Math.round(-3.499999));
console.log(Math.round(-3.5));
console.log(Math.round(-3.500001));
console.log(Math.round(-3.999999));

// trunc - ima tik sveikaji skaiciu, neziuri kas yra po kablelio. Kaip ir neprisiskaito prie apvalinimu.
console.log(Math.trunc(3.500001));
console.log(Math.trunc(-3.400001));
console.log(Math.trunc(3.99999));

// exp - grazina laipsnio rodikli
console.log(Math.exp(17));
console.log(Math.E ** 17);

// fround - kompas dirba 0101, jis turi skaiciuoti po 1 zingsni
console.log(Math.fround(5));
console.log(Math.fround(-0.1));
console.log(Math.fround(0));
console.log(Math.fround(0.1));
console.log(Math.fround(-3.14));
console.log(Math.fround(3.14));

// hypot - pitagoro teorema
// a2 + b2 = c2;
// c = (a2 + b2);
console.log(Math.hypot(3, 4));
console.log(Math.sqrt(3 ** 2 + 4 ** 2));
console.log(Math.hypot(1, 1, 1, 1));

// imul - kaip ir dvieju skaiciu sandauga, tik skirtingo dydzio atmintyje
console.log(Math.imul(10, 17));

// max - isspausdina didziausia skaiciu is saraso
console.log('\n Max ----------------');
console.log(Math.max(1, 3));
console.log(Math.max(-1, -3));
console.log(Math.max(-1, -3, 7, 10, 3.14));

// min - isspausdina maziausia skaiciu is saraso
console.log('\n Min ----------------');
console.log(Math.min(1, 3));
console.log(Math.min(-1, -3));
console.log(Math.min(-1, -3, 7, 10, 3.14));

// su masyvu jis nesuveiks reikia kito metodo
const marks = [-1, -3, 7, 10, 3.14];
console.log(Math.min(marks), ':(');

console.log('\n Pow ----------------');
console.log(Math.pow(2, 3));
console.log(2 ** 3);

console.log('\n Random ----------------');
console.log('Intervale nuo 0 iki 1 -> [0..1)');
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(0.9999999999999999);

// ženklas
console.log(Math.sign(5));
console.log(Math.sign(-5));
console.log(Math.sign(3.14));
console.log(Math.sign(-3.14));
console.log(Math.sign(0));
console.log(Math.sign(-0));
console.log(Math.sign(-99));
console.log(Math.sign(Infinity));
console.log(Math.sign(-Infinity));

console.log(Math.sqrt(4));
console.log(Math.sqrt(9));
console.log(Math.sqrt(81));
console.log(Math.sqrt(-4), '2i');

