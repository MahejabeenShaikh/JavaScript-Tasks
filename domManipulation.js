// DOM (Document Object Model) Manipulation -> document object

// document.write("<h1 style='color: red'>sdfbdsbfjhdsb</h1>");

// // Read Text By ID -
// const domHeading = document.getElementById("dom").innerText;
// console.log(domHeading);

// // Write Text By ID -
// document.getElementById("dom").innerText = "DOM MANIPULATION!";

// // Read Text By TagName -
// const domHeading1 = document.getElementsByTagName("p");
// console.log(domHeading1); //array of elements having p tag
// console.log(domHeading1[0].innerText); //text of 1st element of array
// console.log(domHeading1[1].innerText); //text of 2nd element of array

// // Write Text By TagName -
// document.getElementsByTagName("p")[1].innerText = "Updated Using TagName";

// // Read Text By ClassName -
// const domHeading2 = document.getElementsByClassName("domclass");
// console.log(domHeading2); //array of elements having classname domclass
// console.log(domHeading2[0].innerText); //text of 1st element of array
// console.log(domHeading2[1].innerText); //text of 2nd element of array

// // Write Text By ClassName -
// document.getElementsByClassName("domclass")[1].innerText =
//   "Updated Using ClassName";

// changing css using js ->
// document.getElementById("cssChange").style.backgroundColor = "red";
// document.getElementById("cssChange").style.color = "white";
// document.getElementById("cssChange").style.border = "1px solid green";

// [querySelector] -> to select the first matching element of the webpage.
// alternative to getElementBy - Id, ClassName, TagName -> [querySelector] ->
//  - it's common for all types of tags, classes and ids.
//  - it will always take/access the first element and never take an array
// console.log(document.querySelector("#dom").innerText); //id
// console.log(document.querySelector(".domclass").innerText); //class
// console.log(document.querySelector("p").innerText); //tag