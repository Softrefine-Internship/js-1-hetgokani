// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")
"use strict";
function findcommon(arr) {
  let count = {};
  let commonItem = null;
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    count[item] = (count[item] || 0) + 1;
    if (count[item] > maxCount) {
      maxCount = count[item];
      commonItem = item;
    }
  }
  console.log(commonItem, maxCount + " times");
}
let input = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
findcommon(input);
