// [1, 2, 3] -> [2, 4, 6];

function double(list) {  // priimame sarasa
    const result = [];
    for (const item of list) {  // paimti item is saraso, supaprastinta for cikla
        result.push(item * 2);  // padvigubinome masyva
    }
    return result;
}

const a1 = [1, 2, 3];
console.log(a1, double(a1));

const a2 = [10, 2, 8, 4, 6];
console.log(a2, double(a2));

function triple(list) {  
    const result = [];
    for (const item of list) {  
        result.push(item * 3);  
    }
    return result;
}
const a3 = [1, 2, 3];
console.log(a3, triple(a3));

const a4 = [10, 2, 8, 4, 6];
console.log(a4, triple(a4));

console.log('---------------------');
function map(list, transformFunc) {
    const result = [];

    for (const item of list) {
        result.push(transformFunc(item));
    }
    return result;
}

console.log(map(a1, n => n * 2)); // duodame masyva (a2) + kiekviena reiksme is masyvo transformuojama, remiantis logika kuria isirasome.
console.log(map(a2, n => n * 3));

console.log(map(a1, n => 0)); // kiek masyve skaiciu, tiek 0 grazina
console.log(map(a2, n => 0)); // kiek masyve skaiciu, tiek 0 grazina

console.log(map(a1, n =>  n +1));
console.log(map(a2, n => (2 * n + 1) % 10));

// visam masyvui pritaikome ta pacia logika

console.log('\n MAP ---------------------');
console.log(a1);
console.log(a1.map(n => n * 2));

console.log(a2);
console.log(a2.map(n => n * 2));  // n yra kintamojo reiksme masyve. Map ima kiekviena nari ir ji mapina.

console.log(['Labas', 'rytas', 'Lietuva'].map(s => s.length)); // istraukia kiek kiekvienas zodis esantis masyve turi skaiciu. 
console.log(['Labas', 'rytas', 'Lietuva'].map(s => s[0])); // istraukia pirmasias raides
console.log(['Labas', 'rytas', 'Lietuva'].map(s => s.charAt(s.length - 1)));  // paskutines raides isspausdina

// rodykline funkcija pasidarau, del prasto skaitomumo
const firstSymbol = s => s[0];
const lastSymbol = s => s[s.length - 1];

console.log(['Labas', 'rytas', 'Lietuva'].map(firstSymbol));
console.log(['Labas', 'rytas', 'Lietuva'].map(lastSymbol));

console.log('----------------------------');
// cia pasididina kiekvienas skaicius po 1 vnt. Kadangi tai yra pazymiai, pasiraseme ternary, kad jei jei yra 10, tai jis nepadidetu 1 vnt.
const marks = [10, 2, 8, 4, 6];
const updateMarks = marks.map(n => n +1 > 10 ? 10 : n + 1);
console.log(updateMarks);

// kad butu skaitomumas geresnis, grizome prie iprastos funkcijos
function increaseMarks(mark) {
    if (mark === 10) {
        return 10;
    }
    return mark + 1;
} 

const updateMarks2 = marks.map(increaseMarks);
console.log(updateMarks2);

console.log('\n FILTER-----------------');

const randomNumbers = [10, -3, 3.14, 5, 777, -13, -2.727];
// sis metodas keliaus per kiekviena reiksme esancia masyve ir tikrins, ar ji atitinka parasyta logika, tuomet isspausdins arba ne. 
const positiveNumbers = randomNumbers.filter(n => n >= 0);
console.log(positiveNumbers);

const negativeNumbers = randomNumbers.filter(n => n < 0);
console.log(negativeNumbers);

const integerNumbers = randomNumbers.filter(n => n % 1 === 0);
console.log(integerNumbers);

const decimalNumbers = randomNumbers.filter(n => n % 1 !== 0);
console.log(decimalNumbers);

const randomData = [10, NaN, -3, 'Labas', 3.14, true, 5, 777, -13, undefined,  -2.727];

// teigiami sveikieji skaiciai
// ne neigiami sveikieji skaiciai
// true grazins visas reiksmes
const tss = randomData.filter(n => true);
console.log(tss);

const tss1 = randomData  
.filter(n => true)                 
.filter(n => Number.isInteger(n))       
.filter(n => n > 0)
 
console.log(tss1);

const tss3 = randomData                   
.filter(n => typeof n === 'number') // reiksmes yra skaiciai
.filter(n => !isNaN()) //vietoj n gali buti ir kita raide, cia vidinis susitarimas. Ismesti visu NaN
.filter(n => isFinite(n)) // yra baigtine reiksme, palieka normalius skaicius
.filter(n => n >= 0) // reikia neneigiamu 
.filter(n => n % 1 === 0) // kad ismetu ir 3.14

console.log(tss3);

const tss4 = randomData.filter(n => Number.isInteger(n) && n >= 0);
console.log(tss4);

console.log('\n SORT-----------------');

const dictionary = ['labas', 'rytas', 'asla', 'medis', 'zuvis'];
console.log(dictionary);

// abeceles tvarka
dictionary.sort();
console.log(dictionary);

