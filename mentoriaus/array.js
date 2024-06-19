const B = [
    'the quick brown fox',
    'jumps over the lazy dog',
    'a bird in the hand',
    'is worth two in the bush',
    'an apple a day',
    'keeps the doctor away',
    'actions speak louder than words',
    'all good things must come to an end',
    'beauty is in the eye of the beholder',
    'better late than never',
    'birds of a feather flock together',
    'cleanliness is next to godliness',
    'dont bite the hand that feeds you',
    'dont count your chickens before they hatch',
    'dont put all your eggs in 1 basket',
    'every cloud has a silver lining',
    'every dog has its day',
    'every rose has its thorn',
    'fortune favors the bold',
    'good things come to those who wait',
    'a watched pot never boils',
    'haste makes waste',
    'history repeats itself',
    'cat got your tongue',
    'home is where the heart is',
    'if the shoe fits, wear it',
    'ignorance is bliss',
    'it takes two to tango',
    'arabs have 100 words for sand',
    'kill two birds with one stone',
    'laughter is the best medicine',
    'love is blind',
    'money doesnt grow on trees',
    'no pain no gain',
    'nothing ventured nothing gained',
    'once bitten twice shy',
    'practice makes perfect',
    'the early bird catches the worm',
    'the grass is always greener on the other side',
    'the pen is mightier than 10 swords',
    'theres no smoke without fire',
    'time heals all wounds',
    '5 second rule',
    'every dog has its day',
    'to err is human to forgive divine',
    '2 wrongs dont make a right',
    'when in Rome do as the Romans do',
    'where theres smoke, theres fire',
    'you cant judge a book by its cover',
    'you cant make an omelette without breaking eggs',
    'you reap what you sow',
    'youre never too old to learn',
    'Labas Pasauli'
];

// Surasti trumpiausią stringą;
function shortestString(array) {
    let shortest = array[0]; // kai ieškome TRUMPAUSIO, reikalingas atskaitos taškas
    for (let i = 0; i < array.length; i++) {
        if (shortest.length > array[i].length) {
            shortest = array[i];
        }
    }
    return console.log(shortest);
}
shortestString(B);

// Surasti stringą, kuris prasideda “a” raide:
function startWithA(array) {
    let string = '';  
    // nes turime gauti stringo atsakymą
    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith('a')) {
            // jei mūsų array elementas prasideda 'a'.Eina per array[0]; array[1]; array[2] ir t.t.
            string = array[i];  
            // tuščias stringas, kurį išsikelėme prie let ir jis pavirsta į mūsu tą narį.
            break; 
            // tam kad sustotų ciklas suktis. Jei nerašytume break, tai ciklas surastų paskutį narį
        }
    }
    return console.log(string)
}
startWithA(B);

// Paskaičiuoti kiek stringų, kuris prasideda “a” raide;
function howManyStartWithA(array) {
    let str = 0;
    // kadangi skaičiuojame tai rašome 0, nes atsakymas kiek iš viso
    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith('a')) {
            str++
            // prie let 0 stringo, prideda po vieną ir taip sudeda kiek iš viso yra stringų
        }
    }
    return str;
}
const str = howManyStartWithA(B);
console.log(str);

// Išrinkti visus stringus, kurie prasideda “a” raide;
function allStartWithA(array) {
    let stringArray = [];   
    // masyvas, nes turime išrinkti į kažkur
    for(let i = 0; i < array.length; i++) {
        if (array[i].startsWith('a')) {
        // kur stumsime, o array[i] - į ką stumsime    
        stringArray.push(array[i]);   
        // paimame tą narį į kurį mes norime įdėti stringAarray ir jei narys tenkina sąlygą tai yra prasideda 'a' raide, tai push įstumia tą stringą į array.  
        }
    }
    return stringArray;
}
const stringArray = allStartWithA(B);
console.log(stringArray);

// Surasti stringą su daugiausiai žodžių;
function mostlyWords (array) {
    let words = '';
    let maxWordsCount = 0;
    for (let i = 0; i < array.length; i++) {
       let wordCount = array[i].split(" ").length;
       // [i] kad kiekvieną narį, tarpas tarp kabačių nes ties kuria vieta splitinam žodžius
        if (wordCount > maxWordsCount) {
            maxWordsCount = wordCount;
            words = array[i];
        }
        
    }
    return `${words} ir ${maxWordsCount}`;
}
const words = mostlyWords(B);
console.log(words);

// Surasti stringą su mažiausiai žodžių
function leatsWords (array) {
    let shortest = array[0];
    // kad pardėtų nuo pirmo array nario
   for (let i = 0; i < array.length; i++) {
    if (array[i].split(' ').length < shortest.split(' ').length)
    shortest = array[i];
   }
return shortest;
}
const shortest = leatsWords(B);
console.log(shortest);

// Suskaičiuoti visas ‘s’ raides;
function allS(array) {
    let totalallS = 0;
    // skaičiuojame S raides;
    for (let i = 0; i < array.length; i++) {
        let str = array[i];
        // iš masyvo išrenka visus stringus
        for (let j = 0; j < str.length; j++) {
            if (str[j] === 's' || str[j] === 'S') {
                // kadangi mums reikia konkretaus simbolio, sukuriame 2 ciklą
                totalallS++
                // pliusuoja raides
            }
        }
    }
    return totalallS;
}
const totalallS = allS(B);
console.log(totalallS);

// Suskaičiuoti kiek masyve yra raidžių (tarpų tarp žodžių neskaičiuoti!) /\s+/g - cia spase
// paima raides ir skaicius
function howMuchLetters(array) {
    let counts = 0;
    for (let i = 0; i < array.length; i++) {
        let strr = array[i].replace(/\s+/g, '')
        // tarpus pakeičiame į nieką
        counts += strr.length;
        // kiekvieną simbolį pridedame
    }
    return counts
}
const counts = howMuchLetters(B);
console.log(counts);

// kitoks sprendimas
function allLetters (array) {
    let countAllLetters = 0;
    for (let i = 0; i < array.length; i++) {
        countAllLetters += (array[i].match(/[A-Z]/gi) || []).length; 
    }
    return console.log(countAllLetters);
}
allLetters(B);

// dar vienas sprendimas
let raides = 0;
for (let i = 0; i < B.length; i++) {
    let strr = B[i]
    for (let j = 0; j < strr.length; j++) {
        if (strr[j] !== ' ') {
            raides++
        }
    }
}
console.log(raides);

// Surasti ilgiausią žodį (ne stringą, o atskirą stringo žodį!);
function longestWorld(array) {
    let word = '';
    // reikės sužinoti ilgiausią žodį 
    for (let i = 0; i < array.length; i++) {
        let words = array[i].split(' ')
        for (let g = 0; g < words.length; g++) {
            if (words[g].length > word.length) {
                word = words[g];
            }
        }
    }
    return console.log(word)
}
longestWorld(B);

// Suskaičiuoti kiek stringų turi daugiau nei 4 žodžius;
function moreThanFor(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].split(" ").length > 4) {
            count++;
        }
    }
    return count;
}
const result = moreThanFor(B);
console.log(result);

// Suskaičiuoti kiek masyve yra žodžių;
function howManyWords(array) {
    let countWords = 0;
    for (let i = 0; i < array.length; i++) {
        countWords += array[i].split(" ").length;
    }
    return countWords;
}
const countWords = howManyWords(B);
console.log(countWords);























