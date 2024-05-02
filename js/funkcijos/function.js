/*
Function - funkcija, perpanaudojama logika
() - parametru blokas
{} - logikos blokas

Input => Function() => Output
*/

function funkcijosPavadinimas() {
}

const a = funkcijosPavadinimas();
console.log(a);

function empty(){
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
Laba diena, as esu Petras Petraitis
Laba diena, as esu Ona Onaityte!

*/

function intro(name, surname) {
    return 'Laba diena, as esu ' + name + ' ' + surname + '!';
}

console.log(intro('Jonas', 'Jonaitis', ));
console.log(intro('Petras', 'Petraitis', ));
console.log(intro('Ona', 'Onaityte', ));

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
    const PVM =21;
    const priceIncrease = 1 + PVM / 100;
    const priceForSale = value * priceIncrease; 

    return priceForSale;
}

console.log(price(100)); // 121
console.log(price(150)); // 121

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