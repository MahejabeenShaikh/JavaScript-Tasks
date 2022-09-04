// NaN - Not a Number

// Type Conversion vs Type Coercion

// 1. Type Conversion

// 1. + (convert any value into number) ->
// let num1 = +prompt("Enter First Number!"); //"10"
// let num2 = +prompt("Enter Second Number!"); //"5"

// console.log(num1 + num2); //"10" + "5" = "105"
// -------------------------------------
// 2. Number() (convert any value into number) ->
// let num1 = prompt("Enter First Number!"); //"10"
// let num2 = prompt("Enter Second Number!"); //"5"

// console.log(Number(num1) + Number(num2)); //10 + 5 = 15

// --------------------------------------------
// 3. convert any value into string ->
// Number -> String
// let num1 = 50;
// let string = String(num1);
// console.log(string);
// -------------------------------------------------
// 4. Any value to Boolean Conversion ->
// let booleanValue = Boolean(7);
// console.log(booleanValue); //true

// -------------------------------------------------
// 4. Any valid number to BigInt Conversion ->
// console.log(BigInt("4535435"));

// ---------PARSING INTO ANOTHER TYPE (STRICT THAN NORMAL CONVERSIONS)--------
// let num = Number("454.5hello");
// console.log(num); // NaN

// let integer = parseInt("454.5hello");
// console.log(integer); // 454

// let integer1 = parseInt(454.045);
// console.log(integer1); // 454

// let float = parseFloat("454.5hello");
// console.log(float); // 454

// let float1 = parseFloat(40.045);
// console.log(float1); // 454
