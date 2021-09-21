const assert = require('chai').assert;
const head = require('../head.js');
//const assertEqual = require('../assertEqual.js');

describe("#head",()=>{
  it("returns 1 for [1,2,3]" ,()=>{
    assert.strictEqual(head([1,2,3]),1);

  });

  it("returns '5' for ['5']" ,()=>{
    assert.strictEqual(head(['5']), '5');
  
  });

  it("should not return output as an array " ,()=>{
    assert.isNotArray(head(['5','3']));
    
  });

  it("empty array should return undefined " ,()=>{
    assert.isUndefined(head([]));
    //assert.strictEqual(head([])), undefined);
      
  });
  

});