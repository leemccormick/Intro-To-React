import './App.css';
import { useState, useEffect } from 'react';

// Main Default For Removing Effect Dependencies Demo
export default function RemovingEffectDependenciesDemo() {
    return (
        <div>
            <h1 className="App-topic">Removing Effect Dependencies</h1>
            <p>When you write an Effect, the linter will verify that you’ve included every reactive value (like props and state) that the Effect reads in the list of your Effect’s dependencies. This ensures that your Effect remains synchronized with the latest props and state of your component. Unnecessary dependencies may cause your Effect to run too often, or even create an infinite loop.</p>

            <h2 className="App-title"> Dependencies should match the code </h2>
            <DependenciesShouldMatchTheCodeDemo />

            <h2 className="App-title">To remove a dependency, prove that it’s not a dependency </h2>
            <ToRemoveDependencyDemo />

            <h2 className="App-title"> To change the dependencies, change the code </h2>
            <ToChangeDependenciesDemo />

            <h2 className="App-title"> Removing unnecessary dependencies </h2>
            <RemovingUnnecessaryDependenciesDemo />

            <h2 className="App-title"> Should this code move to an event handler? </h2>
            <ShouldThisCodeMoveToEventHandlerDemo />

            <h2 className="App-title"> Is your Effect doing several unrelated things? </h2>
            <IsEffectDoingThingDemo />

            <h2 className="App-title">Are you reading some state to calculate the next state? </h2>
            <AreYouReadingSomeStateToCalculateDemo />

            <h2 className="App-title"> Do you want to read a value without “reacting” to its changes? </h2>
            <DoYouWantToReadValueDemo />

            <h2 className="App-title"> Wrapping an event handler from the props </h2>
            <WrappingEventHandlerFromPropsDemo />

            <h2 className="App-title"> Separating reactive and non-reactive code </h2>
            <SeparatingReactiveAndNonDemo />

            <h2 className="App-title"> Does some reactive value change unintentionally? </h2>
            <DoesReactiveValueChangeDemo />

            <h2 className="App-title"> Move static objects and functions outside your component </h2>
            <MoveStaticObjectsAndFunctionsOutsideDemo />

            <h2 className="App-title"> Move dynamic objects and functions inside your Effect </h2>
            <MoveObjectsAndFunctionsInsideEffectDemo />

            <h2 className="App-title"> Read primitive values from objects </h2>
            <ReadPrimitiveValuesFromObjectsDemo />

            <h2 className="App-title">Calculate primitive values from functions </h2>
            <CalculatePrimitiveValuesFromFunctionsDemo />

            <h2 className="App-title">Recap</h2>
            <RecapRemovingEffectDependenciesDemo />

            <h2 className="App-title"> Try out some challenges</h2>
            <ChallengesRemovingEffectDependenciesDemo />
        </div>
    );
}

//--------------------------------------------------------------------------------------
// Dependencies should match the code 
function createConnectionDependencies(serverUrl, roomId) {
    // A real implementation would actually connect to the server
    return {
        connect() {
            console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
        },
        disconnect() {
            console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
        }
    };
}

const serverUrlDependencies = 'https://localhost:1234';

