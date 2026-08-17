// Global scope
let appName = "MyApp";

function outer() {
    let version = "1.0";

    function inner() {
        let buildNumber = 101;

        // inner() can access all three variables
        console.log(appName);
        console.log(version);
        console.log(buildNumber);
    }

    inner();
}

outer();

// 1. Can outer() access buildNumber?
// No, because buildNumber is inside inner(), so it is only available inside inner().

// 2. Can the global scope access version?
// No, because version is local to outer().