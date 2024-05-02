/*
BOOLEAN - logines reiksmes

- true
- false 

Boolean logikos operatoriai:
- && (and)
- || (or)
- ! (not)
*/

const username = 'Jonas';
const age = 99;
const isSunShining = true;
const hasFuel = false;

console.log(isSunShining);
console.log(hasFuel);

console.log('KAIP NENAUDOTI:', (true + true) * (true + true));
console.log('KAIP NENAUDOTI:', true * false); // jis atpazista kaip matematini veiksma, siuo atveju false atitinka 0

console.log('-------------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// jei aplink '&&' yra bent vienas false, tai visa reiksme grazina prie false 

// MERGINA
// kada eisiu i pasimatyma?
// - turi buti grazus
// - turi buti jaunas
// - turi buti turtingas

const isBeautiful = true;
const isYoung = true;
const isRich = false;

const willIGoTo = isBeautiful && isYoung && isRich;
console.log('>>>' , willIGoTo);

// let galime naudoti, jei salyga gali kisti, pvz. jis buvo neturtingas, bet po to tapo
// const isBeautiful = true;
// const isYoung = true;
// let isRich = false;
// const willIGoTo2 = isBeautiful && isYoung && isRich;
// console.log('>>>' , willIGoTo2);
// isRich = true;

// Vaikinas
// kada eisiu i date?
// - turi buti grazi
// - turi buti liekna
// - turi buti protinga

const isPrety = false;
const isSlim = false;
const isSmart = true;

const willIGoTo1 = isPrety || isSlim || isSmart;
console.log('>>>' , willIGoTo1);

console.log(2 + 2 * 2);
console.log((2 + 2) * 2);

console.clear();

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Su || logikos operatoriumi yra atvirksciai, jei bent viename teiginyje yra 'true' reiksme liek true.
console.log(true || true);
console.log(true || true);
console.log(false || false);
console.log(false || true);

console.log(true && true && true);

console.clear();

console.log(true && true || true);

console.log(true && true || false); // jis kaip ir matematikoje skaiciuoja is kaires i desine, ir kadangi iseina true || false gauname true, nes bent vienas turi buti pozytivus.
console.log(true || false);

console.log(true && false || true);
console.log(false||true);
console.log(true);

console.log(true && false || false);
console.log(false || false);
console.log(false);

console.log(false && true || true);
console.log(false || true);
console.log(true);

console.log(false && true || false);
console.log(false || false);
console.log(false);

console.log(false && false || true);
console.log(false || true);
console.log(true);

console.log(false && false || false);

console.clear();

console.log('----------------');

console.log(true || true && true);
console.log(true || true && false); // tiketina, kad pirma skaiciuja &&, o po to priena prie ||.  ko pasekoje pirma skaiciuoja (true && false) = false || true = true;

console.log(true || false && true);
console.log(true || false && false);

console.log(false || true && true);
console.log(false || true && false);

console.log(false || false && true);
console.log(false || false && false);

console.clear();

console.log(!true); // apvercia salyga, tai vietij treu iseina false
console.log(!false);
console.log(!!false);
// daugiau nei 2 ! sauktukai - nerasyti, please...
console.log(!!!false);
console.log(!!!!false);






