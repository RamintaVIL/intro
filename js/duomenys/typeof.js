/*
Duomenu tipo nustatymas

Typeof (duomens tipo nustatymo operatorius)
*/
// ji reikia matyti kaip +, -, / ir t.t. zenkla
function empty (){

} // cia tam kad paskutineje eilutje suprastu, kad yra function
console.log(typeof 5);
console.log(typeof 3.1415);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof '');
console.log(typeof 'labas');
console.log(typeof ' ');
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof nu11);
console.log(typeof []);
console.log(typeof [1, 2, 3]);
console.log(typeof ['a', 'b', 'c']);
console.log(typeof {});
console.log(typeof empty);

// Kai norite patikrinti ar tai yra masyvas
console.log(Array.isArray([]));
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray('labas'));
console.log(Array.isArray(true));

console.log('--------');
// tikriname ar dirbame su NULL
const tikrinamasDalykas = null;
if (2222 === null) {
    console.log('taip');
} else {
    console.log('ne');    
}
// kaip panaudoti
const a = 12526
const aType = typeof a;

if (aType === 'string') {
    console.log('As dirbu su string');
} else {
    console.log('As dirbu ne su string;' , aType);
}

console.log(a);
console.log(aType);

const c = 'labas';
// jei jusu kintamojo tipas grazina sutampa jusu norimu, tai grazina viena reiksme 
if (typeof c  === 'string') {
    console.log('As dirbu su string');
} else {
    console.log('As dirbu ne su string;' , aType);
}

console.log(c);

const x = 5;
const y = 7;

if (typeof x !== 'number') {
   console.log('ERROR: x');
}
if (typeof y!== 'number') {
    console.log('ERROR: y');
}

console.log('VISKAS OK');

// Bet kai pasirasome, kad x1 yra stringas
const x1 = 'saasas';
const y1 = 7;

if (typeof x1 !== 'number') {
   console.log('ERROR: x');
} else if (typeof y1 !== 'number') {
    console.log('ERROR: y');
} else {
    console.log('VISKAS OK');
}




