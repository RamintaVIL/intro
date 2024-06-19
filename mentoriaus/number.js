const A = [83, 55, 53, -73, 0 , 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 62, -9, -64, -55, 0, 19, 29, -70, 0, 51, -92, 46, 43, 58, -61, 3, -12, -58, -82, 5, 5, 97, 90, -51, 57, 72, -71, -6, 86, 34, 100, -94, 44, 80, 54, 60, 87, -94, -25, -59, -90, -3, 35, 7, -16, 26, -38, 82, 69, -61, -48, -3, 56, -32, -94, -87, -24, 86, -93, -21, 83, -72, -2, -45, 15, 39, 0, 29, -77, -97, 27, 77, 41, 0, 40, -54, 99, 70, -41, 91];

// Surasti didžiausią skaičių;
function maxValue(array) {
    let biggestNumber = array[0];
    // nes pradedame nuo pirmo skaičiaus
    for (let i = 0; i < array.length; i++) {
        if (array[i] > biggestNumber) {
            biggestNumber = array[i];
            // eina per kiekvieną skaičių ir tikrina, jis didesnis. Jei būtų += tai pridėtų kitą artimiausią skaičių didelį. = tiesiog lygina vieną skaičių su kitu.
        }
    }
    return console.log(biggestNumber);
}
maxValue(A);

// Surasti mažiausią skaičių;
function minValue(array) {
    let smallestNumber = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallestNumber) {
            smallestNumber = array[i];
        }
    }
    return console.log(smallestNumber);
}
minValue(A);

// Surasti didžiausią neigiamą skaičių;
function largestNegativeNumber(arr) {
    let largestNegative = - Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 && arr[i] > largestNegative) {
            largestNegative = arr[i];
        }
    }
    return console.log(largestNegative);
}
largestNegativeNumber(A);

//Surasti didžiausią skaičių, kuris yra mažesnis už 50;
function biggestNumber(arr) {
    let biggest = -Infinity;
    //nežinome tikslių duomenų, -Infinity duoda galimybę, jei array būtų ir -5000000. Jei vietoje -Infinity įrašytume 0, tai ciklas suktųsi nuo 0 iki 50.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 50 && arr[i] > biggest) {
            biggest = arr[i];
        }   
    }
   return console.log (biggest) 
}
biggestNumber(A);

//Suskaičiuoti teigiamų skaičių sumą;
function arrsum(arr) {
    let sum = 0;
    // pradedame nuo 0 ir reiks priidėti
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
            //reikia pridėti kiekvieną teigiamą skaičių, pvz. 85 + 67 + t.t.
            //sum++ būtų ilgis teigiamų skaičių
        }
    }
    return console.log(sum)
}
arrsum(A);

//Suskaičiuoti neigiamų skaičių kvadratų sumą (skaičių pakeltų kvadratų sumą);
function kvadratas(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] < 0) {
        sum += arr[i] ** 2;
        // jei būtume parašę tik =, tai būtų paskaičiavę tik vieną kvadratą.
       }    
    }
    return console.log(sum)
}
kvadratas(A);

//Suskaičiuoti kiek skaičių patenka į intervalą (imtinai) 25-75;
function interval(arr) {
    let range = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 25 && arr[i] <= 75) {
            range++;
            //prie range pridės po 1. 
        }
    }
   return console.log(range);
}
interval(A);

//Suskaičiuoti kiek skaičių yra 0-iai;
function nuliniai(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]=== 0 ) {
            // == - pasiima ir iš stringų numerius, netikrina duomenų tipo
            count++;  
        }    
    }
    return console.log(count); 
}
nuliniai(A);

//Suskaičiuoti kiek skaičių be liekanos dalinasi iš 3;
function liekana(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            count++
        }
    }
    return console.log(count);
}
liekana(A);

//Suskaičiuoti neigiamų skaičių vidurkį;
function negativeNumberAverage(arr) {
    let sum = 0;
    let count = 0;
  
    for (let i = 0; i < arr.length; i++) {  
        if (arr[i] < 0) {
            count++
            sum += arr[i]
        }
    }
    const average = (sum/count).toFixed(2);
    return average;
}

console.log(negativeNumberAverage(A));

//Suskaičiuoti neigiamų skaičių vidurkį;
// naudojant metodus
function calculater(arr) {
    const negativeNumbers = arr.filter((item) => item < 0);
    // išfiltruoja skaičius kurie yra mažesni už 0
    if (negativeNumbers.length === 0) {
        return 0;
    }
    const sum = negativeNumbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    const average = sum / negativeNumbers.length;
    return console.log(average);
}
calculater(A);
