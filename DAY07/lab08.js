// Program 1
let i = 1;

while (i <= 5) {
    console.log(i);
    i++; // Missing: without this, loop becomes infinite
}


// Program 2
let i2 = 10;

while (i2 <= 5) {
    console.log(i2);
    i2++;
}

// Reason: 10 <= 5 is false, so the loop never starts.


// Program 3
let i3 = 1;

while (i3 < 10) {
    console.log(i3);
    i3++;
}

// No syntax mistakes — this program is already correct.


// Program 4
let number = 2;

while (number <= 10) {
    console.log(number);
    number += 2; // Increase by 2 to print only even numbers
}