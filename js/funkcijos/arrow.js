/*
ARROW FUNCTION - rodyklinė funkcija, lambda funkcija
*/

const n1 = 7;
const n2 = 5;

// function declaration
// cia function kurios turi savo logika
function sum(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

function diff(a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${diff(n1, n2)}`);

function multi1(a, b){
      return a * b;
}
console.log(`${n1} * ${n2} = ${multi1(n1, n2)}`)

// kintamajam priskiriama anonimine funkcija. O kodėl anoniminė, nes po žodžio function nėra jokio pavadinimo. 
const diff1 = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${diff1(n1, n2)}`);

// pirmas būdas kurį išmokome.
function diff3(a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${diff3(n1, n2)}`);

const multi11 = function (a, b) {
    return a * b;
}
console.log(`${n1} * ${n2} = ${multi11(n1, n2)}`);

// arrow function

// sklaustų info (a, b) yra perduodama į riestinius sklaustus.
const multi2 = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${multi2(n1, n2)}`);

function div (a, b) {
    return a / b
 }
 console.log(`${n1} / ${n2} = ${div(n1, n2)}`);

 const div1 = (a, b) => {
    return a / b
 }
 console.log(`${n1} / ${n2} = ${div1(n1, n2)}`);
 
 // arrow function 
// jei logikos bloke yra tik 1 procedura, čia nemaišyti su kintamaisiais, tai galime nerasyti {return}
const div2 = (a, b) => a / b;
 console.log(`${n1} / ${n2} = ${div2(n1, n2)}`);

 // arrow function
 const square = n => n * n;
 console.log(`${n1} * ${n1} = ${square(n1)}`);
 console.log(`${n2} * ${n2} = ${square(n2)}`);

 // function evoliucija naudojant su string
 function hi(name) {
     return 'Hi, my name is ' + name + '!'; 
 }
 console.log(hi('Jonas'));
 console.log(hi('Maryte'));

 function hii(name) {
    return `Hi, my name is ${name}!`; 
}
console.log(hii('Jonas'));
console.log(hii('Maryte'));

const hiii = name => `Hi, my name is ${name}!`; 
console.log(hiii('Jonas'));
console.log(hiii('Maryte'));
 
console.log('------------');

function abbr(firstname, lastname) {
    return firstname[0] + '.' + lastname[0] + '.';
}
console.log(abbr('Chuck', 'Norris'));
console.log(abbr('Raminta', 'Vilčinskaitė'));

const abbr1 = (firstname, lastname) => firstname[0] + '.' + lastname[0] + '.';
console.log(abbr1('Chuck', 'Norris'));
console.log(abbr1('Raminta', 'Vilčinskaitė'));

const abbr2 = (firstname, lastname) => `${firstname[0]}.${lastname[0]}.`;
console.log(abbr2('Chuck', 'Norris'));
console.log(abbr2('Raminta', 'Vilčinskaitė'));

// javascript failą skaito 2 kartus, 1 kartą ištaiso sintaksės klaidas, sudeda ; ir į atmintį įsimena, kur rasti function. 
console.log(vienas());
function vienas () {
    return 'vienas'
}
console.log(vienas());

// o šitas atvirkščiai, jei pradžioje prašysime išspausdinti, tai mes klaidą, nes neturės ko spausdinti. 
// console.log(antras());
// const antras = () => 'ANTRAS';
// console.log(antras());