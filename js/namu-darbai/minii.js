// 1.	Funkcija pavadinimu “didziausiasSkaiciusSarase”:

function didziausiasSkaiciusSarase(number) {
  if (!Array.isArray(number)) {
     return 'Pateikta netinkamo tipo reikšmė.';
   } else if (number.length === 0) {
     return 'Pateiktas sąrašas negali būti tuščias.';
   } else { 
    let didziausias = number[0];
    for (let i = 0; i < number.length; i++) {  
      if (number[i] > didziausias) {
     didziausias = number[i];
    }
 } 
 return didziausias;
}
}
console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([ 1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
console.log(didziausiasSkaiciusSarase('pomidoras'));
console.log(didziausiasSkaiciusSarase([]));

console.log('------------------------------');
// 5.	Funkcija pavadinimu “isrinktiRaides”:

function isrinktiRaides(tekstas, skaicius) {
   if (typeof tekstas !== 'string') {
    return 'Pirmasis kintamasis yra netinkamo tipo.';
   } else if (tekstas.length  === 0 > 100) {
     return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
   } else if (typeof skaicius !== 'number') {
    return 'Antrasis kintamasis yra netinkamo tipo.';
   } else if (skaicius <= 0) {
    return 'Antrasis kintamasis turi būti didesnis už nulį.';
   } else if (skaicius > tekstas.length) {
    return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
   } else {
    let isrinktiRaides = '';
    for (let l = 0; l < tekstas.length; l++) { 
      isrinktiRaides += tekstas[l];
    } 
    return isrinktiRaides;
   }
   }

console.log(isrinktiRaides('abcdefg', 2));
// console.log(isrinktiRaides('abcdefghijkl', 3));
// console.log(isrinktiRaides('abc', 0));
// console.log(isrinktiRaides('abc', 4));
// console.log(isrinktiRaides(1561, 2));

console.log('------------------------------');
// +	Funkcija pavadinimu “dalyba”:

function dalyba(number1, number2) {
   if (typeof number1 !== 'number') {
return "Number1 nera skaicius";
 } else if (typeof number2 !== 'number'){
  return "Number2 nera skaicius";
 } 
 const rezultatas = number1/number2;
 return rezultatas;
 }
console.log(dalyba(3.14, 3));
console.log(dalyba(3.14, 3.14));
console.log(dalyba(-8, 2));
console.log(dalyba(8, 2));
console.log(dalyba(0, 0));
console.log(dalyba(0, 5));
console.log(dalyba(5, 0));
console.log(dalyba(10,2));
console.log(dalyba('labas', 0));
console.log(dalyba (-1, -2,));
console.log('-------------->');
console.log(dalyba(5, 'Labas'));
console.log(dalyba(5, 'Labas'.length));  
console.log(dalyba(5, []));
console.log(dalyba(5, true));  
console.log(dalyba(5, false)); 




