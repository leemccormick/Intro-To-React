import './App.css';
import { useState, useEffect, useRef } from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

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

        <div className='App-row-center-container'>
            <div className='App-left-aligned-small-box-border  App-small-font-size App-tabbed-content '>
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

            <div className='App-left-aligned-border  App-small-font-size App-tabbed-content App-right-tabbed-content'>
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
        <div className='App-row-center-container'>
            <div className='App-left-aligned-border   App-small-font-size App-tabbed-content '>
                <p>function ChatRoom({'{'} roomId {'}'}) {'{'} </p>
                <div className='App-tabbed-content'>
                    <p>  const [messages, setMessages] = useState([]);</p>
                    <div className='App-hilight-color'>
                        <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                        <p className='App-tabbed-content'>   const connection = createConnection(); </p>
                        <p className='App-tabbed-content'>    connection.connect();</p>

                        <p className='App-tabbed-content'>    connection.on{'('}'message', (receivedMessage) ={'>'} {'{'} </p>
                        <div className='App-tabbed-content'>
                            <p className='App-tabbed-content'>     setMessages(msgs ={'>'}  [...msgs, receivedMessage]);</p>
                            <p className='App-tabbed-content'>{'}'}{')'}; </p>
                            <p>return () ={'>'} connection.disconnect();</p>
                        </div>
                        <p>{'}'}, [roomId] {')'}; <span className='App-double-tabbed-content App-comment-color'>    {'//'} ✅ All dependencies declared </span></p>
                    </div>
                    <p>{'//'} ...</p>
                </div>
                <p>{'}'}</p>
            </div>

            <div className='App-smallest-container App-medium-font-size'>
                <h4>Notice how your Effect does not read the messages variable at all now.</h4>
                <hr></hr>
                <p className='App-hilight-color'>You only need to pass an updater function like msgs  ={'>'}  [...msgs, receivedMessage]. React puts your updater function in a queue and will provide the msgs argument to it during the next render. This is why the Effect itself doesn’t need to depend on messages anymore. As a result of this fix, receiving a chat message will no longer make the chat re-connect.</p>
            </div>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Do you want to read a value without “reacting” to its changes? 
function DoYouWantToReadValueDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-center-container'>
            <div className='App-smallest-container App-medium-font-size'>
                <p>To solve this problem, you need to extract the logic that shouldn’t be reactive out of the Effect. You don’t want this Effect to “react” to the changes in isMuted. Move this non-reactive piece of logic into an Effect Event:</p>
                <hr></hr>
                <p className='App-hilight-color'>Effect Events let you split an Effect into reactive parts (which should “react” to reactive values like roomId and their changes) and non-reactive parts (which only read their latest values, like onMessage reads isMuted). Now that you read isMuted inside an Effect Event, it doesn’t need to be a dependency of your Effect. As a result, the chat won’t re-connect when you toggle the “Muted” setting on and off, solving the original issue!</p>
            </div>

            <div className='App-left-aligned-border   App-small-font-size App-tabbed-content App-right-tabbed-content '>
                <p>function ChatRoom({'{'} roomId {'}'}) {'{'} </p>
                <div className='App-tabbed-content'>
                    <p>  const [messages, setMessages] = useState([]);</p>
                    <p>   const [isMuted, setIsMuted] = useState(false);</p>
                    <p className='App-success-color'> const onMessage = useEffectEvent(receivedMessage) ={'>'} {'{'} </p>
                    <div className='App-tabbed-content App-success-color'>
                        <p>setMessages(msgs ={'>'}  [...msgs, receivedMessage]);</p>
                        <p>if (!isMuted) {'{'}  </p>
                        <p className='App-tabbed-content'> playSound();  </p>
                        <p> {'}'}  </p>
                    </div>
                    <p className='App-success-color'> {'}'}{')'}; </p>

                    <div className='App-hilight-color'>
                        <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                        <p className='App-tabbed-content'>   const connection = createConnection(); </p>
                        <p className='App-tabbed-content'>    connection.connect();</p>
                        <p className='App-tabbed-content'>    connection.on{'('}'message', (receivedMessage) ={'>'} {'{'} </p>
                        <div className='App-tabbed-content'>
                            <p className='App-tabbed-content'>     onMessage(receivedMessage);</p>
                            <p className='App-tabbed-content'>{'}'}{')'}; </p>
                            <p>return () ={'>'} connection.disconnect();</p>
                        </div>
                        <p>{'}'}, [roomId] {')'}; <span className='App-double-tabbed-content App-comment-color'>    {'//'} ✅ All dependencies declared </span></p>
                    </div>
                    <p>{'//'} ...</p>
                </div>
                <p>{'}'}</p>
            </div>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Wrapping an event handler from the props 
function WrappingEventHandlerFromPropsDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-center-container'>
            <div className='App-left-aligned-border App-small-font-size App-tabbed-content App-right-tabbed-content'>
                <p>function ChatRoom({'{'} roomId {'}'}) {'{'} </p>
                <div className='App-tabbed-content'>
                    <p>  const [messages, setMessages] = useState([]);</p>
                    <p className='App-success-color'> const onMessage = useEffectEvent(receivedMessage) ={'>'} {'{'} </p>
                    <div className='App-tabbed-content App-success-color'>
                        <p>onReceiveMessage(receivedMessage);</p>
                    </div>
                    <p className='App-success-color'> {'}'}{')'}; </p>
                    <div className='App-hilight-color'>
                        <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                        <p className='App-tabbed-content'>   const connection = createConnection(); </p>
                        <p className='App-tabbed-content'>    connection.connect();</p>
                        <div className='App-tabbed-content App-success-color'>
                            <p>    connection.on{'('}'message', (receivedMessage) ={'>'} {'{'} </p>
                            <p className='App-tabbed-content'>     onMessage(receivedMessage);</p>
                            <p>{'}'}{')'}; </p>
                        </div>
                        <p className='App-tabbed-content'> return () ={'>'} connection.disconnect();</p>
                        <p>{'}'}, [roomId] {')'}; <span className='App-double-tabbed-content App-comment-color'>    {'//'} ✅ All dependencies declared </span></p>
                    </div>
                    <p>{'//'} ...</p>
                </div>
                <p>{'}'}</p>
            </div>

            <div className='App-smallest-container App-medium-font-size'>
                <p>Since onReceiveMessage is a dependency, it would cause the Effect to re-synchronize after every parent re-render. This would make it re-connect to the chat. To solve this, wrap the call in an Effect Event.</p>
                <hr></hr>
                <p className='App-hilight-color'>Effect Events aren’t reactive, so you don’t need to specify them as dependencies. As a result, the chat will no longer re-connect even if the parent component passes a function that’s different on every re-render. </p>
            </div>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Separating reactive and non-reactive code 
function SeparatingReactiveAndNonDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-center-container'>
            <div className='App-smallest-container App-medium-font-size'>
                <p>In this example, you want to log a visit every time roomId changes. You want to include the current notificationCount with every log, but you don’t want a change to notificationCount to trigger a log event.</p>
                <hr></hr>
                <p className='App-hilight-color'>You want your logic to be reactive with regards to roomId, so you read roomId inside of your Effect. However, you don’t want a change to notificationCount to log an extra visit, so you read notificationCount inside of the Effect Event. Learn more about reading the latest props and state from Effects using Effect Events.</p>
            </div>

            <div className='App-left-aligned-border   App-small-font-size App-tabbed-content App-right-tabbed-content '>
                <p>function ChatRoom({'{'} roomId, notificationCount  {'}'}) {'{'} </p>
                <div className='App-tabbed-content'>
                    <p className='App-success-color'> const onVisit = useEffectEvent(visitedRoomId) ={'>'} {'{'} </p>
                    <div className='App-tabbed-content App-success-color'>
                        <p>logVisit(visitedRoomId, notificationCount);</p>
                    </div>
                    <p className='App-success-color'> {'}'}{')'}; </p>
                    <div className='App-hilight-color'>
                        <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                        <p className='App-tabbed-content'> onVisit(roomId); </p>
                        <p>{'}'}, [roomId] {')'}; <span className='App-double-tabbed-content App-comment-color'>    {'//'} ✅ All dependencies declared </span></p>
                    </div>
                    <p>{'//'} ...</p>
                </div>
                <p>{'}'}</p>
            </div>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Does some reactive value change unintentionally? 
