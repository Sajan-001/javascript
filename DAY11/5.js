let mode = "production";

function runTask() {
    let mode = "test";

    function nestedTask() {
        let mode = "development";

        console.log("Inside nestedTask:", mode);
    }

    console.log("Inside runTask:", mode);
    nestedTask();
}

runTask();
console.log("Outside:", mode);

// Output:
// Inside runTask: test
// Inside nestedTask: development
// Outside: production
//
// Each mode is in a different scope:
// Global → production
// runTask() → test
// nestedTask() → development
