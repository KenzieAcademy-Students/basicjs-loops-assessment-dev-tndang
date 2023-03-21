// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

let numbers = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848,
    179, 535, 940, 472,
];

let largestNumber = function() {
    let highestNumber = 0;
    for (let index = 0; index < numbers.length; index++) {
        let currentNumber = numbers[index];
        if (currentNumber > highestNumber) {
            highestNumber = currentNumber;
        }
    }
    console.log(`The largest number in the array is ${highestNumber}!`);
    return highestNumber;
}

let smallestNumber = function() {
    let lowestNumber = 1000;
    for (let index = 0; index < numbers.length; index++) {
        let currentNumber = numbers[index];
        if (currentNumber < lowestNumber) {
            lowestNumber = currentNumber;
        }
    }
    console.log(`The smallest number in the array is ${lowestNumber}!`);
    return lowestNumber;
}

let sum = function() {
    let result = 0;
    for (let index = 0; index < numbers.length; index++) {
        result += numbers[index];
    }
    console.log(`The sum of the array is ${result}!`);
    return result;
}

let average = function() {
    let sum = 0;
    let result;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
        if (numbers[index] >= numbers.length) {
            result = sum / numbers.length;
        }
    }
    console.log(`The average of the array is ${result}!`);
    return result;
}

let evenNumbers = function() {
    let evenArray = [];
    for (let index = 0; index < numbers.length; index++) {
        let currentNumber = numbers[index];
        if (currentNumber % 2 === 0) {
            evenArray.push(currentNumber);
        }
    }
    console.log(`The even numbers in the array are ${evenArray}!`);
    return evenArray;
}

let oddNumbers = function() {
    let oddArray = [];
    for (let index = 0; index < numbers.length; index++) {
        let currentNumber = numbers[index];
        if (currentNumber % 2 !== 0) {
            oddArray.push(currentNumber);
        }
    }
    console.log(`The odd numbers in the array are ${oddArray}!`);
    return oddArray;
}

let eightDivisible = function() {
    let divEightArray = [];
    for (let index = 0; index < numbers.length; index++) {
        let currentNumber = numbers[index];
        if (currentNumber % 8 === 0) {
            divEightArray.push(currentNumber);
        }
    }
    console.log(`The numbers divisible by 8 in the array are ${divEightArray}!`);
    return divEightArray;
}

largestNumber();
smallestNumber();
sum();
average();
evenNumbers();
oddNumbers();
eightDivisible();

document.write("<h1>Array Analyzer</h1>");
let displayNumbers = function() { // This function will display the array to the DOM
    return numbers;
}
document.write("<h3>Now analyzing the array: " + displayNumbers() + "</h3>");

// We want all answers to be rendered using an unordered list
document.write("<ul>");
// That means each answer will be rendered with li
// For example:
//     document.write("<li>First Number: " + numbers[0] + "</li>");
//     document.write("<li>Second Number: " + numbers[1] + "</li>");

// Write your code here 👇



document.write("</ul>");
