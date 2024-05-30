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


