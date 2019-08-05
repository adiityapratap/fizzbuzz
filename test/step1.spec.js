var assert = require('assert');

var step1 = require('../src/step1');

describe('Step 1', function() {
  it('should return a list of the correct size', function() {
    var output = step1.step1(1, 20);
    assert.strictEqual(output.length, 20);
  });
  it('should return the appropriate results for 1-20', function() {
    var output = step1.step1(1,20);
    assert.deepEqual(
      output,
      [
        "1", 
        "2", 
        "fizz", 
        "4", 
        "buzz", 
        "fizz", 
        "7", 
        "8", 
        "fizz", 
        "buzz", 
        "11", 
        "fizz", 
        "13", 
        "14", 
        "fizzbuzz", 
        "16", 
        "17", 
        "fizz", 
        "19", 
        "buzz"
    ]
    );
  });
  it('should return the appropriate results for -7--1', function() {
    var output = step1.step1(-7, -1);
    assert.deepEqual(
      output,
      [
        "-7", "fizz", "buzz", "-4", "fizz", "-2", "-1"
      ]
      );
    });
});
