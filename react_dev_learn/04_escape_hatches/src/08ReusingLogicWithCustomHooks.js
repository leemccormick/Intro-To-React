import './App.css';
import { useState } from 'react';

// Main Default For Reusing Logic with Custom Hooks Demo
export default function ReusingLogicWithCustomHooksDemo() {
    return (
        <div>
            <h1 className="App-topic"> Reusing Logic with Custom Hooks</h1>

            <h2 className="App-title">Custom Hooks: Sharing logic between components </h2>
            <CustomHooksSharingLogicDemo />

            <h2 className="App-title">Extracting your own custom Hook from a component </h2>
            <ExtractingOwnCustomHookDemo />

            <h2 className="App-title">Hook names always start with use </h2>
            <HookNamesDemo />

            <h2 className="App-title">Custom Hooks let you share stateful logic, not state itself </h2>
            <CustomHooksLetShareStatefulLogicDemo />

            <h2 className="App-title"> Passing reactive values between Hooks </h2>
            <PassingReactiveValuesBetweenHooksDemo />

            <h2 className="App-title"> Passing event handlers to custom Hooks </h2>
            <PassingEventHandlersToCustomHooksDemo />

            <h2 className="App-title">When to use custom Hooks </h2>
            <WhenToUseCustomHooksDemo />

            <h2 className="App-title"> Custom Hooks help you migrate to better patterns </h2>
            <CustomHooksHelpMigrateDemo />

            <h2 className="App-title">There is more than one way to do it </h2>
            <ThereIsMoreThanOneWayDemo />

            <h2 className="App-title">Recap</h2>
            <RecapReusingLogicWithCustomHooksDemo />

            <h2 className="App-title"> Try out some challenges</h2>
            <ChallengesReusingLogicWithCustomHooksDemo />
        </div>
    );
}

//--------------------------------------------------------------------------------------
// Custom Hooks: Sharing logic between components 
function CustomHooksSharingLogicDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Extracting your own custom Hook from a component 
function ExtractingOwnCustomHookDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Hook names always start with use 
function HookNamesDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Custom Hooks let you share stateful logic, not state itself 
function CustomHooksLetShareStatefulLogicDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Passing reactive values between Hooks 
function PassingReactiveValuesBetweenHooksDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Passing event handlers to custom Hooks 
function PassingEventHandlersToCustomHooksDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// When to use custom Hooks 
function WhenToUseCustomHooksDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Custom Hooks help you migrate to better patterns 
function CustomHooksHelpMigrateDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// There is more than one way to do it 
function ThereIsMoreThanOneWayDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Recap
function RecapReusingLogicWithCustomHooksDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>Custom Hooks let you share logic between components.</li>
            <li>Custom Hooks must be named starting with use followed by a capital letter.</li>
            <li>Custom Hooks only share stateful logic, not state itself.</li>
            <li>You can pass reactive values from one Hook to another, and they stay up-to-date.</li>
            <li>All Hooks re-run every time your component re-renders.</li>
            <li>The code of your custom Hooks should be pure, like your component’s code.</li>
            <li>Wrap event handlers received by custom Hooks into Effect Events.</li>
            <li>Don’t create custom Hooks like useMount. Keep their purpose specific.</li>
            <li>It’s up to you how and where to choose the boundaries of your code.</li>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
//**************************************************************************************
// Try out some challenges
/*
Challenge 1 of 5: Extract a useCounter Hook 
- This component uses a state variable and an Effect to display a number that increments every second. Extract this logic into a custom Hook called useCounter. Your goal is to make the Counter component implementation look exactly like this.
*/
function Challenge1ReusingLogicWithCustomHooksDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 5: Extract a useCounter Hook </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 2 of 5: Make the counter delay configurable 
- In this example, there is a delay state variable controlled by a slider, but its value is not used. Pass the delay value to your custom useCounter Hook, and change the useCounter Hook to use the passed delay instead of hardcoding 1000 ms.
*/
function Challenge2ReusingLogicWithCustomHooksDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 5: Make the counter delay configurable </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 3 of 5: Extract useInterval out of useCounter 
- Currently, your useCounter Hook does two things. It sets up an interval, and it also increments a state variable on every interval tick. Split out the logic that sets up the interval into a separate Hook called useInterval. It should take two arguments: the onTick callback, and the delay. After this change, your useCounter implementation should look like this
*/
function Challenge3ReusingLogicWithCustomHooksDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 5: Extract useInterval out of useCounter </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 4 of 5: Fix a resetting interval
- In this example, there are two separate intervals.
- The App component calls useCounter, which calls useInterval to update the counter every second. But the App component also calls useInterval to randomly update the page background color every two seconds.
- For some reason, the callback that updates the page background never runs. Add some logs inside useInterval:
*/
function Challenge4ReusingLogicWithCustomHooksDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 5: Fix a resetting interval</p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 5 of 5: Implement a staggering movement 
- In this example, the usePointerPosition() Hook tracks the current pointer position. Try moving your cursor or your finger over the preview area and see the red dot follow your movement. Its position is saved in the pos1 variable.
- In fact, there are five (!) different red dots being rendered. You don’t see them because currently they all appear at the same position. This is what you need to fix. What you want to implement instead is a “staggered” movement: each dot should “follow” the previous dot’s path. For example, if you quickly move your cursor, the first dot should follow it immediately, the second dot should follow the first dot with a small delay, the third dot should follow the second dot, and so on.
- You need to implement the useDelayedValue custom Hook. Its current implementation returns the value provided to it. Instead, you want to return the value back from delay milliseconds ago. You might need some state and an Effect to do this.
- After you implement useDelayedValue, you should see the dots move following one another.
*/
function Challenge5ReusingLogicWithCustomHooksDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 5 of 5: Implement a staggering movement </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
function ChallengesReusingLogicWithCustomHooksDemo() {
    return (<div className="App-left-aligned-content">
        <Challenge1ReusingLogicWithCustomHooksDemo />
        <hr></hr>
        <Challenge2ReusingLogicWithCustomHooksDemo />
        <hr></hr>
        <Challenge3ReusingLogicWithCustomHooksDemo />
        <hr></hr>
        <Challenge4ReusingLogicWithCustomHooksDemo />
        <hr></hr>
        <Challenge5ReusingLogicWithCustomHooksDemo />
    </div>);
}