import './App.css';
import React from 'react';
import { useState } from 'react';

// Main Default For Extracting State Logic into a Reducer Demo
export default function ExtractingStateLogicIntoReducerDemo() {
    return (
        <div>
            <h2 className="App-title">Consolidate state logic with a reducer </h2>
            <ConsolidateStateLogicWithReducerDemo />

            <h2 className="App-title">Step 1: Move from setting state to dispatching actions </h2>
            <Step1MoveFromSettingStateDemo />

            <h2 className="App-title"> Step 2: Write a reducer function </h2>
            <Step2WriteReducerFunctionDemo />

            <h2 className="App-title">Step 3: Use the reducer from your component </h2>
            <Step3UseTheReducerDemo />

            <h2 className="App-title"> Comparing useState and useReducer </h2>
            <ComparingUseStateAndUseReducerDemo />

            <h2 className="App-title">Writing reducers well </h2>
            <WritingReducersWellDemo />

            <h2 className="App-title"> Writing concise reducers with Immer </h2>
            <WritingReducersWellWithImmerDemo />

            <h2 className="App-title"> Recap </h2>
            <RecapExtractingStateLogicIntoReducerDemo />

            <h2 className="App-title">Try out some challenges </h2>
            <ChallengesExtractingStateLogicIntoReducerDemo />
        </div>
    );
}

// Consolidate state logic with a reducer 
function ConsolidateStateLogicWithReducerDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Step 1: Move from setting state to dispatching actions 
function Step1MoveFromSettingStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Step 2: Write a reducer function 
function Step2WriteReducerFunctionDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Step 3: Use the reducer from your component 
function Step3UseTheReducerDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Comparing useState and useReducer 
function ComparingUseStateAndUseReducerDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Writing reducers well 
function WritingReducersWellDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Writing concise reducers with Immer 
function WritingReducersWellWithImmerDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Recap
function RecapExtractingStateLogicIntoReducerDemo() {
    return (<div className="App-left-aligned-content">
        <ui>
            <li>
                To convert from useState to useReducer:
                <div className='App-left-aligned-border'>
                    <li className='App-small-font-size'>
                        1. Dispatch actions from event handlers.
                    </li>
                    <li className='App-small-font-size'>
                        2. Write a reducer function that returns the next state for a given state and action.
                    </li>
                    <li className='App-small-font-size'>
                        3. Replace useState with useReducer.
                    </li>
                </div>
            </li>
            <li>
                Reducers require you to write a bit more code, but they help with debugging and testing.
            </li>
            <li>
                Reducers must be pure.
            </li>
            <li>
                Each action describes a single user interaction.
            </li>
            <li>
                Use Immer if you want to write reducers in a mutating style.
            </li>
        </ui>
    </div>);
}

// Try out some challenges
/*
Challenge 1 of 4: Dispatch actions from event handlers 
- Currently, the event handlers in ContactList.js and Chat.js have // TODO comments. This is why typing into the input doesn’t work, and clicking on the buttons doesn’t change the selected recipient.
- Replace these two // TODOs with the code to dispatch the corresponding actions. To see the expected shape and the type of the actions, check the reducer in messengerReducer.js. The reducer is already written so you won’t need to change it. You only need to dispatch the actions in ContactList.js and Chat.js.
 */
function Challenge1ExtractingStateLogicIntoReducerDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 4: Dispatch actions from event handlers </p>
    </div>);
}

// Try out some challenges
/*
Challenge 2 of 4: Clear the input on sending a message 
- Currently, pressing “Send” doesn’t do anything. Add an event handler to the “Send” button that will:
- Show an alert with the recipient’s email and the message.
- Clear the message input.
 */
function Challenge2ExtractingStateLogicIntoReducerDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 4: Clear the input on sending a message </p>
    </div>);
}

// Try out some challenges
/*
Challenge 3 of 4: Restore input values when switching between tabs 
- In this example, switching between different recipients always clears the text input:
 */
function Challenge3ExtractingStateLogicIntoReducerDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 4: Restore input values when switching between tabs </p>
    </div>);
}

// Try out some challenges
/*
Challenge 4 of 4: Implement useReducer from scratch 
- In the earlier examples, you imported the useReducer Hook from React. This time, you will implement the useReducer Hook itself! Here is a stub to get you started. It shouldn’t take more than 10 lines of code.
- To test your changes, try typing into the input or select a contact.
 */
function Challenge4ExtractingStateLogicIntoReducerDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 4: Implement useReducer from scratch </p>
    </div>);
}

// Try out some challenges
function ChallengesExtractingStateLogicIntoReducerDemo() {
    return (<div className="App-left-aligned-content">
        <Challenge1ExtractingStateLogicIntoReducerDemo />
        <hr></hr>
        <Challenge2ExtractingStateLogicIntoReducerDemo />
        <hr></hr>
        <Challenge3ExtractingStateLogicIntoReducerDemo />
        <hr></hr>
        <Challenge4ExtractingStateLogicIntoReducerDemo />
        <hr></hr>
    </div>);
}