// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample input:
// arr1 = [1, 0, 2, 3, 4];
// arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]
"use strict";
function sum(arr1, arr2) {
  let output = [];
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    let total = 0;
    if (i < arr1.length) total += arr1[i];
    if (i < arr2.length) total += arr2[i];
    output.push(total);
  }

  return output;
}
let arr1 = [1, 0, 2, 3, 4];
let arr2 = [3, 5, 6, 7, 8, 13];
console.log(sum(arr1, arr2));
