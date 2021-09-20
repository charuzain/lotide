const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual')


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);//when two arrays are equal
assertEqual(eqArrays([2, 3], [1, 2, 3]), false);//When 2 arrays are of different length
assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), true);//Different Data Type
assertEqual(eqArrays([], []), true);//Both arrays are empty