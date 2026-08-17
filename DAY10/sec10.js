//Problem: total is declared inside the function, so it cannot be accessed outside the function.

//Corrected Code:

let total;


function calculate() {
    total = 500;
}


calculate();


console.log(total);

Output:

500