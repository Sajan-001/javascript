// P1
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
// Prediction: 1, 2, 3
// Output: 1, 2, 3


// P2
let i = 5;

do {
    console.log(i);
} while (i < 5);
// Prediction: 5
// Output: 5


// P3
for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}
// Prediction: 1, 2
// Output: 1, 2


// P4
for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}
// Prediction: 1, 2, 4, 5
// Output: 1, 2, 4, 5