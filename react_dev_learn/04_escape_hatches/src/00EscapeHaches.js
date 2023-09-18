import './App.css';
import { useState, useRef, useEffect } from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

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
function ReferencingValuesWithRefsCounter() {
    let ref = useRef(0);

    function handleClick() {
        ref.current = ref.current + 1;
        alert('You clicked ' + ref.current + ' times!');
    }

    return (
        <button onClick={handleClick}>
            Click me ! | Using useRef()
        </button>
    );
}

function ReferencingValuesWithRefsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Like state, refs are retained by React between re-renders. However, setting state re-renders a component. Changing a ref does not! You can access the current value of that ref through the ref.current property.</p>

        <div className='App-row-container'>
            < ReferencingValuesWithRefsCounter />
            <hr></hr>
            <p className='App-small-box-border'>const ref = useRef(0);</p>
        </div>

        <p className='App-hilight-color'>A ref is like a secret pocket of your component that React doesn’t track. For example, you can use refs to store timeout IDs, DOM elements, and other objects that don’t impact the component’s rendering output.</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Manipulating the DOM with refs 
function ManipulatingTheDOMWithRefsForm() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} />
            <button onClick={handleClick}>
                Focus the input
            </button>
        </>
    );
}

function ManipulatingTheDOMWithRefsDemo() {
    return (<div className="App-left-aligned-content">
        <p>React automatically updates the DOM to match your render output, so your components won’t often need to manipulate it. However, sometimes you might need access to the DOM elements managed by React</p>
        <p className='App-error-color'>There is no built-in way to do those things in React, so you will need a ref to the DOM node. For example, clicking the button will focus the input using a ref:</p>
        <ManipulatingTheDOMWithRefsForm />
    </div>);
}

//--------------------------------------------------------------------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Synchronizing with Effects With Video App
function SynchronizingWithEffectsVideoPlayer({ src, isPlaying }) {
    const ref = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }, [isPlaying]);

    return <video ref={ref} src={src} loop playsInline />;
}

function SynchronizingWithEffectsVideoPlayerApp() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="App-left-aligned-content">
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>

            <br></br>

            <SynchronizingWithEffectsVideoPlayer
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </div>
    );
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Synchronizing with Effects With Chat App
function createConnection() {
    // A real implementation would actually connect to the server
    return {
        connect() {
            console.log('✅ Connecting...');
        },
        disconnect() {
            console.log('❌ Disconnected.');
        }
    };
}

function SynchronizingWithEffectsChatRoomApp() {
    useEffect(() => {
        const connection = createConnection();
        connection.connect();
        return () => connection.disconnect();
    }, []);
    return <h1>Welcome to the chat!</h1>;
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Synchronizing with Effects Main
function SynchronizingWithEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Some components need to synchronize with external systems. For example, you might want to control a non-React component based on the React state, set up a server connection, or send an analytics log when a component appears on the screen. </p>
        <p className='App-hilight-color'>Unlike event handlers, which let you handle particular events, Effects let you run some code after rendering. Use them to synchronize your component with a system outside of React.</p>
        <SynchronizingWithEffectsVideoPlayerApp />
        <hr></hr>
        <p>Many Effects also “clean up” after themselves. For example, an Effect that sets up a connection to a chat server should return a cleanup function that tells React how to disconnect your component from that server:</p>
        <SynchronizingWithEffectsChatRoomApp />
    </div>);
}

//--------------------------------------------------------------------------------------
// You Might Not Need An Effect 
function YouMightNotNeedAnEffectExample() {
    return (
        <div className="App-smallest-box-border-error-color App-small-font-size">
            <p className='App-medium-font-size App-error-color'>For example, you don’t need an Effect to adjust some state based on other state: </p>
            <hr></hr>

            <p>function Form() {'{'}</p>
            <div className='App-tabbed-content'>
                <p> const [firstName, setFirstName] = useState('Taylor');</p>
                <p> const [lastName, setLastName] = useState('Swift');</p>

                <div className='App-error-color'>
                    <p>{'//'} 🔴 Avoid: redundant state and unnecessary Effect</p>
                    <p>useEffect{'('}() ={'>'} {'{'}</p>
                </div>
                <div className='App-tabbed-content'>
                    <p> setFullName(firstName + ' ' + lastName);</p>
                </div>
                <p> {'}'}, [firstName, lastName]{')'};</p>
            </div>
            <p>{'}'}</p>
        </div>
    );
}

