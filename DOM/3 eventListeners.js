'use strict'
// check mdn for full event reference

// we can add event listeners with the following way
const head = document.querySelector('h1');
head.addEventListener('mouseenter', e=> alert('hi') );

// another way is to access the event property of the node itself, for example,
head.onmouseenter  = ev => alert('Hi');

// this is old way of doing things, now a days add event listeners is used. one possible use case  is when we want to
// listen to some event once, for example
const alertFunction = e => {
    alert('hi');
    head.removeEventListener('mouseenter',alertFunction);
};
head.onmouseenter = alertFunction;
// this event listener will listen to event only first time, cause after that it will remove itself from the event type.

