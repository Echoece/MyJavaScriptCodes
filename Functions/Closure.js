'use strict'

// in short, functions dont lose connection to the variable that existed at the functions birthplace.

// A closure gives function access to all variables of its parent function, even after the parent function has returned. The
// function keeps a reference to its outer scope, that preserve the scope chain.

// Less formally, a closure is like a backpack of all the variables where the function was created

//------------------------------------------------------
// example :
const sampleFunction = () =>{
    let sample = 0;
    return ()=>{
        sample++;              // sample = 1.
        console.log(`${sample} is the sample number`);
    }
}
const a = sampleFunction();
console.dir(a);
a();       // output : 1
a();       // output : 2
//------------------------------------------------------

//------------------------------------------------------
// important :  Closure don’t remember the value of the variable it only points to the variable or stores the reference of the variable
//              this is why the value of i is actually 4 in all array. cause closure points the reference of the i and its last value was
//              4 when the function was returned.
// another example:
const anotherFunction = ()=>{
    let arr = [];
    let i;
    for(i=0;i<4;i++){
        arr[i] = () => i;
    }
    return arr;
}
const b = anotherFunction();
console.log( b[0]() );              // output: 4
console.log( b[1]() );              // output: 4
console.log( b[2]() );              // output: 4
console.log( b[3]() );              // output: 4
//------------------------------------------------------