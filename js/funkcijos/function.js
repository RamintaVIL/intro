/*
Function - funkcija, perpanaudojama logika
() - parametru blokas
{} - logikos blokas

Input => Function() => Output
*/

function funkcijosPavadinimas() {
}

function doSomething () {
    // 1) Input (parametru) validavimas
    // 2) Vykdoma logika
    // 3) Gauto rezultato validavimas
    // 4) Graziname rezultata
}

const a = funkcijosPavadinimas();
console.log(a);

function empty() {
    return undefined; 
}

console.log(empty());

function giveMeFive() {
 return 5;
}

console.log(giveMeFive());

function giveMeSix() {
    return 6;
   }

console.log(giveMeSix());

/*
Input:
name: Jonas
surname: Jonaitis

Output:
Laba diena, as esu Jonas Jonaitis!
Laba diena, as esu Petras Petraitis!
Laba diena, as esu Ona Onaityte!

As duodu varda pavarde, o jis man grazina normalu sakini
*/

function intro(name, surname) {
    return 'Laba diena, as esu ' + name + ' ' + surname + '!';
}

console.log(intro('Jonas', 'Jonaitis'));
console.log(intro('Petras', 'Petraitis'));
console.log(intro('Ona', 'Onaityte'));

/*
Input:
- pirmas sk = 5
- antras sk = 7

Output:
35
*/

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber; 
}

console.log(multiply(5, 7));
console.log(multiply(-2, 8));
console.log(multiply(3.14, 2));

function daugyba(pirmasSkaicius, antrasSkaicius) {
    return pirmasSkaicius * antrasSkaicius; 
}

console.log(daugyba(5, 7));

// Mano vardas yra Jonas, man 99 metai ir as megstu cepelinus.
// Mano vardas yra Maryte, man 88 metai ir as megstu balionus.

function iLike(name, age, item) {
 return 'Mano vardas yra ' + name + ' , man ' + age + ' metai ir as megstu' + item + '.';
 // return 'Mano vardas yra VARDAS, man XX metai ir as megstu DALYKAS.'
}

console.log(iLike());
console.log(iLike('Jonas'));
console.log(iLike('Maryte', 88));
console.log(iLike('Petras', 77, 'cepelinus'));

console.clear();

function price(value) {
    const PVM = 21;
    const priceIncrease = 1 + PVM / 100;
    const priceForSale = value * priceIncrease; 

    return priceForSale;
}

console.log(price(100)); 
console.log(price(150)); 

// Dictionary: ZODIS, ZODIS, ZODIS.
function words(w1, w2, w3) {
  let sentence = ' Dictionary: '; 
  sentence += w1;
  sentence += ' , ';
  sentence += w2;
  sentence += ' , ';
  sentence += w3;
  sentence += ' , ';
  
  return sentence;

}

console.log(words('labas' , 'rytas' , 'Lietuva'));
 
// += prie save paties, pridedu kazka kita

// Lietuvos respublikos prezidento rinkimai vyksta dvylikta, nes ona yra nebpriklausoma.

function information(word1, word2) {
    return 'My country is independent ' + word1 + ' and I will go to vote at ' + word2 + '.';  
}

console.log(information('Lietuva', 'may'));
console.log(information('birzelio 1', 'Anglija'));

const Mantai = "Mantas";

function vardas(name) {
return console.log('Labas ${name}')
}
vardas("Mantai");

function howMany(text) {
    return console.log(text.lenght)
}

howMany("Labas");

console.clear();

// Mano vardas yra Ona-Marija, man 35 metai, ir mano hobis yra lipdymas is molio.
function introduction(name, age, hobby ) {
    return 'Mano vardas yra ' + name + ' , man ' + age + ' metai,' + ' ir mano hobis yra ' + hobby + '.';
}
console.log(introduction('Ona-Marija', 35, 'lipdymas is molio'));

// 'As gyvenu 'Lietuvoje', jau '40' metu'.
function place(Country, number) {
    return 'As gyvenu ' + Country + ', jau ' + number + ' metu ' + ".";
 }
console.log(place('Lietuvoje', 40));