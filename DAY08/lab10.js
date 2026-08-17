let marks = [78, 65, 92, 45, 88];

let total = 0;

// 1 & 2. Print every mark and PASS/FAIL
for (let mark of marks) {
    console.log("Marks:", mark);

    if (mark >= 33) {
        console.log("PASS");
    } else {
        console.log("FAIL");
    }

    // 3. Calculate total
    total += mark;
}

console.log("Total Marks:", total);