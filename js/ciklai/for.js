/*
FOR - pagrindinis ciklas (en. loop)
*/

// kai procedura reikia kartoti n kartu 
// atstumas: 100m
// zingsnis: 1m
// zingsniu: 100, bet jie nebus tikslus labiau gali butu 80-200

// cia ciklas, nes kartok nekartojes gausi vis tiek ta pati 
// ciferblatas: 60 padalu
// trukme padalos: 1s
// laiko? = 60s

console.log('START');

// i - iteratios, skaiciuoja kelinta, bet i galime keisti, kad ir i zodi 'pomidoras'
// i++ - didina kintamiji 1 vnt. Galima pasirasyt ir kitais variantais i = i + 1; i += 1; i++, ++ i, i galima didinti ir didesniu sk. pvz i+=5, jei finisas toleja renkames  ++, arteja --
// () parametras nurodo, tai kiek kartu man kazka daryti
// i=0 yra kaip ir startas, finisas <10. i++ nurodo kokiu zingsniu keliauju i prieki, dazniausiai einame 1. 

for (let i = 0; i < 10; i++) {
 console.log(i);
}

console.log('Finish');

for (let i = 3; i < 8; i += 2) {
    console.log(i);
}

console.log('START');
// nesuveiks, nes 20 < 10, nera maziau, tai ciklas net neprades darbo
for (let i = 20; i < 10; i--) {
 console.log(i);
}

console.log('Finish');

console.log('START');
for (let i = 20; i < 10; i -= 2.3) {
 console.log(i);
}

// 01010101010101 - dvejetainis kodas
// 01010101010101 <=> 1485
// dvejetainis        desimtaine sistema
console.log('Finish');

console.log('START');

for (let i = 200; i > 100; i -= 23) {
 console.log(i / 10);
}

console.log('Finish');

console.log(0.1 + 0.2);

console.clear();
console.log('START');

// kvepia masyvu
for (let i = 0; i < 5; i++) {
    console.log(i, 'Laba diena su vistiena');
   }

console.log('Finish');

console.clear();

const colors = ['white', 'black', 'red', 'green', 'blue', 'yellow', 'purple']

console.log('--------');

for (let i = 0; i < colors.length; i++ ) {
    console.log(i, colors[i]);
}

console.log('--------');
//                  5                    5 < 6
for (let i = colors.length - 1; i < colors.length; i++) {
   console.log(i, colors [i]); 
}
// jei i >= 0; galime rasyti ir i > -1
for (let i = colors.length - 1; i >= 0; i--) {
    console.log(i, colors [i]); 
 }
// sitas pvz padaro, kad spalvas sumeta is desines i kaire
 for (let i = colors.length - 1; i >= 0; i--) {
    console.log(i, colors [colors.length - 1 - i]); 
 }
console.clear();

const marks = [10, 2, 8, 4, 6]

let sum = 0;

for (let i = 0; i < marks.length; i++){
    console.log(i, '-->', marks[i]);  // is pradziu esmes yra, o po to ja praranda
    sum += marks[i];
    console.log(sum);                // padeda pamyti tarpinius rezultatus
}

console.log(sum / marks.length);

const jonas = [];
const maryte = [10, 2];
const petras = [9, 8, 7];
const ona = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function marksAverage(marks) {
  if (marks.length === 0) {
    return 'Nera Pazymiu.';
  }
  let sum = 0;

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }

  return sum / marks.lenght;
}
console.log(marksAverage(jonas));
console.log(marksAverage(maryte));
console.log(marksAverage(petras));
console.log(marksAverage(ona));