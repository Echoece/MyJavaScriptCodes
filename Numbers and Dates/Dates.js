'use strict'
// important thing to consider is javascript months are 0 index based. so month range is actually from 0 - 11, unlike
// in real world as we use 1-12 to denote months.

// creating a data: using the Date object, which have 4 constructor.
// 1. we can write all the values one by one
const randomTime = new Date(2020, 11 , 17,13, 33,23,44);
console.log(randomTime);
// 2. we can assign a javascript date object inside the constructor
const randomTime2 = new Date(randomTime);
console.log(randomTime2);
// 3. we can set a string there, but this is error prone if we make a mistake. personally would avoid it
//----------------------------------------------

//----------------------------------------------
// operators :
const currentTime = new Date( Date.now() );

console.log('current year is = ' +currentTime.getFullYear() );
console.log('current month is = ' +currentTime.getMonth() );
console.log('current day is = ' +currentTime.getDay() );
console.log('current hour is = ' +currentTime.getHours() );
console.log('current minute is = ' +currentTime.getMinutes() );
console.log('current second is = '+ currentTime.getSeconds() );
// we can also set all the values of these properties with set method. for example,
currentTime.setDate(17);
//----------------------------------------------

//----------------------------------------------
// one other method is getTime, which calculates the milliseconds passed from the 1970 1st jan to the current object.
// will be useful in operating on dates.
console.log(currentTime.getTime());                                   // output : 1608191088042
// formatting the date with different methods.
console.log(new Date(1608190892412).toISOString());             // output : 2020-12-17T07:41:32.412Z
console.log(new Date(1608190892412).toDateString());            // output : Thu Dec 17 2020
console.log(new Date(1608190892412).toLocaleDateString());      // output : 12/17/2020
console.log(new Date(1608190892412).toLocaleString());          // output : 12/17/2020, 1:41:32 PM
console.log(new Date(1608190892412).toTimeString());            // output : 13:41:32 GMT+0600 (Bangladesh Standard Time)
console.log(new Date(1608190892412).toUTCString());             // output : Thu, 17 Dec 2020 07:41:32 GMT
console.log(new Date(1608190892412).toJSON());                  // output : 2020-12-17T07:41:32.412Z
console.log(new Date(1608190892412).toString());                // output : Thu Dec 17 2020 13:41:32 GMT+0600 (Bangladesh Standard Time)
//----------------------------------------------

//----------------------------------------------
// finding the difference of two dates :
// theory is , if we subtract two dates, we get the millisecond difference. So for example if we need the date, we just need to
// divide them by (1000 * 60 * 60 * 24 ) we get hours,
// (from millisecond -> second(1000ms = 1s) -> min(60s =1min) -> hour(1hr = 60 min) )
const differenceInDays = (date1, date2) => (date1-date2)/(1000*60*60*24);
const oldDate = new Date(2013, 3, 7);
const newDate = new Date(2013, 3, 15);
console.log(differenceInDays(newDate,oldDate));         // output : 8

// difference week in calculation
const differenceInWeeks = (date1, date2) => (date1-date2)/(1000*60*60*24*7);

// difference month in calculation
const differenceInMonths = (date1, date2) => (date1-date2)/(1000*60*60*24*7*30);

// difference years in calculation
const differenceInyears = (date1, date2) => (date1-date2)/(1000*60*60*24*7*30*12);
//----------------------------------------------

//----------------------------------------------
// we can format the time into local time format , it takes the locale parameter which is the code for the local
// language. we can find the codes by searching google " iso language code table".
// we can do all sort of customization with the 2nd parameter of the DateTimeFormat, see mdn for more details. This not only
// helps with date, but also number and others.

console.log(new Intl.DateTimeFormat('eu-ES').format(newDate));      // output : 4/15/2013
console.log(new Intl.DateTimeFormat('en-US').format(newDate));      // output : 4/15/2013
//----------------------------------------------






