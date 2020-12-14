'use strict'

// It’s basically unpacking the array values into distinct variable, without assigning them one by one.

// for example, instead of assigning value manually like (let x = arr[0] and so on) we can do,
const arr = [1,2,3,4];
const [x,y,z] = arr;
console.log(x, y, z);  // output: 1 2 3
// ------------------------------------------

// another example, we can skip some values and take only what we need. Here we only take first and 3rd value skipping the 2nd one.
const [a,,c]=arr;
console.log(a, c);
//-------------------------------------------

// we can use rest operator to take bunch of data together, but its limitation is it always have to be in the last parameter
let names = ["alif","karim","mahin","margina"]
let [firstName, ,...restOfNames] = names;
console.log(firstName, restOfNames);   // output : alif [ 'mahin', 'margina' ]
//-------------------------------------------

// We can swap values easily without going through a temp variable to store, using the destructuring properties
let order =["FirstPerson","SecondPerson"];
let [oldFirst,oldSecond]= order;
let [swappedFirst, swappedSecond] = [oldSecond,oldFirst];
console.log(swappedFirst, swappedSecond);   // output: SecondPerson FirstPerson
//-------------------------------------------

// We can also extract data from a function. Advantage is we can extract the data we need only.
// for example here we can just take first two data, or any data using spread/destructuring
const myfun= ()=>["hello","world","this","is","my"];
let [firstOne,secondOne] =myfun();
console.log(firstOne, secondOne);

