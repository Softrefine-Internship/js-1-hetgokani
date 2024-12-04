// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]
"use strict";

function sorting(arr1, arr2) {
  const sortedarr = arr1.concat(arr2);
  return sortedarr.sort((a, b) => a - b);
}
const arr1 = [3, 5, 1];
const arr2 = [4, 2];
const arroutput = sorting(arr1, arr2);
console.log(arroutput);
