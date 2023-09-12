import './App.css';
import React from 'react';
import { useState } from 'react';

// Main Default For Sharing State Between Components Demo
export default function SharingStateBetweenComponentsDemo() {
    return (
        <div>
            <h2 className="App-title">Lifting state up by example </h2>
            <LiftingStateUpDemo />

            <h2 className="App-title">Step 1: Remove state from the child components </h2>
            <Step1RemoveStateDemo />

            <h2 className="App-title">Step 2: Pass hardcoded data from the common parent </h2>
            <Step2PassHardcodedDataDemo />

            <h2 className="App-title"> Step 3: Add state to the common parent </h2>
            <Step3AddStateDemo />

            <h2 className="App-title">A single source of truth for each state </h2>
            <SingleSourceOfTruthForEachStateDemo />

            <h2 className="App-title"> Recap </h2>
            <RecapSharingStateBetweenComponentsDemo />

            <h2 className="App-title">Try out some challenges </h2>
            <ChallengesSharingStateBetweenComponentsDemo />
        </div>
    );
}

// Lifting state up by example 
function LiftingStateUpDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Step 1: Remove state from the child components 
function Step1RemoveStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Step 2: Pass hardcoded data from the common parent 
function Step2PassHardcodedDataDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Step 3: Add state to the common parent 
function Step3AddStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// A single source of truth for each state 
function SingleSourceOfTruthForEachStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Recap
function RecapSharingStateBetweenComponentsDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>
                When you want to coordinate two components, move their state to their common parent.
            </li>
            <li>
                Then pass the information down through props from their common parent.
            </li>
            <li>
                Finally, pass the event handlers down so that the children can change the parent’s state.
            </li>
            <li>
                It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state).
            </li>
        </ul>
    </div>);
}

// Try out some challenges
/*
Challenge 1 of 2: Synced inputs 
- These two inputs are independent. Make them stay in sync: editing one input should update the other input with the same text, and vice versa.
 */
function Challenge1SharingStateBetweenComponentsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 2: Synced inputs </p>
    </div>);
}

// Try out some challenges
/*
Challenge 2 of 2: Filtering a list 
- In this example, the SearchBar has its own query state that controls the text input. Its parent FilterableList component displays a List of items, but it doesn’t take the search query into account.
- Use the filterItems(foods, query) function to filter the list according to the search query. To test your changes, verify that typing “s” into the input filters down the list to “Sushi”, “Shish kebab”, and “Dim sum”.
- Note that filterItems is already implemented and imported so you don’t need to write it yourself!
 */
function Challenge2SharingStateBetweenComponentsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 2: Filtering a list </p>
    </div>);
}

// Try out some challenges
function ChallengesSharingStateBetweenComponentsDemo() {
    return (<div className="App-left-aligned-content">
        <Challenge1SharingStateBetweenComponentsDemo />
        <hr></hr>
        <Challenge2SharingStateBetweenComponentsDemo />
        <hr></hr>
    </div>);
}