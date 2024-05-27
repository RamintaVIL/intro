/*
Random - spausdina atsitikinį skaičių. 
0 yra teoriškai įmanoma, kad išspausdintų, o 1 neįmanomas.
Didžiausias skaičius galimas 0,9999999999999999
*/

// [0..1)
console.log(Math.random());

// [0..0.5) - čia 0.5 nepriklauso. 
console.log("skaicius");
// [0.5..1)
console.log("herbas");

if (Math.random() < 0.5) {
  console.log("skaicius");
} else {
  console.log("herbas");
}

function moneta() {
  if (Math.random() < 0.5) {
    return "Skaicius";
  } else {
    return "Herbas";
  }
}
console.log(moneta());
console.log('-----------------')
// vietoj to, kad console.log, copy 10, 20 ar 100 kartu, sukureme cikla ir apskaiciuojame kiek kartu herbas iskrito, kiek moneta. 

const metimuKiekis = 10;
let herbai = 0;
for (let i = 0; i < metimuKiekis; i++) {
  const iskrito = moneta();
  if (iskrito === 'Herbas') {
    herbai++
  }
  console.log(iskrito);
}
console.log('Herbu kiekis:', herbai);
console.log('Skaiciu kiekis:', metimuKiekis - herbai);

console.log('----------------------');
const week = ["Pirm", "Antr", "Trec", "Ketv", "Penkt", "Sest", "Sekm"];
const step = 1 / 7;
// [0..0.1) Pirm      [0..step) Pirm
// [0,1..0.2) Antr    [step..2step) Antr
// [0.2..0.3) Trec    [2step..3step) Trec
// ....
// [0.6..0.7) Sekm    [6step..7step) Sekm

console.log(Math.floor(Math.random() / step));

// Visiskai automatizuotas indekso generavima, priklausomai is kokio masyvo norime istraukti atsitiktine reiksme.
/*
- pats pasiskaičiuoja masyvo ilgį 'week.length';
- išmeta atsitiktinį skaičių 'Math.random()';
- supavalina į mažesnę pusę 'Math.floor';
- ir iš savaitės parenka dieną 'week[index]';
*/
for (let i = 0; i < 10; i++) {
  const index = Math.floor(Math.random() * week.length);
  console.log(week[index]);
}

// Man reikia atsitiktinio skaiciaus intervale nuo 1 iki 10 imtinai. 
for (let i = 0; i < 10; i++) {
  console.log(Math.floor(Math.random() * 10) + 1);
}

console.log('-----------------------')
// man reikia atsitiktinio skaiciaus intervale nuo 23 iki 617 imtinai
function atsitiktinisSkaicius(count, min, max){
for (let i = 0; i < count; i++) {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(random);
}
}

