'use strict'

// following up on the the previous example of event propagation, in case of adding an event listener to each link it will be
// performance hindering. We can  add the event listener to their parent and find out where the event originated using e.target
// property. This is event delegation.

// it has two step :
// 1. Add event listener to common parent.
// 2. Determine which element originated the event.

// example : to implement smooth scrolling to all links on a nav-links container, we can do following

const navContainer = document.querySelector("#nav-links");  // selecting the container

navContainer.addEventListener('click',evt => {                             // adding event listener
    if (evt.target.classList.contains('nav-link')){                              // checking if its a link
        evt.preventDefault();                                                           // preventing default scrolling
        const id =evt.target.getAttribute('href');                                     //  getting the section name to goto from the href attribute value
        document.querySelector(id).scrollIntoView({behavior: "smooth"});           // assigning smooth scrolling
    }
});