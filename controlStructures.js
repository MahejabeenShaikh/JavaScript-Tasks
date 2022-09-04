// Control Structures ->
// - it is used to take some decisions based on conditions.
// - we can execute/run our code conditionally.
// - if the condition is true, then we run the code... if not, then we skip it.
// - it provides decision making abilities to our code/program.

// 1. if -> if the condition is true, we'll execute a block of code.

// syntax ->
// if (condition) {
//   // statements;
// }

// example ->
// let age = 10;

// if (age >= 18) {
//   console.log("Voting Allowed for the Age : " + age);
// }

// -----------------------------------------------------

// 2. if else ->
// - if the condition is true, we'll execute (if) block of code.. else we'll execute another block of code (ie. else block).
// - only one block of code can be executed at a time.

// syntax ->
// if (condition) {
//   // statements;
// } else {
//   // statements;
// }

// example ->

// let age = 10;

// if (age >= 18) {
//   console.log("Voting Allowed!");
// } else {
//   console.warn("You're Minor, Please Try Next Year!");
// }

// -----------------------------------------------------

// 3. nested if ->

// syntax ->
// if (condition) {
//   if (condition) {
//     // statements;
//   }
// } else {
//   // statements;
// }

// example ->
// let age = 100;
// if (age >= 18) {
//   if (age <= 100) {
//     console.log("Voting Allowed!");
//   } else {
//     console.log("You're Not A Human!");
//   }
// } else {
//   console.warn("You're Minor, Please Try Next Year!");
// }

// -----------------------------------------------------

// 4. if else if ->

// syntax ->
// if (condition) {
//   // statements;
// } else if (condition) {
//   // statements;
// }

// example ->
// let age = 14;

// if (age >= 18) {
//   console.log("Valid Allowed!");
// } else if (age >= 15) {
//   console.log("Try After Few Years!");
// } else {
//   console.log("You're a Child 👶, Play with ZunZuna!");
// }

// -----------------------------------------------------

// Practice :
// // let netWorth = 1000000; //1M
// let netWorth = prompt("Enter Your NetWorth!");

// if (netWorth >= 1000000) {
//   console.log("You're A Millionaire!");
// } else if (netWorth >= 700000) {
//   let res = confirm("You're Near About A Millionaire!");
//   console.log(res);
// } else {
//   console.log("Work Hard Man!");
// }
// ------------------------------------------------------

// 5. for loop ->

// syntax ->
// for (initialization; condition; incr / decr;) {
//   // statements;
// }

// example ->
// for (let i = 1; i <= 10; i++) {
//   console.log(2 + " * " + i + " = " + i * 2); //2 * 2 = 4
// }

// ------------------------------------------------------

// 6. while loop ->

// syntax ->
// let i = initialValue;
// while (condition) {
//   // statements;
//   //   i++/--;
// }

// example ->
// console.log("While Start");
// let i = 1;
// while (i <= 10) {
//   console.log(2 + " * " + i + " = " + i * 2);
//   i++;
// }

// 7. do-while loop ->
// syntax ->
// let i = initialValue;
// do {
//   // statements;
//     i++/--;
// } while (condition);

// example ->
// console.log("Do-While Start");
// let j = 11;
// do {
//   console.log(2 + " * " + j + " = " + j * 2);
//   j++;
// } while (j <= 10);

// 8. switch case ->

// case 1 -> MERN
// case 2 -> MEAN
// case 3 -> PHP
// case 4 -> JAVA
// default -> always execute if there is no match -> NOT INTRESTED

// Syntax ->
// switch(choice){
//     case choice1:
//         statements;
//         break;
//     case choice2:
//         statements;
//         break;
//     case choice3:
//         statements;
//         break;
//     case default:
//         statements;
// }

// Example ->
// let choice = prompt(`Enter Your Choice!
// 1. MERN
// 2. MEAN
// 3. PHP
// 4. JAVA`);

// switch (+choice) {
//   case 1:
//     //   case 2:
//     console.log("MERN");
//   // console.log("MEAN");
//   case 2:
//     console.log("MEAN");
//     break;
//   case 3:
//     console.log("PHP");
//     break;
//   case 4:
//     console.log("JAVA");
//     break;
//   default:
//     console.log("NO COURSE CHOOSEN!");
// }

// 9. keywords - break, continue

// 9.1. break - we use this keyword to break the flow of a block of statements.

// example ->
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     console.log("found it!");
//     break;
//   }
//   console.log(i);
// }

// 9.2. continue - we use this keyword to skip a iteration in our loop.

// example ->
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     // console.log("5 found, so we skip it!");
//     continue;
//   }
//   console.log(i);
// }