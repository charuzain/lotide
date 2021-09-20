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
    isEqual = false; // here i have done that
  }
  return isEqual;
};

const assertArraysEqual = function(array1 , array2) {
  if (eqArrays(array1,array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else
    console.log(`⭕ Assertion Failed: ${array1} !== ${array2}`);
};
 
 
const middle = function(array){
  let middleElement = [];
  if(array.length == 1 || array.length == 2){
    return middleElement;
  }
 else if (array.length % 2 !== 0){
   let arrayIndex = Math.floor(array.length/2)
   middleElement.push(array[arrayIndex]);
  return middleElement;
 }
 else if(array.length % 2 === 0){
  let arrayIndex = Math.floor((array.length-1)/2);
  middleElement.push(array[arrayIndex]);
  middleElement.push(array[arrayIndex+1]);
    return middleElement;
 }

}
console.log(middle([2,3,4,5,6,7]));
console.log(middle([2,3,4]));
console.log(middle([2]));
console.log(middle([2,3]));
console.log(middle([]));