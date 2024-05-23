/*
spread operatorius
Destrukturizavimas
*/

const a = [1, 2, 3];
const b = a;

console.log(a);
console.log(b);

a[0] = 44;
console.log(a);
console.log(b);

b[2] = 777;
console.log(a);
console.log(b);

let c = 7;
let d = c;
console.log(c, d);

c = 9999;
console.log(c, d);

//...Spread

const e = [1, 2, 3];
const f = [...e];

console.log(e, f);

e[0] = 111;
console.log(e, f);

const g = [0, ...e, 4, 5];
console.log(g);

const h = [...e, ...e, ...e, 777];
console.log(h);

console.clear();
// ...spread object
const obj1 = {name: 'Jonas', age: 99};
const obj2 = obj1;

obj1.name = 'Maryte';
console.log(obj2);
console.log(obj1);

const obj3 = {brand: 'Audi', model: '80'};
const obj4 = { ...obj3 };
console.log(obj3);
console.log(obj4);

obj3.brand = 'Volvo'
console.log(obj3);
console.log(obj4);

obj4.model = 'S40'
console.log(obj3);
console.log(obj4);

const person = {
    name: 'Petras',
    age: 77,
}
const address = {
    city: 'Miestas',
    street: 'Gatve 123',
    number: 45,
}

const fullPersonDetails = {
    id: 11111111,
    phone: 8666666666,
    ...person, 
    ...address,
   
 }
 console.log(fullPersonDetails);