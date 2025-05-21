let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

for (let fruit of fruits) {
    console.log("for of loop: ", fruit)
}