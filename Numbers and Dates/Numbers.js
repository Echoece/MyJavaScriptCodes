'use strict'
//----------------------------------------------
// conversion from string to number:
// we can convert using the + or the Number()
let stringNumber= '23'
console.log(typeof stringNumber);         // output : string
console.log(typeof +stringNumber);        // output : number
console.log(typeof Number(stringNumber));        // output : number
//----------------------------------------------

//----------------------------------------------
// parsing from string to number:
// it accept two parameter input string and radix(number base, for example 10 for decimal, 16 for hex etc). it will match
// till a non number is found and stop matching at that point
let parseString = '1246@gmail.com';
console.log(Number.parseInt(parseString));              // output: 1234
console.log(Number.parseInt("hello1234"));       // output : NaN  cause at first position it found a non number.
//----------------------------------------------

//----------------------------------------------
// checking if its a number or not with isNaN
console.log(Number.isNaN(20));                                       // output : false
console.log(Number.isNaN('20'),Number.isNaN(+'20'));         // output : false  false
console.log(Number.isNaN(+'20x'));                                   // output : true
// better version of checking is the isFinite, it returns true if its a number. but it dont have any bug with infinity case.
console.log(Number.isFinite(20));                                     // output : true
console.log(Number.isFinite('20'),Number.isFinite(+'20'));      // output : false true
console.log(Number.isFinite('20x'));                                     // output : false