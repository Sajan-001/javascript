// 🚀 Number Analyzer
// Numbers: 1 to 50

let number = 1;

console.log("Numbers 1 to 50");
while (number <= 50) {
    console.log(number);
    number++;
}

console.log("Even Numbers");
number = 1;
while (number <= 50) {
    if (number % 2 === 0) {
        console.log(number);
    }
    number++;
}

console.log("Odd Numbers");
number = 1;
while (number <= 50) {
    if (number % 2 !== 0) {
        console.log(number);
    }
    number++;
}

console.log("Multiples of 3");
number = 1;
while (number <= 50) {
    if (number % 3 === 0) {
        console.log(number);
    }
    number++;
}

console.log("Multiples of 5");
number = 1;
while (number <= 50) {
    if (number % 5 === 0) {
        console.log(number);
    }
    number++;
}