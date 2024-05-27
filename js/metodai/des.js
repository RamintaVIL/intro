/*
Destrukturizavimas
gimininga 'siela' - spread
*/

const a = [10, 2, 8, 4, 6];
const first = a[0];
const second = a[1];
const rest = a.slice(2);  // pradeti nuo 2 pozicijos

console.log(first);
console.log(second);
console.log(rest);

const dict = ['labas', 'rytas', 'Lietuva', 'sakau', 'tau']; // strukturizavimas
const [word1, word2, word3, ...restOfDict] = dict; // [] istraukiame reiksme
console.log(word1);
console.log(word2);
console.log(word3);
console.log(restOfDict);

function giveTwoNumbers() {
    const c = Math.floor(Math.random() * 10);
    const d = Math.floor(Math.random() * 10);
    return [c, d];
}
console.log(giveTwoNumbers());

const rest1 = giveTwoNumbers()
    console.log(rest1);

console.clear();

// function ...rest operatorius gali būti TIK vienas ir jis PRIVALO būti paskutinis.

// rest operatorius surenka į masyvą
function drinks(...list) {
    console.log(list);  // kas yra list kintamasis
    return `Gerimu kiekis: ${list.length}.`;
} 

console.log(drinks('a', 'b', 'c', 'd')); // reikšmės paduotos ne kaip masyvas.

// jei console.log būtų []; tai išspausdina teisingus atsakymus, bet kai yra tokie (), norint kad visą sąrašą išspausdintų, tai rašyti ...list

function iLike(name, ...list) {
 return `${name} megsta ${list.length} spalvas.`;
}
console.log(iLike('Petras'));
console.log(iLike('Jonas', ['red', 'blue']));
console.log(iLike('Maryte', ['white', 'black', '50greys']));

console.log(iLike('Petras'));
console.log(iLike('Jonas', 'red', 'blue'));
console.log(iLike('Maryte', 'white', 'black', '50greys'));

function nextFunc (a, b, c, ...restParams) {
    return null;
}

// function taipNegalima (a, b, c, ...restParams, d) {
//     return null;
// }
// console.log(nextFunc());

console.log(Math.max(10, 7)); 
console.log(Math.min(10, 7)); 

const marks = [10, 2, 8, 6, 4];
console.log(Math.max(...marks));  
console.log(Math.min(...marks));
// ... nuima laužtinius sklaustus, be spread pagalbos reikėtų naudoti ciklą, lygininant kievieną reikšmę.