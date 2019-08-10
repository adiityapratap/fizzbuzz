exports.getRange = function (arguments) {
    console.log(arguments)
    return arguments && arguments.filter((arg, i) => i > 1 && i < 4 && !isNaN(arg) ).map(arg => parseInt(arg)) || [];
}

exports.checkFizz = function (num) {
    return num % 3 == 0 ? 'fizz' : '';
}

exports.checkBuzz = function (num) {
    return num % 5 == 0 ? 'buzz' : '';
}

exports.checkFizzBuzz = function (num) {
    if(num % 15 == 0) {
        return 'fizzbuzz';
    }
    if(num % 5 == 0) {
        return 'buzz';
    }
    if(num % 3 == 0) {
        return 'fizz';
    }
    return '';
}