import './App.css';
import { useState, useRef, useEffect } from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

// Main Default For Separating Events from Effects Demo
export default function SeparatingEventsFromEffectsDemo() {
    return (
        <div>
            <h1 className="App-topic">Separating Events from Effects</h1>
            <p>Event handlers only re-run when you perform the same interaction again. Unlike event handlers, Effects re-synchronize if some value they read, like a prop or a state variable, is different from what it was during the last render. Sometimes, you also want a mix of both behaviors: an Effect that re-runs in response to some values but not others. This page will teach you how to do that.</p>

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
        <p>Let’s say you’ve already implemented the code for them, but you’re not sure where to put it. Should you use event handlers or Effects? Every time you need to answer this question, consider why the code needs to run.</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Event handlers run in response to specific interactions 
function EventHandlersRunInResponseToSpecificInteractionsDemo() {
    return (<div className="App-left-aligned-content">
        <h3>Event handlers let you handle specific interactions.</h3>
        <p>From the user’s perspective, sending a message should happen because the particular “Send” button was clicked. The user will get rather upset if you send their message at any other time or for any other reason. This is why sending a message should be an event handler. </p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Effects run whenever synchronization is needed 
function sendMessageEffects(message) {
    console.log('🔵 You sent: ' + message);
}

export function createConnectionEffects(serverUrl, roomId) {
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

const serverUrlEffects = 'https://localhost:1234';

function EffectsChatRoom({ roomId }) {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const connection = createConnectionEffects(serverUrlEffects, roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]);

    function handleSendClick() {
        alert('Send Message is event handle, message to sent : ' + message);
        sendMessageEffects(message);
    }

    return (
        <>
            <h1>Welcome to the {roomId} room!</h1>
            <input value={message} onChange={e => setMessage(e.target.value)} />
            <button onClick={handleSendClick}>Send</button>
        </>
    );
}

function EffectsChatRoomApp() {
    const [roomId, setRoomId] = useState('general');
    const [show, setShow] = useState(false);

    return (
        <div className="App-left-aligned-content">
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
            {show && <EffectsChatRoom roomId={roomId} />}
        </div>
    );
}

function EffectsRunWheneverSynchronizationIsNeededDemo() {
    return (<div className="App-left-aligned-content">
        <h3>Effect ensures that the component will remain synchronized with the currently selected room, and will re-connect whenever it’s necessary.</h3>

        <div className='App-row-container'>
            <EffectsChatRoomApp />

            <div className='App-left-aligned-small-box-border  App-super-small-font-size App-tabbed-content '>
                <p>function ChatRoom({'{'}  roomId {'}'}) {'{'}</p>
                <div className='App-tabbed-content'>
                    <div className='App-hilight-color'>
                        <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                        <p className='App-tabbed-content'>const connection = createConnection(serverUrl, roomId);</p>
                        <p className='App-tabbed-content'> connection.connect(); </p>
                        <p className='App-tabbed-content'>return () ={'>'} {'{'}</p>
                        <p className='App-double-tabbed-content'> connection.disconnect();</p>
                        <p className='App-tabbed-content'>{'}'}</p>
                        <p>{'}'}, [roomId]{')'}; </p>
                    </div>
                    <p>{'//'} ...</p>
                </div>
                <p>{'}'}</p>
            </div>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Reactive values and reactive logic 
function ReactiveValuesAndLogicDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-container'>
            <div className='App-medium-container'>
                <p>Reactive values like these can change due to a re-render. For example, the user may edit the message or choose a different roomId in a dropdown. Event handlers and Effects respond to changes differently:</p>
                <ul>
                    <li>Logic inside event handlers is not reactive. </li>
                    <li>Logic inside Effects is reactive. </li>
                </ul>
            </div>

            <div className='App-left-aligned-small-box-border  App-small-font-size App-tabbed-content '>
                <p>const serverUrl = 'https://localhost:1234'; <span className='App-comment-color App-double-tabbed-content '>    {'//'} ❌  serverUrl is not reactive value. </span></p>

                <p>function ChatRoom({'{'}  roomId {'}'}) {'{'}<span className='App-comment-color App-double-tabbed-content '>    {'//'} ✅  roomId is reactive value.</span></p>
                <div className='App-tabbed-content'>
                    <div className='App-hilight-color'>
                        <p>    const [message, setMessage] = useState('');<span className='App-comment-color App-double-tabbed-content '>    {'//'} ✅  message is reactive value.</span></p>
                        <p>{'//'} ...</p>
                    </div>
                </div>
                <p>{'}'}</p>
            </div>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Logic inside event handlers is not reactive 
function LogicInsideEventHandlersIsNotReactiveDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-container'>
            <div className='App-left-aligned-small-box-border  App-small-font-size App-tabbed-content '>
                <p>function handleSendClick() {'{'}</p>
                <div className='App-tabbed-content'>
                    <div className='App-hilight-color'>
                        <span className='App-comment-color'>    {'//'} ❌  sendMessage() is not reactive value.</span>
                        <p>sendMessage(message);</p>
                    </div>
                </div>
                <p>{'}'}</p>
            </div>

            <div className='App-medium-container'>
                <p>Event handlers aren’t reactive, so sendMessage(message) will only run when the user clicks the Send button.</p>
            </div>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Logic inside Effects is reactive 
function LogicInsideEffectsIsReactiveDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-container'>
            <div className='App-left-aligned-small-box-border  App-small-font-size App-tabbed-content '>
                <p>function ChatRoom({'{'}  roomId {'}'}) {'{'}</p>
                <div className='App-tabbed-content'>
                    <div className='App-hilight-color'>
                        <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                        <span className='App-comment-color App-tabbed-content'>    {'//'} ✅ createConnection() is reactive value.</span>
                        <p className='App-tabbed-content'>const connection = createConnection(serverUrl, roomId);</p>
                        <p className='App-tabbed-content'> connection.connect(); </p>
                        <p className='App-tabbed-content'>{'//'} ...</p>
                        <p>{'}'}, [roomId]{')'}; </p>
                    </div>
                    <p>{'//'} ...</p>
                </div>
                <p>{'}'}</p>
            </div>

            <div className='App-medium-container'>
                <p>Effects are reactive, so createConnection(serverUrl, roomId) and connection.connect() will run for every distinct value of roomId. Your Effect keeps the chat connection synchronized to the currently selected room.</p>
            </div>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Extracting non-reactive logic out of Effects 
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

function createConnectionNotification(serverUrl, roomId) {
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

const serverUrlNotification = 'https://localhost:1234';

function NotificationChatRoom({ roomId, theme }) {
    useEffect(() => {
        const connection = createConnectionNotification(serverUrlNotification, roomId);
        connection.on('connected', () => {
            showNotification('Connected!', theme);
        });
        connection.connect();
        return () => connection.disconnect();
    }, [roomId, theme]);

    return (<div>
        <h1>Welcome to the {roomId} room!</h1>
        <div className='App-hilight-color App-medium-font-size'>
            <p>However, theme is a reactive value (it can change as a result of re-rendering), and every reactive value read by an Effect must be declared as its dependency. Now you have to specify theme as a dependency of your Effect</p>
            <p> When the roomId changes, the chat re-connects as you would expect. But since theme is also a dependency, the chat also re-connects every time you switch between the dark and the light theme. That’s not great!</p>
        </div>
    </div>);
}

function NotificationChatRoomApp() {
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
            <br></br>
            <label>
                <input
                    type="checkbox"
                    checked={isDark}
                    onChange={e => setIsDark(e.target.checked)}
                />
                Use dark theme
            </label>
            <hr />
            <NotificationChatRoom
                roomId={roomId}
                theme={isDark ? 'dark' : 'light'}
            />
        </>
    );
}

function ExtractingNonReactiveLogicOutOfEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Things get more tricky when you want to mix reactive logic with non-reactive logic. You need a way to separate this non-reactive logic from the reactive Effect around it.</p>
        <hr></hr>
        <NotificationChatRoomApp />
    </div>);
}

//--------------------------------------------------------------------------------------
// Declaring an Effect Event 
const useEffectEvent = (callback) => {
    const ref = useRef(callback);

    ref.current = callback;

    return (...args) => {
        ref.current(...args);
    }
}

function showNotificationEffectEvent(message, theme) {
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

function createConnectionEffectEvent(serverUrl, roomId) {
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

const serverUrlEffectEvent = 'https://localhost:1234';

function EffectEventChatRoom({ roomId, theme }) {
    const onConnected = useEffectEvent(() => {
        showNotificationEffectEvent('Connected!', theme);
    });

    useEffect(() => {
        const connection = createConnectionEffectEvent(serverUrlEffectEvent, roomId);
        connection.on('connected', () => {
            onConnected();
        });
        connection.connect();
        return () => connection.disconnect();
    }, [roomId, onConnected]);

    return <h1>Welcome to the {roomId} room by using Effect Event !</h1>
}

function EffectEventChatRoomApp() {
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
            <br></br>
            <label>
                <input
                    type="checkbox"
                    checked={isDark}
                    onChange={e => setIsDark(e.target.checked)}
                />
                Use dark theme
            </label>
            <hr />
            <EffectEventChatRoom
                roomId={roomId}
                theme={isDark ? 'dark' : 'light'}
            />
        </>
    );
}

function DeclaringEffectEventDemo() {
    return (<div className="App-left-aligned-content">
        <p>You can think of Effect Events as being very similar to event handlers. The main difference is that event handlers run in response to a user interactions, whereas Effect Events are triggered by you from Effects. Effect Events let you “break the chain” between the reactivity of Effects and code that should not be reactive.</p>
        <EffectEventChatRoomApp />
    </div>);
}

//--------------------------------------------------------------------------------------
// Reading latest props and state with Effect Events 
function EffectEventsApp() {
    const [position, setPosition] = useState({ x: 150, y: 1000 });
    const [canMove, setCanMove] = useState(true);

    const onMove = useEffectEvent(e => {
        if (canMove) {
            setPosition({ x: e.clientX, y: e.clientY });
        }
    });

    useEffect(() => {
        window.addEventListener('pointermove', onMove);
        return () => window.removeEventListener('pointermove', onMove);
    }, [onMove]);

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

function ReadingLatestPropsStateWithEffectEventsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Effect Events let you fix many patterns where you might be tempted to suppress the dependency linter.</p>
        <EffectEventsApp />
    </div>);
}

//--------------------------------------------------------------------------------------
// Limitations of Effect Events 
function LimitationsEffectEventsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Effect Events are very limited in how you can use them.</p>
        <ul>
            <li>Only call them from inside Effects.</li>
            <li>Never pass them to other components or Hooks.</li>
        </ul>
        <p>Effect Events are non-reactive “pieces” of your Effect code. They should be next to the Effect using them.</p>
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
function Challenge1Timer() {
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(1);

    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + increment);
        }, 1000);
        return () => {
            clearInterval(id);
        };
    }, [increment]);

    return (
        <div className='App-row-container'>
            <h1>
                Counter: {count}
                <br></br>
                <button onClick={() => setCount(0)}>Reset</button>
            </h1>
            <hr />
            <p>
                Every second, increment by :   <b></b>
                <button disabled={increment === 0} onClick={() => {
                    setIncrement(i => i - 1);
                }}>–</button>
                <b> {increment} </b>
                <button onClick={() => {
                    setIncrement(i => i + 1);
                }}>+</button>
            </p>
        </div>
    );
}

