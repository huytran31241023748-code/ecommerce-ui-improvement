/* add code below this */
var stringOne = new String("Test");
var stringTwo = "Test";
var stringThree = "Test";
var stringFour = new String("Test");

document.write("typeof stringOne = " + typeof stringOne + "<br>");
document.write("typeof stringThree = " + typeof stringThree + "<br><br>");

document.write("stringOne == stringTwo: " + (stringOne == stringTwo) + "<br>");
document.write("stringOne == stringFour: " + (stringOne == stringFour) + "<br>");
document.write("stringOne === stringTwo: " + (stringOne === stringTwo) + "<br>");
document.write("stringTwo === stringThree: " + (stringTwo === stringThree) + "<br>");
document.write("stringTwo === stringFour: " + (stringTwo === stringFour) + "<br>");

var dateOne = new Date();
document.write("<p>Date: " + dateOne + "</p>");

document.write("Math.PI = " + Math.PI + "<br>");
document.write("Math.sqrt(4) = " + Math.sqrt(4) + "<br>");
document.write("Math.random() = " + Math.random());