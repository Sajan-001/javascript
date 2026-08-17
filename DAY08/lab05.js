// Bug 1
for (let i = 1; i <= 10; i++) { // Missing ; after i = 1
    console.log(i);
}


// Bug 2
for (let i = 1; i <= 5; i++) { // Use i++ so the loop reaches 5
    console.log(i);
}


// Bug 3
let i = 1;

do {
    console.log(i);
    i++; // Missing update, so i always stays 1
} while (i <= 5);


// Bug 4
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skips 5
    }
    console.log(i); // Semicolon added
}


// Bug 5
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// 3 will NOT print because break stops the loop when i becomes 3.