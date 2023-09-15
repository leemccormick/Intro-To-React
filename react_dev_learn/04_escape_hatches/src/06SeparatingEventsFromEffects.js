import './App.css';
import { useState } from 'react';

// Main Default For Separating Events from Effects Demo
export default function SeparatingEventsFromEffectsDemo() {
    return (
        <div>
            <h1 className="App-topic">Separating Events from Effects</h1>

            <h2 className="App-title">Choosing between event handlers and Effects </h2>
            <ChoosingBetweenEventHandlersAndEffectsDemo />

            <h2 className="App-title">Event handlers run in response to specific interactions </h2>
            <EventHandlersRunInResponseToSpecificInteractionsDemo />

            <h2 className="App-title">Effects run whenever synchronization is needed </h2>
            <EffectsRunWheneverSynchronizationIsNeededDemo />

            <h2 className="App-title"> Reactive values and reactive logic </h2>
            <ReactiveValuesAndLogicDemo />

            <h2 className="App-title">Logic inside event handlers is not reactive </h2>
            <LogicInsideEventHandlersIsNotReactiveDemo />

            <h2 className="App-title">Logic inside Effects is reactive </h2>
            <LogicInsideEffectsIsReactiveDemo />

            <h2 className="App-title">Extracting non-reactive logic out of Effects </h2>
            <ExtractingNonReactiveLogicOutOfEffectsDemo />

            <h2 className="App-title">Declaring an Effect Event </h2>
            <DeclaringEffectEventDemo />

            <h2 className="App-title"> Reading latest props and state with Effect Events </h2>
            <ReadingLatestPropsStateWithEffectEventsDemo />

            <h2 className="App-title">Limitations of Effect Events </h2>
            <LimitationsEffectEventsDemo />

            <h2 className="App-title">Recap</h2>
            <RecapSeparatingEventsFromEffectsDemo />

            <h2 className="App-title"> Try out some challenges</h2>
            <ChallengesSeparatingEventsFromEffectsDemo />
        </div>
    );
}

//--------------------------------------------------------------------------------------
// Choosing between event handlers and Effects 
function ChoosingBetweenEventHandlersAndEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Event handlers run in response to specific interactions 
function EventHandlersRunInResponseToSpecificInteractionsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Effects run whenever synchronization is needed 
function EffectsRunWheneverSynchronizationIsNeededDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Reactive values and reactive logic 
function ReactiveValuesAndLogicDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Logic inside event handlers is not reactive 
function LogicInsideEventHandlersIsNotReactiveDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Logic inside Effects is reactive 
function LogicInsideEffectsIsReactiveDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Extracting non-reactive logic out of Effects 
function ExtractingNonReactiveLogicOutOfEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Declaring an Effect Event 
function DeclaringEffectEventDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Reading latest props and state with Effect Events 
function ReadingLatestPropsStateWithEffectEventsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Limitations of Effect Events 
function LimitationsEffectEventsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Recap
function RecapSeparatingEventsFromEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>Event handlers run in response to specific interactions.</li>
            <li>Effects run whenever synchronization is needed.</li>
            <li>Logic inside event handlers is not reactive.</li>
            <li>Logic inside Effects is reactive.</li>
            <li>You can move non-reactive logic from Effects into Effect Events.</li>
            <li>Only call Effect Events from inside Effects.</li>
            <li>Don’t pass Effect Events to other components or Hooks.</li>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
//**************************************************************************************
// Try out some challenges
/*
Challenge 1 of 4: Fix a variable that doesn’t update 
- This Timer component keeps a count state variable which increases every second. The value by which it’s increasing is stored in the increment state variable. You can control the increment variable with the plus and minus buttons.
- However, no matter how many times you click the plus button, the counter is still incremented by one every second. What’s wrong with this code? Why is increment always equal to 1 inside the Effect’s code? Find the mistake and fix it.
*/
function Challenge1SeparatingEventsFromEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 4: Fix a variable that doesn’t update </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 2 of 4: Fix a freezing counter 
- This Timer component keeps a count state variable which increases every second. The value by which it’s increasing is stored in the increment state variable, which you can control it with the plus and minus buttons. For example, try pressing the plus button nine times, and notice that the count now increases each second by ten rather than by one.
- There is a small issue with this user interface. You might notice that if you keep pressing the plus or minus buttons faster than once per second, the timer itself seems to pause. It only resumes after a second passes since the last time you’ve pressed either button. Find why this is happening, and fix the issue so that the timer ticks on every second without interruptions.
*/
function Challenge2SeparatingEventsFromEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 4: Fix a freezing counter </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 3 of 4: Fix a non-adjustable delay 
- In this example, you can customize the interval delay. It’s stored in a delay state variable which is updated by two buttons. However, even if you press the “plus 100 ms” button until the delay is 1000 milliseconds (that is, a second), you’ll notice that the timer still increments very fast (every 100 ms). It’s as if your changes to the delay are ignored. Find and fix the bug.
*/
function Challenge3SeparatingEventsFromEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 4: Fix a non-adjustable delay </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 4 of 4: Fix a delayed notification 
- When you join a chat room, this component shows a notification. However, it doesn’t show the notification immediately. Instead, the notification is artificially delayed by two seconds so that the user has a chance to look around the UI.
- This almost works, but there is a bug. Try changing the dropdown from “general” to “travel” and then to “music” very quickly. If you do it fast enough, you will see two notifications (as expected!) but they will both say “Welcome to music”.
- Fix it so that when you switch from “general” to “travel” and then to “music” very quickly, you see two notifications, the first one being “Welcome to travel” and the second one being “Welcome to music”. (For an additional challenge, assuming you’ve already made the notifications show the correct rooms, change the code so that only the latter notification is displayed.)
*/
function Challenge4SeparatingEventsFromEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 4: Fix a delayed notification </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
function ChallengesSeparatingEventsFromEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <Challenge1SeparatingEventsFromEffectsDemo />
        <hr></hr>
        <Challenge2SeparatingEventsFromEffectsDemo />
        <hr></hr>
        <Challenge3SeparatingEventsFromEffectsDemo />
        <hr></hr>
        <Challenge4SeparatingEventsFromEffectsDemo />
    </div>);
}