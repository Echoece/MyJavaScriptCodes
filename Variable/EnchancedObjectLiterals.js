'use strict'
//  1. Shorthand for Initializing Properties;
//  prior to ES6, we had to manually define the names of the properties during initialization. But in ES6, if the property name is same, we don’t need to initialize it.
const Laptop = (manufacturer,model, year)=> {
    return [manufacturer,model,year]
};
console.log(Laptop("intel", "core-i3", 1998));

// 2.Shorthand for writing Methods:
// prior to ES6 we had to write extra codes to write a simple function. But now we can use functions in normal ways
const getLaptop=(manufacturer,model, year)=>{
    return {
        saymodel (){
            return model;
        }
    }
}

// 3.Computed Properties and Object Literals
// In ES6 we can compute the property and object literal. For example, here we are assigning the openinghours object property dynamically.
const weekdays = ['sat','sun','mon','tue','wed','thu','fri'];
const openingHours = {
    [weekdays[3]] : 12,
    [weekdays[2]] : 14,
    [weekdays[1]] : 10,
}
console.log(openingHours);  // output: { tue: 12, mon: 14, sun: 10 }
