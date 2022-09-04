// What is function?
// - reusable block of code
// - it will run only when we call it
// - reduce duplicate code

// normal/regular function ->

// syntax ->

// function declaration/defination
// function functionName(params1, params2, ...., paramsN){
//     // statements;
// }

// function call (to use/run the function)
// functionName();

// example ->

// function sum(num1 = 0, num2 = 0, num3 = 0) {
//   //   return num1 + num2 + num3;
//   if (typeof num1 != "number") {
//     return "Please Enter a Valid Number";
//   }

//   console.log("Addition Of 3 Numbers Is : " + (num1 + num2 + num3));
// }

// // fucntion call for sum function
// let result = sum(10, 20);
// console.log(result);

// console.log("result = " + result);

// NORMAL/REGUALR FUNCTION (Function Declaration)
// function without parameters
// function with parameters (parameterized function)
// default parameters
// function returning some value to function call/ function with return statement

// ANONYMOUS FUNCTION (Function Expression)
// - function without any name

// FAT ARROW FUNCTION (Function Expression) (Anonymous Function)
// - this is a type of anonymous function.
// - arrow function does not have any name.
// - we use a arrow sign instead of function keyword. i.e. we don't use any function keyword while declaring arrow function.

// parameterized arrow function ->
// let/var/const variableName = (params1, params2, ..., paramsN) => {
//     // statements
// }

// // e.g.
// let printSum = (num1, num2) => {
//   console.log(num1 + num2);
// };

// // arrow function call
// printSum(12, 12);

// ------------------------------------------------

// arrow function (without parameters) ->
// let/var/const variableName = (params1, params2, ..., paramsN) => {
//     // statements
// }

// e.g.
// let printText = () => {
//   console.log("Hello Some Text!");
// };

// printText();

// -------------------------------------------------------

// arrow function (without curly braces) ->
// let/var/const variableName = (params1, params2, ..., paramsN) => // statement

// // e.g.
// let mult = () => 5 * 3;

// console.log(mult());

// ---------------------------------------------------------------
// arrow function (without parenthesis) ->
// let/var/const variableName = params1 => {
//     // statements
// }

// // e.g.
// let numberSquare = n1 => n1 * n1;

// console.log(numberSquare(12));

// ---------------------------------------------------------------

// IIFE (Function Expression) (Anonymous Function)
// - Immediately Invoked Function Expression
// - this function get called immmediately.

// Usage ->
// - to create a distinct local scope
// - to free up unnecessory variable space.
// - to run initialization code.

// ((n1, n2) => {
//   console.log(n1 * n2);
// })(12, 13);
// ------------------------------------
// let rollNo = 5;
// console.log(rollNo);

// (() => {
//   let rollNo = 10;
//   console.log(rollNo);
// })();