function Challenge1SeparatingEventsFromEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 4: Fix a variable that doesn’t update </p>
        <Challenge1Timer />
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 2 of 4: Fix a freezing counter 
- This Timer component keeps a count state variable which increases every second. The value by which it’s increasing is stored in the increment state variable, which you can control it with the plus and minus buttons. For example, try pressing the plus button nine times, and notice that the count now increases each second by ten rather than by one.
- There is a small issue with this user interface. You might notice that if you keep pressing the plus or minus buttons faster than once per second, the timer itself seems to pause. It only resumes after a second passes since the last time you’ve pressed either button. Find why this is happening, and fix the issue so that the timer ticks on every second without interruptions.
*/
function Challenge2Timer() {
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(1);
    const onTick = useEffectEvent(() => {
        setCount(c => c + increment);

    });

    useEffect(() => {
        const id = setInterval(() => {
            onTick();
        }, 1000);
        return () => {
            clearInterval(id);
        };
    });

    return (
        <div className='App-row-container'>
            <h1>
                Counter: {count}
                <br></br>
                <button onClick={() => setCount(0)}>Reset</button>
            </h1>
            <hr />
            <p>
                Every second, increment by :   <b></b>
                <button disabled={increment === 0} onClick={() => {
                    setIncrement(i => i - 1);
                }}>–</button>
                <b> {increment} </b>
                <button onClick={() => {
                    setIncrement(i => i + 1);
                }}>+</button>
            </p>
        </div>
    );
}

