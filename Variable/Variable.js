'use strict'
// let and var are mutable variable. difference is var is global scope and let is block scoped.let is the preferred way now.
// naming convention:
//      •	Variable names con only contain numbers, letters _ and $.
//      •	Variable names can’t start with a number.
//      •	Can’t use keywords as a variable name.
let x = 10;

// if we just declare a variable, it will be have undefined in both value and data type.
let sample;
console.log(sample); // output : undefined
//-------------------------------------------------------------

// there are 5 falsy values in javascript, 0 , "", undefined, null , NaN . These are treated as false in conditional statements.
// we have to use nullish coalesric operator , in case we want to make a OR logic with 0 or ""  (empty string)
let number = 0;
console.log(number || 10);  // output : 10 (number is treated as false here, and 10 is counted)
//console.log(number ?? 10);  // output : 0  (number is treated as zero here, and as such its condition passed)

//--------------------------------------------------------------

// we must initialize const variables, otherwise it will give an error.
// const are immutable variables. means we can change them once we assign.
const y=100;
// but this for other data structure this rule is a bit odd, since we can actually manipulate them to add/remove item.
const food=['mango','banana'];
food.push('apple');
console.log(food);
// here we dont actually

