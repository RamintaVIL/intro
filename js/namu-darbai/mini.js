// 1.	Funkcija pavadinimu “tusciaFunkcija”:
// a.	nepriima jokių kintamųjų, NIEKO
// b.	neatlieka jokios vidinės logikos, NIEKO, tik jis turi grazinti
// c.	gražina boolean tipo reikšmę “false”, REIKIA


function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

// 2.	Funkcija pavadinimu “daugyba”:
// a.	priima du skaičiaus tipo kintamuosius
// b.	atskirame kintamajame įsimena sandaugos reikšmę (atskiras kantamasis yra const answer)
// c.	gražina saudaugos rezultatą
// d.	TESTAI:
// i.	console.log( daugyba( skaicius1, skaicius2 ) );
// ii.	console.log( daugyba( skaicius3, skaicius2 ) );
// iii.	console.log( daugyba( skaicius1, skaicius3 ) );
// iv.	rezultatas: teisingos reikšmės;

// trivielumas        a              b     nes niekas neraso pirmas skaicius, antras skaicius 
function multiplay(a, b){
  const answer = a * b;
  return answer;
}   

console.log(multiplay(8, 5));
console.log(multiplay(3, 2));
console.log(multiplay(-8, -2));
console.log(multiplay(3.1412, 2.1999));

console.log(multiplay(2, Infinity));
console.log(multiplay(Infinity, Infinity));
console.log(multiplay(Infinity, -Infinity));

console.log(multiplay(2, NaN));
console.log(multiplay(NaN, NaN));
console.log(multiplay(NaN, -NaN));

console.log('-----------');
// netinkamo tipo reiksmes
// isskyrus .lenght tai cia yra kaip nenaudojama, nes meta nesamones
// matematika atlieka tik su matematiniais skaiciais, o ne sk + zodis
console.log(multiplay(5, 'Labas'));
console.log(multiplay(5, 'Labas'.length));  // sitas galimas, nes ilgis 5 * 5 (tiek zodyje labas yra 5 raides)
console.log(multiplay(5, []));
console.log(multiplay(5, [].length));
console.log(multiplay(5, [7]));
console.log(multiplay(5, [7].length));
console.log(multiplay(5, [7, 2]));
console.log(multiplay(5, [7, 2].length));  // pirma skaiciuoja [7, 2].length ir gauna 2, nes masyve yra tik 2 skaitmenys
console.log(multiplay(5, undefined));
console.log(multiplay(5, true));  // true interpretuojamas kaip 1
console.log(multiplay(5, false)); // false kaip 0
console.log(multiplay(5, null));
console.log(multiplay(5, multiplay)); // cia pati funkcijos logika isspausdinama
console.log(multiplay(5, multiplay(2, 4))); // kadangi yra antri skliaustai, tai jie apsiskaiciuoja, pasidaugina is 5 ir ji veikia
console.log(multiplay(5)); // kaip programa masto, firstnumber undefined * secondnumber undefined = NaN
console.log(multiplay()); 

function multiplay(a, b) {
  if (typeof a !== 'number') {
    return 'Pirmas skaicius turi buti skaiciaus tipo.';
}

if (typeof b !== 'number') {
  return 'Antras skaicius turi buti skaiciaus tipo.'
}

const answer = a * b;
return answer;
}
// kada yra problema, ar kai parametras !== nera number
// type of visada naudosime su funkcijomis, nes yra imanoma suklysti
  /*
  - jeigu, pirmas parametras nera skaicius
    - graziname (return) klaidos pranesima
  - jeigu, pirmas parametras nera skaicius
    - graziname klaidos pranesima
  - Atskirame kintamajame issisaugome sandaugos reiksmes
  - Graziname sandaugos reiksmes
  */ 

  console.clear();
// 3.	Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// +.	priima vieną kintamąjį
// b.	jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// c.	priešingu atveju, funkcija tęsia darbą
// d.	į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// e.	gražina skaitmenų kiekį
/* f.	TESTAI:
- i.	console.log( skaitmenuKiekisSkaiciuje( 5 ) );
- 1.	rezultatas: 1
- ii.	console.log( skaitmenuKiekisSkaiciuje( 781 ) );
- 1.	rezultatas: 3
- iii.	console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
- 1.	rezultatas: 11

- iv.	console.log( skaitmenuKiekisSkaiciuje( true ) );
- 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
- v.	console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
- 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
- vi.	console.log( skaitmenuKiekisSkaiciuje( NaN ) );
- 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
*/

// function skaitmenuKiekisSkaiciuje(n) {
//   const nAsText = '' + n; 
//   // desimtainis ir neigiamas
//   if (n % 1 === 0 && n < 0){
//     return nAsText.length - 2; 
//   }
//   // desimtainis
//   if (n % 1 === 0) {
//     return nAsText.length - 1;
//   }
//   // neigiamas
//   if (n < 0) {
//     return nAsText.length - 1;
//   }
//   return nAsText.length;
//    }

   function skaitmenuKiekisSkaiciuje(n) {
    const nAsText = '' + n;
    const size = nAsText.length;
// desimtainis
    if (n % 1 !== 0) {
      size--;
    }

    // neigiamas
    if (n< 0) {
      size--;
    }
    return size;
   }
console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(-781));
console.log(skaitmenuKiekisSkaiciuje(7.81111));
console.log(skaitmenuKiekisSkaiciuje(-7.811));
console.log(skaitmenuKiekisSkaiciuje(NaN));

function skaitmenuKiekisSkaiciuje(n) {
if (typeof n !== 'number') {
  return 'Pateikta netinkama tipo reikšmė.';
} else {
  const nAsText = '' + n; 
  return nAsText.length;  
}
}
console.log(skaitmenuKiekisSkaiciuje(-781));  
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje(NaN));
console.log(skaitmenuKiekisSkaiciuje(Infinity));

function arLyginis(number) {
  if(number % 2 === 0) {
    console.log('Yra lyginis');
  } else {
    console.log ('yra ne lyginis');
  }
}

return arLyginis(6);

let arr = [1, 2, 3];
function didziausiasSkaiciusSarase(arr) {
  let didziausias = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > didziausias) {
      didziausias += arr[i];
    }
}
return didziausias;
}

console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([ 1 ]));
console.log(didziausiasSkaiciusSarase([ -5, 78, 14, 0, 18 ]));
console.log(didziausiasSkaiciusSarase([ 69, 69, 69, 69, 66 ]));
console.log(didziausiasSkaiciusSarase([ -1, -2, -3, -4, -5, -6, -7, -8 ]));

// i.	console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
// 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
// ii.	console.log( didziausiasSkaiciusSarase( [] ) );
// 1.	rezultatas: “Pateiktas sąrašas negali būti tuščias.”





