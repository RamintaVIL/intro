/*
https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c
*/

function xor(a, b) {
    return (a && !b) || (!a && b)   // grazina true jei bent vienas ia a ar b yra true, kitu atveju false
  }
  
  console.log(xor(false, false), false, "false xor false");
  console.log(xor(true, false), true, "true xor false");
  console.log(xor(false, true), true, "false xor true");
  console.log(xor(true, true), false, "true xor true");
  console.log(xor(true, true), true, "true xor true: 'xor' is NOT identical to 'or'");