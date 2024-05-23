/*
OBJECT - objektas
*/

const empty = {};
console.log(empty);

// const studentName = 'Jonas' ;
// const studentAge = 99;
// const studentIsMarried = true;

// const student1Name = 'Maryte' ;
// const student1Age = 88;
// const student1IsMarried = false;

// const student2Name = 'Petras' ;
// const student2Age = 77;
// const student2IsMarried = false;

// const student3Name = 'Ona' ;
// const student3Age = 66;
// const student3IsMarried = true;

// const stud = ['Jonas', 99, true];
// const stud1 = ['Maryte', 88, false];
// const stud2 = ['Petras', 77, false];
// const stud3 = ['Ona', 66, true];

// console.log(stud2[1]);
// console.log(stud3[0]);

// name, age, isMarried - yra raktazodziai. Key value: name: 'Jonas',
const stud1 = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
console.log(stud1);
console.log(stud1.name);
console.log(stud1.age);
console.log(stud1.isMarried);

const stud2 = {
    age: 88,
    isMarried: false,
    name: 'Maryte',
};
console.log(stud2);
console.log(stud2.name);
console.log(stud2.age);
console.log(stud2.isMarried);

const students = [
{ name: 'Jonas', age: 99, isMarried: true, marks: [9, 8, 7, 10]},
{ name: 'Maryte', age: 88, isMarried: false, marks : []},
{ name: 'Petras', age: 77, isMarried: false, marks : []},
{ name: 'Ona', age: 66, isMarried: true, marks : []},
{ name: 'Chuck', age: Infinity, isMarried: NaN, marks : []},
];

console.log(students);
console.log(students.length);
console.log(students[students.length - 1]);
console.log(students.at(-1));
console.log(students.at(-1).name);
console.log(students[1].age);
console.log(students[2].isMarried);
console.log(students[1].marks);

//            name, age, isMarried
function intro(studentdata) { 
    if(studentdata.isMarried === true) {
        return `Sveiki, as ${studentdata.name}, man ${studentdata.age} ir esu vedes.`;   
    } else {
        return `Sveiki, as ${studentdata.name}, man ${studentdata.age} ir nesu vedes.`;    
    }
}
console.log(intro(students[0]));
console.log(intro(students[1]));
console.log(intro(students[2]));
console.log(intro(students[3]));

// sutrumpinta
function intro(studentdata) { 
    if(studentdata.isMarried === true) {
        return `Sveiki, as ${studentdata.name}, man ${studentdata.age} ir ${studentdata.isMarried ? 'esu' : 'nesu'} vedes`;   
    }    
}

// kad butu lengviau skaityti kodą
function intro(studentData) { 
    const status = studentData.isMarried ? 'esu' : 'nesu';
    return `Sveiki, as ${studentData.name}, man ${studentData.age} ir ${status} vedes ir mano pazymiai ${studentData.marks} yra.`;   
    }  
    
    for(let i = 0; i < students.length; i++) {
        console.log(intro(students[i]));
    }

// 05.22 paskaita
const stud3 = {
    name: 'Petras',
    age: 77,
    isMarried: false,
}
// Supaprastinta objekto sintakse. Panaudojame mažiau simbolių, nes dedame .ir iš karto kreipiamės. 
console.log(stud3.name); // pavadinimas 'name' turi būti konkretūs egzistuojantys objekte
console.log(stud3.age);
console.log(stud3.isMarried);

// Standartine objekto sintakse
console.log(stud3['name']);
console.log(stud3['age']);
console.log(stud3['isMarried']);

const key = 'age';       // čia mano rakto pavadinimas
console.log(stud3.key); // panasu kad kode key nera, o mums reikia irasyti kintamojo pavadinima 
console.log(stud3['age']);
console.log(stud3[key]);

//              data - grąžina orginalius duomenis, data.key - grąžina undefined, nes objekte ieško, duomens key. 
function giveMe(data, key) {
    return data[key];
}

console.log(giveMe({name: 'Jonas', age: 99}, 'name'));
console.log(giveMe({name: 'Jonas', age: 99}, 'age'));
console.log(giveMe({name: 'Jonas', age: 99}, 'isMarried'));
console.log(giveMe({title: 'Svente', page: 1, size: 3}, 'title'));
console.log(giveMe({title: 'Svente', page: 2, size: 3}, 'page'));
console.log(giveMe({title: 'Svente', page: 2, size: 3}, 'size'));
console.log(giveMe({title: 'Svente', page: 2, size: 3}, 'xxx'));  // šito negali grąžinti, nes šitas key neegzistuoja

function basicOp(n1, operation, n2){
 const mathFunctions = {
      '+': (a, b) => a + b,  // kiekvienas raktas reprezentuoja function, bet spausdinant reikia nepamiršti(reikia nurodyti kintamuosius)
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
      '**': (a, b) => a ** b,
      '0': () => 0,
 }
 return mathFunctions[operation](n1, n2);
}

console.log(basicOp(5, '+', 7));
console.log(basicOp(5, '-', 7));
console.log(basicOp(5, '*', 7));
console.log(basicOp(5, '/', 7));
console.log(basicOp(5, '**', 7));
console.log(basicOp(5, '0', 7));

// kitas pvz galėjo būti:
const sum = (a, b) => a + b;
const minus = (a, b) => a - b;
const multi = (a, b) => a * b;
const div= (a, b) => a + b;

function basicOp(n1, operation, n2){
    const mathFunctions = {
         '+': sum,  
         '-': minus,
         '*': multi,
         '/': div,
    }
    return mathFunctions[operation](n1, n2);
   }
   
   console.log(basicOp(5, '+', 7));
   console.log(basicOp(5, '-', 7));
   console.log(basicOp(5, '*', 7));
   console.log(basicOp(5, '/', 7));
   