// Check if number is even
function isEven(number) {
    return number % 2 === 0;
}

// Check if number is positive
function isPositive(number) {
    return number > 0;
}

// Find largest number
function findLargest(a, b) {
    return a >= b ? a : b;
}

// Calculate square
function calculateSquare(number) {
    return number * number;
}

// Analyze number using smaller functions
function analyzeNumber(number) {
    let even = isEven(number);
    let positive = isPositive(number);
    let square = calculateSquare(number);

    console.log("Number:", number);
    console.log("Even:", even ? "Yes" : "No");
    console.log("Positive:", positive ? "Yes" : "No");
    console.log("Square:", square);
}

// Test
analyzeNumber(10);
analyzeNumber(-5);
analyzeNumber(7);