import './App.css';
import { useState, useEffect } from 'react';

// Main Default For  Lifecycle of Reactive Effects Demo
export default function LifecycleReactiveEffectsDemo() {
    return (
        <div>
            <h1 className="App-topic"> Lifecycle of Reactive Effects</h1>
            <p>Effects have a different lifecycle from components. Components may mount, update, or unmount. An Effect can only do two things: to start synchronizing something, and later to stop synchronizing it. This cycle can happen multiple times if your Effect depends on props and state that change over time.</p>

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
        <ul>
            <li>A component mounts when it’s added to the screen.</li>
            <li>A component updates when it receives new props or state, usually in response to an interaction.</li>
            <li>A component unmounts when it’s removed from the screen.</li>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
// Why synchronization may need to happen more than once 
function WhySynchronizationMayNeedToHappenMoreThanOnceDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>Imagine this ChatRoom component receives a roomId prop that the user picks in a dropdown. </li>
            <li>After the UI is displayed, React will run your Effect to start synchronizing. </li>
            <li>Later, the user picks a different room in the dropdown (for example, "travel"). First, React will update the UI.</li>
            <li>The roomId prop has changed, so what your Effect did back then (connecting to the "general" room) no longer matches the UI.
                <div className='App-left-aligned-border App-small-font-size'>
                    <ul>
                        <ol>
                            <li>Stop synchronizing with the old roomId (disconnect from the "general" room) </li>
                            <li> Start synchronizing with the new roomId (connect to the "travel" room) </li>
                        </ol>
                    </ul>
                    <hr></hr>
                    <p className='App-hilight-color'>Luckily, you’ve already taught React how to do both of these things! Your Effect’s body specifies how to start synchronizing, and your cleanup function specifies how to stop synchronizing. All that React needs to do now is to call them in the correct order and with the correct props and state. </p>
                </div>
            </li>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
// How React re-synchronizes your Effect 
function HowReactReSynchronizesEffectDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-left-aligned-border App-small-font-size'>
            <p><h4>1. To stop synchronizing</h4> React will call the cleanup function that your Effect returned after connecting to the "general" room. Since roomId was "general", the cleanup function disconnects from the "general" room:</p>
            <hr></hr>

            <p>function ChatRoom({'{'}  roomId /* "general" */ {'}'}) {'{'}</p>
            <div className='App-tabbed-content'>
                <div className='App-hilight-color'>
                    <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                    <p className='App-tabbed-content'>const connection = createConnection(serverUrl, roomId); <span className='App-comment-color '>    {'//'} ✅ Connects to the "general" room </span></p>
                    <p className='App-tabbed-content'> connection.connect(); </p>

                    <div className='App-success-color'>
                        <p className='App-tabbed-content'>return () ={'>'} {'{'}</p>
                        <p className='App-double-tabbed-content'> connection.disconnect(); <span className='App-comment-color '>    {'//'} ✅ Disconnects from the "general" room</span></p>
                        <p className='App-tabbed-content'>{'}'}</p>
                    </div>
                    <p>{'}'}{')'}; </p>
                </div>
                <p>{'//'} ...</p>
            </div>
            <p>{'}'}</p>

            <hr></hr>
            <p><h4>2. Restarting synchronizing</h4>Then React will run the Effect that you’ve provided during this render. This time, roomId is "travel" so it will start synchronizing to the "travel" chat room (until its cleanup function is eventually called too):</p>
            <hr></hr>

            <p>function ChatRoom({'{'}  roomId /* "travel" */ {'}'}) {'{'}</p>
            <div className='App-tabbed-content'>
                <div className='App-hilight-color'>
                    <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                    <div className='App-success-color'>
                        <p className='App-tabbed-content'>const connection = createConnection(serverUrl, roomId); <span className='App-comment-color '>    {'//'} ✅ Connects to the "travel" room </span></p>
                        <p className='App-tabbed-content'> connection.connect(); </p>
                        <p className='App-tabbed-content'>{'//'} ...</p>
                    </div>
                    <p>{'}'}{')'}; </p>
                </div>
                <p>{'//'} ...</p>
            </div>
            <p>{'}'}</p>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Thinking from the Effect’s perspective 
function ThinkingFromEffectPerspectiveDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-container '>
            <div className='App-super-small-font-size App-no-tabbed-content'>
                <p className='App-small-font-size'>Let’s recap everything that’s happened from the ChatRoom component’s perspective:</p>
                <hr></hr>
                <ul>
                    <ol className='App-no-tabbed-content'>
                        <li>ChatRoom mounted with roomId set to "general"</li>
                        <li>ChatRoom mounted with roomId set to "travel"</li>
                        <li>ChatRoom mounted with roomId set to "music"</li>
                        <li>ChatRoom unmounted</li>
                    </ol>
                </ul>
            </div>

            <hr></hr>
            <div className='App-super-small-font-size'>
                <p className='App-small-font-size'>During each of these points in the component’s lifecycle, your Effect did different things:</p>
                <hr></hr>
                <ul>
                    <ol className='App-no-tabbed-content'>
                        <li>Your Effect connected to the "general" room</li>
                        <li>Your Effect disconnected from the "general" room and connected to the "travel" room</li>
                        <li>Your Effect disconnected from the "travel" room and connected to the "music" room</li>
                        <li>Your Effect disconnected from the "music" room</li>
                    </ol>
                </ul>
            </div>

            <hr></hr>
            <div className='App-super-small-font-size'>
                <p className='App-small-font-size'>This code’s structure might inspire you to see what happened as a sequence of non-overlapping time periods:</p>
                <hr></hr>
                <ul>
                    <ol className='App-no-tabbed-content'>
                        <li>Your Effect connected to the "general" room (until it disconnected)</li>
                        <li>Your Effect connected to the "travel" room (until it disconnected)</li>
                        <li>Your Effect connected to the "music" room (until it disconnected)</li>
                    </ol>
                </ul>
            </div>
        </div>

        <p className='App-hilight-color'>Instead, always focus on a single start/stop cycle at a time. It shouldn’t matter whether a component is mounting, updating, or unmounting. All you need to do is to describe how to start synchronization and how to stop it. If you do it well, your Effect will be resilient to being started and stopped as many times as it’s needed.</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// How React verifies that your Effect can re-synchronize 
function createConnectionReSynchronize(serverUrl, roomId) {
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

const serverUrlReSynchronize = 'https://localhost:1234';

function ChatRoomReSynchronize({ roomId }) {
    useEffect(() => {
        const connection = createConnectionReSynchronize(serverUrlReSynchronize, roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]);
    return <h1>Welcome to the {roomId} room!</h1>;
}

function ChatRoomReSynchronizeApp() {
    const [roomId, setRoomId] = useState('general');
    const [show, setShow] = useState(false);

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
            <button onClick={() => setShow(!show)}>
                {show ? 'Close chat' : 'Open chat'}
            </button>
            {show && <hr />}
            {show && <ChatRoomReSynchronize roomId={roomId} />}
        </>
    );
}

function HowReactVerifiesThatYourEffectCanReSynchronizeDemo() {
    return (<div className="App-left-aligned-content">
        <p>React verifies that your Effect can re-synchronize by forcing it to do that immediately in development. This might remind you of opening a door and closing it an extra time to check if the door lock works. React starts and stops your Effect one extra time in development to check you’ve implemented its cleanup well.</p>
        <hr></hr>
        <ChatRoomReSynchronizeApp />
        <br></br>

        <div className='App-row-container'>
            <div className='App-medium-font-size'>
                <h4 className='App-hilight-color'>How React knows that it needs to re-synchronize the Effect </h4>
                <ul>
                    <ol className='App-no-tabbed-content'>
                        <li>You knew roomId is a prop, which means it can change over time.</li>
                        <li>You knew that your Effect reads roomId (so its logic depends on a value that may change later).</li>
                        <li>This is why you specified it as your Effect’s dependency (so that it re-synchronizes when roomId changes).</li>
                    </ol>
                </ul>
            </div>

            <div className='App-left-aligned-small-box-border App-super-small-font-size App-tabbed-content '>
                <p>function ChatRoom({'{'}  roomId /* "general" */ {'}'}) {'{'} <span className='App-comment-color App-double-tabbed-content '>    {'//'} ✅  The roomId prop may change over time </span></p>
                <div className='App-tabbed-content'>
                    <div className='App-hilight-color'>
                        <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                        <p className='App-tabbed-content'>const connection = createConnection(serverUrl, roomId); <span className='App-comment-color App-double-tabbed-content '>    {'//'} ✅  This Effect reads roomId </span></p>
                        <p className='App-tabbed-content'> connection.connect(); </p>

                        <div className='App-success-color'>
                            <p className='App-tabbed-content'>return () ={'>'} {'{'}</p>
                            <p className='App-double-tabbed-content'> connection.disconnect();</p>
                            <p className='App-tabbed-content'>{'}'}</p>
                        </div>
                        <p>{'}'}, [roomId]{')'};  <span className='App-comment-color App-double-tabbed-content'>    {'//'} ✅ So you tell React that this Effect "depends on" roomId</span> </p>
                    </div>
                    <p>{'//'} ...</p>
                </div>
                <p>{'}'}</p>
            </div>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Each Effect represents a separate synchronization process 
function EachEffectRepresentsSeparateSynchronizationProcessDemo() {
    return (<div className="App-left-aligned-content">
        <p>Each Effect in your code should represent a separate and independent synchronization process.</p>

        <div className='App-small-font-size App-tabbed-content '>
            <div className='App-row-container'>
                <div className='App-smallest-container App-medium-font-size'>
                    <p className='App-hilight-color'>In this example, deleting one Effect wouldn’t break the other Effect’s logic. This is a good indication that they synchronize different things, and so it made sense to split them up. On the other hand, if you split up a cohesive piece of logic into separate Effects, the code may look “cleaner” but will be more difficult to maintain. This is why you should think whether the processes are same or separate, not whether the code looks cleaner.</p>
                </div>

                <div className='App-left-aligned-border'>
                    <p>function ChatRoom({'{'}  roomId /* "general" */ {'}'}) {'{'}</p>
                    <div className='App-tabbed-content'>
                        <div className='App-hilight-color'>
                            <p className='App-success-color'>  useEffect{'('} () ={'>'}  {'{'} </p>
                            <p className='App-tabbed-content'>const connection = createConnection(serverUrl, roomId); <span className='App-comment-color App-double-tabbed-content '>    {'//'} ✅  Write them as two separate Effects. </span></p>
                            <p className='App-tabbed-content'> connection.connect(); </p>
                            <p className='App-tabbed-content'>return () ={'>'} {'{'}</p>
                            <p className='App-double-tabbed-content'> connection.disconnect();</p>
                            <p className='App-tabbed-content'>{'}'}</p>
                            <p className='App-success-color'>{'}'}, [roomId]{')'};</p>
                        </div>

                        <div className='App-hilight-color'>
                            <p className='App-success-color'>  useEffect{'('} () ={'>'}  {'{'} </p>
                            <p className='App-tabbed-content'>    logVisit(roomId); <span className='App-comment-color App-double-tabbed-content '>    {'//'} ✅  Write them as two separate Effects. </span></p>
                            <p className='App-success-color'>{'}'}, [roomId]{')'};</p>
                        </div>
                        <p>{'//'} ...</p>
                    </div>
                    <p>{'}'}</p>
                </div>
            </div>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Effects “react” to reactive values 
function createConnectionEffectsToReactiveValues(serverUrl, roomId) {
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

function EffectsToReactiveValuesChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    useEffect(() => {
        const connection = createConnectionEffectsToReactiveValues(serverUrl, roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId, serverUrl]);

    return (
        <>
            <label>
                Server URL:{' '}
                <input
                    value={serverUrl}
                    onChange={e => setServerUrl(e.target.value)}
                />
            </label>
            <h1>Welcome to the {roomId} room!</h1>
        </>
    );
}

function EffectsToReactiveValuesApp() {
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
            <EffectsToReactiveValuesChatRoom roomId={roomId} />
        </>
    );
}


function EffectsToReactiveValuesDemo() {
    return (<div className="App-left-aligned-content">
        <p>Your Effect reads two variables (serverUrl and roomId), but you only specified roomId as a dependency:</p>
        <p>This is because the serverUrl never changes due to a re-render. It’s always the same no matter how many times the component re-renders and why. Since serverUrl never changes, it wouldn’t make sense to specify it as a dependency. After all, dependencies only do something when they change over time!</p>
        <hr></hr>

        <div className='App-row-container'>
            <div className='App-medium-font-size App-smallest-container App-hilight-color'>
                <p>On the other hand, roomId may be different on a re-render. Props, state, and other values declared inside the component are reactive because they’re calculated during rendering and participate in the React data flow.</p>
                <p>Whenever you change a reactive value like roomId or serverUrl, the Effect re-connects to the chat server.</p>
            </div>

            <div className='App-left-aligned-border App-super-small-font-size App-tabbed-content '>
                <p>function ChatRoom({'{'}  roomId {'}'}) {'{'} <span className='App-comment-color App-double-tabbed-content '>    {'//'} ✅  Props change over time </span></p>
                <div className='App-tabbed-content'>
                    <div className='App-hilight-color'>
                        <p className='App-success-color'> const [serverUrl, setServerUrl] = useState('https://localhost:1234'); <span className='App-comment-color App-double-tabbed-content '>    {'//'} ✅   State may change over time </span> </p>
                        <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                        <p className='App-tabbed-content'>const connection = createConnection(serverUrl, roomId); <span className='App-comment-color App-double-tabbed-content '>    {'//'} ✅  Your Effect reads props and state </span></p>
                        <p className='App-tabbed-content'> connection.connect(); </p>
                        <p className='App-tabbed-content'>return () ={'>'} {'{'}</p>
                        <p className='App-double-tabbed-content'> connection.disconnect();</p>
                        <p className='App-tabbed-content'>{'}'}</p>
                        <p className='App-success-color'>{'}'}, [roomId, serverUrl]{')'};  <span className='App-comment-color App-double-tabbed-content'>    {'//'} ✅ So you tell React that this Effect "depends on" on props and state</span> </p>
                    </div>
                    <p>{'//'} ...</p>
                </div>
                <p>{'}'}</p>
            </div>
        </div>

        <EffectsToReactiveValuesApp />
    </div>);
}

//--------------------------------------------------------------------------------------
// What an Effect with empty dependencies means 
function createConnectionEmptyDependencies(serverUrl, roomId) {
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

const serverUrlEmptyDependencies = 'https://localhost:1234';
const roomIdEmptyDependencies = 'general';

function EmptyDependenciesChatRoom() {
    useEffect(() => {
        const connection = createConnectionEmptyDependencies(serverUrlEmptyDependencies, roomIdEmptyDependencies);
        connection.connect();
        return () => connection.disconnect();
    }, []);
    return <h1>Welcome to the {roomIdEmptyDependencies} room!</h1>;
}

function EmptyDependenciesApp() {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(!show)}>
                {show ? 'Close chat' : 'Open chat'}
            </button>
            {show && <hr />}
            {show && <EmptyDependenciesChatRoom />}
        </>
    );
}

function WhatAnEffectWithEmptyDependenciesMeansDemo() {
    return (<div className="App-left-aligned-content">
        <p>Now your Effect’s code does not use any reactive values, so its dependencies can be empty ([]).</p>
        <p>Thinking from the component’s perspective, the empty [] dependency array means this Effect connects to the chat room only when the component mounts, and disconnects only when the component unmounts. (Keep in mind that React would still re-synchronize it an extra time in development to stress-test your logic.)</p>
        <EmptyDependenciesApp />
    </div>);
}

//--------------------------------------------------------------------------------------
// All variables declared in the component body are reactive 
function AllVariablesDeclaredInBomponentBodyAreReactiveDemo() {
    return (<div className="App-left-aligned-content">
        <p>All values inside the component (including props, state, and variables in your component’s body) are reactive. Any reactive value can change on a re-render, so you need to include reactive values as Effect’s dependencies.</p>

        <div className='App-left-aligned-border App-super-small-font-size App-tabbed-content '>
            <p>function ChatRoom({'{'}  roomId, selectedServerUrl  {'}'}) {'{'} <span className='App-comment-color App-double-tabbed-content '>    {'//'} ✅  roomId is reactive </span></p>
            <div className='App-tabbed-content'>
                <p className='App-success-color'> const settings = useContext(SettingsContext);<span className='App-comment-color App-double-tabbed-content '>    {'//'} ✅  settings is reactive </span> </p>
                <p className='App-success-color'>   const serverUrl = selectedServerUrl ?? settings.defaultServerUrl;<span className='App-comment-color App-double-tabbed-content '>    {'//'} ✅  serverUrl is reactive</span> </p>
                <div className='App-hilight-color'>
                    <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                    <p className='App-tabbed-content'>const connection = createConnection(serverUrl, roomId); <span className='App-comment-color App-double-tabbed-content '>    {'//'} ✅   Your Effect reads roomId and serverUrl</span></p>
                    <p className='App-tabbed-content'> connection.connect(); </p>
                    <p className='App-tabbed-content'>return () ={'>'} {'{'}</p>
                    <p className='App-double-tabbed-content'> connection.disconnect();</p>
                    <p className='App-tabbed-content'>{'}'}</p>
                    <p className='App-success-color'>{'}'}, [roomId, serverUrl]{')'};  <span className='App-comment-color App-double-tabbed-content'>    {'//'} ✅ So it needs to re-synchronize when either of them changes!</span> </p>
                </div>
                <p>{'//'} ...</p>
            </div>
            <p>{'}'}</p>
        </div>
    </div >);
}

//--------------------------------------------------------------------------------------
// React verifies that you specified every reactive value as a dependency 
function ReactVerifiesSpecifiedReactiveValueAsDependencyDemo() {
    return (<div className="App-left-aligned-content">
        <p>This may look like a React error, but really React is pointing out a bug in your code. Both roomId and serverUrl may change over time, but you’re forgetting to re-synchronize your Effect when they change. You will remain connected to the initial roomId and serverUrl even after the user picks different values in the UI.</p>

        <div className='App-left-aligned-border App-super-small-font-size App-tabbed-content '>
            <p>function ChatRoom({'{'}  roomId {'}'}) {'{'} <span className='App-comment-color App-double-tabbed-content '>    {'//'} ✅  roomId is reactive </span></p>
            <div className='App-tabbed-content'>
                <p className='App-success-color'>   const serverUrl = selectedServerUrl ?? settings.defaultServerUrl;<span className='App-comment-color App-double-tabbed-content '>    {'//'} ✅  serverUrl is reactive</span> </p>

                <div className='App-hilight-color'>
                    <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                    <p className='App-tabbed-content'>const connection = createConnection(serverUrl, roomId);</p>
                    <p className='App-tabbed-content'> connection.connect(); </p>
                    <p className='App-tabbed-content'>return () ={'>'} {'{'}</p>
                    <p className='App-double-tabbed-content'> connection.disconnect();</p>
                    <p className='App-tabbed-content'>{'}'}</p>
                    <p className='App-success-color'>{'}'}, [roomId, serverUrl]{')'};  <span className='App-comment-color App-double-tabbed-content'>    {'//'} ✅ All dependencies declared</span> </p>
                </div>
                <p>{'//'} ...</p>
            </div>
            <p>{'}'}</p>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// What to do when you don’t want to re-synchronize 
function WhatToDoWhenYouDoNotWantToReSynchronizeDemo() {
    return (<div className="App-left-aligned-content">
        <p>Effects are reactive blocks of code. They re-synchronize when the values you read inside of them change. Unlike event handlers, which only run once per interaction, Effects run whenever synchronization is necessary.</p>
        <p>You can’t “choose” your dependencies. Your dependencies must include every reactive value you read in the Effect.
            <ul>
                <li>Check that your Effect represents an independent synchronization process.</li>
                <li>If you want to read the latest value of props or state without “reacting” to it and re-synchronizing the Effect</li>
                <li>Avoid relying on objects and functions as dependencies.</li>
            </ul>
        </p>

        <div className='App-left-aligned-border App-super-small-font-size '>

            <div className='App-row-container'>
                <div className='App-tabbed-content'>
                    <p className='App-success-color'>const serverUrl = 'https://localhost:1234'; <span className='App-comment-color App-double-tabbed-content '>    {'//'} ✅   serverUrl is not reactive</span> </p>
                    <p className='App-success-color'> roomId = 'general'; <span className='App-comment-color App-double-tabbed-content '>    {'//'} ✅   roomId is not reactive</span> </p>
                    <p>function ChatRoom() {'{'}</p>
                    <div className='App-tabbed-content'>
                        <div className='App-hilight-color'>
                            <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                            <p className='App-tabbed-content'>const connection = createConnection(serverUrl, roomId);</p>
                            <p className='App-tabbed-content'> connection.connect(); </p>
                            <p className='App-tabbed-content'>return () ={'>'} {'{'}</p>
                            <p className='App-double-tabbed-content'> connection.disconnect();</p>
                            <p className='App-tabbed-content'>{'}'}</p>
                            <p className='App-success-color'>{'}'}, [ ]{')'};  <span className='App-comment-color App-double-tabbed-content'>    {'//'} ✅ All dependencies declared</span> </p>
                        </div>
                        <p>{'//'} ...</p>
                    </div>
                    <p>{'}'}</p>
                </div>

                <hr></hr>

                <div className='App-no-tabbed-content'>
                    <p>function ChatRoom() {'{'}</p>
                    <div className='App-tabbed-content'>
                        <div className='App-hilight-color'>
                            <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                            <p className='App-success-color'>const serverUrl = 'https://localhost:1234'; <span className='App-comment-color App-double-tabbed-content '>    {'//'} ✅   serverUrl is not reactive</span> </p>
                            <p className='App-success-color'> roomId = 'general'; <span className='App-comment-color App-double-tabbed-content '>    {'//'} ✅   roomId is not reactive</span> </p>
                            <p className='App-tabbed-content'>const connection = createConnection(serverUrl, roomId);</p>
                            <p className='App-tabbed-content'> connection.connect(); </p>
                            <p className='App-tabbed-content'>return () ={'>'} {'{'}</p>
                            <p className='App-double-tabbed-content'> connection.disconnect();</p>
                            <p className='App-tabbed-content'>{'}'}</p>
                            <p className='App-success-color'>{'}'}, [ ]{')'};  <span className='App-comment-color App-double-tabbed-content'>    {'//'} ✅ All dependencies declared</span> </p>
                        </div>
                        <p>{'//'} ...</p>
                    </div>
                    <p>{'}'}</p>
                </div>
            </div>
        </div>
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
function createConnectionChallenge1(serverUrl, roomId) {
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

const serverUrlChallenge1 = 'https://localhost:1234';

function Challenge1ChatRoom({ roomId }) {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const connection = createConnectionChallenge1(serverUrlChallenge1, roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]);

    return (
        <>
            <h1>Welcome to the {roomId} room!</h1>
            <input
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
        </>
    );
}

function Challenge1ChatRoomApp() {
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
            <Challenge1ChatRoom roomId={roomId} />
        </>
    );
}

function Challenge1LifecycleReactiveEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 5: Fix reconnecting on every keystroke </p>
        <Challenge1ChatRoomApp />
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 2 of 5: Switch synchronization on and off 
- In this example, an Effect subscribes to the window pointermove event to move a pink dot on the screen. Try hovering over the preview area (or touching the screen if you’re on a mobile device), and see how the pink dot follows your movement.
- There is also a checkbox. Ticking the checkbox toggles the canMove state variable, but this state variable is not used anywhere in the code. Your task is to change the code so that when canMove is false (the checkbox is ticked off), the dot should stop moving. After you toggle the checkbox back on (and set canMove to true), the box should follow the movement again. In other words, whether the dot can move or not should stay synchronized to whether the checkbox is checked.
*/
function Challenge2App() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [canMove, setCanMove] = useState(true);

    useEffect(() => {
        function handleMove(e) {
            if (canMove) {
                setPosition({ x: e.clientX, y: e.clientY });
            }
        }
        window.addEventListener('pointermove', handleMove);
        return () => window.removeEventListener('pointermove', handleMove);

    }, [canMove]);

    return (
        <>
            <label>
                <input type="checkbox"
                    checked={canMove}
                    onChange={e => setCanMove(e.target.checked)}
                />
                The dot is allowed to move
            </label>
            <hr />
            <div style={{
                position: 'absolute',
                backgroundColor: 'pink',
                borderRadius: '50%',
                opacity: 0.6,
                transform: `translate(${position.x}px, ${position.y}px)`,
                pointerEvents: 'none',
                left: -20,
                top: -20,
                width: 40,
                height: 40,
            }} />
        </>
    );
}

function Challenge2LifecycleReactiveEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 5: Switch synchronization on and off </p>
        <Challenge2App />
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 3 of 5: Investigate a stale value bug 
- In this example, the pink dot should move when the checkbox is on, and should stop moving when the checkbox is off. The logic for this has already been implemented: the handleMove event handler checks the canMove state variable.
- However, for some reason, the canMove state variable inside handleMove appears to be “stale”: it’s always true, even after you tick off the checkbox. How is this possible? Find the mistake in the code and fix it.
*/
function Challenge3App() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [canMove, setCanMove] = useState(true);

    function handleMove(e) {
        if (canMove) {
            setPosition({ x: e.clientX, y: e.clientY });
        }
    }

    useEffect(() => {
        window.addEventListener('pointermove', handleMove);
        return () => window.removeEventListener('pointermove', handleMove);
    });

    return (
        <>
            <label className='App-success-color'>
                <input type="checkbox"
                    checked={canMove}
                    onChange={e => setCanMove(e.target.checked)}
                />
                The green dot is allowed to move
            </label>
            <hr />
            <div style={{
                position: 'absolute',
                backgroundColor: 'green',
                borderRadius: '50%',
                opacity: 0.6,
                transform: `translate(${position.x}px, ${position.y}px)`,
                pointerEvents: 'none',
                left: -20,
                top: -20,
                width: 40,
                height: 40,
            }} />
        </>
    );
}

function Challenge3LifecycleReactiveEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 5: Investigate a stale value bug </p>
        <Challenge3App />
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 4 of 5: Fix a connection switch 
- In this example, the chat service in chat.js exposes two different APIs: createEncryptedConnection and createUnencryptedConnection. The root App component lets the user choose whether to use encryption or not, and then passes down the corresponding API method to the child ChatRoom component as the createConnection prop.
- Notice that initially, the console logs say the connection is not encrypted. Try toggling the checkbox on: nothing will happen. However, if you change the selected room after that, then the chat will reconnect and enable encryption (as you’ll see from the console messages). This is a bug. Fix the bug so that toggling the checkbox also causes the chat to reconnect.
*/
function createEncryptedConnectionChallenge4(roomId) {
    // A real implementation would actually connect to the server
    return {
        connect() {
            console.log('✅ 🔐 Connecting to "' + roomId + '... (encrypted)');
        },
        disconnect() {
            console.log('❌ 🔐 Disconnected from "' + roomId + '" room (encrypted)');
        }
    };
}

function createUnencryptedConnectionChallenge4(roomId) {
    // A real implementation would actually connect to the server
    return {
        connect() {
            console.log('✅ Connecting to "' + roomId + '... (unencrypted)');
        },
        disconnect() {
            console.log('❌ Disconnected from "' + roomId + '" room (unencrypted)');
        }
    };
}

function Challenge4ChatRoom({ roomId, createConnection }) {
    useEffect(() => {
        const connection = createConnection(roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId, createConnection]);

    return <h1>Welcome to the {roomId} room!</h1>;
}

function Challenge4App() {
    const [roomId, setRoomId] = useState('general');
    const [isEncrypted, setIsEncrypted] = useState(false);

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
            <label>
                <input
                    type="checkbox"
                    checked={isEncrypted}
                    onChange={e => setIsEncrypted(e.target.checked)}
                />
                Enable encryption
            </label>
            <hr />
            <Challenge4ChatRoom
                roomId={roomId}
                createConnection={isEncrypted ?
                    createEncryptedConnectionChallenge4 :
                    createUnencryptedConnectionChallenge4
                }
            />
        </>
    );
}

function Challenge4LifecycleReactiveEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 5: Fix a connection switch </p>
        <Challenge4App />
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
function fetchDataChallenge5(url) {
    if (url === '/planets') {
        return fetchPlanets();
    } else if (url.startsWith('/planets/')) {
        const match = url.match(/^\/planets\/([\w-]+)\/places(\/)?$/);
        if (!match || !match[1] || !match[1].length) {
            throw Error('Expected URL like "/planets/earth/places". Received: "' + url + '".');
        }
        return fetchPlaces(match[1]);
    } else throw Error('Expected URL like "/planets" or "/planets/earth/places". Received: "' + url + '".');
}

async function fetchPlanets() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([{
                id: 'earth',
                name: 'Earth'
            }, {
                id: 'venus',
                name: 'Venus'
            }, {
                id: 'mars',
                name: 'Mars'
            }]);
        }, 1000);
    });
}

async function fetchPlaces(planetId) {
    if (typeof planetId !== 'string') {
        throw Error(
            'fetchPlaces(planetId) expects a string argument. ' +
            'Instead received: ' + planetId + '.'
        );
    }
    return new Promise(resolve => {
        setTimeout(() => {
            if (planetId === 'earth') {
                resolve([{
                    id: 'laos',
                    name: 'Laos'
                }, {
                    id: 'spain',
                    name: 'Spain'
                }, {
                    id: 'vietnam',
                    name: 'Vietnam'
                }]);
            } else if (planetId === 'venus') {
                resolve([{
                    id: 'aurelia',
                    name: 'Aurelia'
                }, {
                    id: 'diana-chasma',
                    name: 'Diana Chasma'
                }, {
                    id: 'kumsong-vallis',
                    name: 'Kŭmsŏng Vallis'
                }]);
            } else if (planetId === 'mars') {
                resolve([{
                    id: 'aluminum-city',
                    name: 'Aluminum City'
                }, {
                    id: 'new-new-york',
                    name: 'New New York'
                }, {
                    id: 'vishniac',
                    name: 'Vishniac'
                }]);
            } else throw Error('Unknown planet ID: ' + planetId);
        }, 1000);
    });
}

function Challenge5Page() {
    const [planetList, setPlanetList] = useState([])
    const [planetId, setPlanetId] = useState('');
    const [placeList, setPlaceList] = useState([]);
    const [placeId, setPlaceId] = useState('');

    useEffect(() => {
        let ignore = false;
        fetchDataChallenge5('/planets').then(result => {
            if (!ignore) {
                console.log('Fetched a list of planets.');
                setPlanetList(result);
                setPlanetId(result[0].id); // Select the first planet
            }
        });
        return () => {
            ignore = true;
        }
    }, []);

    useEffect(() => {
        if (planetId === '') {
            // Nothing is selected in the first box yet
            return;
        }

        let ignore = false;
        fetchDataChallenge5('/planets/' + planetId + '/places').then(result => {
            if (!ignore) {
                console.log('Fetched a list of placess.');
                setPlaceList(result);
                setPlaceId(result[0].id); // Select the first place
            }
        });
        return () => {
            ignore = true;
        }
    }, [planetId]);

    return (
        <>
            <label>
                Pick a planet:{' '}
                <select value={planetId} onChange={e => {
                    setPlanetId(e.target.value);
                }}>
                    {planetList.map(planet =>
                        <option key={planet.id} value={planet.id}>{planet.name}</option>
                    )}
                </select>
            </label>
            <label>
                Pick a place:{' '}
                <select value={placeId} onChange={e => {
                    setPlaceId(e.target.value);
                }}>
                    {placeList.map(place =>
                        <option key={place.id} value={place.id}>{place.name}</option>
                    )}
                </select>
            </label>
            <hr />
            <p>You are going to: {placeId || '???'} on {planetId || '???'} </p>
        </>
    );
}

function Challenge5LifecycleReactiveEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 5 of 5: Populate a chain of select boxes </p>
        <Challenge5Page />
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