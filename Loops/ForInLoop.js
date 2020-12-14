'use strict'
// this loop is used to iterate over objects. This loop only works on the objects which enumerable is set to true.
// -> even though we can use for-in for arrays, its recommended not to do so.
// -> the iteration may not match the order the properties written in the code.

const courses = {
    // Declaring a courses object
    firstCourse: "C++ STL",
    secondCourse: "DSA Self Paced",
    thirdCourse: "CS Core Subjects"
};
// the iterable actually gives us the property name of the object, so if we want to get the value we need to use the dot
// or bracket notation.
for(let course in courses){
    console.log(course+" "); // output: firstCourse
                             //         secondCourse
                             //         thirdCourse
}


for(let course in courses){
    console.log(courses[course]); // output:    C++ STL
                                  //            DSA Self Paced CS
                                  //            Core Subjects
}
