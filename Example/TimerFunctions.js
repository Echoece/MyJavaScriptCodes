'use strict'
//------------------------------------------------------
// setTimeout function sets a timer which executes a function or specific code once the timer expires.

// -> first parameter is the function to be executed after the timer expires
// -> second parameter is the delay (if not defined, zero is default)
// -> third parameter is the additional arguments for the function. Its optional as well. we have access to
//    them in the callback function.

const randomTimerFunction = setTimeout( (person1, person2)=>console.log(`${person1} and ${person2}`) ,
    3000,
    ' Alif','Malif' );

console.log('this will be printed first,cause of the delay in the parameter');

// the function is immediately executing if we call the function inside the setTimeOut method.. To avoid this we need
// to pass a reference of the function. for example,
const callbackFunction = (person1, person2)=>console.log(`${person1} and ${person2}`);
const randomTimerFunction2 = setTimeout(callbackFunction, 3000, 'alif','Malif');
//------------------------------------------------------


//------------------------------------------------------
// setinterval is similar, just it executes the callback function in a loop instead of once. their syntax is same
const anotherTimerFunction = setInterval((a,b)=>console.log(`${a} and ${b}`),1000,1,2);

//------------------------------------------------------