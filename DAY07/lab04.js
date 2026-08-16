// Program 1
switch (day) {
    case "Monday": // String needs quotes
        console.log("Start");
        break;
}


// Program 2
switch (day) {
    case "Monday": // Add colon :
        console.log("Start");
        break;
}


// Program 3
switch (day) {
    case "Monday":
        console.log("Start");
        break; // Stops before default

    default:
        console.log("Unknown");
        break;
}


// Program 4
switch (day) {
    case "Monday":
        console.log("Monday");
        break; // Prevents next case from running

    case "Tuesday":
        console.log("Tuesday");
        break;
}