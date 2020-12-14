'use strict'
// This for (..of) statement lets you loop over the data structures that are iterable such as Arrays, Strings, Maps, Node Lists, and more.
// It calls a custom iteration hook with instructions to execute on the value of each property of the object.

// difference between for in and for of is that, for-in is used for objects , and for-of is used for data structures which are
// iterable.

// 1. array:
const language = ["C++ ", "Java", "Python"];
for(let element of language){
    console.log(element);
}

// 2. list
const grades= new Set(["C++ ", "Java", "Python"]);
for(let element of grades){
    console.log(element);
}

