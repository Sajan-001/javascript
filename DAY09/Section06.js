// Q16 — isEven(number)
function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(2));
console.log(isEven(7));
console.log(isEven(10));
console.log(isEven(13));


// Q17 — checkAge(age)
function checkAge(age) {
    if (age >= 18) {
        return "Eligible";
    } else {
        return "Not Eligible";
    }
}

console.log(checkAge(20));
console.log(checkAge(16));


// Q18 — findLargest(a, b)
function findLargest(a, b) {
    if (a >= b) {
        return a;
    } else {
        return b;
    }
}

console.log(findLargest(10, 20));
console.log(findLargest(50, 30));
console.log(findLargest(100, 100));