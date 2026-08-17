function processStudent(name, marks) {
    const total = marks.reduce((sum, m) => sum + m, 0);
    const average = total / marks.length;

    let grade;

    if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    return {
        name,
        total,
        average,
        grade
    };
}

const anita = processStudent("Anita", [88, 92, 79]);
const rohit = processStudent("Rohit", [45, 60, 55]);

console.log(anita);
console.log(rohit);