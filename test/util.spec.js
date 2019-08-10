var assert = require('assert');

var { checkFizzBuzz, checkFizz, checkBuzz } = require('../src/util');

describe('Util', function() {
    it('should return the appropriate results for multiples of 3', function() {
      var output = [checkFizz(3), checkFizz(5), checkFizz(0), checkFizz(15), checkFizz(-1)];
      assert.deepEqual(
        output,
        ['fizz', '', 'fizz', 'fizz', '']
      );
    });
    it('should return the appropriate results for multiples of 5', function() {
        var output = [checkBuzz(3), checkBuzz(5), checkBuzz(0), checkBuzz(15), checkBuzz(-1)];
        assert.deepEqual(
            output,
            ['', 'buzz', 'buzz', 'buzz', '']
        );
    });
    it('should return the appropriate results for multiples of 3,5, 15', function() {
        var output = [checkFizzBuzz(3), checkFizzBuzz(5), checkFizzBuzz(0), checkFizzBuzz(15), checkFizzBuzz(-1)];
        assert.deepEqual(
            output,
            ['fizz', 'buzz', 'fizzbuzz', 'fizzbuzz', '']
        );
    });
  });
  