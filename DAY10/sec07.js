//1. Function Expression
const calculateAverage1 = function(a, b, c) {
    return (a + b + c) / 3;
};
//2. Arrow Function
const calculateAverage2 = (a, b, c) => {
    return (a + b + c) / 3;
};
//3. Concise Arrow Function
const calculateAverage3 = (a, b, c) => (a + b + c) / 3;
//Test All Versions
console.log(calculateAverage1(80, 70, 90)); // 80
console.log(calculateAverage1(50, 60, 70)); // 60


console.log(calculateAverage2(80, 70, 90)); // 80
console.log(calculateAverage2(50, 60, 70)); // 60


console.log(calculateAverage3(80, 70, 90)); // 80
console.log(calculateAverage3(50, 60, 70)); // 60