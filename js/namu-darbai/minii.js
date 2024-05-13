// 1.	Funkcija pavadinimu “didziausiasSkaiciusSarase”:
// a.	priima vieną kintamąjį
// b.	jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// c.	jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
// d.	priešingu atveju, funkcija tęsia darbą
// e.	pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
// f.	gražina didžiausią surastą skaičių

function didziausiasSkaiciusSarase(number) {
  if (!Array.isArray(number)) {
     return 'Pateikta netinkamo tipo reikšmė.';
   } else if (number.length === 0) {
     return 'Pateiktas sąrašas negali būti tuščias.';
   } else { 
    let didziausias = number[0];
    for (let i = 0; i < number.length; i++) {  
 if (number[i] > didziausias) {
     didziausias = number[i];
    }
 } 
 return didziausias;
}
}
console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([ 1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
console.log(didziausiasSkaiciusSarase('pomidoras'));
console.log(didziausiasSkaiciusSarase([]));


// 5.	Funkcija pavadinimu “isrinktiRaides”:

// +	patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
// +	jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
// +	priešingu atveju tęsiame darbą
// +	patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
// +	jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// +	priešingu atveju tęsiame darbą
// g.	išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
// h.	išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
// i.	gražina rezultatą



function isrinktiRaides(tekstas, skaicius) {
   if (typeof tekstas !== 'string') {
    return 'Pirmasis kintamasis yra netinkamo tipo.';
   } else if (tekstas.length  === [0] < 100) {
     return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
   } else if (typeof skaicius !== 'number') {
    return 'Antrasis kintamasis yra netinkamo tipo.';
   } else if (skaicius <= 0) {
    return 'Antrasis kintamasis turi būti didesnis už nulį.';
   } else if (skaicius > tekstas.length) {
    return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
   } else {
   }

   }



// console.log(isrinktiRaides('abcdefg', 2));
//  1.	rezultatas: “bdf”
// console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
// 1.	rezultatas: “cfil”
// iii.	console.log( isrinktiRaides( “abc”, 0 ) );
// 1.	rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
// iv.	console.log( isrinktiRaides( “abc”, 4 ) );
// 1.	rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// v.	console.log( isrinktiRaides( 1561, 2 ) );
// 1.	rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”

// 1.	Funkcija pavadinimu “dalyba”:
// a.	turi priimti du kintamuosius
// b.	reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
// i.	esant blogoms sąlygoms, išvesti atitinkamą pranešimą
// ii.	esant geroms - tęsti darbą
// c.	į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
// i.	daliname pirmąjį skaičių iš antrojo
// d.	grąžinti suskaičiuotą reikšmę
// e.	TESTAI:
// i.	sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą


