/*
ARRAY - masyvas, sarasas, listas, matrica, kolekcija
*/

const empty = [];
console.log(empty);
// vadinasi yra tuscias sarasas, tik lauztiniai sklaustai;


//              0, 1, 2, 3, 4 ...
const marks = [10, 2, 8, 4, 6];
console.log(marks);

const mark1 = 10;
const marks2 = 2;
const marks3 = 8;
const marks4 = 4;
const marks5 = 6;

const suma = mark1 + marks2 + marks3 + marks4 + marks5;
const kiekis = 5;
const average1 = suma / kiekis;

console.log(average1);

console.log('>>>', marks[0]);
console.log('>>>', marks[1]);
console.log('>>>', marks[2]);
console.log('>>>', marks[3]);
console.log('>>>', marks[4]); 

// length naudojamas jei norime suzinoti sakinio ilgi arba kiek eiluteje yra skaiciu
const sum2 = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
const count2 = marks.length;
const average2 = sum2 / count2;

console.log('Suma', sum2);
console.log('Kiekis', count2);
console.log('Vidurkis', average2);
// is eiles, t.y. is kaires i desine arba is virsaus i apacia.

console.clear();

let sum3 = 0;
sum3 = sum3 + marks[0];
sum3 = sum3 + marks[1];
sum3 = sum3 + marks[2];
sum3 = sum3 + marks[3];
sum3 = sum3 + marks[4];

console.log(sum3);

// ? = 30 + undefined, nes atminties lasteleje yra tik iki 4. Papraseme nelogisko dalyko
sum3 = sum3 + marks[5];

let sum33 = 0;
sum33 += marks[0];
sum33 += marks[1];
sum33 += marks[2];
sum33 += marks[3];
sum33 += marks[4];

console.log(sum33);

let suma3 = 0;
let index = 0;
// index - pozicijos numeris

suma3 += marks[index];
index += 1; 

suma3 += marks[index];
index += 1;

suma3 += marks[index];
index += 1;

suma3 += marks[index];
index += 1; 

suma3 += marks[index];
index += 1;

console.log(suma3);

console.log(marks[3.14]);

// ? = 30 + undefined
sum3 = sum3 + marks[5]

console.log(sum3);

console.clear();

let suma4 = 0;
let index1 = 0;

suma4 += marks[index];
index1 ++; 

suma4 += marks[index];
index1 ++;

suma4 += marks[index];
index1 ++;

suma4 += marks[index];
index1 ++; 

suma4 += marks[index];
index1 ++;
console.log(suma4);


