// ------------------------------map--------------------------------------
// const numbers = [1, 2, 3, 4, 5];

// // const newArray1 = numbers.forEach((num) => console.log(num * 2)); //print
// const newArray1 = numbers.forEach((num) => num * 2); //does not returns anything
// const newArray2 = numbers.map((num) => num * 2); //returns the new/modified array

// console.log(newArray1); //undefined
// console.log(newArray2); //[2, 4, 6, 8, 10]

// -----------------------------------------------------------------------
// ------------------------------filter-----------------------------------

// const mobiles = [
//   {
//     storage: "16GB",
//     ram: "4GB",
//     displaySizeInInch: 6.5,
//     brand: "MI",
//   },
//   {
//     storage: "16GB",
//     ram: "4GB",
//     displaySizeInInch: 5,
//     brand: "Realme",
//   },
//   {
//     storage: "64GB",
//     ram: "4GB",
//     displaySizeInInch: 4.5,
//     brand: "Samsung",
//   },
//   {
//     storage: "128GB",
//     ram: "4GB",
//     displaySizeInInch: 6.7,
//     brand: "MI",
//   },
// ];

// const mobilesByDisplaySize = mobiles.filter((mobile) => {
//   if (mobile.displaySizeInInch >= 5) {
//     return true;
//   }
// });
// console.log(mobilesByDisplaySize);
// ------------------------------------------------------
// const miMobiles = mobiles.filter((mobile) => {
//   //   if (mobile.brand === "MI" || mobile.brand === "Realme") {
//   if (mobile.brand === "MI") {
//     return true;
//   }
// });
// console.log(miMobiles);

// or
// const miMobiles = mobiles.filter((mobile) => mobile.brand === "MI");
// console.log(miMobiles);

// -----------------------------------------------------------------------
// --------------------------reduce---------------------------------------

// const numbers = [17, 4, 7, 4, 5];
// const sum = numbers.reduce((result, curr) => result + curr);
// const mult = numbers.reduce((result, curr) => result * curr);
// console.log(sum);
// console.log(mult);

// -----------------------------------------------------------------------