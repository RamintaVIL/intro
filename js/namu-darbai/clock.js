/*
Noriu pamatyti visas galimas laiko/laikrodzio kombinacijas valandos tikslumu
Intervalas ya nuo 1 iki 12 (kai matome nuo iki, jau zenklas kad bus ciklas )
payeikimo formatas: 1:00; 2:00
1:00
1:15
1:30
1:45
2:00 
...
4:45
*/
 // siuo atveju ciklas naudojamas tam, kad sugeneruotu visas imonomas kombinacijas nuo 1 iki 12
for (let g = 1; g <= 12; g++) {
    console.log(g + ':00');  // g sugeneruojame per cikla + statine dalis ':00'
}

// prisideda 15 min. Vieno ciklo dalyje spausdinu, visus galimus rezultatus
for (let val = 1; val <= 4; val++) {
   console.log('-----------');
   console.log(val + ':00');
   console.log(val + ':15');
   console.log(val + ':30');
   console.log(val + ':45');
}

// 1. variantas kaip butu galima padaryti
for (let vall =1; vall <= 4; vall++) { 
    console.log('-----------');
    let min = 0;
    console.log(vall + ':' + min); 
    min += 15;
    console.log(vall + ':' + min);
    min += 15;     
    console.log(vall + ':' + min);
    min += 15;  
    console.log(vall + ':' + min);
    min += 15;
}
// 1. varianto sutrumpinta versija, nes yra pasikartojimas, cikle sukureme cikla
for (let val = 1; val <= 4; val++) {
    let min = 0;

    for (let i = 0; i < 4; i++){
       if (min < 10) {
        console.log(val + ':' + min);
        min += 15;   
    }
}
}

// cia kad rodytu 1:00, o ne 1:0; Jeigu minutes yra vienazenklis skaicius (if ( min < 10)) pries jas padekite 0.
for (let val =1; val <= 4; val++) {
    let min = 0;

    for (let i = 0; i < 4; i++){
       if (min < 10) {
        console.log(val + ':0' + min);
       } else {
        console.log(val + ':' + min);
        min += 15;   
    }
}
}

for (let val =15; val <= 17; val++) {
    let min = 0;

    for (let i = 0; i < 6; i++){
       if (min < 10) {
        console.log(val + ':0' + min);
       } else {
        console.log(val + ':' + min);
        min += 10;   
    }
}
}
// prisideda ir sekundes
for (let val =15; val <= 17; val++) {
    let min = 0;

    for (let i = 0; i < 4; i++){
        let sek = 0;
        for (let j = 0; j < 3; j++) {
            console.log(val + ':' + min + ':' + sek);
            sek +=20;
        }
        
        min += 15;   
    }
}

// cia pats trumpiausias kodas 
for (let val =0; val < 24; val++) {

    for (let min = 0; min < 60; min++){
    
        for (let sek = 0; sek < 3; sek++) {
            console.log(val + ':' + min + ':' + sek);
           
        }
    }
}


/*
Matrix
- normali matrica yra tada, kai eiluteje yra vienodas skaitmenu kiekis
*/
const matrix = [10, 2, 8, 4, 6, 777 ]; 
console.log(matrix);

for (let i = 0; i < matrix.length; i++) {
    console.log(i, '-', matrix[i]);
}
// n-matis masyvas
// nth matrix
const students = [
   [10, 9, 8, 7],
   [9, 9, 9, 9, 9],
   [8, 8, 8, 8, 8, 8],
   [10, 10, 9, 8, 7, 6, 10],
];
// jonas (0);
const jonoPazymiai = students[0];
console.log(jonoPazymiai[0]);
console.log(jonoPazymiai[1]);
console.log(jonoPazymiai[2]);
console.log(jonoPazymiai[3]);
console.log(students[0]);

// pritaikome cikla
const jonasPazymiai = students[0];
console.log(jonoPazymiai);
for (let i = 0; i< jonasPazymiai.length; i++) {
    console.log ('jonas', jonasPazymiai[i]);
}
// vietoje jonasPazymiai, pakeiteme i students[0]
console.log(students[0]);
for (let i = 0; i < students[0].length; i++) {
    console.log('jonas', students[0][i]);
}

// maryte (1)
const marytePazymiai = students[1];
console.log(marytePazymiai);
console.log(marytePazymiai[0]);
console.log(marytePazymiai[1]);
console.log(marytePazymiai[2]);
console.log(marytePazymiai[3]);

const marytesPazymiai = students[1];
console.log(marytesPazymiai);
for (let i = 0; i < marytesPazymiai.length; i++) {
    console.log('maryte', marytesPazymiai[i]);
}

const gorila = [
 [1, 2, 3],                      // 0
 [4, [5, 6], 7],                 // 1
 [
    [8, 9, 10],                 // 2 tik jis eina sujungtas per kableli, ko pasekoje yra 2[0] ir 2[1].
    [11, 12, 13, [14, 15]],
 ],
];

console.log(gorila); // isspausdina visus masyvus esancius uzdavinyje
console.log(gorila[0]);
console.log(gorila[0][0]); // pirmos eilutes pirmasis skaicius
console.log(gorila[0][1]);

console.log(gorila[1][0]);
console.log(gorila[1][1]);
console.log(gorila[1][1][0]);
console.log(gorila[1][1][0]);
console.log(gorila[1][1][1]);

console.log(gorila[2][0]);
console.log(gorila[2][0][0]);
console.log(gorila[2][0][1]);
console.log(gorila[2][0][2]);

console.log(gorila[2][1]);
console.log(gorila[2][1][0]);
console.log(gorila[2][1][1]);
console.log(gorila[2][1][2]);
console.log(gorila[2][1][3]);
console.log(gorila[2][1][3][0]);
console.log(gorila[2][1][3][1]);