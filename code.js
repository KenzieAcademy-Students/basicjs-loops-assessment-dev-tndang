// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

let numbers = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848,
    179, 535, 940, 472,
];

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
