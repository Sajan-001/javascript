// GLOBAL SCOPE

let college = "BPPIMT";

console.log(college); // Working: accessible anywhere

// console.log(subject); // Broken: subject is inside a function


// FUNCTION SCOPE

function showStudent() {
    let subject = "JavaScript";

    console.log(subject); // Working: accessible inside the function
}

showStudent();

// console.log(subject); // Broken: subject exists only inside the function


// BLOCK SCOPE

if (true) {
    let semester = 5;

    console.log(semester); // Working: accessible inside the block
}

// console.log(semester); // Broken: semester exists only inside the block