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
    'youre never too old to learn'
];

// Suskaičiuoti kiek stringų turi daugiau nei 4 žodžius;
function moreThanFor (array) {
   let count = 0;
   for (let i = 0; i < array.length; i++){
    if (array[i].split(" ").length > 4) {
        count++;
    }
   }
return count;
}
const result = moreThanFor(B);
console.log(result);

// Suskaičiuoti kiek masyve yra žodžių;
function howManyWords (array) {
    let countWords = 0;
    for (let i = 0; i < array.length; i++) {
       countWords += array[i].split(" ").length; 
    }
    return countWords;
}
const countWords = howManyWords(B);
console.log(countWords);

// Suskaičiuoti visas ‘s’ raides;
function findS(array) {
    let totalallS = 0;

    for (let i = 0; i < array.length; i++) {
        let str = array[i];  // isspausdiname stringus
        for (let j = 0; j < str.length; j++) {
            if (str[j] === 's' || str[j] === 'S') {
                totalallS++
            }
        }
    }
    return totalallS;
}
const totalallS = findS(B);
console.log(totalallS);

// Suskaičiuoti kiek masyve yra raidžių (tarpų tarp žodžių neskaičiuoti!) /\s+/g - cia spase
function howMuchLetters(array) {
    let counts = 0;
    for (let i = 0; i < array.length; i++) {
        let strr = array[i].replace(/\s+/g,'')

        counts += strr.length;   
    }
    return counts
}
const counts = howMuchLetters(B);
console.log(counts);

// Surasti ilgiausią žodį (ne stringą, o atskirą stringo žodį!);

function longestWorld(array) {
    let world = '';
 
    for (let i = 0; i < array.length; i++) {
         
        let words = array[i].split(" ");
        for (let g = 0; g < words.length; g++) {
            if (words[g].length > world.length) {
                world = words[g];
            }
            
        }
    }
    return world
}

const world = longestWorld(B);
console.log(world);





// Surasti ilgiausią stringą;
// Surasti trumpiausią stringą;
// function shortestString(array) {
//     let shortest = array[0];    // kad ciklas turėtų atskaitos tašką, žinotų nuo kur pradėti sukti ciklą.
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].length < shortest.length) {  // pirmo stringo ilgis yra daugiau uz array[i] skaiciu
//             shortest=array[i]
//         }
//     }
//    return shortest;     
// }
// const shortest = shortestString(B);
// console.log(shortest);


// Surasti stringą, kuris prasideda “a” raide;

// function startWithA(array) {
//     let string = '';   // nes turime gauti stringo atsakymą
//     for( let i = 0; i < array.length; i++) {
//         if (array[i].startWith('a')) {
//         string = array[i];  // tuščias stringas, kurį išsikelėme prie let ir jis pavirsta i musu tą nari 
//         break;   // jei nerašytume break, tai ciklas surastų paskutį narį
//         }
//     }
    
// }

// const string = startWithA(B);
// console.log(string);

// Paskaičiuoti kiek stringą, kuris prasideda “a” raide;
// function startWithA(array) {
//     let stringg = 0;   // nes skaičiuojame kiek iš viso
//     for( let i = 0; i < array.length; i++) {
//         if (array[i].startWith('a')) {
//         stringg++   // prie let 0 stringo, prideda po viena ir taip sudeda kiek is viso yra stringu
//         }
//     }
//     return stringg;
// }
// const stringg = startWithA(B);
// console.log(string);

// Išrinkti visus stringus, kurie prasideda “a” raide;
// function startWithA(array) {
//     let stringArray = [];   // masyvas, nes turi išrinkti į kažkur
//     for(let i = 0; i < array.length; i++) {
//         if (array[i].startWith('a')) {
//         // kur stumsime, o array[i] - ką stumsime    
//         stringArray.push(array[i]);   // paimame tą narį į kurį mes norime įdėti stringAarray ir jei narys tenkina sąlygą tai yra prasideda 'a' raide, tai push įstumia tą stringą į array.  
//         }
//     }
//     return stringArray;
// }
// const stringArray = startWithA(B);
// console.log(string);

// Surasti stringą su daugiausia žodžių;
// function longest(array) {
//     let longestString = '';
//     let maxWordsCount = 0;
//     for (let i = 0; i < array.length; i++) {
//         let wordsCount = array[i].split(' ').length; // [i] kad kiekvieną narį, tarpas tarp kabačių nes ties kuria vieta splitinam žodžius
//         if (wordsCount > maxWordsCount) {
//             maxWordsCount = wordsCount;
//             longestString = array[i];
//         }
//     }
//     return longestString
// }
// const longestString = longest(B);
// console.log(longestString);

// Surasti stringą su mažiausiai žodžių;

// function shortest(array) {
//     let shortest = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].split(" ").length < shortest.split(" ").length) {
//             shortest = array[i];
//         }
        
//     }
//   return shortest  
// }
// const shortest = shortest(B);
// console.log(shortest);