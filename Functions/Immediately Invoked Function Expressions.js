'use strict'
// these kind of functions are executed as soon as they are mounted on the stack. hence the name immediately invoked at the start.
// and these are written as function expression.

// two steps to convert a regular function to IIFE:
// 1. wrap the definition within a closed pair of parentheses, this will create Function Expression.
// 2.  add another pair of parentheses and a semicolon to mark the end of the statement

function Greet() {
    console.log("Welcome");
}

//functional declaration in IIFE
(function() { console.log("Welcome"); })();

// arrow function in IIFE
( ()=> console.log("welcome") )  ();

