// Write javascript program to remove duplicate objects from an array.

// Sample Input:
// array = [
//  { title: "C++", author: "Bjarne" },
//  { title: "Java", author: "James" },
//  { title: "Python", author: "Guido" },
//  { title: "Java", author: "James" },
// ];

// Expected Output:
// [
//  { title: 'C++', author: 'Bjarne' },
//  { title: 'Java', author: 'James' },
//  { title: 'Python', author: 'Guido' }
// ]
"use strict";
function removeduplicate(arr) {
  let result = [];
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i].title + arr[i].author;

    if (!seen[key]) {
      result.push(arr[i]);
      seen[key] = true;
    }
  }
  return result;
}
const array = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];
console.log(removeduplicate(array));
