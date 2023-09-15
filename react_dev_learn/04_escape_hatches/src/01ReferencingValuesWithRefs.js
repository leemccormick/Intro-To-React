import './App.css';
import { useState } from 'react';

// Main Default For Referencing Values with Refs Demo
export default function ReferencingValuesWithRefsDemo() {
    return (
        <div>
            <h1 className="App-topic">Referencing Values with Refs</h1>

            <h2 className="App-title"> Adding a ref to your component </h2>
            <AddingARefToYourComponentDemo />

            <h2 className="App-title">Example: building a stopwatch </h2>
            <ExampleBuildingAStopwatchDemo />

            <h2 className="App-title">Differences between refs and state </h2>
            <DifferencesBetweenRefsAndStateDemo />

            <h2 className="App-title">When to use refs </h2>
            <WhenToUseRefsDemo />

            <h2 className="App-title">Best practices for refs </h2>
            <BestPracticesForRefsDemo />

            <h2 className="App-title"> Refs and the DOM </h2>
            <RefsAndDOMDemo />

            <h2 className="App-title">Recap</h2>
            <RecapReferencingValuesWithRefsDemo />

            <h2 className="App-title"> Try out some challenges</h2>
            <ChallengesReferencingValuesWithRefsDemo />
        </div>
    );
}

//--------------------------------------------------------------------------------------
// Adding a ref to your component 
function AddingARefToYourComponentDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Example: building a stopwatch 
function ExampleBuildingAStopwatchDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Differences between refs and state 
function DifferencesBetweenRefsAndStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// When to use refs 
function WhenToUseRefsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Best practices for refs 
function BestPracticesForRefsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Refs and the DOM 
function RefsAndDOMDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Recap
function RecapReferencingValuesWithRefsDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>Refs are an escape hatch to hold onto values that aren’t used for rendering. You won’t need them often.</li>
            <li>A ref is a plain JavaScript object with a single property called current, which you can read or set.</li>
            <li>You can ask React to give you a ref by calling the useRef Hook.  </li>
            <li>Like state, refs let you retain information between re-renders of a component.  </li>
            <li>Unlike state, setting the ref’s current value does not trigger a re-render.  </li>
            <li>Don’t read or write ref.current during rendering. This makes your component hard to predict.  </li>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
//**************************************************************************************
// Try out some challenges
/*
Challenge 1 of 4: Fix a broken chat input 
- Type a message and click “Send”. You will notice there is a three second delay before you see the “Sent!” alert. During this delay, you can see an “Undo” button. Click it. This “Undo” button is supposed to stop the “Sent!” message from appearing. It does this by calling clearTimeout for the timeout ID saved during handleSend. However, even after “Undo” is clicked, the “Sent!” message still appears. Find why it doesn’t work, and fix it.
*/
function Challenges1ReferencingValuesWithRefsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 4: Fix a broken chat input </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 2 of 4: Fix a component failing to re-render
-This button is supposed to toggle between showing “On” and “Off”. However, it always shows “Off”. What is wrong with this code? Fix it.
*/
function Challenges2ReferencingValuesWithRefsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 4: Fix a component failing to re-render</p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 3 of 4: Fix debouncing 
- In this example, all button click handlers are “debounced”. To see what this means, press one of the buttons. Notice how the message appears a second later. If you press the button while waiting for the message, the timer will reset. So if you keep clicking the same button fast many times, the message won’t appear until a second after you stop clicking. Debouncing lets you delay some action until the user “stops doing things”.
- This example works, but not quite as intended. The buttons are not independent. To see the problem, click one of the buttons, and then immediately click another button. You’d expect that after a delay, you would see both button’s messages. But only the last button’s message shows up. The first button’s message gets lost.
- Why are the buttons interfering with each other? Find and fix the issue.
*/
function Challenges3ReferencingValuesWithRefsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 4: Fix debouncing </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 4 of 4: Read the latest state 
- In this example, after you press “Send”, there is a small delay before the message is shown. Type “hello”, press Send, and then quickly edit the input again. Despite your edits, the alert would still show “hello” (which was the value of state at the time the button was clicked).
- Usually, this behavior is what you want in an app. However, there may be occasional cases where you want some asynchronous code to read the latest version of some state. Can you think of a way to make the alert show the current input text rather than what it was at the time of the click?
*/
function Challenges4ReferencingValuesWithRefsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 4: Read the latest state </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
function ChallengesReferencingValuesWithRefsDemo() {
    return (<div className="App-left-aligned-content">
        <Challenges1ReferencingValuesWithRefsDemo />
        <hr></hr>
        <Challenges2ReferencingValuesWithRefsDemo />
        <hr></hr>
        <Challenges3ReferencingValuesWithRefsDemo />
        <hr></hr>
        <Challenges4ReferencingValuesWithRefsDemo />
    </div>);
}