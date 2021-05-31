'use strict'
//----------------------------------------------
// square or square root:
// 5 ^ 3
console.log('2 square 2 is = '+5 ** (2));
// 25 ^ (1/2)  or root25
console.log('25 square root 2 is = '+25 ** (1 / 2));
// we can use the pow() function as well
console.log('3 square 2 is = '+Math.pow(3, 2));
//----------------------------------------------

//----------------------------------------------
// min and max
const values = [1,2,6,7,2,4,12];
console.log('max value is =  '+Math.max(...values));
console.log('min value is =  '+Math.min(...values));
//----------------------------------------------

//----------------------------------------------
// Returns the absolute value of x.
console.log(Math.abs(-2));          // output : 2
// all the sin , asin (sin inverse),  and sinh functions are there. check mdn for details.
// all the log, ln ,exp etc are there as well.

// Returns the smallest integer greater than or equal to x.
console.log(Math.ceil(23.4));       // output : 24
// Returns the largest integer less than or equal to x.
console.log(Math.floor(23.4));      // output : 23
// Returns the value of the number x rounded to the nearest integer.
console.log(Math.round(23.6));      // output : 24  .depending on the fraction it can be 23 or 24.
// Returns the integer portion of x, removing any fractional digits.
console.log(Math.trunc(23.5));

// Returns the sign of the x, indicating whether x is positive, negative, or zero. return value is:
//                              1 for positive, -1 for negative, 0 for positive 0 , -0 for negative 0.
console.log(Math.sign(0));
//----------------------------------------------

//----------------------------------------------
// random Number: random() function gives a value from 0 to less than 1.
console.log(Math.random());     // expected output: a number from 0 to <1
// 1. getting random integer between two values:
let randomIntGenerator = (min, max) => {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random()* (maxInt-minInt)+ minInt);
}
console.log(randomIntGenerator(1, 3)); // expected values 1 and 2. 3 is not inclusive

// 2. getting random integer between two values, but in this case max value is inclusive:
let randomIntGenerator2 = (min, max) => {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random()* (maxInt-minInt+1)+ minInt);
}
console.log(randomIntGenerator2(1, 3)); // expected values 1 and 3.
//----------------------------------------------

