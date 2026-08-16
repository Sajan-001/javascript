let employeeName = "Rahul Kumar";

let basicSalary = 50000;
let hra = 10000;
let bonus = 5000;
let tax = 8000;

let grossSalary = basicSalary + hra + bonus;
let netSalary = grossSalary - tax;

console.log("--------------------------------------------");
console.log("Employee");
console.log(employeeName);
console.log("--------------------------------------------");

console.log("Basic Salary");
console.log(basicSalary);
console.log("--------------------------------------------");

console.log("HRA");
console.log(hra);
console.log("--------------------------------------------");

console.log("Bonus");
console.log(bonus);
console.log("--------------------------------------------");

console.log("Gross Salary");
console.log(grossSalary);
console.log("--------------------------------------------");

console.log("Tax");
console.log(tax);
console.log("--------------------------------------------");

console.log("Net Salary");
console.log(netSalary);
console.log("--------------------------------------------");