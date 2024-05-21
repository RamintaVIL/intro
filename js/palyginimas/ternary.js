/*
UNARY - vienybė
(a++, a--)  // kintamaji padidini arba sumazini 1 vnt
BINARY - dvejybė
(a+b)
TERNARY - trejybė  // logikoje dalyvauja 3 nariai
(a?b:c)
*/

let a = 0;
// kintamoja 'a' reiksme skiriasi ir atsakymas priklauso, kuria if dali tenkina
if (4 > 2) {
 a += 10;
} else {
 a -= 5;
}

console.log(a);

// pirma dalis if klausimas, už ? yra tenkinama sąlyga, : netenkina sąlygos
const b = 4 > 2 ? 88 : 666;
console.log(b);

const c = 4 < 2 ? 123 : 456;
console.log(c)

const d = 1 + 2 > 3 ? 4 : 5;
// cia yra sprendimo budas, kad kodas skaito, jei nera sklaustu
// const d = 3 > 3 ? 4 : 5; //ar 3 daugiau uz 3, ne, gauname false
// const d = false ? 4 : 5; 
// const d = 5;
console.log(d);

const d1 = 1 + (2 > 3 ? 4 : 5);
// const d1 = 1 + (false ? 4 : 5);
// const d1 = 1 + (5);
// const d1 = 6;
console.log(d1);

const d2 = 1 > 2 ? 3 : 4 + 5;
// const d2 = false ? 3 : 4 + 5);
// const d2 = 4 + 5;
// const d2 = 9;
console.log(d2);

const e = 1 * 2 > 3 ? 4 : 5;
console.log(e);

const f = 'Labas'.length > 0 ? 'ilgas' : 'tuscias';
console.log(f);

const g = 'pomidoras'[0];
console.log(g);

const g1 = 'pomidoras'[1 < 2 ? 0 : 5];
// 1 yra maziau uz 2, to sekoje jis istraukia 0 ir raide 'P'
console.log(g1);

const g3 = 'pomidoras'[2 + (1 < 2 ? 0 : 5)];
// 2 + 5 = 7, taip isspausdina 'a';
console.log(g3);

const gIndex = 2 + (1 < 2 ? 0 : 5);
const g2 = 'pomidoras'[gIndex];
console.log(g2);

/*
Jeigu skaicius yra teigiamas, tai ji sumuojame su savimi
Jeigu skaicius yra neigiams, tai is jo atimame 10.
*/
const sum = (a, b) => a + b;
const diff = (a, b) => a - b;

const n = 7;
const ats = sum (n, n);
console.log(ats);

const n1 = 7;
let ats1 = null; // reiksme kaip ir neegzistuoja, tik einamu metu as ja zadu duoti, tik po kol kas jos nezinau
if (n > 0) {
    ats1 = sum(n1, n1);
} else {
    ats1 = diff(n1, 10); 
}
console.log(ats1);

const ats3 = n > 0 ? sum(n, n) : diff(n, 10);
console.log(ats3);

/*
Jeigu tekstas yra trumpas (iki 5 simboliu),
tai grazink pirma simboli, priesingu atveju, grazink paskutini.
*/

const first = s => s[0]; // duosime teksta, o grazins teksto nulini indeksa. S - stringo trumpinys
const last = s => s[s.length - 1];
// const last = s => s.at(-1); // stringu metodas, pats pirmasis. -1 paima is desines.
console.log(first('Labas'));
console.log(last('Labas'));

const text1 = 'Labas';
//strAts kaupia atsakyma
const strAts = text1.length < 5 ? first(text1) : last(text1);
console.log(strAts);

const funcToCall = text1.length < 5 ? first : last;
const strAts2 = funcToCall(text1);
console.log(funcToCall);
console.log(strAts2);

const jonasMarks = [];
const maryteMarks = [10, 2, 8, 4, 6];

function emptyMarksArray() {
    return 'Studentas neturi pazymiu'
}
function marksAverage(marks) {
   let sum = 0;
   for (let i = 0; i < marks.length; i++){
        sum += marks[i];  
    }
   const count = marks.lenght;
   const average = sum / count;
   return average;
}

//                taip apskaiciuojame, ar array tuscias
const jonasFunc = jonasMarks.length === 0 ? emptyMarksArray : marksAverage;
const jonasAverage = jonasFunc(jonasMarks);
console.log(jonasAverage);

const maryteFunc = maryteMarks.length === 0 
? emptyMarksArray 
: marksAverage;
const maryteAverage = maryteFunc(maryteMarks);
console.log(maryteAverage);

const leo = oscar => oscar === 88 ? "Leo finally won the oscar! Leo is happy" : oscar === 86?"Not even for Wolf of wallstreet?!": oscar < 88?"When will you give Leo an Oscar?" : "Leo got one already!" 
  
console.log(leo(89))
console.log(leo(88));
console.log(leo(87))
console.log(leo(86))
