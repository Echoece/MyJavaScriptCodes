'use strict'
let fruits = ['apple','banana'];
let numberArray = [1,2,3,4,5,1];


// •	Access an Array item using the index position
console.log(fruits[1]);
// •	Add an item to the end of an Array, this method returns the new length value of the array.
console.log(fruits.push("mango"));  // output : 3

// •	Add an item to the beginning of an Array. this method returns the new length value of the array.
console.log(fruits.unshift("orange")); // output : 4

// •	Remove an item from the end of an Array, it returns the removed element.
console.log(fruits.pop()); // output: mango

// •	Remove an item from the beginning of an Array. it returns the removed element.
console.log(fruits.shift());

// •	Find the index of an item in the Array
console.log(fruits.indexOf("apple"));

// •    reversing an array.
fruits.reverse();

//      Returns a new array that is this array joined with other array(s) and/or value(s).
let newArray=fruits.concat(numberArray);
//       creates a new array with all sub-array elements concatenated into it
const arr2 = [0, 1, 2, [ [3, 4] ] ];
console.log(arr2.flat(2));

//------------------------------------------------------


//------------------------------------------------------
// •	Remove an item by index position, we can also define how many items to delete as a 2nd parameter. the function will return
//      the deleted items.
let vegetables = [ 'cabbage', 'turnip ', 'radish','carrot'];

console.log(vegetables.splice(1,2));   // output : [ 'turnip ', 'radish' ]
console.log(vegetables);                                // output : [ 'cabbage', 'carrot' ]

// •	Copy an Array , same as splice, we can define the start index and how many item to copy as well as first and second parameter.
let newVegetable=vegetables.slice(0,1);
console.log(newVegetable);                                   // output : [ 'cabbage' ]
// we can do this in reverse direction as well, using the negative value of the index, for example
let endVegetables = vegetables.slice(-1);
console.log(endVegetables);                                 // output  : [ 'carrot' ]
//------------------------------------------------------