function DependenciesChatRoom({ roomId }) {
    useEffect(() => {
        const connection = createConnectionDependencies(serverUrlDependencies, roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]);
    return <h1>Welcome to the {roomId} room!</h1>;
}

function DependenciesApp() {
    const [roomId, setRoomId] = useState('general');

    return (
        <>
            <label>
                Choose the chat room:{' '}
                <select
                    value={roomId}
                    onChange={e => setRoomId(e.target.value)}
                >
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <hr />
            <DependenciesChatRoom roomId={roomId} />
        </>
    );
}

function DependenciesShouldMatchTheCodeDemo() {
    return (<div className="App-left-aligned-content">
        <p>- When you write an Effect, you first specify how to start and stop whatever you want your Effect to be doing.</p>
        <p>- Then, if you leave the Effect dependencies empty ({'['}  {']'}), the linter will suggest the correct dependencies.</p>
        <p>- Fill them in according to what the linter says</p>
        <hr></hr>
        <DependenciesApp />
    </div>);
}

//--------------------------------------------------------------------------------------
// To remove a dependency, prove that it’s not a dependency 
const serverUrlRemoveDependency = 'https://localhost:1234';
const roomIdRemoveDependency = 'music remove dependency demo';

function RemoveDependencyChatRoom() {
    useEffect(() => {
        const connection = createConnectionDependencies(serverUrlRemoveDependency, roomIdRemoveDependency);
        connection.connect();
        return () => connection.disconnect();
    }, []);
    return <h1>Welcome to the {roomIdRemoveDependency} room!</h1>;
}

function ToRemoveDependencyDemo() {
    return (<div className="App-left-aligned-content">
        <p>To remove a dependency, “prove” to the linter that it doesn’t need to be a dependency. For example, you can move roomId out of your component to prove that it’s not reactive and won’t change on re-renders:</p>
        <RemoveDependencyChatRoom />
    </div>);
}

//--------------------------------------------------------------------------------------
// To change the dependencies, change the code 
function ToChangeDependenciesDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <ol>
                <li>First, you change the code of your Effect or how your reactive values are declared.</li>
                <li>Then, you follow the linter and adjust the dependencies to match the code you have changed.</li>
                <li>If you’re not happy with the list of dependencies, you go back to the first step (and change the code again).</li>
            </ol>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
// Removing unnecessary dependencies 
function RemovingUnnecessaryDependenciesDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <ol>
                <li>You might want to re-execute different parts of your Effect under different conditions. </li>
                <li>You might want to only read the latest value of some dependency instead of “reacting” to its changes. </li>
                <li>A dependency may change too often unintentionally because it’s an object or a function.</li>
            </ol>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
// Should this code move to an event handler? 
function ShouldThisCodeMoveToEventHandlerDemo() {
    return (<div className="App-left-aligned-content">
        <p>The problem here is that this shouldn’t be an Effect in the first place. You want to send this POST request and show the notification in response to submitting the form, which is a particular interaction. To run some code in response to particular interaction, put that logic directly into the corresponding event handler.</p>

        <div className='App-left-aligned-small-box-border  App-super-small-font-size App-tabbed-content '>
            <p>function Form() {'{'} </p>
            <div className='App-tabbed-content'>
                <p> const theme = useContext(ThemeContext);</p>
                <div className='App-hilight-color'>
                    <p>function handleSubmit() {'{'} </p>
                    <p className='App-tabbed-content App-comment-color'>    {'//'} ✅  Good: Event-specific logic is called from event handlers</p>
                    <p className='App-tabbed-content'> post('/api/register');</p>
                    <p className='App-tabbed-content'> showNotification('Successfully registered!', theme);</p>
                    <p>{'}'}</p>
                </div>
                <p>{'//'} ...</p>
            </div>
            <p>{'}'}</p>
        </div>
    </div >);
}

//--------------------------------------------------------------------------------------
// Is your Effect doing several unrelated things? 
function IsEffectDoingThingDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-container'>
            <div className='App-smallest-container App-medium-font-size'>
                <p>The problem with this code is that you’re synchronizing two different unrelated things:</p>
                <ul>
                    <ol className='App-no-tabbed-content'>
                        <li>You want to synchronize the cities state to the network based on the country prop.</li>
                        <li>You want to synchronize the areas state to the network based on the city state.</li>
                    </ol>
                </ul>
                <hr></hr>
                <p className='App-hilight-color'>Each Effect should represent an independent synchronization process. In this example, deleting one Effect doesn’t break the other Effect’s logic. This means they synchronize different things, and it’s good to split them up. If you’re concerned about duplication, you can improve this code by extracting repetitive logic into a custom Hook.</p>
            </div>

            <div className='App-left-aligned-small-box-border  App-super-small-font-size App-tabbed-content '>
                <p>function ShippingForm({'{'} country {'}'}) {'{'} </p>
                <div className='App-tabbed-content'>
                    <p className='App-success-color'>{'//'} ✅ First useEffect </p>
                    <p>const [cities, setCities] = useState(null);</p>
                    <div className='App-hilight-color'>
                        <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                        <p className='App-tabbed-content'>     let ignore = false; </p>
                        <p className='App-tabbed-content'>    fetch(`/api/cities?country=${'{'}country{'}'}).then{'('} json  ={'>'} {'{'} </p>
                        <div className='App-tabbed-content'>
                            <p className='App-tabbed-content'>    if (!ignore) {'{'} </p>
                            <p className='App-tabbed-content App-tabbed-content App-tabbed-content'>  setCities(json);</p>
                            <p className='App-tabbed-content'>  {'}'} </p>
                            <p>return () ={'>'} {'{'}   ignore = true   {'}'};</p>
                        </div>
                        <p className='App-tabbed-content'>{'}'}{')'}; </p>
                        <p>{'}'}, [country] {')'}; </p>
                    </div>

                    <p className='App-success-color'>{'//'} ✅ Seconde useEffect </p>
                    <p>const [city, setCity] = useState(null);</p>
                    <p>  const [areas, setAreas] = useState(null);</p>
                    <div className='App-hilight-color'>
                        <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                        <p className='App-tabbed-content'>     let ignore = false; </p>
                        <p className='App-tabbed-content'>    fetch(`/api/areas?city=${'{'}city{'}'}).then{'('} json  ={'>'} {'{'} </p>
                        <div className='App-tabbed-content'>
                            <p className='App-tabbed-content'>    if (!ignore) {'{'} </p>
                            <p className='App-tabbed-content App-tabbed-content App-tabbed-content'>  setAreas(json);</p>
                            <p className='App-tabbed-content'>  {'}'} </p>
                            <p>return () ={'>'} {'{'}   ignore = true   {'}'};</p>
                        </div>
                        <p className='App-tabbed-content'>{'}'}{')'}; </p>
                        <p>{'}'}, [city] {')'}; </p>
                    </div>
                    <p>{'//'} ...</p>
                </div>
                <p>{'}'}</p>
            </div>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Are you reading some state to calculate the next state? 
function AreYouReadingSomeStateToCalculateDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Do you want to read a value without “reacting” to its changes? 
function DoYouWantToReadValueDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>

    </div>);
}

