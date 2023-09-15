import './App.css';
import { useState } from 'react';

// Main Default For Escape Hatches Demo
export default function EscapeHatchesDemo() {
    return (
        <div>
            <h1 className="App-topic">Escape Hatches</h1>

            <h2 className="App-title">Referencing values with refs</h2>
            <ReferencingValuesWithRefsDemo />

            <h2 className="App-title">Manipulating the DOM with refs</h2>
            <ManipulatingTheDOMWithRefsDemo />

            <h2 className="App-title">Synchronizing with Effects</h2>
            <SynchronizingWithEffectsDemo />

            <h2 className="App-title">You Might Not Need An Effect</h2>
            <YouMightNotNeedAnEffectDemo />

            <h2 className="App-title">Lifecycle of reactive effects</h2>
            <LifecycleOfReactiveEffectsDemo />

            <h2 className="App-title">Separating events from Effects</h2>
            <SeparatingEventsFromEffectsDemo />

            <h2 className="App-title">Removing Effect dependencies </h2>
            <RemovingEffectDependenciesDemo />

            <h2 className="App-title">Reusing logic with custom Hooks</h2>
            <ReusingLogicWithCustomHooksDemo />
        </div>
    );
}

//--------------------------------------------------------------------------------------
// Referencing values with refs 
function ReferencingValuesWithRefsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Manipulating the DOM with refs 
function ManipulatingTheDOMWithRefsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Synchronizing with Effects 
function SynchronizingWithEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// You Might Not Need An Effect 
function YouMightNotNeedAnEffectDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Lifecycle of reactive effects 
function LifecycleOfReactiveEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

// Separating events from Effects 
function SeparatingEventsFromEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Removing Effect dependencies 
function RemovingEffectDependenciesDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Reusing logic with custom Hooks 
function ReusingLogicWithCustomHooksDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}