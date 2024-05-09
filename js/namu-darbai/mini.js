// 1.	Funkcija pavadinimu “tusciaFunkcija”:
// a.	nepriima jokių kintamųjų
// b.	neatlieka jokios vidinės logikos
// c.	gražina boolean tipo reikšmę “false”
// d.	TESTAS:
// i.	console.log( tusciaFunkcija() );
// ii.	rezultatas: false

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

// 2.	Funkcija pavadinimu “daugyba”:
// a.	priima du skaičiaus tipo kintamuosius
// b.	atskirame kintamajame įsimena sandaugos reikšmę
// c.	gražina saudaugos rezultatą
// d.	TESTAI:
// i.	console.log( daugyba( skaicius1, skaicius2 ) );
// ii.	console.log( daugyba( skaicius3, skaicius2 ) );
// iii.	console.log( daugyba( skaicius1, skaicius3 ) );
// iv.	rezultatas: teisingos reikšmės;

function daugyba(skaicius1, skaicius2, skaicius3){
    return sum = skaicius1 * skaicius2;
    return skaicius2 * skaicius3;
}
console.log(daugyba(8, 5));
console.log(daugyba(3, 2));
console.log(daugyba(8, 2));

// 6.	Funkcija pavadinimu “dalyba”:
// a.	turi priimti du kintamuosius
// b.	reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
// i.	esant blogoms sąlygoms, išvesti atitinkamą pranešimą
// ii.	esant geroms - tęsti darbą
// c.	į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
// i.	daliname pirmąjį skaičių iš antrojo
// d.	grąžinti suskaičiuotą reikšmę
// e.	TESTAI:
// i.	sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą

let kintamasis1 = 5;
let kintamasis2 = 10;

function dalyba(kintamasis1, kintamasis2) {
    if (kintamasis1/kintamasis2) {
      console.log('Atsiprašome, darbo tęsti negalime');
    } else {
      console.log('Toliau');
    }
}
console.log(dalyba);

// 3.	Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// a.	priima vieną kintamąjį
// b.	jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “console.log( skaitmenuKiekisSkaiciuje( 5 ) );”
// c.	priešingu atveju, funkcija tęsia darbą
// d.	į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// e.	gražina skaitmenų kiekį
// f.	TESTAI:
// i.	console.log( skaitmenuKiekisSkaiciuje( 5 ) );
// 1.	rezultatas: 1
// ii.	console.log( skaitmenuKiekisSkaiciuje( 781 ) );
// 1.	rezultatas: 3
// iii.	console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
// 1.	rezultatas: 11
// iv.	console.log( skaitmenuKiekisSkaiciuje( true ) );
// 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
// v.	console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
// 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
// vi.	console.log( skaitmenuKiekisSkaiciuje( NaN ) );
// 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”

function skaitmenuKiekisSkaiciuje(number) {
  let Nonumber = 0;
  return 'Pateikta netinkamo tipo reikšmė.'
}
console.log( skaitmenuKiekisSkaiciuje( 5 ) );

function skaitmenuKiekisSkaiciuje(number) {
    for (let i = 0; i < number.length; i++) {  
        console.log(number);
    }
    return number.length;
    }
    console.log(skaitmenuKiekisSkaiciuje(5));


