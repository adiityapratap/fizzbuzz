var { getRange, checkFizzBuzz, checkFizz, checkBuzz } = require('./util');

const step3 = function (low, high) {
    let numbers = [];
    
    if(arguments.length == 1) {
        return checkFizzBuzz(arguments[0]);
    }

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

    let fizzbuzz = {
        'lucky': 0,
        'fizz': 0,
        'buzz': 0,
        'fizzbuzz': 0,
        'integer': 0
    };
    numbers.forEach(num => {
        if(num.toString().includes('3')) {
            fizzbuzz['lucky'] = (fizzbuzz['lucky'] || 0) + 1;
        }
        else if(checkFizzBuzz(num)) {
            fizzbuzz[checkFizzBuzz(num)] = (fizzbuzz[checkFizzBuzz(num)] || 0) + 1;
        }
        else {
            fizzbuzz['integer'] = (fizzbuzz['integer'] || 0) + 1;
        }
    });
    console.log(`fizz: ${fizzbuzz['fizz'] || 0}, buzz: ${fizzbuzz['buzz'] || 0}, fizzbuzz: ${fizzbuzz['fizzbuzz'] || 0}, lucky: ${fizzbuzz['lucky'] || 0}, integer: ${fizzbuzz['integer'] || 0}`);

    return fizzbuzz;
}

const output = function() {
    let [low, high] = getRange(process.argv);
    step3(low, high)
};

output();

exports.step3 = step3;