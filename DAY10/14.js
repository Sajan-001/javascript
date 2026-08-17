// Calculate Total
const calculateTotal = (a, b, c) => a + b + c;

// Calculate Average
const calculateAverage = (a, b, c) => calculateTotal(a, b, c) / 3;

// Check Pass / Fail
const checkPassStatus = (average) => {
    if (average >= 33) {
        return "Pass";
    } else {
        return "Fail";
    }
};

// Get Grade
const getGrade = (average) => {
    if (average >= 90) {
        return "A";
    } else if (average >= 75) {
        return "B";
    } else if (average >= 60) {
        return "C";
    } else if (average >= 33) {
        return "D";
    } else {
        return "Fail";
    }
};


// Student 1
let total1 = calculateTotal(80, 75, 90);
let average1 = calculateAverage(80, 75, 90);

console.log("Student 1");
console.log("Total:", total1);
console.log("Average:", average1);
console.log("Status:", checkPassStatus(average1));
console.log("Grade:", getGrade(average1));


// Student 2
let total2 = calculateTotal(50, 60, 55);
let average2 = calculateAverage(50, 60, 55);

console.log("Student 2");
console.log("Total:", total2);
console.log("Average:", average2);
console.log("Status:", checkPassStatus(average2));
console.log("Grade:", getGrade(average2));


// Student 3
let total3 = calculateTotal(30, 25, 20);
let average3 = calculateAverage(30, 25, 20);

console.log("Student 3");
console.log("Total:", total3);
console.log("Average:", average3);
console.log("Status:", checkPassStatus(average3));
console.log("Grade:", getGrade(average3));


// Student 4
let total4 = calculateTotal(95, 92, 90);
let average4 = calculateAverage(95, 92, 90);

console.log("Student 4");
console.log("Total:", total4);
console.log("Average:", average4);
console.log("Status:", checkPassStatus(average4));
console.log("Grade:", getGrade(average4));