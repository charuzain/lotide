const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`⭕ Assertion Failed: ${actual} !== ${expected}`);
};
  
//The Function eqArrays takes in two arrays
//and returns true or false, based on a perfect match.

const eqArrays = function(array1 , array2) {
  let isEqual = true;
  if (array1.length === array2.length) {
  
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        isEqual = false;
        break;
  
      }
    }
  } else {
    isEqual = false;
  }
  return isEqual;
};
//console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
//console.log(eqArrays([1, 2, 3], [3, 2, 1]))// => false
//console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]))
//console.log(eqArrays(["1", "2", "3"], ["2", 3]))

// Test Cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);//when two arrays are equal
assertEqual(eqArrays([2, 3], [1, 2, 3]), false);//When 2 arrays are of different length
assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), true);//Different Data Type
assertEqual(eqArrays([], []), true);//Both arrays are empty