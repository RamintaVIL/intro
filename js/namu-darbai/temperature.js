function weatherInfo (temp) {
    let c = convertToCelsius(temp);
    if (c <= 0) {
      return c + " is freezing temperature";
     } else {
      return c + " is above freezing temperature";
       }
  }
  
  function convertToCelsius (temperature) {
    let celsius = (temperature - 32) * (5/9);
    return celsius;
  }

console.log(weatherInfo(50));
console.log(weatherInfo(23));

/*
https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript
*/

function saleHotdogs(n){
  if (n < 5) {
    return n * 100;
  } else if (n >= 5 && n < 10) {
    return n * 95;
  } else {
    return n * 90;
  }
 }

console.log(saleHotdogs(1));
console.log(saleHotdogs(4));
console.log(saleHotdogs(5));
console.log(saleHotdogs(9));
console.log(saleHotdogs(10));
console.log(saleHotdogs(100));

/*
https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript
*/
function pickIt(arr){
  let odd=[];
  even=[];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
    even.push(arr[i]);
  } else {
    odd.push(arr[i]);
  }
}
return [odd,even];
}

console.log(pickIt([1,2]));
console.log(pickIt([1,2,3]));
console.log(pickIt([3,2,1]));
console.log(pickIt([10,20,30]));
console.log(pickIt([11,21,31]));
console.log(pickIt([8,1,5,4,6,1,1]));

/*
https://www.codewars.com/kata/5951d30ce99cf2467e000013/train/javascript
*/

function isPythagoreanTriple(integers) {
  integers.sort((a, b) => a - b);
  const [a, b, c] = integers
  return a * a + b * b === c * c;
   }

console.log(isPythagoreanTriple([3, 4, 5]), true);
console.log(isPythagoreanTriple([3, 5, 9]), false);

/*
https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript
*/

function giveMeFive(obj){
let result = [];                   // tuscias masyvas 
for (const key in obj) {          // objekto savybes perziuri 
  if (key.length === 5) {         // ar rakto ilgis yra 5
    result.push(key);
  }
  if(obj[key].length === 5) {    // ar reiksmes ilgis yra 5
    result.push(obj[key])
  }
}
return result;                   // pereina per objekta ir isrenka raktu ir reiksmiu ilgius, kuriu ilgis yra 5 ir grazina i masyva
}

console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}),["earth","world"]);
console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}),["Ihave","money","model"]);
console.log(giveMeFive({Pears:"than",apple:"sweet"}),["Pears","apple","sweet"]);

/*
https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
*/

const areaOrPerimeter = function(l , w) {
  if (w === l) {
    return w * l;
  } else {
    return 2 * (l + w);
  }
} 


console.log(areaOrPerimeter(3, 3),  9);
console.log(areaOrPerimeter(6, 10), 32);

// areaOrPerimeter = (_,__) =>_==__?_**2:2*(_+__)

/*
https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
*/

function century(year) {
    return Math.ceil(year / 100);
}    

console.log(century(1705), 18, 'Testing for year 1705');
console.log(century(1900), 19, 'Testing for year 1900');
console.log(century(1601), 17, 'Testing for year 1601');
console.log(century(2000), 20, 'Testing for year 2000');
console.log(century(89), 1, 'Testing for year 89');
