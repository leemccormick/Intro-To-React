import './App.css';
import React from 'react';
import { useState } from 'react';

// Main Default For Choosing the State Structure Demo
export default function ChoosingTheStateStructureDemo() {
    return (
        <div>
            <h2 className="App-title">Principles for structuring state </h2>
            <PrinciplesForStructuringStateDemo />

            <h2 className="App-title"> Group related state </h2>
            <GroupRelatedStateDemo />

            <h2 className="App-title"> Avoid contradictions in state </h2>
            <AvoidContradictionsInStateDemo />

            <h2 className="App-title">Avoid redundant state </h2>
            <AvoidRedundantStateDemo />

            <h2 className="App-title"> Avoid duplication in state </h2>
            <AvoidDuplicationInStateDemo />

            <h2 className="App-title"> Avoid deeply nested state </h2>
            <AvoidDeeplyNestedStateDemo />

            <h2 className="App-title"> Recap </h2>
            <ChoosingTheStateStructureRecapDemo />

            <h2 className="App-title">Try out some challenges </h2>
            <ChoosingTheStateStructureChallengesDemo />
        </div>
    );
}

// Principles for structuring state 
function PrinciplesForStructuringStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Group related state 
function GroupRelatedStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Avoid contradictions in state 
function AvoidContradictionsInStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}
// Avoid redundant state 
function AvoidRedundantStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Avoid duplication in state 
function AvoidDuplicationInStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Avoid deeply nested state 
function AvoidDeeplyNestedStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Recap
function ChoosingTheStateStructureRecapDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>
                If two state variables always update together, consider merging them into one.
            </li>
            <li>
                Choose your state variables carefully to avoid creating “impossible” states.
            </li>
            <li>
                Structure your state in a way that reduces the chances that you’ll make a mistake updating it.
            </li>
            <li>
                Avoid redundant and duplicate state so that you don’t need to keep it in sync.
            </li>
            <li>
                Don’t put props into state unless you specifically want to prevent updates.
            </li>
            <li>
                For UI patterns like selection, keep ID or index in state instead of the object itself.
            </li>
            <li>
                If updating deeply nested state is complicated, try flattening it.
            </li>
        </ul>
    </div>);
}

// Try out some challenges
/*
Challenge 1 of 4: Fix a component that’s not updating 
- This Clock component receives two props: color and time. When you select a different color in the select box, the Clock component receives a different color prop from its parent component. However, for some reason, the displayed color doesn’t update. Why? Fix the problem.
 */
function ChoosingTheStateStructureChallenge1Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 4: Fix a component that’s not updating </p>
    </div>);
}

// Try out some challenges
/*
Challenge 2 of 4: Fix a broken packing list 
- This packing list has a footer that shows how many items are packed, and how many items there are overall. It seems to work at first, but it is buggy. For example, if you mark an item as packed and then delete it, the counter will not be updated correctly. Fix the counter so that it’s always correct.
 */
function ChoosingTheStateStructureChallenge2Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 4: Fix a broken packing list </p>
    </div>);
}

// Try out some challenges
/*
Challenge 3 of 4: Fix the disappearing selection 
- There is a list of letters in state. When you hover or focus a particular letter, it gets highlighted. The currently highlighted letter is stored in the highlightedLetter state variable. You can “star” and “unstar” individual letters, which updates the letters array in state.
- This code works, but there is a minor UI glitch. When you press “Star” or “Unstar”, the highlighting disappears for a moment. However, it reappears as soon as you move your pointer or switch to another letter with keyboard. Why is this happening? Fix it so that the highlighting doesn’t disappear after the button click.
*/
function ChoosingTheStateStructureChallenge3Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3</p>
    </div>);
}

// Try out some challenges
/*
Challenge 4 of 4: Implement multiple selection 
- In this example, each Letter has an isSelected prop and an onToggle handler that marks it as selected. This works, but the state is stored as a selectedId (either null or an ID), so only one letter can get selected at any given time.
- Change the state structure to support multiple selection. (How would you structure it? Think about this before writing the code.) Each checkbox should become independent from the others. Clicking a selected letter should uncheck it. Finally, the footer should show the correct number of the selected items.
*/
function ChoosingTheStateStructureChallenge4Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 4: Implement multiple selection </p>
    </div>);
}

// Try out some challenges
function ChoosingTheStateStructureChallengesDemo() {
    return (<div className="App-left-aligned-content">
        <ChoosingTheStateStructureChallenge1Demo />
        <hr></hr>
        <ChoosingTheStateStructureChallenge2Demo />
        <hr></hr>
        <ChoosingTheStateStructureChallenge3Demo />
        <hr></hr>
        <ChoosingTheStateStructureChallenge4Demo />
    </div>);
}