/*
ARRAY - masyvas, sarasas, listas, matrica, kolekcija
*/

const empty = [];
console.log(empty);

//              0, 1, 2, 3, 4 ...
const marks = [10, 2, 8, 4, 6];
console.log(marks);

const mark1 = 10;
const marks2 = 2;
const marks3 = 8;
const marks4 = 4;
const marks5 = 6;

const suma = mark1 + marks2 + marks3 + marks4 + marks5;
const kiekis = 6
const average1 = suma/kiekis;

console.log(average1);

const sum2 = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
const count2 = marks.length;
const average2 = sum2 / count2;

console.log('Kiekis', count2);
console.log('Vidurkis', average2);

console.log('>>>', marks[0]);
console.log('>>>', marks[1]);

console.clear();

let sum3 = 0;
sum3 = sum3 + marks[0];
sum3 = sum3 + marks[1];
sum3 = sum3 + marks[2];
sum3 = sum3 + marks[3];
sum3 = sum3 + marks[4];

console.log(sum3);

let suma3 = 0;
let index = 0;

suma3 += marks[index];
index += 1; 

suma3 += marks[index];
index += 1;

suma3 += marks[index];
index += 1;

suma3 += marks[index];
index += 1; 

suma3 += marks[index];

console.log(suma3);

console.log(marks[3.14]);

// ? = 30 + undefined
sum3 = sum3 + marks[5]

console.log(sum3);


