// Problem 1

//calculateTotal() does not use return, so it returns undefined.

//Problem 2

//total is declared inside analyzeStudent(), so it cannot be accessed outside the function.

// Corrected Program
const calculateTotal = (a, b, c) => {
    return a + b + c;
};


function analyzeStudent() {
    let total = calculateTotal(80, 70, 90);
    return total;
}


console.log(analyzeStudent());