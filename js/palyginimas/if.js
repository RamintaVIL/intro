/*
IF - palyginimas

Palyginimo operatoriai:
VISI: >, <, <=, >=, ==, !=, ===, !==
Naudotini: >, <, <=, >=, ===, !==
Nenaudotini: ==, !=

Sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} ... else if () {} ... else if () {}
if () {} ... else if () {} ... else {}

*/

// jei yra daugtaskiai, kaip 14 ir 15 eiluteje, tai else if gali buti naudojama neribota kartu. 
// riestiniai sklaustai visda kalba apie logikos bloka, iskyrus, kai kalbame apie vienus duomenu tipus. 
const age = 99;
const ageLimit = 18;

// 1 variantas
if (age > ageLimit) {
    console.log('Sorry, bet esi per jaunas...')
}

if (age < ageLimit) {
    console.log('Sorry, bet esi per jaunas...')
}

// 2 variantas
if (age < ageLimit) {
    console.log('Sorry, bet esi per jaunas...')
} else {
    console.log('Ok, uzeikite ir pabukite ;)');
}

console.clear();

if (4 > 2 ) {
    console.log('TAIP, daugiau');
} else {
    console.log('NE, maziau');
}

if (4 == 2 ) {
    console.log('TAIP, lygu');
} else {
    console.log('NE, nelygu');
}

if (4 != 7 ) {
    console.log('TAIP, nelygu');
} else {
    console.log('NE, lygu');
}

console.clear();

// 3 variantas
// red -> raudona
// blue -> melyna
// green -> zalia
// other -> nezinau tokios spalvos

// console matome Raudona, nes tenkina salyga
const colour = 'red';

if (colour === 'red') {
    console.log('Raudona')
}

if (colour === 'blue') {
    console.log('Melyna')
}

if (colour === 'green') {
    console.log('Zalia')
}

// irankai geri, bet neatitinka uzdavinio logikos. eina is virsaus i apacia ir ziuri, ar tenkina salygas
const coloor = 'white';
if (coloor === 'red') {
    console.log('Raudona');
}

if (coloor === 'blue') {
    console.log('Melyna');
} else {
    console.log('Nezinau tokios spalvos...');
}

if (coloor === 'green') {
    console.log('Zalia');
}

console.clear();

const coolor = 'green'
if (coolor === 'red') {
    console.log('Raudona');
} else if (coolor === 'blue') {
    console.log('Melyna');   
} else if (coolor === 'green') {
    console.log('Zalia');
} else {
    console.log('Nezinau tokios spalvos...');
}

const colooor = 'green';
let translation = '';

if (colooor === 'red') {
    translation = 'Raudona';
} else if (colooor === 'blue') {
    translation = 'Melya';   
} else if (colooor === 'green') {
    translation = 'Zalia';
} else {
    console.log('Nezinau tokios spalvos');
}

let colors = 'blue';

let translations = '';

if (colors === 'red') {
    translation = 'Raudona';
} else if (colors === 'blue') {
    translation = 'Melya';   
} else if (colors === 'green') {
    translation = 'Zalia';
} else {
    console.log('Nezinau tokios spalvos');
}

console.log('>>>', translations);

const colorss = 'white';
const colorss1 = 'black';
const colorss2 = 'red';
const colorss3 = 'blue';

function colorssTranslations(color) {
   return 'spalva'
}
console.log(colorssTranslations(white));






