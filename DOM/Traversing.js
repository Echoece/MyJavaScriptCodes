'use strict'

const h1 = document.querySelector('h1');

//----------------------------------------------------
// getting all children from all level
h1.querySelectorAll('.highlight-text');
// but in case we only need the direct children objects
h1.childNodes;
// in case we need direct children elements only ( not all other like text and other common nodes)
h1.children;
// selecting the first and last element
h1.firstElementChild;
h1.lastElementChild;

//----------------------------------------------------


//----------------------------------------------------
// getting the parent object
h1.parentNode;
// getting the parent element (only difference is , it returns null if the parent is not an element node)
h1.parentElement;
// in case we need to find the closest parent element with the given selector,
h1.closest('.header');
//----------------------------------------------------

//----------------------------------------------------
// in javascript we can only access the direct sibling
// these returns element only
h1.previousElementSibling;
h1.nextElementSibling;
// these returns node
h1.previousSibling;
h1.nextSibling;
// in case we need all sibling, we can do a little trick
h1.parentElement.children;
//----------------------------------------------------