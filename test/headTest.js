// Test Case for Head function
const head = require('../head.js');
const assertEqual = require('../assertEqual.js');
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
assertEqual(head([2]), 5);