console.log(true && true && true && true); 
console.log(true && true && true && false); // true + false = false
console.log(true && true && false && false); // true + false = false
console.log(true && false && false && false); // false + false = false
console.clear();
console.log(false && false && false && false); 
console.log(false && false && false && true);  // false + false = false
console.log(false && false && true && false); // false + false = false
console.log(false && true && false && false); // false + false = false
console.log(true && false && false && false); // false + false = false
console.clear();
console.log(true || true || true || true);
console.log(false || false || false || false); 
console.log(true || true || true || false); // true or false = true
console.log(true || true || false || false); // true or false = true
console.log(true || false || false || false); // true or false = true
console.clear();
console.log(false || false || false || false); 
console.log(false || false || false || true);  
console.log(false || false || true || false); 
console.log(false || true || false || false); 

console.log(true && true && true || true); 
console.log(true && true && true || false); 
console.log(true && true && false || false); 
console.log(true && false && false || false); 

console.log(true || true && true && true); 
console.log(true || true && true && false); 
console.log(true || true && false && false); 
console.log(true || false && false && false);
console.clear();
console.log(true && true || true || true); 
console.log(true && true || true || false); 
console.log(true && true || false || false); 
console.log(true && false || false || false);