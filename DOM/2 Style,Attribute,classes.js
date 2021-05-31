'use strict'

// ---------------------------------------------------------
// styling :
//**********************************
// in case of styling, the css selector and javascript  style properties differ a bit. the properties use camelcase.
// for example, in css its =>  background-color : red, but in case of javascript its as follows.
const message = document.querySelector('h1');
message.style.backgroundColor = '#3739d';
// so we have access to all styles as well using javascript, but its better to use css class for that to keep the separation
// of logic.
//**********************************

//**********************************
// we can also get the computed style properties (the values that are computed in the browser, not the one we define in the
// css).
const headerHeight = getComputedStyle(message).height;
console.log(headerHeight);
//**********************************

//**********************************
// we can set property: it takes a property name as first parameter and value as 2nd. for example, if
// we want to set a css variable value we can do like this,
document.documentElement.style.setProperty('--color-primary','orange');
//**********************************
// ---------------------------------------------------------


// ---------------------------------------------------------
// attribute:
//**********************************
const logo= document.querySelector('.nav-logo');
logo.src = 'src goes here';     // source attribute for image
logo.href = 'link goes here';   // link attribute for links
// another way of getting attribute
logo.getAttribute('href');
//**********************************

//**********************************
// data attribute:
// special case attribute that starts with the word data. for example : data-version-number = 3
// note: we have to camel case , similar to css property
logo.dataset.versionNumber;
//**********************************
// ---------------------------------------------------------


// ---------------------------------------------------------
// classes:
// its simple and self explanatory. Note: toggle method checks if the class exists in the element, if so it remove
// otherwise add the class.
logo.classList.add('classNameHere','anotherClass');
logo.classList.remove('classNameHere');
logo.classList.toggle('classNameHere');
logo.classList.contains('classNameHere');
// ---------------------------------------------------------