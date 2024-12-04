// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];

"use strict";
function flatarr(arrinput) {
  return arrinput.flat(Infinity);
}
const arrinput = [1, 2, [3, 4], [5, [6, 7]]];
const arroutput = flatarr(arrinput);
console.log(arroutput);
