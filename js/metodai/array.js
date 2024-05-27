/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator
*/

const marks = [10, 2, 8, 4, 6];
console.log([...marks]);  // pasidarėme kopiją
const abc = ['a', 'b', 'c', 'd', 'e'];

console.log('\n concat------------');
// sujungis 2 masyvus į 1. is keliu masyvų arba pavienių reikšmių padaro bendra array.
console.log([...marks].concat([1, 2, 3]));
console.log([...marks].concat(4, 5));
console.log([...marks].concat([1, 2, 3], 4, 5));
console.log([...marks].concat(4, [1, 2, 3], 5));
console.log([...marks].concat(4, 5, [1, 2, 3])); 
// galime ir spread pasinaudoti. Vietoje .concat reikia dėti ...[]
console.log([...marks, 4, 5, ...[1, 2, 3]]);

console.log('\n copyWithin------------');
// (2 - yra pozicija kur kažką darysime, 0 ir 1 - nurodo kurią originalaus masyvo dalį overrid'inti.)
console.log([...marks]);
console.log([...marks].copyWithin(2, 0, 1));
console.log([...marks].copyWithin(2, 0, 2));
console.log([...marks].copyWithin(2, 0, 3));
console.log([...marks].copyWithin(3, 0, 3));

console.log('\n fill------------');
// prirašo vienodą reikšmę tiek kartų, kiek reikia, čia labiau apie 'zuikis' pvz.
console.log([...marks]);
console.log([...marks].fill('')); // nuresetini visą masyvą. Išsitrina visos reikšmės
console.log([...marks].fill('', 2));
console.log([...marks].fill('', 1, 3));
console.log([...marks].fill(0, 2));

const desimtZuikiu = [];
for (let i = 0; i < 10; i++) {
    desimtZuikiu.push('zuikis');
}
console.log(desimtZuikiu)

//                       nauja Array sinatksė
const penkiolikaZuikiu = new Array(15).fill('zuikis');
console.log(penkiolikaZuikiu);

console.log('\n flat------------');
// jei is daugmacio masyvo reikia pasidaryt vienmate. 'Kaip su buldozeriu pravaziuoti palyginti'.
console.log([1, 2, 3].flat());
console.log([1, [2, 4], 3].flat());
console.log([1, [[2, 3], 4, [5, 6]], 7].flat(0));
console.log([1, [2, [3, 4]]].flat().flat());
console.log([1, [2, 3], 4, [5, 6], 7].flat(2)); // nurodo, kiek kartų reikia pereiti masyvus

const matrix = [
    [1, 2, 3, 4],
    [1, 2, 3, 5],
    [1, 2, 3, 6],  
];

console.log('\n includes------------');
// ar ieškoma reikšmė yra masyve
console.log([...marks].includes(0));
console.log([...marks].includes(1));
console.log([...marks].includes(2));
console.log([...marks].includes(5));

// [2] yra tokie patys masyvai, bet ne tie patys ir tik 2 reikšmę pakeitus į žodį two,jis atranda 'true'.
console.log([[1], [2], [3], [4]].includes([2]));
const two = [2];
console.log([[1], two, [3], [4]].includes(two));

console.log('\n indexOf------------');
console.log([...marks]);
console.log([...marks].indexOf('Labas'));
console.log([...marks].indexOf(10));
console.log([...marks].indexOf(6));
console.log([...marks].indexOf(145678));

function turboIndexOf(list, search) {
 // [10, 2, 8, 4, 6]; -> [2]; true
 // [10, 2, 8, 4, 6]; -> [2, 8]; true
 // [10, 2, 8, 4, 6]; -> [2, 8, 4]; true
 // [10, 2, 8, 4, 6]; -> [2, 8, 6]; false

}

console.log([...marks].indexOf(10));
console.log([...marks].indexOf(10, 2));

// naudojame string'u array. visas reikšmes sutrauks į stringą.
console.log('\n join------------');
console.log (abc);
console.log ([...abc].join());
console.log ([...abc].join(', '));
console.log ([...abc].join(' , '));
console.log ([...abc].join(' xXx '));
console.log ([...abc].join(''));

console.log('\n keys------------');
console.log ([...marks].keys());

// jis eina is desines i kaire
console.log('\n lastIndexOf-------------');
console.log ([...marks]);
console.log ([...marks].lastIndexOf(10));
console.log ([...marks].lastIndexOf(7));
console.log ([...marks].lastIndexOf(4));
console.log ([...marks, 7, 9, 4, 3].join (', '));
console.log ([...marks, 7, 9, 4, 3].lastIndexOf(4, 5));

// iš pradžių atima paskutinį narį, o po to grąžina paskutinį narį
console.log('\n pop-------------');
const marks2 = [...marks];
console.log(marks2);
console.log(marks2.pop());
console.log(marks2);
console.log(marks2.pop());
console.log(marks2);

// atnaujina masyvo ilgi + naują narį prirašo į dešinę pusę.
console.log('\n push-------------');
const marks3 = [...marks];
console.log(marks3);
console.log(marks3.push(7));
console.log(marks3);
console.log(marks3.push(8));
console.log(marks3);
console.log(marks3.push(100));
console.log(marks3);

// atnaujina masyvo ilgi + naują narį prirašo į dešinę pusę.
console.log('\n unshift-------------');
const marks4 = [...marks];
console.log(marks4);
console.log(marks4.unshift(0));
console.log(marks4.unshift(1));
console.log(marks4.unshift(2));
console.log(marks4.unshift(3));
console.log(marks4);

// trina nuo pradžios po 1 skaičių ir išspausdina, ką ištrynė
console.log('\n shift-------------');
const marks5 = [...marks];
console.log(marks5);
console.log(marks5.shift(0));
console.log(marks5.shift(0));
console.log(marks5.shift(0));
console.log(marks5);

console.log('\n reverse-------------');
console.log ([...marks]);
console.log([...marks].reverse);

// sukeičia vietomis, bet keičia orginalą, o nesukuria naujo
const demo = ['Labas', 'rytas', ',', 'Lietuva', '!'];
console.log(demo);
demo.reverse();
console.log(demo);
demo.reverse();
console.log(demo);

const reversedDemo = demo.reverse();
console.log(demo);
console.log(reversedDemo);

const reversedDemo2 = demo.toReversed();
console.log(reversedDemo2);