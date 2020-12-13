'use strict'
//  == operator test for abstract equality and does the necessary type conversion before the equality operation.
//  === operator test for strict equality and does not the necessary type conversion before the equality operation.

console.log(9 == '9');   // true  (it does the type conversion)
console.log(9 === '9');  // false (it doesnt do the type conversion)

// Another example with string literal and object
console.log("hello" == new String("hello"));   // true
console.log("hello" === new String("hello"));  // false

// boolean example
console.log(true == '1');     // true
console.log(true === '1');    // false
