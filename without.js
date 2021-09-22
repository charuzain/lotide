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

const without = function(source,itemsToRemove){
let newArray =[];
let itemExist = false;
for(let i = 0 ; i<source.length;i++){
  for(let j = 0 ; j<itemsToRemove.length;j++){
  if(source[i]===itemsToRemove[j]){
    itemExist = true;
    break;  
    }
  }
  if(!itemExist){
    newArray.push(source[i]);
  }
  else
  {
    itemExist = false;
  }

}

return newArray;
}


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1,2,3,4],[1,2]), [3,4]);
