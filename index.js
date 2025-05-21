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