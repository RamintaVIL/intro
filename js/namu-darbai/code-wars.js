// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

function check (a, x) {
    return a.includes(x);   
}
console.log(check([66, 101], 66));
console.log(check([101, 45, 75, 105, 99, 107], 107), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);

function whatday (num) {
    if (num === 1) {
        return 'Sunday';
    } else if (num === 2) {
        return 'Monday';
    } else if (num === 3) {
        return 'Tuesday';
} else if (num === 4) {
    return 'Wednesday';
} else if (num === 5) {
    return 'Thursday';
} else if (num === 6) {
    return 'Friday';
}  else if (num === 7) {
    return 'Saturday';
} else {
    return "Wrong, please enter a number between 1 and 7";
}
}
console.log(whatday(1));
console.log(whatday(2));
console.log(whatday(3));
console.log(whatday(8));
console.log(whatday(20));

// DESCRIPTION:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.
console.clear();

function areYouPlayingBanjo(name) {
    if (name.startsWith('r')) {
        return name + ' plays banjo'; 
    } else if (name.startsWith('R')) {
        return name + ' plays banjo'; 
    } else if (name !== 'r' || name !== 'R') {
        return name + ' does not play banjo';
    }
    return name;    
    }  
    
console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Paul"));
console.log(areYouPlayingBanjo("Ringo"));
console.log(areYouPlayingBanjo("bravo"));
console.log(areYouPlayingBanjo("rolf"));



// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.


// function arrayPlusArray(arr1, arr2) {
// const arr1Sum = arr1[0] + arr1[1] + arr1[2];
// const arr2Sum = arr2[0] + arr2[1] + arr2[2];
//     return arr1Sum + arr2Sum;
// }

// function arrayPlusArray(arr1, arr2) {
//     let sum = 0;
//  for (let i = 0; i <= arr1.length; i++){
//       sum1 += arr1[i];
//  }
//  for (let c = 0; c < arr2.length; c++){
//       sum2 += arr2[c];

//         return arr1 + arr2;
//     }
// }  

// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
// console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
// console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
// console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));

/*
https://www.codewars.com/kata/57ab2d6072292dbf7c000039/train/javascript
*/

/*
- pasirašius ciklą 'for', pirmiausia ką galime padaryti, išspausdinti console.log(i); taip patikriname, kad teisingai isvestas ciklas. Tuomet terminale atspausdina sarasa raidziu nuo 0 - 5, nes pasirinktas žodis turi 5 raides;
- console.log(string[i]) tada patikrinu savo pasirinkto žodžio raides ar jos sutampa nuo 0-5;
*/
function correctPolishLetters(string) {
    let result = '';                                          // tuscias stringas
    for (let i = 0; i < string.length; i++) {                // kadangi parametru skliaustuose yra 'string', tai ir su length naudojame
        const letter = string[i];                           // raide is mūsų pateikto žodžio;
        if (letter === 'ą') {
            result += 'a';                                // += pridedu prie 'a' kita raide is string'o, jei rasytume ++ t.y. skaiciaus didinimas 1 vnt
        } else if (letter === 'ć') {
            result += 'c';
        } else if (letter === 'ę') {
            result += 'e';
        } else if (letter === 'ł') {
            result += 'l'; 
        } else if (letter === 'ń') {
            result += 'n';     
        } else if (letter === 'ó') {
            result += 'o';  
        } else if (letter === 'ś') {
            result += 's';
        } else if (letter === 'ź') {
            result += 'z'; 
        } else if (letter === 'ż') {
            result += 'z';             
        } else {                                     // jei ciklas nerado ne vienos raidės iš mano pateiktos abecėlės, grąžina pirminius žodžius;
            result += letter;                           
        }
    }
 return result;
}
// 812 simbolių
console.log(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");

function correctPolishLetters(string) {
    const polishAbc = 'ąćęłńóśźż';
    const normalAbc = 'acelnoszz';
    let result = '';

    for (let i = 0; i < string.length; i++) {
        const letter = string[i];                // man reikia atsispausdinti ę, tai kur sėdi 'ę'? ---> polishAbc ---> index[2], isspausdina mano gauta tekstas, imputas cia kaip ir mano gaunasi
                                                // normali raide ---> index[2] ---> normalAbc ---> gausime e
        let index = -1;
        for (let j = 0; j < polishAbc.length; j++) {
            const polishletter = polishAbc[j];
            if (polishletter === letter) {
                result += normalAbc[j];
                index = j;
            }
        }
        if (index === -1) {
            result += letter; 
        }

}
return result;
}

console.log(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");


// Rules:
// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

function peopleWithAgeDrink(old) {
      if (old <= 13) {
        return 'drink toddy';
    } else if (old <= 17) {
        return'drink coke'; 
    } else if (old <= 18) {
        return 'drink beer'; 
    } else if (old <= 20) {
        return 'drink beer'; 
    } else{
        return 'drink whisky';
    }
}

console.log(peopleWithAgeDrink(1));
console.log(peopleWithAgeDrink(13));
console.log(peopleWithAgeDrink(14));
console.log(peopleWithAgeDrink(17));
console.log(peopleWithAgeDrink(18));
console.log(peopleWithAgeDrink(20));
console.log(peopleWithAgeDrink(29));
console.log(peopleWithAgeDrink(30));

// DESCRIPTION:
// Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2
// When bool is truthy, func1 should be called, otherwise call the func2.
// Example:
// _if(true, function(){console.log("True")}, function(){console.log("false")})
// // Logs 'True' to the console.

// function _if(bool, func1, func2) {
//     if (bool === func1) {
//       return "true";
//       } else if (bool !== func2){
//         return "false";
//   }
//    } 

// console.log("'true' function unexpectedly called");
// console.log("'false' function unexpectedly called");
// console.log ('-------------');

console.clear();

 function typeValidation(variable,type) {
  if (typeof variable === type) {
    return 'true';
  } else {
    return 'false';
  }
 }

 console.log(typeValidation(42, "number"));
 console.log(typeValidation("42", "number"));

 function arrayPlusArray(arr1, arr2) {
    let arr1Sum = 0;
    let arr2Sum = 0;
  for (let i = 0; i < arr1.length; i++) {
      arr1Sum += arr1[i];
  }   
  for (let m = 0; m < arr2.length; m++) {
    arr2Sum += arr2[m];
    }
return totalSum = arr1Sum + arr2Sum;
      }

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));

function findMultiples(integer, limit) {
let multiples = [];
    for (let a = integer; a <= limit; a++ ) {
        if (a % integer === 0) {
    }
    }
   return multiples;
  }
  console.log(findMultiples(5, 25))
//   console.log(findMultiples(1, 2), [1, 2])
//   console.log(findMultiples(5, 7), [5])
//   console.log(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
//   console.log(findMultiples(11, 54), [11, 22, 33, 44])