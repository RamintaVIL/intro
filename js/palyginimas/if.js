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

// console matome Raudona, nes tenkina salyga
const colour = 'red';

if (colour === 'red') {
    console.log('Raudona');
}

if (colour === 'blue') {
    console.log('Melyna');
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

// 3 variantas
// red -> raudona
// blue -> melyna
// green -> zalia
// other -> nezinau tokios spalvos

const coolor = 'green';

// vienas didelis kirminas is 3 daliu.
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
let translation = ''; // empty string

if (colooor === 'red') {
    translation = 'Raudona';
} else if (colooor === 'blue') {
    translation = 'Melya';   
} else if (colooor === 'green') {
    translation = 'Zalia';
} else {
    console.log('Nezinau tokios spalvos');
}

console.log('>>>', translation);

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

console.clear();

function colorssTranslatio(colors) {
    return 'spalva...';
}

const colorss1 = 'white';
const colorss2 = 'black';
const colorss3 = 'red';
const colorss4 = 'blue';

function colorssTranslatio(colorss) {
    let translatio = '';

    if (colorss === 'red') {
        translation = 'Raudona';
    } else if (colorss === 'blue') {
        translation = 'Melya';   
    } else if (colorss === 'green') {
        translation = 'Zalia';
    } else if (colorss === 'black') {
        translation = 'Juoda';
    } else {
        console.log('Nezinau tokios spalvos');
    }
    // COLORSS -> SPALVA;
    return colorss + ' -> '+ translatio;
}
console.log(colorssTranslatio('white'));
console.log(colorssTranslatio('black'));
console.log(colorssTranslatio('red'));
console.log(colorssTranslatio('blue'));






