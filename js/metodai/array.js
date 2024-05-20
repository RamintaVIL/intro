/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator
*/

// iš masyvo suranda nurodyto indekso skaičių. Gali būti ir su minusu, ieškos nuo galo.
const array = [1, 5, 8, 9, 11, 130];
console.log(array.at(-3));

const array1 = [1, 5, 8, 9, 11, 130];
console.log(array1.at(2));

// remiantis logika buvo ištrauktas 'lemon'.
const fruit = ['apple', 'orange', 'kiwi', 'lemon'];
function returnSecond (arr) {
    return arr.at(-1);
}
const item1 = returnSecond(fruit);
console.log(item1);

// concat, sujungia 2 masyvus į vieną. Galima pasirinkti, kuris masyvas turi būti pirmas. Taip pat galime sujungti string + number
const arr1 = [12, 13, 14, 11,];
const arr2 = [2, 3, 4, 1, 10];
const arr3 = arr1.concat(arr2);
console.log(arr3);

const words = ['labas', 'rytas'];
const numbers = [2024, 5, 20];
const sentence = words.concat(numbers);
console.log(sentence);

const words2 = ['labas', 'rytas'];
const numbers2 = [2024, 5, 20];
const sentence2 = numbers2.concat(words2);
console.log(sentence2);