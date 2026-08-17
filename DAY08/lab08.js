let fruits = ["Apple", "Mango", "Banana", "Orange"];

// 1. Print every index
for (let index in fruits) {
    console.log(index);
}


// 2. Print Index : Value
for (let index in fruits) {
    console.log(index + " : " + fruits[index]);
}


// Bonus: Print only the keys
let student = {
    name: "Rahul",
    age: 21,
    city: "Patna"
};

for (let key in student) {
    console.log(key);
}