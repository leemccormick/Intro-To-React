import './App.css';
import { useState } from 'react';

// Main Default For  Lifecycle of Reactive Effects Demo
export default function LifecycleReactiveEffectsDemo() {
    return (
        <div>
            <h1 className="App-topic"> Lifecycle of Reactive Effects</h1>

            <h2 className="App-title">The lifecycle of an Effect </h2>
            <TheLifecycleEffectDemo />

            <h2 className="App-title">Why synchronization may need to happen more than once </h2>
            <WhySynchronizationMayNeedToHappenMoreThanOnceDemo />

            <h2 className="App-title">How React re-synchronizes your Effect </h2>
            <HowReactReSynchronizesEffectDemo />

            <h2 className="App-title">Thinking from the Effect’s perspective </h2>
            <ThinkingFromEffectPerspectiveDemo />

            <h2 className="App-title">How React verifies that your Effect can re-synchronize </h2>
            <HowReactVerifiesThatYourEffectCanReSynchronizeDemo />

            <h2 className="App-title"> Each Effect represents a separate synchronization process </h2>
            <EachEffectRepresentsSeparateSynchronizationProcessDemo />

            <h2 className="App-title">Effects “react” to reactive values </h2>
            <EffectsToReactiveValuesDemo />

            <h2 className="App-title"> What an Effect with empty dependencies means </h2>
            <WhatAnEffectWithEmptyDependenciesMeansDemo />

            <h2 className="App-title"> All variables declared in the component body are reactive </h2>
            <AllVariablesDeclaredInBomponentBodyAreReactiveDemo />

            <h2 className="App-title"> React verifies that you specified every reactive value as a dependency </h2>
            <ReactVerifiesSpecifiedReactiveValueAsDependencyDemo />

            <h2 className="App-title"> What to do when you don’t want to re-synchronize </h2>
            <WhatToDoWhenYouDoNotWantToReSynchronizeDemo />

            <h2 className="App-title">Recap</h2>
            <RecapLifecycleReactiveEffectsDemo />

            <h2 className="App-title"> Try out some challenges</h2>
            <ChallengesLifecycleReactiveEffectsDemo />
        </div>
    );
}

//--------------------------------------------------------------------------------------
// The lifecycle of an Effect 
function TheLifecycleEffectDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Why synchronization may need to happen more than once 
function WhySynchronizationMayNeedToHappenMoreThanOnceDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// How React re-synchronizes your Effect 
function HowReactReSynchronizesEffectDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Thinking from the Effect’s perspective 
function ThinkingFromEffectPerspectiveDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// How React verifies that your Effect can re-synchronize 
function HowReactVerifiesThatYourEffectCanReSynchronizeDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Each Effect represents a separate synchronization process 
function EachEffectRepresentsSeparateSynchronizationProcessDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Effects “react” to reactive values 
function EffectsToReactiveValuesDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// What an Effect with empty dependencies means 
function WhatAnEffectWithEmptyDependenciesMeansDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// All variables declared in the component body are reactive 
function AllVariablesDeclaredInBomponentBodyAreReactiveDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// React verifies that you specified every reactive value as a dependency 
function ReactVerifiesSpecifiedReactiveValueAsDependencyDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// What to do when you don’t want to re-synchronize 
function WhatToDoWhenYouDoNotWantToReSynchronizeDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Recap
function RecapLifecycleReactiveEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>Components can mount, update, and unmount.</li>
            <li>Each Effect has a separate lifecycle from the surrounding component.</li>
            <li>Each Effect describes a separate synchronization process that can start and stop.</li>
            <li>When you write and read Effects, think from each individual Effect’s perspective (how to start and stop synchronization) rather than from the component’s perspective (how it mounts, updates, or unmounts).</li>
            <li>Values declared inside the component body are “reactive”.</li>
            <li>Reactive values should re-synchronize the Effect because they can change over time.</li>
            <li>The linter verifies that all reactive values used inside the Effect are specified as dependencies.</li>
            <li>All errors flagged by the linter are legitimate. There’s always a way to fix the code to not break the rules.</li>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
//**************************************************************************************
// Try out some challenges
/*
Challenge 1 of 5: Fix reconnecting on every keystroke 
- In this example, the ChatRoom component connects to the chat room when the component mounts, disconnects when it unmounts, and reconnects when you select a different chat room. This behavior is correct, so you need to keep it working.
- However, there is a problem. Whenever you type into the message box input at the bottom, ChatRoom also reconnects to the chat. (You can notice this by clearing the console and typing into the input.) Fix the issue so that this doesn’t happen.
*/
function Challenge1LifecycleReactiveEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 5: Fix reconnecting on every keystroke </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 2 of 5: Switch synchronization on and off 
- In this example, an Effect subscribes to the window pointermove event to move a pink dot on the screen. Try hovering over the preview area (or touching the screen if you’re on a mobile device), and see how the pink dot follows your movement.
- There is also a checkbox. Ticking the checkbox toggles the canMove state variable, but this state variable is not used anywhere in the code. Your task is to change the code so that when canMove is false (the checkbox is ticked off), the dot should stop moving. After you toggle the checkbox back on (and set canMove to true), the box should follow the movement again. In other words, whether the dot can move or not should stay synchronized to whether the checkbox is checked.
*/
function Challenge2LifecycleReactiveEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 5: Switch synchronization on and off </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 3 of 5: Investigate a stale value bug 
- In this example, the pink dot should move when the checkbox is on, and should stop moving when the checkbox is off. The logic for this has already been implemented: the handleMove event handler checks the canMove state variable.
- However, for some reason, the canMove state variable inside handleMove appears to be “stale”: it’s always true, even after you tick off the checkbox. How is this possible? Find the mistake in the code and fix it.
*/
function Challenge3LifecycleReactiveEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 5: Investigate a stale value bug </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 4 of 5: Fix a connection switch 
- In this example, the chat service in chat.js exposes two different APIs: createEncryptedConnection and createUnencryptedConnection. The root App component lets the user choose whether to use encryption or not, and then passes down the corresponding API method to the child ChatRoom component as the createConnection prop.
- Notice that initially, the console logs say the connection is not encrypted. Try toggling the checkbox on: nothing will happen. However, if you change the selected room after that, then the chat will reconnect and enable encryption (as you’ll see from the console messages). This is a bug. Fix the bug so that toggling the checkbox also causes the chat to reconnect.
*/
function Challenge4LifecycleReactiveEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 5: Fix a connection switch </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 5 of 5: Populate a chain of select boxes 
- In this example, there are two select boxes. One select box lets the user pick a planet. Another select box lets the user pick a place on that planet. The second box doesn’t work yet. Your task is to make it show the places on the chosen planet.
- Look at how the first select box works. It populates the planetList state with the result from the "/planets" API call. The currently selected planet’s ID is kept in the planetId state variable. You need to find where to add some additional code so that the placeList state variable is populated with the result of the "/planets/" + planetId + "/places" API call.
- If you implement this right, selecting a planet should populate the place list. Changing a planet should change the place list.
*/
function Challenge5LifecycleReactiveEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 5 of 5: Populate a chain of select boxes </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
function ChallengesLifecycleReactiveEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <Challenge1LifecycleReactiveEffectsDemo />
        <hr></hr>
        <Challenge2LifecycleReactiveEffectsDemo />
        <hr></hr>
        <Challenge3LifecycleReactiveEffectsDemo />
        <hr></hr>
        <Challenge4LifecycleReactiveEffectsDemo />
        <hr></hr>
        <Challenge5LifecycleReactiveEffectsDemo />
    </div>);
}