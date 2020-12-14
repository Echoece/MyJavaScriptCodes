'use strict'
// this method is used for arrays. It calls a function for each element of the array. Its syntax is,
// array.forEach(callback(element, index, arr), thisValue)
// see doc for the parameters, we can make our own logic with this.
const items = [12, 24, 36];
const copy = [];

const  myFunc = function (item) {
    copy.push(item + item+2);
}

items.forEach(myFunc);
console.log(copy);
