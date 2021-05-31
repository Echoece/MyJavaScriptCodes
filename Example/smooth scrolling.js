'use strict'
// in this case , we want to click a button/link etc and it will lead to some other element. normally it will just scroll
// there but to make it smooth we need to pass in behaviour as smooth.
const btnScrollTo = document.querySelector('.btn-scroll-to');
const sectionToGo = document.querySelector('#section-1');

btnScrollTo.addEventListener('click', evt => {
    const sectionCoordinates = sectionToGo.getBoundingClientRect();

    // there are two ways, old way is complicated but good browser support
    window.scrollTo({
        left : sectionCoordinates.left + window.pageXOffset,
        top : sectionCoordinates.top + window.pageYOffset,
        behavior : "smooth"
    });

    // new way is simpler but some older browser might have trouble with support,
    sectionToGo.scrollIntoView({behavior: "smooth"});
})

