/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

console.log(Math.E);
console.log(Math.PI);
console.log(Math.LOG2E);

// Math bibliotekos metodai
// abs - absoliutine reiksme, paprasciau skaiciai be zenklo -.
console.log(Math.abs(7));
console.log(Math.abs(-7));

// kubine saknis
console.log(Math.cbrt(8));
console.log(Math.cbrt(27));
console.log(Math.cbrt(64));
console.log(Math.cbrt(125));

// ceil - lubos, skaiciaus apvalinimas i virsu 
console.log(Math.ceil(5));
console.log(Math.ceil(0));
console.log(Math.ceil(-5));
console.log(Math.ceil(3.14));
console.log(Math.ceil(-3.14));

//floor - grindys, skaicius apvalinimas i apacia
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

// trunc - ima tik sveikaji skaiciu, neziuri kas yra po kablelio
console.log(Math.trunc(3.500001));
console.log(Math.trunc(-3.400001));
console.log(Math.trunc(3.99999));

// exp - 2 parametrai,  1 - koks skaicius, 
console.log(Math.exp(17));
console.log(Math.E ** 17);

// fround - kompas dirba 0101, jis turi skaiciuoti po 1 zingsni
console.log(Math.fround(5));
console.log(Math.fround(-0.1));

// hypot - pitagoro teorema
console.log(Math.hypot(3, 4));
console.log(Math.sqrt(3 ** 2 + 4 ** 2));