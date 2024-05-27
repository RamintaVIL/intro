const diena = 1;

if (diena === 1) {
    console.log('Pirmadienis');
} else if (diena === 2) {
  console.log('Antradienis');
} else if (diena === 3) {
  console.log('Treciadienis');
} else if (diena === 4) {
  console.log('Ketvirtadienis');
} else if (diena === 5) {
  console.log('Penkatdienis');
} else if (diena === 6) {
  console.log('Šeštadienis');
} else if (diena === 7) {
  console.log('Sekamdienis');
} else {
  console.log('ERROR')
}

// Switch:
const day = 6;
//      logika arba reikšmė
switch (day) {
  case 1:
    console.log("Pirm");
    break;

  case 2:
    console.log("Antr");
    break;
  
  case 3:
    console.log("Trec");
    break; 

  case 4:
      console.log("Ket");
      break;

  case 5:
        console.log("Penk");
        break;

  case 6:
        console.log("Ses");
        break;

  case 7:
          console.log("Sek");
          break;

  default:
    console.log('ERROR: swith');
    break;
}
// kai nera zodzio break - rodo pirma tenkinancia salyga ir visas likusias i pabaiga.

// autobusas -> marsrutas -> a->b; b->a.
const stop = 'Vasaros';
const stopList = [];

switch (stopList) {
  case 'N. Vilnia':
    stopList.push('N. Vilnia');

  case 'Tremtiniu':
    stopList.push('tremtiniu');

  case 'Rudens':
    stopList.push('Rudens');

  case 'K. Mindaugo':
    stopList.push('K. Mindaugo');

  case 'Z. Tiltas':
    stopList.push('Z. Tiltas');
    break;

  case 'Lvovo':
    stopList.push('Lvovo');

  case 'Vasaros':
    stopList.push('Vasaros');

  case 'Rudens2':
    stopList.push('Rudens');

  case 'Tremtiniu2':
    stopList.push('tremtiniu');

  case 'N. Vilnia2':
    stopList.push('N. Vilnia');   
}

console.log(stopList.join(' -> '));