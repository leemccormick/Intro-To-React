import './App.css';
import React from 'react';
import { useState } from 'react';

// Main Default For Passing Data Deeply with Context Demo
export default function PassingDataDeeplyWithContextDemo() {
    return (
        <div>
            <h2 className="App-title"> The problem with passing props </h2>
            <ProblemWithPassingPropsDemo />

            <h2 className="App-title">Context: an alternative to passing props </h2>
            <ContextAlternativeDemo />

            <h2 className="App-title">Step 1: Create the context </h2>
            <Step1CreateContextDemo />

            <h2 className="App-title">Step 2: Use the context </h2>
            <Step2UseContextDemo />

            <h2 className="App-title">Step 3: Provide the context </h2>
            <Step3ProvideContextDemo />

            <h2 className="App-title">Using and providing context from the same component </h2>
            <UsingAndProvidingContextDemo />

            <h2 className="App-title">Context passes through intermediate components </h2>
            <ContextAlternativeDemo />

            <h2 className="App-title">Before you use context </h2>
            <BeforeUseContextDemo />

            <h2 className="App-title">Use cases for context </h2>
            <UseCasesDemo />

            <h2 className="App-title"> Recap </h2>
            <RecapPassingDataDeeplyWithContextDemo />

            <h2 className="App-title">Try out some challenges </h2>
            <ChallengesPassingDataDeeplyWithContextDemo />
        </div>
    );
}

// The problem with passing props 
function ProblemWithPassingPropsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Context: an alternative to passing props 
function ContextAlternativeDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Step 1: Create the context 
function Step1CreateContextDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Step 2: Use the context 
function Step2UseContextDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Step 3: Provide the context 
function Step3ProvideContextDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Using and providing context from the same component 
function UsingAndProvidingContextDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Context passes through intermediate components 
function ContextPassesThroughDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Before you use context 
function BeforeUseContextDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Use cases for context 
function UseCasesDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Recap
function RecapPassingDataDeeplyWithContextDemo() {
    return (<div className="App-left-aligned-content">
        <ui>
            <li>
                Context lets a component provide some information to the entire tree below it.
            </li>
            <li>
                To pass context:
                <div className='App-left-aligned-border'>
                    <li className='App-small-font-size'>
                        1.Create and export it with export const MyContext = createContext(defaultValue).
                    </li>
                    <li className='App-small-font-size'>
                        2.Pass it to the useContext(MyContext) Hook to read it in any child component, no matter how deep.
                    </li>
                    <li className='App-small-font-size'>
                        3.Wrap children into MyContext.Provider value=... to provide it from a parent.
                    </li>
                </div>
            </li>
            <li>
                Context passes through any components in the middle.
            </li>
            <li>
                Context lets you write components that “adapt to their surroundings”.
            </li>
            <li>
                Before you use context, try passing props or passing JSX as children.
            </li>
        </ui>
    </div >);
}

// Try out some challenges
/*
Challenge 1 of 1: Replace prop drilling with context 
- In this example, toggling the checkbox changes the imageSize prop passed to each <PlaceImage>. The checkbox state is held in the top-level App component, but each <PlaceImage> needs to be aware of it.
- Currently, App passes imageSize to List, which passes it to each Place, which passes it to the PlaceImage. Remove the imageSize prop, and instead pass it from the App component directly to PlaceImage.
- You can declare context in Context.js.
 */
function Challenge1PassingDataDeeplyWithContextDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 1: Replace prop drilling with context </p>
    </div>);
}

// Try out some challenges
function ChallengesPassingDataDeeplyWithContextDemo() {
    return (<div className="App-left-aligned-content">
        <Challenge1PassingDataDeeplyWithContextDemo />
        <hr></hr>
    </div>);
}
