const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`⭕ Assertion Failed: ${actual} !== ${expected}`);
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

const eqObjects = function (object1, object2) {
  keys1 = Object.keys(object1);
  let noOfKeysInObj1 = keys1.length;

  keys2 = Object.keys(object2);
  let noOfKeysInObj2 = keys2.length;
  //let isEqual = true;
  if (noOfKeysInObj1 !== noOfKeysInObj2) {
    return false;
  }

  for (let key of keys1) {

    if (object1[key] && object2[key]) {
      if( Array.isArray(object1[key])&& Array.isArray(object2[key])){
       let output = eqArrays(object1[key],object2[key]) 
       return output;
      }
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
}


console.log(eqObjects({ a: '1', b: '2' }, { b: '2', a: '1' }))
console.log(eqObjects({ a: '1', b: '2' }, { a: '9', b: '2' }))
console.log(eqObjects({ a: '1', b: '2' }, { a: '9' }))
console.log(eqObjects({ a: '1', b: '2' }, { b: '2', a: '1' }));
console.log(eqObjects({ a: '1', b: '2' }, { a: '1', b: '2' }));
console.log(eqObjects({ a: '1', b: '2' }, { a: '9' }));
console.log(eqObjects({ c: '1', d: ['2', 3] }, { d: ['2', 3], c: '1' }))
console.log(eqObjects({ c: '1', d: ['2', 3] }, { d: ['9', 3], c: '1' }))
console.log(eqObjects({ c: '1', d: ['2', 3] }, { c: '1', d: ['2', 3] }))

//Test Cases
assertEqual(eqObjects({a:'1',b:'2'},{b:'2',a:'1'}),true)
assertEqual(eqObjects({a:'1',b:'2'},{a:'1',b:'2'}),true)
assertEqual(eqObjects({a:'1',b:'2'},{a:'1',b:'2',c:'3'}),false)
assertEqual(eqObjects({ c: '1', d: ['2', 3] }, { d: ['9', 3], c: '1' }), false)
assertEqual(eqObjects({ c: '1', d: ['2', 3] }, { d: ['9', 3], c: '1' }), false)
assertEqual(eqObjects({ c: '1', d: ['2', 3] }, { c: '1', d: ['2', 3] }) , false)