'use strict'
// This is not hoisted. So, order is important here since the code will execute from top to bottom.


// here we must maintain order , if we call the function before defining it, we will get reference error.
const add=function(a,b){
    return a+b;
}

console.log(add(1, 2));