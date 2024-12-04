// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.
"use strict";
function dashingEven(num) {
  let str = num.toString();
  let output = str[0];
  for (let i = 1; i < str.length; i++) {
    if (parseInt(str[i]) % 2 === 0 && parseInt(str[i - 1]) % 2 === 0) {
      output += "-";
    }
    output += str[i];
  }
  return output;
}
let input = "025468";
console.log(dashingEven(input));
