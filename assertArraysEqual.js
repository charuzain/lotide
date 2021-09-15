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

const assertArraysEqual = function(array1 , array2) {
  if (eqArrays(array1,array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else
    console.log(`⭕ Assertion Failed: ${array1} !== ${array2}`);
};

console.log(assertArraysEqual([2,3,4,5],[2,3,4,5]));
console.log(assertArraysEqual([2,3,4],[2,3,4,5]));

