/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

const word = 'Labas rytas, Lietuva!';
console.log(word);
console.log(word[99]);
// išspausdina konkrečią raidę
console.log(word.charAt(0));
console.log(word.charAt(14));

// mūsų kompiuteris veikai 01010101 pagrindu, tai jis parodo kompiuterine abecėlę
console.log(word.charCodeAt(0));
console.log(word.charCodeAt(1));
console.log(word.charCodeAt(2));
console.log('L'.charCodeAt(0));
console.log('l'.charCodeAt(0));

// sujungia kelis string'us bet be tarpų
console.log('labas'.concat('rytas')); 
console.log('labas'.concat('rytas','Lietuva'));
console.log('Labas'.concat('rytas').concat('Lietuva'));

// skirtingi simboliai suprogramuoti kompiuterio abecėlėje
console.log('L'.charCodeAt(0));
console.log('l'.charCodeAt(0));

// ar baigiasi tekstas, su jūsų ieškoma pabaiga
console.log('labas'.endsWith('x'));
console.log('labas'.endsWith('s'));
console.log('labas'.endsWith('gg'));
console.log('labas'.endsWith('bas'));
console.log('labas'.endsWith('Labas')); // turi grieztai sutapti zodziai, negali buti viena didzioji kita mazoji

console.log('starstWith()');
console.log('Labas'.startsWith('x'));
console.log('Labas'.startsWith('gg'));
console.log('Labas'.startsWith('l'));
console.log('Labas'.startsWith('La'));
console.log('Labas'.startsWith('Lab'));

// ar jame yra raide, pvz 'o' arba teksto dalis
console.log('includes()');
console.log('Pomidoras' .includes('x'));
console.log('Pomidoras' .includes('o'));
console.log('Pomidoras' .includes('oras'));
console.log('Pomidoras' .includes('ido'));
console.log('Pomidoras' .includes('Pomi'));
console.log('Pomidoras' .includes('sa'));

// jei nerasta reikšmė naudojame '-1'. Nurodo raides index'a, pvz [0, 1, 2, ir t.t]
console.log('indexOf()');
console.log('Pomidoras'.indexOf('X'));
console.log('Pomidoras'.indexOf('ggs'));
console.log('Pomidoras'.indexOf('P'));
console.log('Pomidoras'.indexOf('Po'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('m'));
console.log('Pomidoras'.indexOf('P', 0));
console.log('Pomidoras'.indexOf('P', 1));   // pradeda ieškoti nuo 1 pozicijos kuri prilyginama omidoras, todėl terminale grąžina -1.
console.log('Pomidoras'.indexOf('o', 2));

console.log('------------------------------------------------------>');
// mano suvesta zodi arba raide suka tiek kartu kiek suvedame
console.log('repeat()');
console.log('A'.repeat(10));
console.log('A'.repeat(3.1417));
console.log('Labas'.repeat(5));

// ką nori pakeisti, į ką nori pakeisti
console.log('replace()');
console.log('Pomidoras'.replace('P', 'B'));
console.log('Pomidoras'.replace('o', 'x'));
console.log('Pomidoras'.replace('o', '_').replace('o', '_'));       // sujungiame grandinele
console.log('Pomidoras'.replace('Pomi', 'Agurk').replace('doras', 'as'));

console.log('replaceAll()');
console.log('Pomidoras'.replaceAll('o', '_'));
console.log('Pomidoras'.replaceAll('Pomidoras', 'Agurkas'));
console.log('Pomidoras'.replaceAll('Pomidoras', 'agurkas'));

// .slice(1) nurodo nuo kurios raides pradeti
console.log('slice()');
console.log('Pyragelis'.slice());
console.log('Pyragelis'.slice(0));
console.log('Pyragelis'.slice(1));
console.log('Pyragelis'.slice(2));
console.log('Pyragelis'.slice(2, 4));         // pirmas skaicius nuo kur pradeti, antras sk. kur pabaigti. Pradzios sk. paiims, o pabaigos ne

const p = 'pyragelis';

console.log(p.slice(p.lenght - 3));
console.log(p.slice(-3));
console.log(p.slice(6));
console.log(p.slice(-3, 8));

console.log ('---------------------->');
// vietoje didziuju raidziu paraso mazasias;
console.log('toLowerCase()');
console.log('Labas'.toLowerCase());
console.log('POMIDORAS'.toLowerCase());
console.log('aPeLsInAs'.toLowerCase());
console.log('12'.toLowerCase());

console.log ('---------------------->');
//vietoje mazuju raidiu, pasikeicia i didziasias, bet visos
console.log('toUpperCase()');
console.log('labas'.toUpperCase());
console.log('Saule'.toUpperCase());
console.log('Pomidoras'.toUpperCase());
console.log('aPeLsInAs'.toUpperCase());

console.log ('---------------------->');
console.log('trim()');
console.log('    Labas,Lietuva!    '.trim());
console.log('!     Pomidoras    !'.trim());
console.log('      !Pomidoras!               '.trim());


console.log ('---------------------->');
console.log('trimEnd()');
console.log('        !     Pomidoras!        Apelsinas      !!!'.trimEnd());
console.log('!     Pomidoras!'.trimEnd());
console.log('    Labas,Lietuva!    '.trimEnd());

console.log ('---------------------->');
console.log('trimStart()');
console.log('  .Saule   sviecia'.trimStart());
console.log('  Saule   sviecia    .'.trimStart());

console.log('---------------------->');
console.log('split()');
console.log(' '.split());
console.log('Pomidoras'.split());
console.log('Saule sviecia kaip gerai, pasivaikscioti eisiu vakare'.split(8));
console.log('NaN'.split());
console.log('12'.split());
console.log('12, 13, 14, -7'.split());
console.log('12, 13, 14, -7'.split(1,));
console.log('Pomidoras'.split('s'));