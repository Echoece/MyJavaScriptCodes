'use strict'

// for operator precedence, check chart
// usual operators are same as other languages.

//	The + operator converts the variables to strings
const a = 5;
const  b= true;
const  c= 'hello';
//some interesting examples
console.log(a+b+c) ;  // output: 6hello  (a+b = 5+1 and then concat as string)
console.log('23' + '10'+ '3');  // output: 23103  ( string concat will take place)
console.log('23' - '15');  // output: 8 (mathematical operation will happen)
