import './App.css';
import React from 'react';
import { useState } from 'react';

// Main Default For Reacting to Input with State
export default function ReactingInputWithStateDemo() {
    return (
        <div>
            <h2 className="App-title">How declarative UI compares to imperative</h2>
            <HowDeclarativeUIComparesToImperativeDemo /> 

            <h2 className="App-title">Thinking about UI declaratively</h2>
            <ThinkingAboutUIDeclarativelyDemo />

            <h2 className="App-title">Step 1: Identify your component’s different visual states</h2>
            <Step1IdentifyDemo />

            <h2 className="App-title">Step 2: Determine what triggers those state changes</h2>
            <Step2DetermineDemo />

            <h2 className="App-title">Step 3: Represent the state in memory with useState </h2>
            <Step3RepresentDemo />

            <h2 className="App-title">Step 4: Remove any non-essential state variables </h2>
            <Step4RemoveDemo />

            <h2 className="App-title">Step 5: Connect the event handlers to set state </h2>
            <Step5ConnectDemo />

            <h2 className="App-title">Recap</h2>
            <ReactingInputWithStateRecapDemo />

            <h2 className="App-title">Try out some challenges</h2>
            <ReactingInputWithStateChallengesDemo />
        </div>
    );
}

// How declarative UI compares to imperative 
function HowDeclarativeUIComparesToImperativeDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Thinking about UI declaratively 
function ThinkingAboutUIDeclarativelyDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Step 1: Identify your component’s different visual states 
function Step1IdentifyDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Step 2: Determine what triggers those state changes 
function Step2DetermineDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Step 3: Represent the state in memory with useState
function Step3RepresentDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Step 4: Remove any non-essential state variables 
function Step4RemoveDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Step 5: Connect the event handlers to set state 
function Step5ConnectDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Recap
function ReactingInputWithStateRecapDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Try out some challenges
/*
Challenge 1 of 3: Add and remove a CSS class 
- Make it so that clicking on the picture removes the background--active CSS class from the outer <div>, but adds the picture--active class to the <img>. Clicking the background again should restore the original CSS classes.
- Visually, you should expect that clicking on the picture removes the purple background and highlights the picture border. Clicking outside the picture highlights the background, but removes the picture border highlight.
 */
function ReactingInputWithStateChallenge1Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 3: Add and remove a CSS class </p>
    </div>);
}

// Try out some challenges
/*
Challenge 2 of 3: Profile editor 
- Here is a small form implemented with plain JavaScript and DOM. Play with it to understand its behavior:
 */
function ReactingInputWithStateChallenge2Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 3: Profile editor</p>
    </div>);
}

// Try out some challenges
/*
Challenge 3 of 3: Refactor the imperative solution without React 
- Here is the original sandbox from the previous challenge, written imperatively without React:
 */
function ReactingInputWithStateChallenge3Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 3: Refactor the imperative solution without React </p>
    </div>);
}

// Try out some challenges
function ReactingInputWithStateChallengesDemo() {
    return (<div className="App-left-aligned-content">
        <ReactingInputWithStateChallenge1Demo />
        <hr></hr>
        <ReactingInputWithStateChallenge2Demo />
        <hr></hr>
        <ReactingInputWithStateChallenge3Demo />
        <hr></hr>
    </div>);
}