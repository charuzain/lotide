
const middle = function(array) {
  let middleElement = [ ];
  if (array.length === 1 || array.length === 2) {
    return middleElement;
  } else if (array.length % 2 !== 0) {
    let arrayIndex = Math.floor(array.length / 2);
    middleElement.push(array[arrayIndex]);
    return middleElement;
  } else if (array.length % 2 === 0) {
    let arrayIndex = Math.floor((array.length - 1) / 2);
    middleElement.push(array[arrayIndex]);
    middleElement.push(array[arrayIndex + 1]);
    return middleElement;
  }

};

module.exports = middle;

/* assertArraysEqual(middle([2,3,4,5,6,7]),[4]);
assertArraysEqual(middle([2,3,4,5]),[3,4]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8]),[4,5]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([2,3]),[4]);
assertArraysEqual(middle([2,3]),[]);*/
