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
    