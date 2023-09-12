import './App.css';
import React from 'react';
import { useState } from 'react';

// Main Default For Scaling Up with Reducer and Context Demo
export default function ScalingUpWithReducerAndContextDemo() {
    return (
        <div>
            <h2 className="App-title"> Combining a reducer with context </h2>
            <CombiningReducerWithContextDemo />

            <h2 className="App-title"> Step 1: Create the context </h2>
            <Step1CreateContextDemo />

            <h2 className="App-title"> Step 2: Put state and dispatch into context </h2>
            <Step2PutStateAndDispatchDemo />

            <h2 className="App-title"> Step 3: Use context anywhere in the tree </h2>
            <Step3UseContextDemo />

            <h2 className="App-title"> Moving all wiring into a single file </h2>
            <MovingAllWiringIntoASingleFileDemo />

            <h2 className="App-title"> Recap </h2>
            <RecapScalingUpWithReducerAndContextDemo />
        </div>
    );
}

// Combining a reducer with context 
function CombiningReducerWithContextDemo() {
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

// Step 2: Put state and dispatch into context 
function Step2PutStateAndDispatchDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Step 3: Use context anywhere in the tree 
function Step3UseContextDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Moving all wiring into a single file 
function MovingAllWiringIntoASingleFileDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Recap
function RecapScalingUpWithReducerAndContextDemo() {
    return (<div className="App-left-aligned-content">
        <ui>
            <li>

                You can combine reducer with context to let any component read and update state above it.
            </li>
            <li>
                To provide state and the dispatch function to components below:
                <ui>
                    <div className='App-left-aligned-border'>
                        <li className='App-small-font-size'>
                            1.Create two contexts (for state and for dispatch functions).
                        </li>
                        <li className='App-small-font-size'>
                            2.Provide both contexts from the component that uses the reducer.
                        </li>
                        <li className='App-small-font-size'>
                            3.Use either context from components that need to read them.
                        </li>
                    </div >
                </ui>
            </li>
            <li>
                You can further declutter the components by moving all wiring into one file.
            </li>
            <li>
                You can export a component like TasksProvider that provides context.
            </li>
            <li>
                You can also export custom Hooks like useTasks and useTasksDispatch to read it.
            </li>
            <li>
                You can have many context-reducer pairs like this in your app.
            </li>
        </ui>
    </div >);
}