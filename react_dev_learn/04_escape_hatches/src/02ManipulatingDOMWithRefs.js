import './App.css';
import { useState } from 'react';

// Main Default For Manipulating the DOM with Refs Demo
export default function ManipulatingTheDOMWithRefsDemo() {
    return (
        <div>
            <h1 className="App-topic">Manipulating the DOM with Refs</h1>

            <h2 className="App-title">Getting a ref to the node </h2>
            <GettingRefRoTheNodeDemo />

            <h2 className="App-title">Example: Focusing a text input </h2>
            <ExampleFocusingTextInputDemo />

            <h2 className="App-title">Example: Scrolling to an element </h2>
            <ExampleScrollingToElementDemo />

            <h2 className="App-title">Accessing another component’s DOM nodes </h2>
            <AccessingAnotherComponentDOMNodesDemo />

            <h2 className="App-title"> When React attaches the refs </h2>
            <WhenReactAttachesRefsDemo />

            <h2 className="App-title">Best practices for DOM manipulation with refs </h2>
            <BestPracticesDOMManipulationWithRefsDemo />

            <h2 className="App-title">Recap</h2>
            <RecapManipulatingTheDOMDemo />

            <h2 className="App-title"> Try out some challenges</h2>
            <ChallengesManipulatingTheDOMDemo />
        </div>
    );
}

//--------------------------------------------------------------------------------------
// Getting a ref to the node 
function GettingRefRoTheNodeDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Example: Focusing a text input 
function ExampleFocusingTextInputDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Example: Scrolling to an element 
function ExampleScrollingToElementDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Accessing another component’s DOM nodes 
function AccessingAnotherComponentDOMNodesDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// When React attaches the refs 
function WhenReactAttachesRefsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Best practices for DOM manipulation with refs 
function BestPracticesDOMManipulationWithRefsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Recap
function RecapManipulatingTheDOMDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>Refs are a generic concept, but most often you’ll use them to hold DOM elements.</li>
            <li>You instruct React to put a DOM node into myRef.current by passing {'<'}div ref={'{'}myRef{'}'} {'>'}.</li>
            <li>Usually, you will use refs for non-destructive actions like focusing, scrolling, or measuring DOM elements.</li>
            <li>A component doesn’t expose its DOM nodes by default. You can opt into exposing a DOM node by using forwardRef and passing the second ref argument down to a specific node.</li>
            <li>Avoid changing DOM nodes managed by React.</li>
            <li>If you do modify DOM nodes managed by React, modify parts that React has no reason to update.</li>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
//**************************************************************************************
// Try out some challenges
/*
Challenge 1 of 4: Play and pause the video 
- In this example, the button toggles a state variable to switch between a playing and a paused state. However, in order to actually play or pause the video, toggling state is not enough. You also need to call play() and pause() on the DOM element for the <video>. Add a ref to it, and make the button work.
*/
function Challenges1ManipulatingTheDOM1Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 4: Play and pause the video </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 2 of 4: Focus the search field 
- Make it so that clicking the “Search” button puts focus into the field.
*/
function Challenges2ManipulatingTheDOMDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 4: Focus the search field </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 3 of 4: Scrolling an image carousel 
- This image carousel has a “Next” button that switches the active image. Make the gallery scroll horizontally to the active image on click. You will want to call scrollIntoView() on the DOM node of the active image:
*/
function Challenges3ManipulatingTheDOM1Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 4: Scrolling an image carousel </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 4 of 4: Focus the search field with separate components 
- Make it so that clicking the “Search” button puts focus into the field. Note that each component is defined in a separate file and shouldn’t be moved out of it. How do you connect them together?
*/
function Challenges4ManipulatingTheDOMDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 4: Focus the search field with separate components </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
function ChallengesManipulatingTheDOMDemo() {
    return (<div className="App-left-aligned-content">
        <Challenges1ManipulatingTheDOM1Demo />
        <hr></hr>
        <Challenges2ManipulatingTheDOMDemo />
        <hr></hr>
        <Challenges3ManipulatingTheDOM1Demo />
        <hr></hr>
        <Challenges4ManipulatingTheDOMDemo />
        <hr></hr>
    </div>);
}