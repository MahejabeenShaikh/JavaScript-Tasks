// Hoisting ->
// 1. it moves our function declarations and variable declarations to the top of it's own scope.
// 2. hoisting does not affect variables declared using let & const keywords.
// 3. it does not work on function expressions like arrow functions, anonymous functions etc.

// sum();
// function sum(n1, n2) {
//   console.log(n1 + n2);
// }
// // ----------------------------
// console.log(a); //undefined
// a = 6;
// var a;
// console.log(a); //6
// // -------------------------------
// // var minus; //undefined [defined by javascript]

// minus(1, 2); //minus is not a function

// var minus = function (n1, n2) {
//   console.log(n1 - n2);
// };

// minus(1, 2); //no error