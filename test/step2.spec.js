var assert = require('assert');

var step2 = require('../src/step2');

describe('Step 2', function() {
  it('should return a list of the correct size', function() {
    var output = step2.step2(1, 20);
    assert.strictEqual(output.length, 20);
  });
  it('should return the appropriate results for 1-20', function() {
    var output = step2.step2(1, 20);
    assert.deepEqual(
      output,
      [
        "1", 
        "2", 
        "lucky", 
        "4", 
        "buzz", 
        "fizz", 
        "7", 
        "8", 
        "fizz", 
        "buzz", 
        "11", 
        "fizz", 
        "lucky", 
        "14", 
        "fizzbuzz", 
        "16", 
        "17", 
        "fizz", 
        "19", 
        "buzz",
    ]
    );
  });
  it('should return the appropriate results for -7--1', function() {
    var output = step2.step2(-7, -1);
    assert.deepEqual(
      output,
      [
        "-7", "fizz", "buzz", "-4", "lucky", "-2", "-1"
      ]
      );
    });
    it('should return the appropriate results for single number', function() {
      var output = step2.step2(3);
      assert.equal(
        output,
        "fizz"
      );
    });
    it('should return the appropriate results for single number', function() {
      var output = step2.step2(5);
      assert.equal(
        output,
        "buzz"
      );
    });
    it('should return the appropriate results for single number', function() {
      var output = step2.step2(15);
      assert.equal(
        output,
        "fizzbuzz"
      );
    });
});