const jonasMarks = [10, 2, 4, 11, 8, 1, 100, 100000, 200, 102, 143, 123, 12, 117, 6];
console.log(jonasMarks);
// skaiciai eina abeceles tvarka, 1 eina kaip a raide, todel visus, kurie prasideda 1 isdelioja nuo maziausio iki didziausio.
jonasMarks.sort();
console.log(jonasMarks);
console.log(jonasMarks[0]);
console.log(jonasMarks.at(-1));

// jei neprirasyti papildomos info, tai sort dirbs tik su zodziais, Su skaiciais reikes funkcijos.

// neigiamas skaicius -> a eina i prieki
//                  0 -> a ir b lieka savo vietoje
// teigiamas skaicius -> a eina i gala

// (5, 7) => -1
// (7, 5) => 1
// (7, 7) => 0
// (a, b) => a - b >>>

jonasMarks.sort((a, b) => a - b);
console.log(jonasMarks);
console.log(jonasMarks[0]);
console.log(jonasMarks.at(-1));

// is desines i kaire, mazejancia tvarka
jonasMarks.sort((a, b) => b - a);
console.log(jonasMarks);

// kai sortinti yra tik 2 reiksmes, cia parodytas greitesnis budas
const du = [7, 5];
// [...du] toks uzrasymo budas, nes norime kad graznintu nauja masyva.
const duSorted = du[0] < du[1] ? [...du] : [du[1], du[0]]; 
console.log(duSorted);

const students = [
    { name: 'Jonas', marks: 7 },
    { name: 'Maryte', marks: 10 },
    { name: 'Petras', marks: 4 },
    { name: 'Ona', marks: 2 },
]
// kadangi nieko nepadaviau, grazina tekstiniu atzvilgiu. neprisiliete, nes tai ne strinagi arba skaiciai
students.sort();
console.log(students);

students.sort((a, b) => a.marks - b.marks); // turime kreiptis skliaustuose i konkrecia reiksme, kurios reikia
console.log(students);
console.log('Maziausias vidurkis:', students[0].marks);
console.log('Maziausio autorius:', students[0].name);

console.log('Didziausias vidurkis:', students.at(-1).marks);
console.log('Didziausio autorius:', students.at(-1).name);

// vardus 

function varduPalyginimas(a, b) {
    if (a.name < b.name) {
        return -1;
    } else if (a.name === b.name) {
        return 0;
    } else {
        return 1;
    }
}
students.sort((varduPalyginimas));
console.log(students);

console.log('\n ND------------------------');

const purchase = [
    { fruit: 'Apple', price: 1.50 },
    { fruit: 'Orange', price: 5.74 },
    { fruit: 'Strawberry', price: 10.22},
    { fruit: 'Lemon', price: 0.27 },
]

purchase.sort();
console.log(purchase);

purchase.sort((a, b) => a.price - b.price);
console.log(purchase);

console.log('Maziausia kaina:', purchase[0].price);
console.log('Maziausios kainos vaisiaus pavadinimas:', purchase[0].fruit);

console.log('Didziausia kaina:', purchase.at(-1).price);
console.log('Didziausios kainos vaisiaus pavadinimas:', purchase.at(-1).fruit);

function fruitAbc(a, b) {
    if (a.fruit < b.fruit) {
        return -1;
    } else if (a.fruit === b.fruit) {
        return 0;
    } else {
        return 1;
    }
}
purchase.sort((fruitAbc));
console.log(purchase);

console.log('\n REDUCE-----------------');

const marks1 = [10, 2, 8, 4, 6];
// total = jau suskaiciuota tarpine suma, item = kiekvienas narys is masyvo. P.S nepamirsti prirasyti 0.
// 0 + 10 + 2 + 8 + 4 + 6;
const sum = marks.reduce((total, item) => total + item, 0);  // eina per ta pati masyva ir ima po viena reiksme, taip kaip map ir filter
console.log(sum);

// 10 + 2 + 8 + 4 + 6;
const sum2 = marks.reduce((total, item) => total + item);  
console.log(sum2);

// 1000 + 10 + 2 + 8 + 4 + 6;
const sum3 = marks.reduce((total, item) => total + item, 1000);  
console.log(sum3);

// 10 - 2 - 8 - 4 - 6;
const diff1 = marks.reduce((total, item) => total - item);  
console.log(diff1);

// 0 - 10 - 2 - 8 - 4 - 6;
const diff2 = marks.reduce((total, item) => total - item, 0);  
console.log(diff2);

const dict = ['Labas', 'rytas', 'sakau', 'tau'];
// suskaiciavo viso masyvo raidziu kieki
const symbolInDict = dict.reduce((t, w) => t + w.length, 0);
console.log(symbolInDict);

// istraukia kiekvieno zodzio pirmasias raides
const firstLetters = dict.reduce((t, w) => t + w[0], '');
console.log(firstLetters);

// papildomai pridedame uzrasa "Pirmosios raides:"
const firstLetters2 = dict.reduce((t, w) => t + w[0], 'Pirmos raides:');
console.log(firstLetters2);