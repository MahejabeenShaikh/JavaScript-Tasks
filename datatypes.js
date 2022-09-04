// manual way (without variables)
// console.log("Addition : ", 12353 + 34550);
// console.log("Sub : ", 12353 - 34550);
// console.log("Mult : ", 12353 * 34550);
// console.log("Div : ", 12353 / 34550);
// console.log("Mod : ", 12353 % 34550);

// using varibales

// let a = 12353;
// let b = 34550;
// console.log("Addition : ", a+b);
// console.log("Sub : ", a-b);
// console.log("Multi : ", a*b);
// console.log("Div : ", a/b);
// console.log("Mod : ", a%b);


// ----------------------------------------------------------------------------------------------------------------------------------

// --------------rules & naming conventions -------------->

// 1. variable name should not start with digit.
// var 4test = 5; //invalid
// var t5est4 = 5; //invalid

// 2. variable names should be written in camel case.
// this Is A Boy.
// valid (but wrong) ways - StudentName, STUDENTNAME, Studentname, Student_Name
// valid way - studentName, studentRollNumber

// 3. you can not use special characters or space in variable names.
// var student Name = "Prakash"; //invalid
// var $studentName = "Prakash"; // $, _  //valid
// var studentName% = "Prakash"; //invalid because %, @, #, ^, &, * not allowed

// 4. you can't update the value of a constant variable..
// const pi = 3.14; //this value can not be updated.
// pi = 4.56; //not allowed, it will give error

// 5. constant variable name must be in capital case
// var studentName; //undefined //valid
// const PI = 3.14;
// const STUDENT_NAME = "Raju"; //valid