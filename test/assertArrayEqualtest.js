const assertArraysEqual = require('../assertArraysEqual.js');
//const assertEqual = require('../assertEqual');


assertArraysEqual([2,3,4,5],[2,3,4,5]);
assertArraysEqual([2,3,4],[2,3,4,5]);
assertArraysEqual(["lighthouse", "labs"], ["lighthouse", "labs"])
