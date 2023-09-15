import './App.css';
import { useState } from 'react';

// Main Default For Synchronizing with Effects Demo
export default function SynchronizingWithEffectsDemo() {
    return (
        <div>
            <h1 className="App-topic">Synchronizing with Effects</h1>

            <h2 className="App-title"> What are Effects and how are they different from events? </h2>
            <WhatEffectsAndHowDifferentFromEventsDemo />

            <h2 className="App-title"> You might not need an Effect </h2>
            <YouMightNotNeedEffectDemo />

            <h2 className="App-title"> How to write an Effect </h2>
            <HowToWriteAnEffectDemo />

            <h2 className="App-title"> Step 1: Declare an Effect </h2>
            <Step1DeclareEffectDemo />

            <h2 className="App-title">Step 2: Specify the Effect dependencies </h2>
            <Step2SpecifyEffectDependenciesDemo />

            <h2 className="App-title"> Step 3: Add cleanup if needed </h2>
            <Step3AddCleanupIfNeededDemo />

            <h2 className="App-title">How to handle the Effect firing twice in development? </h2>
            <HowToHandleTheEffectFiringTwiceInDevelopmentDemo />

            <h2 className="App-title">Controlling non-React widgets </h2>
            <ControllingNonReactWidgetsDemo />

            <h2 className="App-title">Subscribing to events </h2>
            <SubscribingToEventsDemo />

            <h2 className="App-title">Triggering animations </h2>
            <TriggeringAnimationsDemo />

            <h2 className="App-title"> Fetching data </h2>
            <FetchingDataDemo />

            <h2 className="App-title">Sending analytics </h2>
            <SendingAnalyticsDemo />

            <h2 className="App-title">Not an Effect: Initializing the application </h2>
            <NotEffectInitializingApplicationDemo />

            <h2 className="App-title"> Not an Effect: Buying a product </h2>
            <NotEffectBuyingProductDemo />

            <h2 className="App-title">Putting it all together </h2>
            <PuttingItAllTogetherDemo />

            <h2 className="App-title">Recap</h2>
            <RecapSynchronizingWithEffectsDemo />

            <h2 className="App-title"> Try out some challenges</h2>
            <ChallengesSynchronizingWithEffectsDemo />
        </div>
    );
}

//--------------------------------------------------------------------------------------
// What are Effects and how are they different from events? 
function WhatEffectsAndHowDifferentFromEventsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// You might not need an Effect 
function YouMightNotNeedEffectDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// How to write an Effect 
function HowToWriteAnEffectDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Step 1: Declare an Effect 
function Step1DeclareEffectDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Step 2: Specify the Effect dependencies 
function Step2SpecifyEffectDependenciesDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Step 3: Add cleanup if needed 
function Step3AddCleanupIfNeededDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// How to handle the Effect firing twice in development? 
function HowToHandleTheEffectFiringTwiceInDevelopmentDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Controlling non-React widgets 
function ControllingNonReactWidgetsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Subscribing to events 
function SubscribingToEventsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Triggering animations 
function TriggeringAnimationsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Fetching data 
function FetchingDataDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Sending analytics 
function SendingAnalyticsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Not an Effect: Initializing the application 
function NotEffectInitializingApplicationDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Not an Effect: Buying a product 
function NotEffectBuyingProductDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Putting it all together 
function PuttingItAllTogetherDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}
//--------------------------------------------------------------------------------------
// Recap
function RecapSynchronizingWithEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>Unlike events, Effects are caused by rendering itself rather than a particular interaction.</li>
            <li>Effects let you synchronize a component with some external system (third-party API, network, etc).</li>
            <li>By default, Effects run after every render (including the initial one).</li>
            <li>React will skip the Effect if all of its dependencies have the same values as during the last render.</li>
            <li>You can’t “choose” your dependencies. They are determined by the code inside the Effect.</li>
            <li>Empty dependency array ([]) corresponds to the component “mounting”, i.e. being added to the screen.</li>
            <li>In Strict Mode, React mounts components twice (in development only!) to stress-test your Effects.</li>
            <li>If your Effect breaks because of remounting, you need to implement a cleanup function.</li>
            <li>React will call your cleanup function before the Effect runs next time, and during the unmount.</li>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
//**************************************************************************************
// Try out some challenges
/*
Challenge 1 of 4: Focus a field on mount 
- In this example, the form renders a <MyInput /> component.
- Use the input’s focus() method to make MyInput automatically focus when it appears on the screen. There is already a commented out implementation, but it doesn’t quite work. Figure out why it doesn’t work, and fix it. (If you’re familiar with the autoFocus attribute, pretend that it does not exist: we are reimplementing the same functionality from scratch.)
*/
function Challenges1SynchronizingWithEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 4: Focus a field on mount</p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 2 of 4: Focus a field conditionally 
- This form renders two <MyInput /> components.
- Press “Show form” and notice that the second field automatically gets focused. This is because both of the <MyInput /> components try to focus the field inside. When you call focus() for two input fields in a row, the last one always “wins”.
- Let’s say you want to focus the first field. The first MyInput component now receives a boolean shouldFocus prop set to true. Change the logic so that focus() is only called if the shouldFocus prop received by MyInput is true.
*/
function Challenges2SynchronizingWithEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 4: Focus a field conditionally </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 3 of 4: Fix an interval that fires twice 
- This Counter component displays a counter that should increment every second. On mount, it calls setInterval. This causes onTick to run every second. The onTick function increments the counter.
- However, instead of incrementing once per second, it increments twice. Why is that? Find the cause of the bug and fix it.
*/
function Challenges3SynchronizingWithEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 4: Fix an interval that fires twice </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 4 of 4: Fix fetching inside an Effect 
- This component shows the biography for the selected person. It loads the biography by calling an asynchronous function fetchBio(person) on mount and whenever person changes. That asynchronous function returns a Promise which eventually resolves to a string. When fetching is done, it calls setBio to display that string under the select box.
*/
function Challenges4SynchronizingWithEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 4: Fix fetching inside an Effect </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
function ChallengesSynchronizingWithEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <Challenges1SynchronizingWithEffectsDemo />
        <hr></hr>
        <Challenges2SynchronizingWithEffectsDemo />
        <hr></hr>
        <Challenges3SynchronizingWithEffectsDemo />
        <hr></hr>
        <Challenges4SynchronizingWithEffectsDemo />
    </div>);
}