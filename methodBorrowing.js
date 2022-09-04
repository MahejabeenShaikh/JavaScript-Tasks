// -----------------------Method Borrowing & this Keyword [MOST IMP]------------------------------

// let sachinsLaptop = {
//   // properties
//   ownerName: "Sachin",
//   brand: "Lenovo",
//   processor: "i9 11th gen",
//   storage: "5TB",
//   battery: "10400WaH",
//   weight: "1.4KG",
//   os: "Windows 11",
//   graphics: "Nvdia Geforce MX350",

//   // methods
//   onStart: function () {
//     console.log("Computer Is Getting Started..!");
//   },
//   onShutDown: function () {
//     console.log("Computer Is Shutting Down..!");
//   },
//   quickHeal: function (purchaseDate, color) {
//     console.log(
//       `This Laptop Is Owned By ${this.ownerName} & It's Purchased On ${purchaseDate} Having Color ${color}`
//     );

//     console.log("Removing Viruses...!");

//     setTimeout(() => {
//       console.log("System Cleaned, 100 Viruses Removed...!");
//     }, 3000);
//   },
// };

// sachinsLaptop.quickHeal("01/01/2022", "Metalic Black");

// -----------------------------------------

// let gauravsLaptop = {
//   // properties
//   ownerName: "Gaurav",
//   brand: "HP",
//   processor: "i9 11th gen",
//   storage: "5TB",
//   battery: "10400WaH",
//   weight: "1.4KG",
//   os: "Windows 11",
//   graphics: "Nvdia Geforce MX350",

//   // methods
//   onStart: function () {
//     console.log("Computer Is Getting Started..!");
//   },
//   onShutDown: function () {
//     console.log("Computer Is Shutting Down..!");
//   },
// };


// ----------------------------Method Borrowing (Call, Apply & Bind)-----------------------------------
// 1. Call ->
// sachinsLaptop.quickHeal.call(gauravsLaptop); //without parameters
// sachinsLaptop.quickHeal.call(gauravsLaptop, "15/01/2021", "Silver"); // with parameters

// 2. Apply ->
// sachinsLaptop.quickHeal.apply(gauravsLaptop); // without parameters
// sachinsLaptop.quickHeal.apply(gauravsLaptop, ["15/01/2021", "Silver"]); // with parameters

// 3. Bind ->
// let gauravsQuickHeal = sachinsLaptop.quickHeal.bind(gauravsLaptop); //without parameters
// gauravsQuickHeal(); //without parameters
// --------------------------------------------
// let gauravsQuickHeal = sachinsLaptop.quickHeal.bind(gauravsLaptop); //with parameters
// gauravsQuickHeal("15/01/2021", "Silver"); //with parameters
// gauravsQuickHeal("13/07/2019", "Purple"); //with parameters