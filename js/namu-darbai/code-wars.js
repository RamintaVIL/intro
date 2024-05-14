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

// DESCRIPTION:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    if (name === 'r') {
        return name + ' plays banjo'; 
    } else if (name !== 'r') {
        return name + ' does not play banjo';
    }
    return name;
}

console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Paul"));
console.log(areYouPlayingBanjo("Ringo"));
console.log(areYouPlayingBanjo("bravo"));
console.log(areYouPlayingBanjo("rolf"));

