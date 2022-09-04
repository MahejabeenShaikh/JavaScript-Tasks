// Web Storage - (key, value) -> (setItem, getItem, removeItem, clear)

// const arrayToSave = [234, 34, 324, true, { key: "hello" }, 23.6];

// 1. localStorage ->

// Add a Value to LocalStorage
// localStorage.setItem("username", "feros123");
// localStorage.setItem("password", "$trongP@$$");
// localStorage.setItem("unwanted", "$trongP@$$");

// access from localStorage
// let username = localStorage.getItem("username");
// alert(username);

// remove value from localStorage
// localStorage.removeItem("unwanted");

// to remove all the values from localStorage
// localStorage.clear();

// -------------------------------------------------------
// 2. sessionStorage ->

// Add a Value to LocalStorage
// sessionStorage.setItem("username", "feros123");
// sessionStorage.setItem("password", "$trongP@$$");
// sessionStorage.setItem("unwanted", "$trongP@$$");

// access from localStorage
// let username = sessionStorage.getItem("username");
// alert(username);

// remove value from localStorage
// sessionStorage.removeItem("unwanted");

// to remove all the values from localStorage
// sessionStorage.clear();

// 3. cookiees ->

// JSON.stringify() & JSON.parse() ->

// to store by converting data like array or object to plain string
// localStorage.setItem("array", arrayToSave);
// localStorage.setItem("array", JSON.stringify(arrayToSave));

// to retrieve and convert the string back to it's original form
// let array = JSON.parse(localStorage.getItem("array"));
// console.log(array);