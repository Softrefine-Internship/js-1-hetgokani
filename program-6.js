// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]
"use strict";
function removeduplicate(arr1, arr2) {
  let mergedarr = arr1.concat(arr2);
  let uniquearr = Array.from(new Set(mergedarr));
  uniquearr.sort((a, b) => a - b);
  return uniquearr;
}
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 5, 7];
console.log(removeduplicate(arr1, arr2));
