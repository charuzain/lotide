const takeUntil=function(array,callback){
let result =[];
for(let elem of array){
  
  if(!callback(elem)){
  result.push(elem)
      };
   if(callback(elem)){
    break;}
  
}
return result;
}
//console.log(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5],x => x < 0));
//console.log(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5],x => x < 0));
console.log(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','));

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

assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5],x => x < 0),[3,2,3,4,3])
assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5],x => x < 0),[1,2,5,7,2])
