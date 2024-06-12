/*
https://www.codewars.com/kata/5732b0351eb838d03300101d/train/javascript
*/

function blackAndWhite(arr) {
    if (!Array.isArray(arr)) {
        return "It's a fake array";
    } else if (arr.includes(5) && arr.includes(13)) {
        return "It's a black array";
    } else {
        return "It's a white array";
    }
}
  
  console.log(blackAndWhite(5,13));
  console.log(blackAndWhite([5,13]));
  console.log(blackAndWhite([5,12]));