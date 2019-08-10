var { getRange, checkFizz, checkBuzz, checkFizzBuzz } = require('./util');

const step1 = function (low, high) {

    if(arguments.length == 1) {
        return checkFizzBuzz(arguments[0]);
    }

    let numbers = [];
    if(typeof low == 'undefined' || typeof high == 'undefined') {
        return 'Please enter a correct range'
    }

    if(low > high) {
        low += high;
        high = low-high;
        low = low - high;
    }

    for(let i=low;i<=high;++i) {
        numbers.push(i);
    }

    let fizzbuzz = [];
    numbers.forEach(num => {
        if(checkFizzBuzz(num)) {
            fizzbuzz.push(checkFizzBuzz(num));
        }
        else {
            fizzbuzz.push(num.toString());
        }
    });
    console.log(...fizzbuzz);
    return fizzbuzz;
}

const output = function() {
    let [low, high] = getRange(process.argv);
    step1(low, high)
};

output();

exports.step1 = step1;