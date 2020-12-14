// we can configure default values for function parameters
const ticket = (name='random', date=1 , destination, checkinTime= date-50)=>{
    // do something
}


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

