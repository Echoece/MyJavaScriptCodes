'use strict'
// javascript has dynamic typing. It means we do not define the date type of the value stored in a variable. Instead the type
// are determined automatically. for example,
let x= 10;   // here x is int type
x= "hello"   // now x become string.
// this is automatically done , its known as type coercion. when we do the conversion manually , its know as type conversion.

// there are 7 data types in javascript as of now. most used are :
// 1. Number: used for decimal and integers.
// 2.String: sequence of characters.
// 3.Boolean: logical true or false.
// 4.undefined: value taken by variable that is not initialized.
let z; // here z is undefined in both value and type.

// 5.null: means empty value. null values should have null type as well, but due to old bug its treated as object. and for legacy reasons
//         this bug was never fixed to keep backwards compatibility.
let y=null;
console.log(typeof y); //output : object

// last two are symbol and bigint which are rarely used.