function YouMightNotNeedAnEffectCorrectExample() {
    return (<div className="App-smallest-box-border-success-color App-small-font-size">
        <p className='App-medium-font-size App-success-color'>Instead, calculate as much as you can while rendering:</p>
        <hr></hr>

        <p>function Form() {'{'}</p>
        <div className='App-tabbed-content'>
            <p> const [firstName, setFirstName] = useState('Taylor');</p>
            <p> const [lastName, setLastName] = useState('Swift');</p>

            <div className='App-success-color'>
                <p>{'//'}✅ Good: calculated during rendering</p>
                <p>const fullName = firstName + ' ' + lastName;</p>
            </div>
            <p>{'//'} ...</p>
        </div>
        <p>{'}'}</p>
    </div>);
}

function YouMightNotNeedAnEffectDemo() {
    return (<div className="App-left-aligned-content">
        <p>There are two common cases in which you don’t need Effects:</p>
        <ul>
            <ol>
                <li>You don’t need Effects to transform data for rendering.</li>
                <li>You don’t need Effects to handle user events.</li>
            </ol>
        </ul>

        <div className='App-row-center-container'>
            <YouMightNotNeedAnEffectExample />
            <YouMightNotNeedAnEffectCorrectExample />
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Lifecycle of reactive effects 
function createConnectionLifecycle(serverUrl, roomId) {
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

const serverChatRoomUrl = 'https://localhost:1234';

function LifecycleChatRoom({ roomId }) {
    useEffect(() => {
        const connection = createConnectionLifecycle(serverChatRoomUrl, roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]);

    return <h1>Welcome to the {roomId} room!</h1>;
}

function LifecycleChatRoomApp() {
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
            <LifecycleChatRoom roomId={roomId} />
        </>
    );
}

function LifecycleOfReactiveEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Effects have a different lifecycle from components. Components may mount, update, or unmount.</p>
        <p className='App-hilight-color'>This Effect depends on the value of the roomId prop. Props are reactive values, which means they can change on a re-render. Notice that the Effect re-synchronizes (and re-connects to the server) if roomId changes:</p>
        <LifecycleChatRoomApp />
    </div>);
}

//--------------------------------------------------------------------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Separating events from Effects : Shared Component
function showNotificationSeparatingEventsFromEffects(message, theme) {
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

function createConnectionSeparatingEventsFromEffects(serverUrl, roomId) {
    // A real implementation would actually connect to the server
    let connectedCallback;
    let timeout;
    return {
        connect() {
            timeout = setTimeout(() => {
                if (connectedCallback) {
                    connectedCallback();
                }
            }, 100);
        },
        on(event, callback) {
            if (connectedCallback) {
                throw Error('Cannot add the handler twice.');
            }
            if (event !== 'connected') {
                throw Error('Only "connected" event is supported.');
            }
            connectedCallback = callback;
        },
        disconnect() {
            clearTimeout(timeout);
        }
    };
}

const serverUrlSeparatingEventsFromEffects = 'https://localhost:1234';

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Separating events from Effects : Demo Not Separating Events 
function ChatRoomNotSeparatingEventsFromEffects({ roomId, theme }) {
    useEffect(() => {
        const connection = createConnectionSeparatingEventsFromEffects(serverUrlSeparatingEventsFromEffects, roomId);
        connection.on('connected', () => {
            showNotificationSeparatingEventsFromEffects('Connected!', theme);
        });
        connection.connect();
        return () => connection.disconnect();
    }, [roomId, theme]);

    return <h4 className='App-error-color'>Welcome to the {roomId} room! : NOT Seperate Demo</h4>
}

function ChatRoomNotSeparatingEventsFromEffectsApp() {
    const [roomId, setRoomId] = useState('general');
    const [isDark, setIsDark] = useState(false);

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
                    checked={isDark}
                    onChange={e => setIsDark(e.target.checked)}
                />
                Use dark theme
            </label>
            <hr />
            <ChatRoomNotSeparatingEventsFromEffects
                roomId={roomId}
                theme={isDark ? 'dark' : 'light'}
            />
        </>
    );
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Separating events from Effects : Demo Separating Events 
const useEffectEvent = (callback) => {
    const ref = useRef(callback);

    ref.current = callback;

    return (...args) => {
        ref.current(...args);
    }
}

function ChatRoomSeparatingEventsFromEffects({ roomId, theme }) {
    const onConnected = useEffectEvent(() => {
        showNotificationSeparatingEventsFromEffects('Connected!', theme);
    });

    useEffect(() => {
        const connection = createConnectionSeparatingEventsFromEffects(serverUrlSeparatingEventsFromEffects, roomId);
        connection.on('connected', () => {
            onConnected();
        });
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]);

    return <h1>Welcome to the {roomId} room!</h1>
}

function ChatRoomSeparatingEventsFromEffectsApp() {
    const [roomId, setRoomId] = useState('general');
    const [isDark, setIsDark] = useState(false);

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
                    checked={isDark}
                    onChange={e => setIsDark(e.target.checked)}
                />
                Use dark theme
            </label>
            <hr />
            <ChatRoomSeparatingEventsFromEffects
                roomId={roomId}
                theme={isDark ? 'dark' : 'light'}
            />
        </>
    );
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Separating events from Effects Main
function SeparatingEventsFromEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Event handlers only re-run when you perform the same interaction again. Unlike event handlers, Effects re-synchronize if any of the values they read, like props or state, are different than during last render. Sometimes, you want a mix of both behaviors: an Effect that re-runs in response to some values but not others.</p>

        <div className='App-row-center-container'>
            <div className='App-smallest-box-border-error-color'>
                <p className='App-error-color App-small-font-size'>All code inside Effects is reactive. It will run again if some reactive value it reads has changed due to a re-render. For example, this Effect will re-connect to the chat if either roomId or theme have changed:</p>
                <hr></hr>
                <ChatRoomNotSeparatingEventsFromEffectsApp />
            </div>

            <div className='App-smallest-box-border-success-color'>
                <p className='App-success-color App-small-font-size'>You want to re-connect to the chat only if the roomId has changed. Switching the theme shouldn’t re-connect to the chat! Move the code reading theme out of your Effect into an Effect Event:</p>
                <hr></hr>
                <ChatRoomSeparatingEventsFromEffectsApp />
            </div>
            {/* <ChatRoomSeparatingEventsFromEffectsApp /> */}
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Removing Effect dependencies 
function createConnectionRemovingEffectDependencies({ serverUrl, roomId }) {
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

const serverUrlRemovingEffectDependencies = 'https://localhost:1234';

function RemovingEffectDependenciesChatRoom({ roomId }) {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const options = {
            serverUrl: serverUrlRemovingEffectDependencies,
            roomId: roomId
        };
        const connection = createConnectionRemovingEffectDependencies(options);
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

function RemovingEffectDependenciesChatRoomApp() {
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
            <RemovingEffectDependenciesChatRoom roomId={roomId} />
        </>
    );
}

function RemovingEffectDependenciesDemo() {
    return (<div className="App-left-aligned-content">
        <p>When you write an Effect, the linter will verify that you’ve included every reactive value (like props and state) that the Effect reads in the list of your Effect’s dependencies. This ensures that your Effect remains synchronized with the latest props and state of your component. Unnecessary dependencies may cause your Effect to run too often, or even create an infinite loop. The way you remove them depends on the case.</p>
        <RemovingEffectDependenciesChatRoomApp />
        <p className='App-left-aligned-border App-small-font-size '>Notice that you didn’t start by editing the dependency list to remove the options dependency. That would be wrong. Instead, you changed the surrounding code so that the dependency became unnecessary. Think of the dependency list as a list of all the reactive values used by your Effect’s code. You don’t intentionally choose what to put on that list. The list describes your code. To change the dependency list, change the code.</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Reusing logic with custom Hooks 
function useDelayedValue(value, delay) {
    const [delayedValue, setDelayedValue] = useState(value);

    useEffect(() => {
        setTimeout(() => {
            setDelayedValue(value);
        }, delay);
    }, [value, delay]);

    return delayedValue;
}

function usePointerPosition() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        function handleMove(e) {
            setPosition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener('pointermove', handleMove);
        return () => window.removeEventListener('pointermove', handleMove);
    }, []);
    return position;
}

function Dot({ position, opacity }) {
    return (
        <div style={{
            position: 'absolute',
            backgroundColor: 'pink',
            borderRadius: '50%',
            opacity,
            transform: `translate(${position.x}px, ${position.y}px)`,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
        }} />
    );
}

function Canvas() {
    const pos1 = usePointerPosition();
    const pos2 = useDelayedValue(pos1, 100);
    const pos3 = useDelayedValue(pos2, 200);
    const pos4 = useDelayedValue(pos3, 100);
    const pos5 = useDelayedValue(pos4, 50);

    return (
        <>
            <Dot position={pos1} opacity={1} />
            <Dot position={pos2} opacity={0.8} />
            <Dot position={pos3} opacity={0.6} />
            <Dot position={pos4} opacity={0.4} />
            <Dot position={pos5} opacity={0.2} />
        </>
    );
}

function ReusingLogicWithCustomHooksDemo() {
    return (<div className="App-left-aligned-content">
        <p>React comes with built-in Hooks like useState, useContext, and useEffect. Sometimes, you’ll wish that there was a Hook for some more specific purpose: for example, to fetch data, to keep track of whether the user is online, or to connect to a chat room. To do this, you can create your own Hooks for your application’s needs.</p>
        <Canvas />
    </div>);
}