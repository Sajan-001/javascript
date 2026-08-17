// Calculate Total
function calculateTotal(mark1, mark2, mark3) {
    return mark1 + mark2 + mark3;
}

// Calculate Average
function calculateAverage(mark1, mark2, mark3) {
    return calculateTotal(mark1, mark2, mark3) / 3;
}

// Check Pass/Fail
function checkPassStatus(average) {
    if (average >= 33) {
        return "Pass";
    } else {
        return "Fail";
    }
}

// Get Grade
function getGrade(average) {
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
}

// Test Students
let total1 = calculateTotal(80, 75, 90);
let average1 = calculateAverage(80, 75, 90);
console.log("Student 1:", total1, average1, checkPassStatus(average1), getGrade(average1));

let total2 = calculateTotal(50, 60, 55);
let average2 = calculateAverage(50, 60, 55);
console.log("Student 2:", total2, average2, checkPassStatus(average2), getGrade(average2));

let total3 = calculateTotal(30, 25, 20);
let average3 = calculateAverage(30, 25, 20);
console.log("Student 3:", total3, average3, checkPassStatus(average3), getGrade(average3));

let total4 = calculateTotal(95, 92, 90);
let average4 = calculateAverage(95, 92, 90);
console.log("Student 4:", total4, average4, checkPassStatus(average4), getGrade(average4));