var assert = require('assert');

var step3 = require('../src/step3');

describe('Step 3', function() {
  it('should return the appropriate results for 1-20', function() {
    var output = step3.step3(1, 20);
    assert.deepEqual(
      output,
      {
        fizz: 4, 
        buzz: 3, 
        fizzbuzz: 1, 
        lucky: 2, 
        integer: 10
      }
    );
  });
  it('should return the appropriate results for -7 - -1', function() {
    var output = step3.step3(-7, -1);
    assert.deepEqual(
      output,
      {
        fizz: 1, 
        buzz: 1, 
        fizzbuzz: 0, 
        lucky: 1, 
        integer: 4
      }
    );
  });
  it('should return the appropriate results for single number', function() {
    var output = step3.step3(3);
    assert.equal(
      output,
      "fizz"
    );
  });
  it('should return the appropriate results for single number', function() {
    var output = step3.step3(5);
    assert.equal(
      output,
      "buzz"
    );
  });
  it('should return the appropriate results for single number', function() {
    var output = step3.step3(15);
    assert.equal(
      output,
      "fizzbuzz"
    );
  });
});
