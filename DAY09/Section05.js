// C1
function calculate(a, b) {
    return a + b;
}
console.log(calculate(5, 10));
// Output: 15


// C2
function calculate(a, b) {
    return a * b; // assuming the missing operator is *
}
let x = calculate(5, 10);
console.log(calculate(x, 2));
// Output: 100


// C3
function check(number) {
    if (number >= 10) return "Large";
    return "Small";
}
console.log(check(15));
console.log(check(5));
// Output:
// Large
// Small


// C4
function test() {
    console.log("A");
    return "B";
    console.log("C");
}
console.log(test());
// Output:
// A
// B


// C5
function add(a, b) {
    return a + b;
}
let x = add(2, 3);
console.log(add(x, 5));
// Output: 10