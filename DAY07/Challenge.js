//You can reduce duplicate code further by using one while loop and checking all conditions inside it:
let number = 1;

while (number <= 50) {
    console.log("Number:", number);

    if (number % 2 === 0) {
        console.log("Even:", number);
    }

    if (number % 2 !== 0) {
        console.log("Odd:", number);
    }

    if (number % 3 === 0) {
        console.log("Multiple of 3:", number);
    }

    if (number % 5 === 0) {
        console.log("Multiple of 5:", number);
    }

    number++;
}