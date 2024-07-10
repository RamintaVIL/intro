function sum(a, b) {
    return a + b
}
console.log(sum(7, 5));
console.log(sum(7));


// jei mes nepateiksime skaiciu, tai jis interpretuos kaip undefind. Bet galima nurodyti ir taip:
function sum(a = 10, b = 15) {
    return a + b
}
console.log(sum());
console.log(sum());
console.log(sum('labas'));

function sum(a = null, b = 15) {
    if (typeof a !== 'number') {
        return 'ERROR...'
    }
    if (typeof b !== 'number'){
        return 'ERROR...'
    }    
    return a + b;
};

function header(isHomePage) {
     return isHomePage ? 'HOME PAGE' : 'OTHER PAGE';
};
console.log(header());
console.log(header(true));