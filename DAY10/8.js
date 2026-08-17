// G1
let n = 5;

function f1() {
    console.log(n);
    let n = 10;
}

f1();

// Prediction: ReferenceError
// Actual Output: ReferenceError
// Reason: The local n exists throughout the function but is in the Temporal Dead Zone
// until its declaration is reached.


// G2
function counter() {
    let count = 0;

    function increment() {
        count = count + 1;
        console.log(count);
    }

    increment();
    increment();
    increment();
}

counter();

// Prediction: 1, 2, 3
// Actual Output: 1, 2, 3
// Reason: increment() keeps accessing and updating the same count variable.


// G3
let status = "idle";

function start() {
    status = "running";
}

start();
console.log(status);

// Prediction: running
// Actual Output: running
// Reason: start() changes the global status variable.


// G4
function outer() {
    let x = 1;

    function middle() {
        let x = 2;

        function inner() {
            console.log(x);
        }

        inner();
    }

    middle();
}

outer();

// Prediction: 2
// Actual Output: 2
// Reason: inner() finds x in the nearest enclosing scope, which is middle().