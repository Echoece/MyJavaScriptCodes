'use strict'
// array sort method sort it in ascending order by default. we can pass the compare function inside to define the sorting
// according to our need.

let months = ['March', 'Jan', 'november', 'Dec'];
// default sorting - ascending
console.log(months.sort());         // output : [ 'Dec', 'Feb', 'Jan', 'March' ]

// custom sorting : ascending comparing to 2nd letter
console.log(months.sort((a, b) => {
    let x,y;
    if(a.charAt(1)!==b.charAt(1)){
        x= a.charAt(1);
        y= b.charAt(1);
    }
    return  x>y? 1 : -1;
    })
);

// number sorting examples
let numbers = [4, 2, 5, 1, 3];
console.log(numbers.sort((a, b) =>  b-a));      // output : [ 5, 4, 3, 2, 1 ]
console.log(numbers.sort((a, b) =>  a-b));      // output : [ 1, 2, 3, 4, 5 ]
