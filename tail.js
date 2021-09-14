const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`⭕ Assertion Failed: ${actual} !== ${expected}`);
};
const tail = function(array) {
  let arrayTail = array.slice(1);
  return arrayTail;
};
// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

  
// Test Case 2 : Check the original array
const words = ["first","day", "at", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 4); // original array should still have 5 elements not 4!