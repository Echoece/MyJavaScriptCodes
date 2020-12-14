'use strict'

//It has exactly same syntax as spread operator but does the opposite. It collects multiple elements and condense them in an array.
// Important : rest operator must be the last formal parameter, otherwise it will throw an error.

// we can add indefinite number of arguments in an array. for example
const add = (...a)=> {
    let sum=0;
    a.forEach((item)=>{
    sum = sum + item;
    });
    return sum;
};
console.log(add(2, 3,4,5));  // output: 14
//----------------------------------------------------------

// we can collect bunch of data using rest operator.
// 1. from array:
let [...name]=["amin","karim","mahin"];
console.log(name); //output : [ 'amin', 'karim', 'mahin' ]
