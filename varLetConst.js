// -------------let vs const vs var--------------
// 1. var - global scoped, ES5 [creates an property on window object]
// 2. let & const - local scoped, ES6 [not create property on window object]

// var vs let
// - we should prefer let over var.
// - both are almost same in terms of the functionality.
// - used to create variables in javascript.
// - only declaration of variable is allowed.
// for e.g.
// let a; //valid
// console.log(a);

// const
// - const keyword is used to declare constant variables.
// - constant is something that you can modify.
// for e.g. const pi = 3.14;
// - only declaration of constant variable is not allowed.
// for e.g.
// const a; //not valid