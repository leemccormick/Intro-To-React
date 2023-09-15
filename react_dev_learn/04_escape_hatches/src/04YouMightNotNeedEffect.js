import './App.css';
import { useState } from 'react';

// Main Default For You Might Not Need an Effect Demo
export default function YouMightNotNeedEffectDemo() {
    return (
        <div>
            <h1 className="App-topic">You Might Not Need an Effect</h1>

            <h2 className="App-title">How to remove unnecessary Effects </h2>
            <HowRemoveUnnecessaryEffectsDemo />

            <h2 className="App-title">Updating state based on props or state </h2>
            <UpdatingStateBasedOnPropsOrStateDemo />

            <h2 className="App-title">Caching expensive calculations </h2>
            <CachingExpensiveCalculationsDemo />

            <h2 className="App-title">Resetting all state when a prop changes </h2>
            <ResettingAllStateWhenPropChangesDemo />

            <h2 className="App-title">Adjusting some state when a prop changes </h2>
            <AdjustingSomeStateWhenPropChangesDemo />

            <h2 className="App-title">Sharing logic between event handlers </h2>
            <SharingLogicBetweenEventHandlersDemo />

            <h2 className="App-title">Sending a POST request </h2>
            <SendingPOSTRequestDemo />

            <h2 className="App-title">Chains of computations </h2>
            <ChainsComputationsDemo />

            <h2 className="App-title">Initializing the application </h2>
            <InitializingApplicationDemo />

            <h2 className="App-title">Notifying parent components about state changes </h2>
            <NotifyingParentComponentsAboutStateChangesDemo />

            <h2 className="App-title">Passing data to the parent </h2>
            <PassingDataParentDemo />

            <h2 className="App-title"> Subscribing to an external store </h2>
            <SubscribingToExternalStoreDemo />

            <h2 className="App-title">Fetching data </h2>
            <FetchingDataDemo />

            <h2 className="App-title">Recap</h2>
            <RecapYouMightNotNeedEffectDemo />

            <h2 className="App-title"> Try out some challenges</h2>
            <ChallengesYouMightNotNeedEffectDemo />
        </div>
    );
}

//--------------------------------------------------------------------------------------
// How to remove unnecessary Effects 
function HowRemoveUnnecessaryEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Updating state based on props or state 
function UpdatingStateBasedOnPropsOrStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Caching expensive calculations 
function CachingExpensiveCalculationsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Resetting all state when a prop changes 
function ResettingAllStateWhenPropChangesDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Adjusting some state when a prop changes 
function AdjustingSomeStateWhenPropChangesDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Sharing logic between event handlers 
function SharingLogicBetweenEventHandlersDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Sending a POST request 
function SendingPOSTRequestDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Chains of computations 
function ChainsComputationsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Initializing the application 
function InitializingApplicationDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Notifying parent components about state changes 
function NotifyingParentComponentsAboutStateChangesDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Passing data to the parent 
function PassingDataParentDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Subscribing to an external store 
function SubscribingToExternalStoreDemo() {
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
// Recap
function RecapYouMightNotNeedEffectDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>If you can calculate something during render, you don’t need an Effect.</li>
            <li>To cache expensive calculations, add useMemo instead of useEffect.</li>
            <li>To reset the state of an entire component tree, pass a different key to it.</li>
            <li>To reset a particular bit of state in response to a prop change, set it during rendering.</li>
            <li>Code that runs because a component was displayed should be in Effects, the rest should be in events.</li>
            <li>If you need to update the state of several components, it’s better to do it during a single event.</li>
            <li>Whenever you try to synchronize state variables in different components, consider lifting state up.</li>
            <li>You can fetch data with Effects, but you need to implement cleanup to avoid race conditions.</li>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
//**************************************************************************************
// Try out some challenges
/*
Challenge 1 of 4: Transform data without Effects 
- The TodoList below displays a list of todos. When the “Show only active todos” checkbox is ticked, completed todos are not displayed in the list. Regardless of which todos are visible, the footer displays the count of todos that are not yet completed.
- Simplify this component by removing all the unnecessary state and Effects.
*/
function Challenges1YouMightNotNeedEffectDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 4: Transform data without Effects </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 2 of 4: Cache a calculation without Effects 
- In this example, filtering the todos was extracted into a separate function called getVisibleTodos(). This function contains a console.log() call inside of it which helps you notice when it’s being called. Toggle “Show only active todos” and notice that it causes getVisibleTodos() to re-run. This is expected because visible todos change when you toggle which ones to display.
- Your task is to remove the Effect that recomputes the visibleTodos list in the TodoList component. However, you need to make sure that getVisibleTodos() does not re-run (and so does not print any logs) when you type into the input.
*/
function Challenges2YouMightNotNeedEffectDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 4: Cache a calculation without Effects </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 3 of 4: Reset state without Effects 
- This EditContact component receives a contact object shaped like { id, name, email } as the savedContact prop. Try editing the name and email input fields. When you press Save, the contact’s button above the form updates to the edited name. When you press Reset, any pending changes in the form are discarded. Play around with this UI to get a feel for it.
- When you select a contact with the buttons at the top, the form resets to reflect that contact’s details. This is done with an Effect inside EditContact.js. Remove this Effect. Find another way to reset the form when savedContact.id changes.
*/
function Challenges3YouMightNotNeedEffectDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 4: Reset state without Effects </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 4 of 4: Submit a form without Effects 
- This Form component lets you send a message to a friend. When you submit the form, the showForm state variable is set to false. This triggers an Effect calling sendMessage(message), which sends the message (you can see it in the console). After the message is sent, you see a “Thank you” dialog with an “Open chat” button that lets you get back to the form.
- Your app’s users are sending way too many messages. To make chatting a little bit more difficult, you’ve decided to show the “Thank you” dialog first rather than the form. Change the showForm state variable to initialize to false instead of true. As soon as you make that change, the console will show that an empty message was sent. Something in this logic is wrong!
- What’s the root cause of this problem? And how can you fix it?
*/
function Challenges4YouMightNotNeedEffectDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 4: Submit a form without Effects </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
function ChallengesYouMightNotNeedEffectDemo() {
    return (<div className="App-left-aligned-content">
        <Challenges1YouMightNotNeedEffectDemo />
        <hr></hr>
        <Challenges2YouMightNotNeedEffectDemo />
        <hr></hr>
        <Challenges3YouMightNotNeedEffectDemo />
        <hr></hr>
        <Challenges4YouMightNotNeedEffectDemo />
    </div>);
}