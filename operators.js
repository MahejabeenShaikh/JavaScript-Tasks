// JavaScript Operators - 
// 1. Arithmetic (+, -, *, /, %),
// 2. Logical (&&, ||, !)
// 3. Boolean (true, false)
// 4. Comparison (<, >, <=, >=, ==, ===)

// ----------------------1. ARITHMATIC OPERATORS-----------------

// var a = 5;
// var b = 10;

// console.log("Addition : ", a+b);
// console.log("Sub : ", a-b);
// console.log("Multi : ", a*b);
// console.log("Div : ", a/b);
// console.log("Mod : ", a%b);

// -------------------2. LOGICAL OPERATORS-----------------
// 1. AND [&&] =>
// - if both conditions are true then it returns true otherwise false

// 2. OR [||]
// - if any one or both the conditions are true then it returns true otherwise false

// 3. NOT [!]
// - it returns reverse of what it is. i.e. returns true for false & false for true.

// -------------------3. BOOLEAN OPERATORS-----------------
// 1. TRUE (1)
// 2. FALSE (0)

// -------------------4. COMPARISON OPERATORS-----------------

// 1. GREATER THAN => 10 > 5 [true]

// 2. LESS THAN => 10 < 10 [false]

// 3. GREATER THAN EQUAL TO => 10 >= 10 [true]

// 4. LESS THAN EQUAL TO => 10 <= 10 [true]

// 5. EQUAL EQUAL TO => (a = 10, b = "10") a == b [true]

// 6. INCREMENT [++] & DESCREMENT [--]

// var a = 10;
// console.log(a); //10
// a++; //10+1
// console.log(a); //11

// var b = 10;
// console.log(b); //10
// b--; //10-1
// console.log(b); //9

// PREFIX and POSTFIX

// a++; //calculation and then increase value by 1
// ++a; //increase value by 1 and then do calculation

// 7. STRICTLY EQUAL TO => (a = 10, b = "10") a === b [false]

//  ----------------[Difference Between == & ===]----------------

// equal equal to (==) operator will only check for the value which is present inside the variable and returns true if it's matching.

// while on the other hand, strictly equal to (===) operator will not only checks the value but also checks the datatype of those variables and only returns true if both value and data type is matching otherwise it returns false.

//  --------------------[typeof operator]-------------------
// typeof operator is used to check the data type of a variable.
// var a = 5;
// var b = "krishna";
// var c = false;

// var typeOfA = typeof a;
// console.log(typeOfA); //number

// console.log(typeof b); //krishna
// console.log(c); //false
// console.log(typeof c); //boolean

// c = "Ramesh";

// console.log(c); //Ramesh
// console.log(typeof c); //string