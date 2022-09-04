// -------------------Rest Operator & Spread Operator ----------->

// 1. Rest Operator ->
// - it is denoted by ...
// - it is used to group all the individual elements into a array.

// without using rest operator ->
// function sum(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10) {
//   let numbersArray = [
//     num1,
//     num2,
//     num3,
//     num4,
//     num5,
//     num6,
//     num7,
//     num8,
//     num9,
//     num10,
//   ];

//   console.log(numbersArray); //we can send it to backend
// }
// sum(12, 23, 43, 3, 56, 45, 67, 78, 56, 45);

// by using rest operator ->
// function sum(...numbersArray) {
//   console.log(numbersArray); //we can send it to backend
// }

// sum(34, 23, 43, 3, 56, 45, 67, 78, 56, 45);
// ---------------------------------------------------

// 2. Spread Operator ->
//  - it is denoted by ...
// - it is used to spread the elements of an array.

// without using spread operator ->
// function sum(numArray) {
//   let num1 = numArray[0];
//   let num2 = numArray[1];
//   let num3 = numArray[2];
//   let num4 = numArray[3];
//   let num5 = numArray[4];
//   let num6 = numArray[5];
//   let num7 = numArray[6];
//   let num8 = numArray[7];
//   let num9 = numArray[8];
//   let num10 = numArray[9];
//   console.log(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10); //we can send it to backend
// }
// let numbersArray = [12, 23, 43, 3, 56, 45, 67, 78, 56, 45];
// sum(numbersArray);

// by using spread operator ->
// function sum(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10) {
//   console.log(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10); //we can send it to backend
// }

// let numbersArray = [12, 23, 43, 3, 56, 45, 67, 78, 56, 45];
// sum(...numbersArray);