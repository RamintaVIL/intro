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
// 10, 2, 8, 4, 6
let sum3 = 0;
sum3 = sum3 + marks[0];
sum3 = sum3 + marks[1];
sum3 = sum3 + marks[2];
sum3 = sum3 + marks[3];
sum3 = sum3 + marks[4];

console.log(sum3);

// ? = 30 + undefined, gausime NaN, nes prie normalios reiksmes + nenormalia, yra nelogiska reiksme.
// pridejus + marks[5] gausime undefined, nes reiksmes su numeriu 5 mes net nepateike esame.
sum3 = sum3 + marks[5];

let sum33 = 0;
sum33 += marks[0];
sum33 += marks[1];
sum33 += marks[2];
sum33 += marks[3];
sum33 += marks[4];

console.log(sum33);
// cia svarbu pastebeti, kad galima savotiskai automatizuoti. Automatizavimas prasieda kai pastebi, kad kazkas yra imanoma priversti kartotis vienodai.

// 10, 2, 8, 4, 6
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

console.clear();
// ji nuo zodzio funkcija iki } yra funkcijos riba. Nieko daugiau nematome, tarsi uzdara eko sistema. ji mato pazymius, bet nemato, ar tai Jono ar Marytes.
// jei vaikas negavo dar ne vieno pazymio, tai mums function neturi ko grazinti, tai isirasome nera pazymius

function marksAverage(marks) {
   if (marks.length === 0) {
    return 'Vidurkis: nera pazymiu.';
   }

   if (marks.length === 1) {
    return 'Vidurkis: ' + marks[0];
   }

   if (marks.length === 2) {    
    return 'Vidurkis: ' + ((marks[0] + marks[1]) / 2);        // bet remiantis vakar pamoka galime ir taip: const sum = marks[0] + marks[1];
   }                                                         // return 'Vidurkis: ' + (sum / marks.length);
    
   if (marks.length === 3) {                                
   const sum = marks[0] + marks[1] + marks[2];                                                       
   return 'Vidurkis: ' + (sum / marks.length);
   }
}

const jonoPazymiai = [];
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

// masyvo metodas yra push
jonoPazymiai.push(10);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(2);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(8);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(4);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

function marksAverage(marks) {
    if (marks.length === 0) {
     return 'Vidurkis: nera pazymiu.';
    }
// pavyzdyje blogai parinkti operatoriai, del to meta NaN
let sum = 0;
// yra bent vienas pazymys
if (marks.length < 2) {
    sum += marks[0];
}
// yra bent 2 pazymiai
if (marks.length < 3) {
    sum += marks[1];
}
    return 'Vidurkis: ' + (sum / marks.length);
}
// sita dalis labai gera, nes jei neturi pazymu, turi aiskia zinute.
function marksAverage(marks) {
    if (marks.length === 0) {
     return 'Vidurkis: nera pazymiu.';
    }
//  bandeme apzaisti, kaip man susumuoti visus masyve esancius pazymius, nezinant kiek ju bus
let sum = 0;
// sis pvz rod, ka tie if daro, tai jei turi dar daugiau pazymiu, tai ir paima sekanti if. 
if (marks.length > 0) {
    sum += marks[0];
}

if (marks.length > 1) {
    sum += marks[1];
}

if (marks.length > 2) {
    sum += marks[2];
}
if (marks.length > 3) {
    sum += marks[3];
}

    return 'Vidurkis: ' + (sum / marks.length);
}

function marksAverage(marks) {
    if (marks.length === 0) {
     return 'Vidurkis: nera pazymiu.';
    }
    let sum = 0;
    return 'Vidurkis: ' + (sum / marks.length);
}
  
// ????

console.clear();