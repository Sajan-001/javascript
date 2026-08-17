const square = number => number * number;

function calculate(number) {
    let result = square(number);
    return result;
}

console.log(calculate(5));