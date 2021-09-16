const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`⭕ Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {

  let countAlphabet = {};
  for (let letter of sentence) {
    if (letter === " ") {
      continue;
    } else if (countAlphabet[letter]) {
        
      countAlphabet[letter] += 1;
    } else {
      countAlphabet[letter] = 1;
       
    }
  }
  return countAlphabet;
};
const result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["h"], 1);
assertEqual(result1["b"], 1);
assertEqual(result1["b"], undefined);