function Challenge2SeparatingEventsFromEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 4: Fix a freezing counter </p>
        <Challenge2Timer />
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 3 of 4: Fix a non-adjustable delay 
- In this example, you can customize the interval delay. It’s stored in a delay state variable which is updated by two buttons. However, even if you press the “plus 100 ms” button until the delay is 1000 milliseconds (that is, a second), you’ll notice that the timer still increments very fast (every 100 ms). It’s as if your changes to the delay are ignored. Find and fix the bug.
*/
function Challenge3Timer() {
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(1);
    const [delay, setDelay] = useState(100);

    const onTick = useEffectEvent(() => {
        setCount(c => c + increment);
    });

    useEffect(() => {
        const id = setInterval(() => {
            onTick();
        }, delay);
        return () => {
            clearInterval(id);
        }
    }, [delay, onTick]);

    return (
        <div className='App-row-container'>
            <h1>
                Counter: {count}
                <br></br>
                <button onClick={() => setCount(0)}>Reset</button>
            </h1>
            <hr />
            <div>
                <p>
                    Increment by : <b></b>
                    <button disabled={increment === 0} onClick={() => {
                        setIncrement(i => i - 1);
                    }}>–</button>
                    <b> {increment} </b>
                    <button onClick={() => {
                        setIncrement(i => i + 1);
                    }}>+</button>
                </p>
                <p>
                    Increment delay : <b></b>
                    <button disabled={delay === 100} onClick={() => {
                        setDelay(d => d - 100);
                    }}>–100 ms</button>
                    <b> {delay} ms </b>
                    <button onClick={() => {
                        setDelay(d => d + 100);
                    }}>+100 ms</button>
                </p>
            </div>
        </div>
    );
}

