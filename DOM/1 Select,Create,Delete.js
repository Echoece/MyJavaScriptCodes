'use strict'
// ---------------------------------------------------------
// selection:
// selecting the whole document, body or head we can just access using the document object,
const documentElement = document.documentElement;
const head = document.head;
const body = document.body;

// for selecting other elements we can use several methods,

// old ones: these are rarely used, but in case we need live updated list we have to use them.
document.getElementById('Id-Here');
// these two methods returns a html-collection(its updated automatically with page changes live).
document.getElementsByClassName('Class-Here');
document.getElementsByTagName('h2');

// new ones: widely used, the selectors are any valid CSS selector.
// for selecting first matching element,
const header = document.querySelector('h1');
// for selecting all matching element as a node-list(these are not updated live with page changes, so in case
// some of the elements get removed or added the list isn't updated) :
const allSections =document.querySelectorAll('.section');

// ---------------------------------------------------------


// ---------------------------------------------------------
// creating and deleting :

//**********************************
// innerHTML is outdated and bad performance.
// insertAdjacentHTML is the one to use to add something.
// it takes two parameter, first one is position and 2nd one is the html markup,
// => 'beforebegin': Before the element itself.
// => 'afterbegin': Just inside the element, before its first child.
// => 'beforeend': Just inside the element, after its last child.
// => 'afterend': After the element itself.
allSections.insertAdjacentHTML('beforebegin','<p> this is inserted paragraph text </p>');
//**********************************

//**********************************
// but the downside of this is, we dont have immediate access to this element that we created. To fix that we can create
// and then append
const randomDiv = document.createElement('div');        // creating
randomDiv.classList.add('classNameHere');                        // adding class
randomDiv.textContent =  ' Here goes the text content, ';        // setting text
// we can then insert like this,
randomDiv.insertAdjacentHTML('afterbegin','<button class="classNameHere">Click ok</button>');
// or we can use append/prepend,
header.append(randomDiv);   // puts the data at the last index
header.prepend(randomDiv);  // puts the data at the first index
// note: if we write like this, it will be prepend. javascript will first append the div, then move it to prepend when it
// encounters the prepend.

// we can also use after an before method, see the visualization chart. in short these methods puts the elements after
// and before the node.
header.after(randomDiv);
header.before(randomDiv);
//**********************************

//**********************************
// to copy an element :
// we can use the cloneNode method to copy a node. it takes a boolean parameter deep which is false
// by default. if we set it to true, the children of the nodes will be copied too.
header.append(randomDiv.cloneNode(true))
//**********************************

//**********************************
// to delete an element we can use the remove() function.
randomDiv.remove();
//**********************************



// ---------------------------------------------------------