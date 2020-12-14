'use strict'
// ES6 version of function
// arrow function
// 1.	It does’t have access to this or super. If we use this in arrow function, it will get the parent context.
// 2.	Shouldn’t be used as methods or constructor.
// 3.	Does’t have arguments or new.target keyword.
// 4.	Can’t use yield, within its body.
// 5.	Not suitable for call, apply and bind methods, which generally rely on establishing a scope.

// 1. No argument/ exactly one expression
const fun1= ()=> console.log("hello");

// 2. one argument/more than one expression.
const fun2 = a=> {
    console.log("hello");
    console.log("hi");
}

