const assert = require('chai').assert;
const middle = require('../middle');

//const assertArraysEqual = require('../assertArraysEqual');

describe("#middle",()=>{
  it("for arrays with one element return an empty array" ,()=>{
    assert.deepEqual(middle([1]),[]);

  });
  it("for arrays with two element return an empty array" ,()=>{
    assert.deepEqual(middle([1,2]),[]);

  });

  it("for arrays with odd number element return a single element array" ,()=>{
    assert.lengthOf(middle([1,2,3]),1);

  });
  it("for arrays with even number element return an array having 2 element" ,()=>{
    assert.lengthOf(middle([1,2,3,4,5,6]),2);

  });
  it("for arrays with even number element an array containing two elements in middle is returned" ,()=>{
    assert.deepEqual(middle([1,2,3,4]),[2,3]);

  });

 



  

});