function DoesReactiveValueChangeDemo() {
    return (<div className="App-left-aligned-content">
        <p>This problem only affects objects and functions. In JavaScript, each newly created object and function is considered distinct from all the others. It doesn’t matter that the contents inside of them may be the same!</p>
        <div className='App-row-center-container'>
            <div className='App-smallest-container App-medium-font-size'>
                <p>Object and function dependencies can make your Effect re-synchronize more often than you need.</p>
                <hr></hr>
                <p className='App-hilight-color'>This is why, whenever possible, you should try to avoid objects and functions as your Effect’s dependencies. Instead, try moving them outside the component, inside the Effect, or extracting primitive values out of them.</p>
            </div>

            <div className='App-left-aligned-border App-small-font-size App-tabbed-content App-right-tabbed-content'>
                <p className='App-comment-color'> {'//'} During the first render</p>
                <p>const options1 = {'{ '}serverUrl{':'} 'https://localhost:1234', roomId: 'music' {'}'};</p>

                <p className='App-comment-color'> {'//'} During the second render </p>
                <p>const options2 = {'{ '}serverUrl{':'} 'https://localhost:1234', roomId: 'music' {'}'};</p>

                <p className='App-comment-color'> {'//'} These are two different objects! ❌ false</p>
                <p>console.log(Object.is(options1, options2));</p>
            </div>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Move static objects and functions outside your component 
function MoveStaticObjectsAndFunctionsOutsideDemo() {
    return (<div className="App-left-aligned-content">
        <p>If the object does not depend on any props and state, you can move that object outside your component:</p>

        <div className='App-row-center-container'>
            <div className='App-smallest-box-border-success-color  App-small-font-size App-tabbed-content '>
                <p className='App-success-color'> const options =  {'{'} </p>
                <div className='App-tabbed-content App-success-color'>
                    <p> serverUrl: 'https://localhost:1234',</p>
                    <p>   roomId: 'music'</p>
                </div>
                <p className='App-success-color'> {'}'}; </p>
                <p>function ChatRoom({'{'} roomId {'}'}) {'{'} </p>
                <div className='App-tabbed-content'>
                    <p>  const [messages, setMessages] = useState([]);</p>
                    <div className='App-hilight-color'>
                        <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                        <p className='App-tabbed-content'>const connection = createConnection(); </p>
                        <p className='App-tabbed-content'>connection.connect();</p>
                        <p className='App-tabbed-content'> return () ={'>'} connection.disconnect();</p>
                        <p>{'}'}, [roomId] {')'}; <span className='App-double-tabbed-content App-comment-color'>    {'//'} ✅ All dependencies declared </span></p>
                    </div>
                    <p>{'//'} ...</p>
                </div>
                <p>{'}'}</p>
            </div>

            <div className='App-smallest-box-border-success-color  App-small-font-size App-tabbed-content '>
                <p className='App-success-color'> function createOptions()  {'{'} </p>
                <p className='App-tabbed-content App-success-color'> return  {'{'} </p>
                <div className='App-double-tabbed-content App-success-color'>
                    <p> serverUrl: 'https://localhost:1234',</p>
                    <p>   roomId: 'music'</p>
                </div>
                <p className='App-tabbed-content App-success-color'> {'}'}; </p>
                <p className='App-success-color'> {'}'} </p>
                <p>function ChatRoom({'{'} roomId {'}'}) {'{'} </p>
                <div className='App-tabbed-content'>
                    <p>  const [messages, setMessages] = useState([]);</p>
                    <div className='App-hilight-color'>
                        <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                        <p className='App-tabbed-content App-success-color'> const options = createOptions();</p>
                        <p className='App-tabbed-content'>const connection = createConnection(); </p>
                        <p className='App-tabbed-content'> connection.connect();</p>
                        <p className='App-tabbed-content'> return () ={'>'} connection.disconnect();</p>
                        <p>{'}'}, [roomId] {')'}; <span className='App-double-tabbed-content App-comment-color'>    {'//'} ✅ All dependencies declared </span></p>
                    </div>
                    <p>{'//'} ...</p>
                </div>
                <p>{'}'}</p>
            </div>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Move dynamic objects and functions inside your Effect 
function createConnectionMoveObjectsAndFunctionsInsideEffect({ serverUrl, roomId }) {
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

const serverUrlMoveObjectsAndFunctionsInsideEffect = 'https://localhost:1234';

function MoveObjectsAndFunctionsInsideEffectChatRoom({ roomId }) {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const options = {
            serverUrl: serverUrlMoveObjectsAndFunctionsInsideEffect,
            roomId: roomId
        };
        const connection = createConnectionMoveObjectsAndFunctionsInsideEffect(options);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]);

    return (
        <>
            <h1>Welcome to the {roomId} room!</h1>
            <input value={message} onChange={e => setMessage(e.target.value)} />
        </>
    );
}

function MoveObjectsAndFunctionsInsideEffectApp() {
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
            <MoveObjectsAndFunctionsInsideEffectChatRoom roomId={roomId} />
        </>
    );
}

function MoveObjectsAndFunctionsInsideEffectDemo() {
    return (<div className="App-left-aligned-content">
        <p>If your object depends on some reactive value that may change as a result of a re-render, like a roomId prop, you can’t pull it outside your component. You can, however, move its creation inside of your Effect’s code:</p>
        <MoveObjectsAndFunctionsInsideEffectApp />
    </div>);
}

//--------------------------------------------------------------------------------------
// Read primitive values from objects 
function ReadPrimitiveValuesFromObjectsDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-center-container'>
            <div className='App-smallest-container App-medium-font-size'>
                <p>This would cause your Effect to re-connect every time the parent component re-renders. To fix this, read information from the object outside the Effect, and avoid having object and function dependencies:</p>
                <hr></hr>
                <p className='App-hilight-color'>The logic gets a little repetitive (you read some values from an object outside an Effect, and then create an object with the same values inside the Effect). But it makes it very explicit what information your Effect actually depends on. If an object is re-created unintentionally by the parent component, the chat would not re-connect. However, if options.roomId or options.serverUrl really are different, the chat would re-connect.</p>
            </div>

            <div className='App-left-aligned-border App-small-font-size App-tabbed-content App-right-tabbed-content'>
                <p>function ChatRoom({'{'} options {'}'}) {'{'} </p>
                <div className='App-tabbed-content'>
                    <p>  const [message, setMessage] = useState('');</p>
                    <p className='App-success-color'>  const {'{'}  roomId, serverUrl {'}'} = options;</p>
                    <p className='App-success-color'> {'}'}{')'}; </p>
                    <div className='App-hilight-color'>
                        <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                        <div className='App-success-color'>
                            <p className='App-tabbed-content'>const connection = createConnection{'('}  {'{'} </p>
                            <p className='App-double-tabbed-content'>    roomId: roomId,</p>
                            <p className='App-double-tabbed-content'> serverUrl: serverUrl</p>
                            <p className='App-tabbed-content'>{')'}  {'}'}; </p>
                        </div>
                        <p className='App-tabbed-content'> connection.connect();</p>
                        <p className='App-tabbed-content'> return () ={'>'} connection.disconnect();</p>
                        <p>{'}'}, [roomId, serverUrl] {')'}; <span className='App-double-tabbed-content App-comment-color'>    {'//'} ✅ All dependencies declared </span></p>
                    </div>
                    <p>{'//'} ...</p>
                </div>
                <p>{'}'}</p>
            </div>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Calculate primitive values from functions 
function CalculatePrimitiveValuesFromFunctionsDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-center-container'>
            <div className='App-left-aligned-border App-small-font-size App-tabbed-content App-right-tabbed-content'>
                <p>function ChatRoom({'{'} getOptions {'}'}) {'{'} </p>
                <div className='App-tabbed-content'>
                    <p>  const [message, setMessage] = useState('');</p>
                    <p className='App-success-color'>  const {'{'}  roomId, serverUrl {'}'} = getOptions();</p>
                    <p className='App-success-color'> {'}'}{')'}; </p>
                    <div className='App-hilight-color'>
                        <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                        <div className='App-success-color'>
                            <p className='App-tabbed-content'>const connection = createConnection{'('}  {'{'} </p>
                            <p className='App-double-tabbed-content'> roomId: roomId,</p>
                            <p className='App-double-tabbed-content'> serverUrl: serverUrl</p>
                            <p className='App-tabbed-content'>{')'}  {'}'}; </p>
                        </div>
                        <p className='App-tabbed-content'> connection.connect();</p>
                        <p className='App-tabbed-content'> return () ={'>'} connection.disconnect();</p>
                        <p>{'}'}, [roomId, serverUrl] {')'}; <span className='App-double-tabbed-content App-comment-color'>    {'//'} ✅ All dependencies declared </span></p>
                    </div>
                    <p>{'//'} ...</p>
                </div>
                <p>{'}'}</p>
            </div>

            <div className='App-smallest-container App-medium-font-size'>
                <p>To avoid making it a dependency (and causing it to re-connect on re-renders), call it outside the Effect. This gives you the roomId and serverUrl values that aren’t objects, and that you can read from inside your Effect:</p>
                <hr></hr>
                <p className='App-hilight-color'> This only works for pure functions because they are safe to call during rendering. If your function is an event handler, but you don’t want its changes to re-synchronize your Effect, wrap it into an Effect Event instead.</p>
            </div>
        </div>
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
function Challenge1Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('✅ Creating an interval');
        const id = setInterval(() => {
            console.log('⏰ Interval tick');
            setCount(c => c + 1);
        }, 1000);
        return () => {
            console.log('❌ Clearing an interval');
            clearInterval(id);
        };
    }, []);

    return <h1>Counter: {count}</h1>
}

function Challenge1RemovingEffectDependenciesDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 4: Fix a resetting interval </p>
        <Challenge1Timer />
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 2 of 4: Fix a retriggering animation 
- In this example, when you press “Show”, a welcome message fades in. The animation takes a second. When you press “Remove”, the welcome message immediately disappears. The logic for the fade-in animation is implemented in the animation.js file as plain JavaScript animation loop. You don’t need to change that logic. You can treat it as a third-party library. Your Effect creates an instance of FadeInAnimation for the DOM node, and then calls start(duration) or stop() to control the animation. The duration is controlled by a slider. Adjust the slider and see how the animation changes.
- This code already works, but there is something you want to change. Currently, when you move the slider that controls the duration state variable, it retriggers the animation. Change the behavior so that the Effect does not “react” to the duration variable. When you press “Show”, the Effect should use the current duration on the slider. However, moving the slider itself should not by itself retrigger the animation.
*/
const useEffectEvent = (callback) => {
    const ref = useRef(callback);

    ref.current = callback;

    return (...args) => {
        ref.current(...args);
    }
}

class FadeInAnimation {
    constructor(node) {
        this.node = node;
    }

    start(duration) {
        this.duration = duration;
        this.onProgress(0);
        this.startTime = performance.now();
        this.frameId = requestAnimationFrame(() => this.onFrame());
    }

