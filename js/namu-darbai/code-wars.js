function whatday (num) {
    if (num === 1) {
        return 'Sunday';
    } else if (num === 2) {
        return 'Monday';
    } else if (num === 3) {
        return 'Tuesday';
} else if (num === 4) {
    return 'Wednesday';
} else if (num === 5) {
    return 'Thursday';
} else if (num === 6) {
    return 'Friday';
}  else if (num === 7) {
    return 'Saturday';
} else {
    return "Wrong, please enter a number between 1 and 7";
}
}
console.log(whatday(1));
console.log(whatday(2));
console.log(whatday(3));
console.log(whatday(8));
console.log(whatday(20));

