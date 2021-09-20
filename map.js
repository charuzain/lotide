const map = function(array , callback) {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

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

//TEST CASE
assertArraysEqual(map(["ground", "control","to", "major", "tom"],word => word[0]) ,["g","c","t","m","t"]);
assertArraysEqual(map(["hi","how","are","you"],word=>word.length),[2,3,3,3]);
assertArraysEqual(map(["hi","hello"],word=>word.toUpperCase()),["H","H"]);