function Challenge3SeparatingEventsFromEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 4: Fix a non-adjustable delay </p>
        <Challenge3Timer />
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
function showNotificationChallenge4(message, theme) {
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

function createConnectionChallenge4(serverUrl, roomId) {
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

const serverUrlChallenge4 = 'https://localhost:1234';

function Challenge4ChatRoom({ roomId, theme }) {
    const onConnected = useEffectEvent(connectedRoomId => {
        showNotificationChallenge4('Welcome to ' + connectedRoomId, theme);
    });

    useEffect(() => {
        const connection = createConnectionChallenge4(serverUrlChallenge4, roomId);
        connection.on('connected', () => {
            setTimeout(() => {
                onConnected(roomId);
            }, 2000);
        });
        connection.connect();
        return () => connection.disconnect();
    }, [roomId, onConnected]);

    return <h1>Welcome to the {roomId} room!</h1>
}

function Challenge4ChatRoomApp() {
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
            <br></br>
            <label>
                <input
                    type="checkbox"
                    checked={isDark}
                    onChange={e => setIsDark(e.target.checked)}
                />
                Use dark theme
            </label>
            <hr />
            <Challenge4ChatRoom
                roomId={roomId}
                theme={isDark ? 'dark' : 'light'}
            />
        </>
    );
}

function Challenge4SeparatingEventsFromEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 4: Fix a delayed notification </p>
        <Challenge4ChatRoomApp />
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