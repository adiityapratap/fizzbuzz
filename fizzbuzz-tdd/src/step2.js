var { getRange, checkFizzBuzz, checkFizz, checkBuzz } = require('./util');

const step2 = function (low, high) {
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
        if(num.toString().includes('3')) {
            fizzbuzz.push('lucky');
        }
        else if(checkFizzBuzz(num)) {
            fizzbuzz.push('fizzbuzz');
        }
        else if(checkBuzz(num)) {
            fizzbuzz.push('buzz');
        }
        else if(checkFizz(num)) {
            fizzbuzz.push('fizz');
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
    step2(low, high)
};

output();

exports.step2 = step2;