'use strict'

// its key value pair like map, but there are some difference. Objects have restriction that its key can only have
// string and value can be any data type.

//------------------------------------------------------
// objects have some inherited properties, we can check with hasOwnProperty method.
const object1 = {};  // or new Object();
object1.name = "echo";
console.log(object1.hasOwnProperty("name"));
// value: The property’s value.
// writable: When true, the property’s value can be changed
// enumerable: When true, the property can be iterated over by “for-in” enumeration. Otherwise, the property is said to be non-enumerable.
// configurable: If false, attempts to delete the property, change the property to be an access-or property, or change its attributes
//               (other than [[Value]], or changing [[Writable]] to false) will fail.

//------------------------------------------------------
// to access we can use the dot or bracket notation. but its better to use the bracket notation, since we can use dynamic values inside.
const student ={
    name: "Rafiqul Islam",
    age : "20",
    department: "cse"
}
console.log(student.age);
console.log(student['age']);

// to delete a property,
delete student["age"];
//------------------------------------------------------

//------------------------------------------------------
// iterating over an object: we can do this using the for-in loop. the iterator actually give the property, so in case we want to use
// the value we need to use the dot or bracket notation
for(let element in student){
    console.log(student[element]);
}





