// cia palieciame objektinio programavimo mini dali.

const text = 'Labas rytas';

console.log(text.repeat(2));

String.prototype.isUpperCase = function () {
    console.log(this);   // kreipiames i konkretu teksta, siuo atveju Labas rytas
    return;
}

text.isUpperCase();

'AAAAAAAA'.isUpperCase();

String.prototype.firstSymbol = function () {
    return this [0];
    
}

console.log(text[0]);
console.log(text.firstSymbol());
console.log('AAAAAA'.firstSymbol());

// this - raktazodis, kurio deka mes prieiname prie konkretaus teksto, ant kurio buvo iskviestas metodas. 

String.prototype.isUpperCase = function () {
    return '' + this // sia eilute pasiverciame i stringine jo reiksme, kitaip tariant sutekstiname keista jo daryni [String: 'Labas rytas'];
}

console.log('ABC'.isUpperCase());
console.log('Abc'.isUpperCase());
console.log('abc'.isUpperCase());

String.prototype.isUpperCase = function () {
    const str = '' + this;
    return  str === str.toUpperCase();
}

console.log('ABC'.isUpperCase());
console.log('Abc'.isUpperCase());
console.log('abc'.isUpperCase());

// pvz su skaiciais

console.log(3.1415.toFixed(2));

// double - mes patys sugalvojame
Number.prototype.double = function () {
    return this * 2;
}

console.log((7).double());

const n = 7;
console.log(n.double());

const m = 77;
console.log(m.double());

function triple(n) {
    return n * 3;
}
console.log(triple(888))