let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

for (let fruit of fruits) {
    console.log("for of loop: ", fruit)
}

let numbers = [654, 321, 987, 357, 159, 852]

let numbersDoubled = numbers.map((num) => {
    return num * 2;
})

console.log("numbersDoubled: ", numbersDoubled)


let students = [
    "Jim",
    "Pam",
    "Dwight",
    "Michael"
]

console.log("students *before* forEach: ", students)

let newStudents = students.forEach((student, index) => {
    // add the index to the student name
    students[index] = student + " " + index;
})

console.log("students *after* forEach: ", students)

console.log("newStudents `undefined`: ", newStudents)

const prices = [10, 20, 30]

const total = prices.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)

console.log("total: ", total)