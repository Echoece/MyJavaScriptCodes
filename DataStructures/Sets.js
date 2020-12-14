'use strict'
// sets are used when we dont want any duplicates. technically we can add duplicates but they arnt assigned inside the sets.

// 1. create: inside the constructor we pass an iterable, usually an array.
// even though we pass 6 twp times here, we only get once in set. T
let example = new Set([1,2,4,5,6,6]);
console.log(example);   //  output: Set { 1, 2, 4, 5, 6 }

// This is useful in cases, for example to find how many types of workers
// there is from a list of workers.
let workers = ["staff","staff","staff", "waiter", "waiter","waiter"];
// here is a bunch of workers, but if we want to find out how many types we can just put them in a set.
let typeOfWorkers = new Set(workers);
console.log(typeOfWorkers);   // output : Set { 'staff', 'waiter' }
//------------------------------------------------------

// 2. operations:
var set1 = new Set();

//  adding a new element at the end of the set.
set1.add(10);

// check for a element in the set , returns boolean value.
set1.has(10);

// deleting a element with specific value
set1.delete(10);

// removing all element from the set
set1.clear();

// getting the iterator of the set, we can use the next()  method to operate on the set,
var getiterator= set1.entries();

// returning all values from set in same insertion order. both works same in case of sets, difference is during map.
set1.values();
set1.keys();

// executing foreach function for set. The callback function is provided with three parameters as follows:
//              the element key
//              the element value
//              the Set object to be traversed



// There is also method for subset , union , intersection and difference operation.




