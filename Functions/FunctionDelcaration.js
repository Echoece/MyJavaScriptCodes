'use strict'

// this type of function is hoisted (raised up to the top of the code). So, order is not important here.
// ( wont use this myself personally, just kept it here for reference )

// As we can see, even if we declare function later at some point and call the function before, it still work cause javascript
// hoist the function at top.
console.log(add(1, 2));
function add(a,b){
    return a+b;
}