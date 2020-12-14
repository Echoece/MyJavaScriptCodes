'use strict'

// A data structure in which data is stored as key value pairs. In which a unique key maps to a value.
// Both the key and the value can be in any data type.  map is a iterable data structure, so we can use the for-of loop.

// 1. We can put any type of data as a Map key, whereas objects can only have a number, string, or symbol as a key.
// 2. maps dont support JSON directly.
// 3. A Map is ordered and iterable, whereas a objects is not ordered and not iterable
// 4. we can know the size of the map, as for objects we cant.
//----------------------------------------------


//----------------------------------------------
// creating a map : the constructor takes a iterable, usually an array.
const testMap = new Map();

// adding a pair to map. first parameter is key and 2nd one is value. We can even chain set methods to add multiple.
testMap.set('Name','Rafiqul Islam').set("age",21);
testMap.set([1,2,3],"array key example");
// we can use any other data type as key as well, which we cant in objects. but this will create problem retrieving  the data, since the argument in the
// get method wont be the same array in heap. so it will not match. for this reason, we must assign a variable name as key to be able to retrieve data.

// size of map, its a property , not a method. have to be careful about it.
testMap.size;

// getting a value with a key
testMap.get('Name');

// checks for a key, returns boolean
testMap.has("Name");

// delete a key, also deletes the value as well
testMap.delete('Name');

// delete all elements
testMap.clear();
//----------------------------------------------


//----------------------------------------------
// iterating through they map, there are 3 iterators
let map1 = new Map();
map1.set("first name", "sumit");
map1.set("last name", "ghosh");
map1.set("website", "geeksforgeeks")
    .set("friend 1","gourav")
    .set("friend 2","sourav");

const iter1 = map1.entries();
const iter2 = map1.keys();
const iter3 = map1.values();

// entries give iterator over both key and value, other two give just the key and value respectively.
// we can use the for- of loop to iterate over the iterator.
for(let element of iter1){
    console.log(element);
}



