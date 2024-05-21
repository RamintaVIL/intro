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
{ name: 'Jonas', age: 99, isMarried: true},
{ name: 'Maryte', age: 88, isMarried: false},
{ name: 'Petras', age: 77, isMarried: false},
{ name: 'Ona', age: 66, isMarried: true},
{ name: 'Chuck', age: Infinity, isMarried: NaN},
];

console.log(students);
console.log(students.length);
console.log(students[students.length - 1]);
console.log(students.at(-1));
console.log(students.at(-1).name);
console.log(students[1].age);
console.log(students[2].isMarried);

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

// kad butu lengviau skaityti
function intro(studentData) { 
    const status = studentData.isMarried ? 'esu' : 'nesu';
    return `Sveiki, as ${studentData.name}, man ${studentData.age} ir ${status} vedes`;   
    }  
    
    for(let i = 0; i < students.length; i++) {
        console.log(intro(students[i]));
    }







