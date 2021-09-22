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

module.exports = countLetters;
