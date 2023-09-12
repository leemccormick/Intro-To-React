import './App.css';
import React from 'react';
import { useState } from 'react';

// Main Default For Preserving and Resetting State Demo
export default function PreservingAndResettingStateDemo() {
    return (
        <div>
            <h2 className="App-title">The UI tree </h2>
            <TheUITreeDemo />

            <h2 className="App-title">State is tied to a position in the tree </h2>
            <StateIsTiedToPositionInTheTreeDemo />

            <h2 className="App-title">Same component at the same position preserves state </h2>
            <SameComponentAtTheSamePositionPreservesStateDemo />

            <h2 className="App-title"> Different components at the same position reset state </h2>
            <DifferentComponentsAtTheSamePositionResetStateDemo />

            <h2 className="App-title">Resetting state at the same position </h2>
            <ResettingStateAtTheSamePositionDemo />

            <h2 className="App-title">Option 1: Rendering a component in different positions </h2>
            <Option1RenderingDemo />

            <h2 className="App-title">Option 2: Resetting state with a key </h2>
            <Option2ResettingStateDemo />

            <h2 className="App-title">Resetting a form with a key </h2>
            <ResettingFormWithKeyDemo />

            <h2 className="App-title"> Recap </h2>
            <RecapPreservingAndResettingStateDemo />

            <h2 className="App-title">Try out some challenges </h2>
            <ChallengesPreservingAndResettingStateDemo />
        </div>
    );
}
// The UI tree 
function TheUITreeDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// State is tied to a position in the tree 
function StateIsTiedToPositionInTheTreeDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Same component at the same position preserves state 
function SameComponentAtTheSamePositionPreservesStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Different components at the same position reset state 
function DifferentComponentsAtTheSamePositionResetStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Resetting state at the same position 
function ResettingStateAtTheSamePositionDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Option 1: Rendering a component in different positions 
function Option1RenderingDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Option 2: Resetting state with a key 
function Option2ResettingStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Resetting a form with a key 
function ResettingFormWithKeyDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Recap
function RecapPreservingAndResettingStateDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>
                React keeps state for as long as the same component is rendered at the same position.
            </li>
            <li>
                State is not kept in JSX tags. It’s associated with the tree position in which you put that JSX.
            </li>
            <li>
                You can force a subtree to reset its state by giving it a different key.
            </li>
            <li>
                Don’t nest component definitions, or you’ll reset state by accident.
            </li>
        </ul>
    </div>);
}

// Try out some challenges
/*
Challenge 1 of 5: Fix disappearing input text 
- This example shows a message when you press the button. However, pressing the button also accidentally resets the input. Why does this happen? Fix it so that pressing the button does not reset the input text.
 */
function Challenge1PreservingAndResettingStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 5: Fix disappearing input text </p>
    </div>);
}

// Try out some challenges
/*
Challenge 2 of 5: Swap two form fields 
- This form lets you enter first and last name. It also has a checkbox controlling which field goes first. When you tick the checkbox, the “Last name” field will appear before the “First name” field.
- It almost works, but there is a bug. If you fill in the “First name” input and tick the checkbox, the text will stay in the first input (which is now “Last name”). Fix it so that the input text also moves when you reverse the order.
 */
function Challenge2PreservingAndResettingStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 5: Swap two form fields </p>
    </div>);
}

// Try out some challenges
/*
Challenge 3 of 5: Reset a detail form 
- This is an editable contact list. You can edit the selected contact’s details and then either press “Save” to update it, or “Reset” to undo your changes.
- When you select a different contact (for example, Alice), the state updates but the form keeps showing the previous contact’s details. Fix it so that the form gets reset when the selected contact changes.
*/
function Challenge3PreservingAndResettingStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 5: Reset a detail form </p>
    </div>);
}

// Try out some challenges
/*
Challenge 4 of 5: Clear an image while it’s loading 
- When you press “Next”, the browser starts loading the next image. However, because it’s displayed in the same <img> tag, by default you would still see the previous image until the next one loads. This may be undesirable if it’s important for the text to always match the image. Change it so that the moment you press “Next”, the previous image immediately clears.
 */
function Challenge4PreservingAndResettingStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 5: Clear an image while it’s loading </p>
    </div>);
}

// Try out some challenges
/*
Challenge 5 of 5: Fix misplaced state in the list 
- In this list, each Contact has state that determines whether “Show email” has been pressed for it. Press “Show email” for Alice, and then tick the “Show in reverse order” checkbox. You will notice that it’s Taylor’s email that is expanded now, but Alice’s—which has moved to the bottom—appears collapsed.
- Fix it so that the expanded state is associated with each contact, regardless of the chosen ordering.
 */
function Challenge5PreservingAndResettingStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 5 of 5: Fix misplaced state in the list </p>
    </div>);
}

// Try out some challenges
function ChallengesPreservingAndResettingStateDemo() {
    return (<div className="App-left-aligned-content">
        <Challenge1PreservingAndResettingStateDemo />
        <hr></hr>
        <Challenge2PreservingAndResettingStateDemo />
        <hr></hr>
        <Challenge3PreservingAndResettingStateDemo />
        <hr></hr>
        <Challenge4PreservingAndResettingStateDemo />
        <hr></hr>
        <Challenge5PreservingAndResettingStateDemo />
        <hr></hr>
    </div>);
}