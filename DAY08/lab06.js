// P1
for (let i = 1; i <= 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}
// Output: 1, 3, 4, 5


// P2
for (let i = 1; i <= 5; i++) {
    if (i === 2) {
        break;
    }
    console.log(i);
}
// Output: 1
// 3. Difference: break stops the loop completely, while continue skips the current iteration and continues the loop.