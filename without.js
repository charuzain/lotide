/*const eqArrays = function(array1 , array2) {
  let isEqual = true;
  
  if (array1.length === array2.length) {
  
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        isEqual = false;
        break;
      }
    }
  } else {
    isEqual = false; // here i have done that
  }
  return isEqual;
};

const assertArraysEqual = function(array1 , array2) {
  if (eqArrays(array1,array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else
    console.log(`⭕ Assertion Failed: ${array1} !== ${array2}`);
}; */

const without = function(source,itemsToRemove){
let newArray =[];
let addValue = true;
for(let i = 0;i<source.length;i++){
  for(let j=0;j<itemsToRemove.length;i++){  //[5,7,9][6,5,4]==[7,9]
    if(source[i]===itemsToRemove[j]){
      addValue = false;
      break;
    }
  }
}
return newArray;
}
