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
  console.log('---------------------------------------------------');
//   You get an array of numbers, return the sum of all of the positives ones.
//   Example [1,-4,7,12] => 1 + 7 + 12 = 20
//   Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let sum = 0; 
    for (let k = 0; k < arr.length; k++) {
        if (arr[k] > 0) {
            sum += arr[k];
         }
    }
    return sum;
}
console.log(positiveSum([1,2,3,4,5]));
console.log(positiveSum([1,-2,3,4,5]));
console.log(positiveSum([]));
console.log(positiveSum([-1,-2,-3,-4,-5]));
console.log(positiveSum([-1,2,3,4,-5]));

console.clear();
function isPythagoreanTriple(integers) {
    return Math.hypot(integers); 
  }

console.log(isPythagoreanTriple([3, 4, 5]));
console.log(isPythagoreanTriple([3, 5, 9]));

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



// function findMultiples(integer, limit) {
// let multiples = [];
//     for (let a = integer; a <= limit; a++ ) {
//         if (a % integer === 0) {
//     }
//     }
//    return multiples;
//   }
//   console.log(findMultiples(5, 25))
// //   console.log(findMultiples(1, 2), [1, 2])
// //   console.log(findMultiples(5, 7), [5])
// //   console.log(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
// //   console.log(findMultiples(11, 54), [11, 22, 33, 44])

function arrayMadness(a, b) {
    // Ready, get set, GO!!!
  }

  console.log(arrayMadness([4,5,6],[1,2,3]), true);
  console.log(arrayMadness([5,6,7],[4,5,6]), false);
  console.log(arrayMadness([4,5,6],[3,4,5]), false);
  console.log(arrayMadness([3,4,5],[2,3,4]), false);
  console.log(arrayMadness([2,3,4],[1,2,3]), false);
  console.log(arrayMadness([1,2,3],[0,1,2]), true);
  console.log(arrayMadness([5,3,2,4,1],[15]), false);
  console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]), false);
  console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), false);
  console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), true);
  console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), false);

  function cookie(x){
    if (typeof x === 'string') {
      return "Who ate the last cookie? It was Zach!"
    } else if (typeof x === 'number ') {
      return "Who ate the last cookie? It was Monica!"
    } else {
      return "Who ate the last cookie? It was the dog!"
    }
  }

console.log(cookie("Ryan"), "Who ate the last cookie? It was Zach!")
console.log(cookie(26), "Who ate the last cookie? It was Monica!")
console.log(cookie(2.3), "Who ate the last cookie? It was Monica!")
console.log(cookie(true), "Who ate the last cookie? It was the dog!")