console.log("Day2");
// JS Objects :- String, Number, Boolean, Array, Date, Math, Regx, Error, Function, Object
// everything in js are fn and object
// inside the object props and functions
// UserName = "Mohamad";
// console.log(UserName);
// console.log(typeof UserName);
// console.log(UserName.split("").reverse("").join(""));
// create a new object on heap
// Fn Constructor
// var mystr = "Medo"; // literal creation
// var newstr = new String("Medod"); // Fn Construction
// console.log(newstr);
// the best is literal as a performance is faster than construct fn

// typeof(mystr)
// "string"

// typeof(newstr)
// "object"
// Date
// var date = new Date();

// console.log(date.getTime());

// ARRAY
// arr def
// var myArr = []; // literal creation
// myArr = [2, "aliaa", 3, 45, 9];
// myArr.push(3);
// console.log(myArr);

// constructor creation
// var newArr = new Array();
// newArr.push(2, "aliaa", 3, 45, 9, 3456);
// newArr[2] = 1234;
// console.log(newArr);
// var cloneArr = newArr;
// cloneArr[2] = 234;
// console.log(cloneArr);

// var arr = [2, "aliaa", 3, 45, 9, 3456];
// console.log(arr);
// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
//   newArr[i] = arr[i];
// }
// newArr[2] = "heeloeoe";
// console.log(newArr);

// Function

// default value x,y=0 ecma 15
// function myFun(x = 0, y = 0) {
//   console.log(`welcome ${x}, ${y}`);
// }
// calling
// myFun();

// push 0 if they undefined
// function myFun(x, y) {
//   // El Ternary
//   //   x = 0 || x ? x : 0;
//   // el Or
//   x = x || 0;
//   y = 0 || y ? y : 0;
//   console.log(`welcome ${x}, ${y}`);
//   return x;
// }
// myFun();
// myFun(3);
// var d = myFun(3);
// console.log(d);

// function test() {
//   console.log(40);
// }
// test("hi"); // print 40
// adding many numbers
// function Sum() {
//   var res = 0;
// if we make res bas = undefined + 0 = NaN
//   //   console.log(arguments);
//   for (let i = 0; i < arguments.length; i++) {
//     res += arguments[i];
//   }
//   return res;
// }
// // Sum(3, 4, 5, 6);
// var res = Sum(1, 3, 4);
// console.log(res);

// Scope
// var g = "Global Scope ";
// function func1() {
//   var var1 = "func1";
//   var g = "shadowing";
//   console.log(g);
//   console.log(var1);
// }
// func1(); // func1, global scope
// console.log(g); // Global Scope
// console.log(var1); // Error is not defined

// function a1() {
//   function a2() {
//     console.log("child");
//   }
//   a2();
//   console.log("Parent");
// }
// // Execution Context
// a1();
// function f1(x, y) {
//   if (x > 3) {
//     var z = 3;
//   } else {
//     var zz = 3;
//   }
//   console.log(z, zz);
//   zzz = 300;
// }
// f1(1, 3); // undefined 3
// alert(zzz); // 300

// function b() {
//   var myvar;
//   console.log(myvar);
// }
// function a() {
//   var myvar = 2;
//   console.log(myvar);
//   b();
// }
// var myvar = 1;
// console.log(myvar);
// a();
// console.log(myvar);
// Scope Chain

// Variable Hoisting  :- before  js ( execute ) interpret the code make var x;
// console.log(x); // undefined
// var x = 9;
// console.log(x); // 5
// test(); // 3ml hoisting for all global script {var, function}
// function test() {
//   console.log("Welcome ");
// }
// solution is let and const
// The hoisting is  ay var or ay fn {global} can used before el declaration f a3la 7aga fe scope bta3o
// console.log(test());
// function test() {
//   console.log("hi");
// }

// var t = test;
// t();

// Anonymous fn hasn't name
// var f = function (a, b) {
//   return a + b;
// };
// var x = f(2, 4);
// console.log(x);

//self invoked fn
// var f = (function (a, b) {
//   return a + b;
// })(2, 4);
// console.log(f);
// anonymous fn invoked just after it declaration
// console.log(s);
// s();
// fn expression
// var s = function () {
//   console.log("func");
// };
// s();
// fn declaration
// console.log(test());
// function test() {
//   console.log("func");
// }
// callback fn
// Try Catch
// function test(x, y) {
//   if (arguments.length === 2 && x && y) {
//     console.log(x, y);
//   } else {
//     throw "wala mthzrsh";
//   }
// }
// console.log(test(3, 7));
// debugger :- make break point using keyword debugger;
// debugger;
// console.log("welcome");
