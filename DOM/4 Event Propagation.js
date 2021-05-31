'use strict'
// this is how events travel through DOM tree and reach its target and what happens afterwards. There is three step.
// 1. Capturing Phase : This will be created once an event happen, it will capture the event and start passing through
//                      the DOM tree from the very top (document-> html-> body-> ... and so on). Event handlers dont
//                      listen for events in this phase.

// 2. Target Phase    : This is when event arrived at its target and event listeners are executed afterward.
// 3. Bubbling phase  : This phase is the last phase, where the event now goes up to the DOM tree. For example
//                      ( element-> ...-> body-> html -> document).


// Example Scenario: we have a Nav section, inside it a nav-link section, and inside it 3 single nav-link. We can attach
// one event listeners on each. Once we click on the nav-link section, even though we didnt click on the nav-links and nav,
// there own event handlers will be executed as well. Because of propagation of event through the bubbling phase.

// In other words, the elements listening to their own event and also their child events that bubble up through propagation chain

// we can stop the event propagation with e.stopPropagation() method. but its generally not a good idea.

