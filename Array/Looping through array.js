'use strict'

let fruits = ['apple','banana','orange'];
let numberArray = [1,2,3,4,5,8];

//------------------------------------------------------
// •	for each takes a callback function and run it on each element, it doesnt return a new array.
fruits.forEach( (item,index) => console.log(`${item} has index of ${index}`));
//------------------------------------------------------


//------------------------------------------------------
// •    filter also takes a callback function, but the difference is it checks the return value. In other words it
//      filters the elements which doesnt meet the callback function condition

console.log(numberArray.filter(element => element !== 1));
//------------------------------------------------------

//------------------------------------------------------
// •    important note: both foreach and filter doesnt return a new array, the original array goes through no change,
//      to change the original array we need the map method. it returns a new array base on our condition,
let mappedNumberArray= numberArray.map(element=> element+2);
console.log(mappedNumberArray);
//------------------------------------------------------

//------------------------------------------------------
// •    reduce method is used to reduce the array to a single value. It returns the single value
// syntax : array.reduce( function(total, currentValue, currentIndex, arr),initialValue )
/*
Parameter: This method accepts five parameters as mentioned above and described below:
->  function(total, currentValue, index, arr): It is the required parameter and used to run for each element of array.
    It contains four parameter which are listed below:
        1. total: It is required parameter and used to specify the initialValue, or the previously returned value of the function.
        2. currentValue: It is required parameter and used to specify the value of the current element.
        3. currentIndex: It is optional parameter and used to specify the array index of the current element.
        4. arr: It is optional parameter and used to specify the array object the current element belongs to.
->  initialValue: It is optional parameter and used to specify the value to be passed to the function as the initial value. If not
    specified the first value of the array will be default value.
*/
let array1 = [5,8,2,4,7,1];
array1.reduce( (total, currentValue,currentIndex,array1)=>{
    console.log(`${total} , ${currentIndex}, ${currentValue}`);
    return total+currentValue;
}, 10);

// output : 10 , 0, 5
//          15 , 1, 8
//          23 , 2, 2
//          25 , 3, 4
//          29 , 4, 7
//          36 , 5, 1

// explanation : i specified the initial value to 10 (for example, sum = 10); total is 10, start from index zero and start adding.
// if i hadn't specified the initial total, it would take the first value, and start from index one.

//------------------------------------------------------