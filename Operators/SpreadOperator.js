// rule of thumb: if used on right side of assignment operator ,its spread. if on left side its rest.

// -------------------------------------------
// 1. copy/expand an array:
// in case we copy array using assignment , both variable will point at same memory location. So any change we make will
// affect both.

let arr = [1,2,3];
let arr2 = arr;
arr2.push(4);

console.log(arr);   // output : 1,2,3,4  (even though we didnt change in arr var)
console.log(arr2);  // output : 1,2,3,4

// we can solve this problem by using spread operator.
let arr3 = [1,2,3];
let arr4 =[...arr , 4];
console.log(arr3); // output: 1,2,3
console.log(arr4); // output: 1,2,3,4
// -------------------------------------------

// 2. Math functions:
// during the uses of math function, if we pass an array, it wont work. we have to pass the elements using spread operator
console.log(Math.min(arr3)); // output : NaN
console.log(Math.min(...arr3)); // output : 1
// -------------------------------------------

// 3. Object:
// we can copy objects using spread operator same as array.
const user1 = {
    name: 'Jen',
    age: 22
};
const user2 = {...user1};
console.log(user1);
console.log(user2);

// we can merge objects. but here a thing to look at , since both object have a name property, this operation actually uses the name jen from user3
// first, then update it again when it find another name property in user4. So in case of duplicates this is something to be aware of
const user3 = {
    name: 'Jen',
    age: 22,
};

const user4 = {
    name: "Andrew",
    location: "Philadelphia"
};

const mergedUsers = {...user3, ...user4};
console.log(mergedUsers)
