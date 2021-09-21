const assert = require('chai').assert;
const tail = require('../tail.js');

describe("#tail",()=>{
  it("an empty array should yield an empty array for its tail" ,()=>{
    assert.deepEqual(tail([]),[]);

  });

  it("an array with only one element should yield an empty array for its tail" ,()=>{
    assert.deepEqual(tail([3]),[]);

  });

  it("tail doesnot contain the first element of array" ,()=>{
    assert.notInclude(tail([5,2,6,7,8,3]),5);

  });

  it("returns [1,2,3] for [26,1,2,3]" ,()=>{
    assert.notInclude(tail([5,2,6,7,8,3]),5);

  });
  
});







