const tail = require('../tail.js');
const assertEqual = require('../assertEqual');

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

  
// Test Case 2 : Check the original array
const words = tail(["first","day", "at", "Lighthouse", "Labs"]);
assertEqual(words.length, 5); // original array should still have 5 elements not 4!