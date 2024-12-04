// Write a JavaScript program to clone an array.
//first commit
"use strict";
const array1 = [7, 2, 9, 1, 0];
const array2 = [];
for (let i = 0; i < array1.length; i++) {
  array2.push(array1[i]);
}
console.log(array1);
console.log(array2);
