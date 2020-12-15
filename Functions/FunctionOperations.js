// we can configure default values for function parameters
const ticket = (name='random', date=1 , destination, checkinTime= date-50)=>{
    // do something
}

//------------------------------------------------------
// important:: when we pass a primitive type it pass a copy , but when we pass an object it pass a reference. thats why
// the code below gives following output.
// Note : javascript doesnt actually have passing by value, even though it looks like here. its just two objects pointing at same
// memory location.
const flight ='LH23F';
const Miley= {
    name: 'Miley',
    passport: 2568423
}
const randomfunc= (flightNum, passenger)=> {
    flightNum = 'LM22';
    passenger.name= "Riley";
}
randomfunc(flight,Miley);
console.log(flight, Miley['name']);   // output : LH23F Riley
//------------------------------------------------------

//------------------------------------------------------
// call method:
// in simple words, call function can set the context or this keyword for any function manually. The first argument is the
// owner object.
let employee = {
    details: function(designation, experience) {
        return this.name + " " + this.id + " "
            + designation + " " + experience;
    }
}
let emp1 = {
    name:"Alif",
    id: "123",
}
let emp2 = {
    name:"Bokul",
    id: "456",
}
let x = employee.details.call(emp2, "Manager", "4 years");
console.log(x);   // output: Bokul 456 Manager 4 years
//------------------------------------------------------

//------------------------------------------------------
// apply method: does exactly same almost as the call, but in this case after recieving the owner object, instead of receiving
// the list of argument it takes an array of the arguments.
// this apply method isnt used much, we can simply use the call method and use the spread operator on the array to get the list.
//------------------------------------------------------

//------------------------------------------------------
// bind : this also let us select the owner, only difference is bind doesnt immidiately cal the function. Instaed it returns a new function
// where the this keyword is bound .

let y = employee.details.bind(emp1);
console.log(y("Waiter", "2 month"));    // output: Alif 123 Waiter 2 month
//------------------------------------------------------

