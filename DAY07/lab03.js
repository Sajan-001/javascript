// Program 1
switch ("Tuesday") {
    case "Monday":
        console.log("A");
        break;

    case "Tuesday":
        console.log("B");
        break;

    default:
        console.log("C");
}
// Prediction: B
// Output: B


// Program 2
switch ("Sunday") {
    case "Monday":
        console.log("A");
        break;

    default:
        console.log("Holiday");
}
// Prediction: Holiday
// Output: Holiday


// Program 3
switch ("Friday") {
    case "Friday":
        console.log("Weekend Coming");
        break;

    default:
        console.log("Unknown");
}
// Prediction: Weekend Coming
// Output: Weekend Coming