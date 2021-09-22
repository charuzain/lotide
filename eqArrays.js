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
module.exports = eqArrays;

/* // Test Cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);//when two arrays are equal
assertEqual(eqArrays([2, 3], [1, 2, 3]), false);//When 2 arrays are of different length
assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), true);//Different Data Type
assertEqual(eqArrays([], []), true);//Both arrays are empty*/