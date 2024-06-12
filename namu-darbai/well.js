/*
https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript
*/

function well(x){
    let goodCount = 0;
    for (let i = 0; i < x.length; i++) {
       if (x[i] === 'good') {
        goodCount++;
       }
    }   
    if (goodCount === 0) {
        return 'Fail!';
    } else if (goodCount <= 2) {
        return 'Publish!';
    } else {
        return 'I smell a series!'
    }
}     
console.log(well(['bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));