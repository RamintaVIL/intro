/*
NUMBERS
- sveikieji / desimtainiai
- teigiami / neigiami
- normalus / "ne normalus"

"Ne normalus":
- Infinity
- -Infinity
- NaN (not a number)

Matematiniai operatoriai:
- aritmetiniai: +, -, /, *, **, %, ++, --
- priskyrimo: += -=, /=, *=, **=, %=


*/

const pirmas = 5; 
const antras = 7;
const suma = pirmas + antras;

console.log(pirmas);
console.log(antras);
console.log(suma);

const skirtumas = pirmas - antras;
console.log(skirtumas);

const dalmuo1 = antras / pirmas;
console.log(dalmuo1);

const dalmuo2 = pirmas / antras;
console.log(dalmuo2); 

const sandauga = pirmas * antras;
console.log(sandauga);

const laipsnis1 = antras ** pirmas;
console.log(laipsnis1);

const laipsnis2 = pirmas ** antras;
console.log(laipsnis2);

console.log(2 ** 2, 2 * 2);
console.log(2 ** 3, 2 * 2 * 2);
console.log(2 ** 4, 2 * 2 * 2 * 2 );

const liekana1 = pirmas % antras;
console.log(liekana1);
console.log(pirmas, '%', antras, '=', liekana1);

const liekana2 = antras % pirmas;
console.log(liekana2);

console.clear();

let pinigine = 0;
console.log(pinigine);
console.log(pinigine);

pinigine = 10;
console.log(pinigine);
pinigine = 10;
console.log(pinigine);
pinigine = 10;
console.log(pinigine);

pinigine = 50;
console.log(pinigine);
console.log(pinigine);

console.clear();

let money = 0;   
console.log(money); 

money = 5;  
console.log(money);
// ?? = 5 + 5

money = money +5;      
console.log(money);
// ?? = 10 + 5

money = money +5; 
console.log(money);

money = money + 5;
console.log(money);

console.clear ();

let greitukas = 13;
console.log(greitukas);

greitukas = greitukas + 3;
console.log(greitukas);

greitukas = 2 * greitukas - 1;
console.log(greitukas);

greitukas = greitukas % 10;
console.log(greitukas);

greitukas = greitukas ** 123;
console.log(greitukas);

greitukas = 69
console.log(greitukas);
// jei yra tik vienas skaicius ir lygu zenklas, tai yra kaip nauja reiksme

console.clear();

let x = 1;
x +=1;
console.log(x);
// galiu naudoti jei yra tokia formule, tasPats = tasPats + kazkasKito

x *=20;
console.log(x);

x /=5;
console.log(x);

x %=3;
console.log(x);

x **= 10;
console.log(x);

console.clear();

let y = 10;
console.log(y);

y += 10 + 10 + 10;
console.log(y);

y -= 5 * 4;
console.log(y);

y -= 10 + 5 * 4;
// 20 -= 10 + 5 * 4;
// 20 -= (10 + 5 * 4);
// 20 -= gaunasi kad pirma skaiciuoja 5 * 4, po to prideda 10, ir iseina, kad 20 atimkime 30
console.log(y);

console.clear();

/*
Pinigines turinys: 0;
Pinigine papildyta: 10;
Pinigines turinys: 10;
Pinigine papildyta: 90;
Pinigines turinys: 100;
*/ 

const pavadinimas = "PiniginesTurinys:";
const pavadinimas2 = 'PiniginePapildyta:';

console.log(pavadinimas);
console.log(pavadinimas2);

let num = 0;
num1 = num + 10; 
num2 = 90;
num3 = num2 + num1;

console.log(pavadinimas + ' ' + num + ';');
console.log(pavadinimas2 + ' ' + num1 + ";");
console.log(pavadinimas + ' ' + num1 + ';');
console.log(pavadinimas2 + ' ' + num2 + ';');
console.log(pavadinimas + ' ' + num3 + ";");

let skaicius = 0;
const vidus = 'Pinigines turinys'
console.log(vidus + ' ' + skaicius);
skaicius = skaicius + 10;
const vidus2 = 'Pinigines papildymas';
console.log(vidus2 + ' ' + skaicius);

console.log(vidus + ' ' + skaicius);

let skaicius2 = 90;
console.log(vidus2 + ' ' + skaicius2);

skaicius2 = skaicius2 + skaicius;
console.log(vidus + ' ' + skaicius2);

let piniginesturinys = 0;
console.log(piniginesturinys);

piniginepapildyta = 10;
console.log(piniginepapildyta);

piniginepapildyta = piniginepapildyta + 90;
console.log(piniginepapildyta);


let pinigines_turinys = 0;
console.log(pinigines_turinys);

pinigine_papildyta = 10;
console.log(pinigine_papildyta);

pinigines_turinys = 10;
console.log(pinigines_turinys);

pinigine_papildyta = pinigine_papildyta + 90;
console.log(pinigine_papildyta);

pinigines_turinys = 100;
console.log(pinigines_turinys);

console.clear(); 

let makaronai = 2;
console.log(makaronai);

makaronai = makaronai + 2;
console.log(makaronai);

makaronai += 2;
console.log(makaronai);

makaronai += -1;
console.log(makaronai);

// cia jei naudotume ta pacia reiksme, pvz. -1
makaronai++;
console.log(makaronai);

++makaronai;
console.log(makaronai);

let m = 6;
console.log(m);

// pirmiau padidina, o po to spausdina
console.log(++m);
// pirmiau spausdina, po to padidina
console.log(m++);



