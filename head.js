const assertEqual = require("./assertEqual");
/* function to return the first item in the array */

const head = function (array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

module.exports = head;
