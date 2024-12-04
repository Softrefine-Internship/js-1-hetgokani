// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]
"use strict";
function unionarr(arr1, arr2) {
  let combine = arr1.slice();
  for (let i = 0; i < arr2.length; i++) {
    if (!combine.includes(arr2[i])) {
      combine.push(arr2[i]);
    }
  }
  return combine;
}
let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];
let output = unionarr(arr1, arr2);
let sortedResult = output.sort((a, b) => a - b);
console.log(sortedResult);