//--------------------------------------------------------------------------------------
// Wrapping an event handler from the props 
function WrappingEventHandlerFromPropsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>

    </div>);
}

//--------------------------------------------------------------------------------------
// Separating reactive and non-reactive code 
function SeparatingReactiveAndNonDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>

    </div>);
}

//--------------------------------------------------------------------------------------
// Does some reactive value change unintentionally? 
function DoesReactiveValueChangeDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>

    </div>);
}

//--------------------------------------------------------------------------------------
// Move static objects and functions outside your component 
function MoveStaticObjectsAndFunctionsOutsideDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>

    </div>);
}

//--------------------------------------------------------------------------------------
// Move dynamic objects and functions inside your Effect 
function MoveObjectsAndFunctionsInsideEffectDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>

    </div>);
}

//--------------------------------------------------------------------------------------
// Read primitive values from objects 
function ReadPrimitiveValuesFromObjectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>

    </div>);
}

//--------------------------------------------------------------------------------------
// Calculate primitive values from functions 
function CalculatePrimitiveValuesFromFunctionsDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>

    </div>);
}

//--------------------------------------------------------------------------------------
// Recap
function RecapRemovingEffectDependenciesDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>Dependencies should always match the code.</li>
            <li>When you’re not happy with your dependencies, what you need to edit is the code.</li>
            <li>Suppressing the linter leads to very confusing bugs, and you should always avoid it.</li>
            <li>To remove a dependency, you need to “prove” to the linter that it’s not necessary.</li>
            <li>If some code should run in response to a specific interaction, move that code to an event handler.</li>
            <li>If different parts of your Effect should re-run for different reasons, split it into several Effects.</li>
            <li>If you want to update some state based on the previous state, pass an updater function.</li>
            <li>If you want to read the latest value without “reacting” it, extract an Effect Event from your Effect.</li>
            <li>In JavaScript, objects and functions are considered different if they were created at different times.</li>
            <li>Try to avoid object and function dependencies. Move them outside the component or inside the Effect.</li>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
//**************************************************************************************
// Try out some challenges
/*
Challenge 1 of 4: Fix a resetting interval 
- This Effect sets up an interval that ticks every second. You’ve noticed something strange happening: it seems like the interval gets destroyed and re-created every time it ticks. Fix the code so that the interval doesn’t get constantly re-created.
*/
function Challenge1RemovingEffectDependenciesDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 4: Fix a resetting interval </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 2 of 4: Fix a retriggering animation 
- In this example, when you press “Show”, a welcome message fades in. The animation takes a second. When you press “Remove”, the welcome message immediately disappears. The logic for the fade-in animation is implemented in the animation.js file as plain JavaScript animation loop. You don’t need to change that logic. You can treat it as a third-party library. Your Effect creates an instance of FadeInAnimation for the DOM node, and then calls start(duration) or stop() to control the animation. The duration is controlled by a slider. Adjust the slider and see how the animation changes.
- This code already works, but there is something you want to change. Currently, when you move the slider that controls the duration state variable, it retriggers the animation. Change the behavior so that the Effect does not “react” to the duration variable. When you press “Show”, the Effect should use the current duration on the slider. However, moving the slider itself should not by itself retrigger the animation.
*/
function Challenge2RemovingEffectDependenciesDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 4: Fix a retriggering animation </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 3 of 4: Fix a reconnecting chat 
- In this example, every time you press “Toggle theme”, the chat re-connects. Why does this happen? Fix the mistake so that the chat re-connects only when you edit the Server URL or choose a different chat room.
- Treat chat.js as an external third-party library: you can consult it to check its API, but don’t edit it.
*/
function Challenge3RemovingEffectDependenciesDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 4: Fix a reconnecting chat </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 4 of 4: Fix a reconnecting chat, again 
- This example connects to the chat either with or without encryption. Toggle the checkbox and notice the different messages in the console when the encryption is on and off. Try changing the room. Then, try toggling the theme. When you’re connected to a chat room, you will receive new messages every few seconds. Verify that their color matches the theme you’ve picked.
- In this example, the chat re-connects every time you try to change the theme. Fix this. After the fix, changing the theme should not re-connect the chat, but toggling encryption settings or changing the room should re-connect.
- Don’t change any code in chat.js. Other than that, you can change any code as long as it results in the same behavior. For example, you may find it helpful to change which props are being passed down.
*/
function Challenge4RemovingEffectDependenciesDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 4: Fix a reconnecting chat, again
        </p>
    </div>);
}

//**************************************************************************************
// Try out some challenges
function ChallengesRemovingEffectDependenciesDemo() {
    return (<div className="App-left-aligned-content">
        <Challenge1RemovingEffectDependenciesDemo />
        <hr></hr>
        <Challenge2RemovingEffectDependenciesDemo />
        <hr></hr>
        <Challenge3RemovingEffectDependenciesDemo />
        <hr></hr>
        <Challenge4RemovingEffectDependenciesDemo />
    </div>);
}