    onFrame() {
        const timePassed = performance.now() - this.startTime;
        const progress = Math.min(timePassed / this.duration, 1);
        this.onProgress(progress);
        if (progress < 1) {
            // We still have more frames to paint
            this.frameId = requestAnimationFrame(() => this.onFrame());
        }
    }

    onProgress(progress) {
        this.node.style.opacity = progress;
    }

    stop() {
        cancelAnimationFrame(this.frameId);
        this.startTime = null;
        this.frameId = null;
        this.duration = 0;
    }
}

function Welcome({ duration }) {
    const ref = useRef(null);

    const onAppear = useEffectEvent(animation => {
        animation.start(duration);
    });

    useEffect(() => {
        const animation = new FadeInAnimation(ref.current);
        onAppear(animation);
        return () => {
            animation.stop();
        };
    }, [onAppear]);

    return (
        <h1
            ref={ref}
            style={{
                opacity: 0,
                color: 'white',
                padding: 50,
                textAlign: 'center',
                fontSize: 50,
                backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
            }}
        >
            Welcome
        </h1>
    );
}

function Challenge2App() {
    const [duration, setDuration] = useState(1000);
    const [show, setShow] = useState(false);

    return (
        <>
            <label>
                <input
                    type="range"
                    min="100"
                    max="3000"
                    value={duration}
                    onChange={e => setDuration(Number(e.target.value))}
                />
                <br />
                Fade in duration: {duration} ms
            </label>
            <button onClick={() => setShow(!show)}>
                {show ? 'Remove' : 'Show'}
            </button>
            <hr />
            {show && <Welcome duration={duration} />}
        </>
    );
}

function Challenge2RemovingEffectDependenciesDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 4: Fix a retriggering animation </p>
        <Challenge2App />
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 3 of 4: Fix a reconnecting chat 
- In this example, every time you press “Toggle theme”, the chat re-connects. Why does this happen? Fix the mistake so that the chat re-connects only when you edit the Server URL or choose a different chat room.
- Treat chat.js as an external third-party library: you can consult it to check its API, but don’t edit it.
*/
function createConnectionChallenge3({ serverUrl, roomId }) {
    // A real implementation would actually connect to the server
    if (typeof serverUrl !== 'string') {
        throw Error('Expected serverUrl to be a string. Received: ' + serverUrl);
    }
    if (typeof roomId !== 'string') {
        throw Error('Expected roomId to be a string. Received: ' + roomId);
    }
    return {
        connect() {
            console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
        },
        disconnect() {
            console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
        }
    };
}

function Challenge3ChatRoom({ options }) {
    const { roomId, serverUrl } = options;

    useEffect(() => {
        const connection = createConnectionChallenge3({
            roomId: roomId,
            serverUrl: serverUrl
        });
        connection.connect();
        return () => connection.disconnect();
    }, [roomId, serverUrl]);

    return <h1>Welcome to the {options.roomId} room!</h1>;
}

function Challenge3ChatApp() {
    const [isDark, setIsDark] = useState(false);
    const [roomId, setRoomId] = useState('general');
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    const options = {
        serverUrl: serverUrl,
        roomId: roomId
    };

    return (
        <div className={isDark ? 'App-dark' : 'App-light'}>
            <button onClick={() => setIsDark(!isDark)}>
                Toggle theme
            </button>
            <br></br>
            <div className='App-row-container'>
                <label>
                    Server URL:{' '}
                    <input
                        value={serverUrl}
                        onChange={e => setServerUrl(e.target.value)}
                    />
                </label>
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
            </div>
            <hr />
            <Challenge3ChatRoom options={options} />
        </div>
    );
}

function Challenge3RemovingEffectDependenciesDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 4: Fix a reconnecting chat </p>
        <Challenge3ChatApp />
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
function createEncryptedConnection({ serverUrl, roomId }) {
    // A real implementation would actually connect to the server
    if (typeof serverUrl !== 'string') {
        throw Error('Expected serverUrl to be a string. Received: ' + serverUrl);
    }
    if (typeof roomId !== 'string') {
        throw Error('Expected roomId to be a string. Received: ' + roomId);
    }
    let intervalId;
    let messageCallback;

    return {
        connect() {
            console.log('✅ 🔐 Connecting to "' + roomId + '" room... (encrypted)');
            clearInterval(intervalId);
            intervalId = setInterval(() => {
                if (messageCallback) {
                    if (Math.random() > 0.5) {
                        messageCallback('hey | Encrypted')
                    } else {
                        messageCallback('lol |  Encrypted');
                    }
                }
            }, 3000);
        },
        disconnect() {
            clearInterval(intervalId);
            messageCallback = null;
            console.log('❌ 🔐 Disconnected from "' + roomId + '" room (encrypted)');
        },
        on(event, callback) {
            if (messageCallback) {
                throw Error('Cannot add the handler twice.');
            }
            if (event !== 'message') {
                throw Error('Only "message" event is supported.');
            }
            messageCallback = callback;
        },
    };
}

function createUnencryptedConnection({ serverUrl, roomId }) {
    // A real implementation would actually connect to the server
    if (typeof serverUrl !== 'string') {
        throw Error('Expected serverUrl to be a string. Received: ' + serverUrl);
    }
    if (typeof roomId !== 'string') {
        throw Error('Expected roomId to be a string. Received: ' + roomId);
    }
    let intervalId;
    let messageCallback;

    return {
        connect() {
            console.log('✅ Connecting to "' + roomId + '" room (unencrypted)...');
            clearInterval(intervalId);
            intervalId = setInterval(() => {
                if (messageCallback) {
                    if (Math.random() > 0.5) {
                        messageCallback('hey |  Unencrypted')
                    } else {
                        messageCallback('lol |  Unencrypted');
                    }
                }
            }, 3000);
        },
        disconnect() {
            clearInterval(intervalId);
            messageCallback = null;
            console.log('❌ Disconnected from "' + roomId + '" room (unencrypted)');
        },
        on(event, callback) {
            if (messageCallback) {
                throw Error('Cannot add the handler twice.');
            }
            if (event !== 'message') {
                throw Error('Only "message" event is supported.');
            }
            messageCallback = callback;
        },
    };
}

function showNotification(message, theme) {
    Toastify({
        text: message,
        duration: 2000,
        gravity: 'top',
        position: 'right',
        style: {
            background: theme === 'dark' ? 'black' : 'white',
            color: theme === 'dark' ? 'white' : 'black',
        },
    }).showToast();
}

function Challenge4ChatRoom({ roomId, isEncrypted, onMessage }) {
    const onReceiveMessage = useEffectEvent(onMessage);

    useEffect(() => {
        function createConnection() {
            const options = {
                serverUrl: "https://localhost:1234",
                roomId: roomId
            };
            if (isEncrypted) {
                return createEncryptedConnection(options);
            } else {
                return createUnencryptedConnection(options);
            }
        }
        const connection = createConnection();
        connection.on("message", (msg) => onReceiveMessage(msg));
        connection.connect();
        return () => connection.disconnect();
    }, [roomId, isEncrypted, onReceiveMessage]);

    return <h1>Welcome to the {roomId} room!</h1>;
}

function Challenge4ChatApp() {
    const [isDark, setIsDark] = useState(false);
    const [roomId, setRoomId] = useState('general');
    const [isEncrypted, setIsEncrypted] = useState(false);

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={isDark}
                    onChange={e => setIsDark(e.target.checked)}
                />
                Use dark theme
            </label>
            <br></br>
            <label>
                <input
                    type="checkbox"
                    checked={isEncrypted}
                    onChange={e => setIsEncrypted(e.target.checked)}
                />
                Enable encryption
            </label>
            <br></br>
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
            < Challenge4ChatRoom
                roomId={roomId}
                isEncrypted={isEncrypted}
                onMessage={msg => {
                    showNotification('New message: ' + msg, isDark ? 'dark' : 'light');
                }}
            />
        </>
    );
}

function Challenge4RemovingEffectDependenciesDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 4: Fix a reconnecting chat, again</p>
        <Challenge4ChatApp />
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