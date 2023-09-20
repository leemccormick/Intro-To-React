import './App.css';
import { useState, useEffect, useRef } from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { useSyncExternalStore } from 'react';

// Main Default For Reusing Logic with Custom Hooks Demo
export default function ReusingLogicWithCustomHooksDemo() {
    return (
        <div>
            <h1 className="App-topic"> Reusing Logic with Custom Hooks</h1>
            <p>React comes with several built-in Hooks like useState, useContext, and useEffect. Sometimes, you’ll wish that there was a Hook for some more specific purpose: for example, to fetch data, to keep track of whether the user is online, or to connect to a chat room. You might not find these Hooks in React, but you can create your own Hooks for your application’s needs.</p>

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
function CustomHooksStatusBar() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        function handleOnline() {
            setIsOnline(true);
        }
        function handleOffline() {
            setIsOnline(false);
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function CustomHooksSaveButton() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        function handleOnline() {
            setIsOnline(true);
        }
        function handleOffline() {
            setIsOnline(false);
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    function handleSaveClick() {
        console.log('✅ Progress saved');
    }

    return (
        <button disabled={!isOnline} onClick={handleSaveClick}>
            {isOnline ? 'Save progress' : 'Reconnecting...'}
        </button>
    );
}

function CustomHooksSharingLogicDemo() {
    return (<div className="App-left-aligned-content">
        <p>Imagine you’re developing an app that heavily relies on the network (as most apps do). You want to warn the user if their network connection has accidentally gone off while they were using your app. </p>
        <ul>
            <ol>
                <li>A piece of state that tracks whether the network is online.</li>
                <li>An Effect that subscribes to the global online and offline events, and updates that state.</li>
            </ol>
        </ul>
        <CustomHooksStatusBar />
        <CustomHooksSaveButton />
        <p className='App-error-color App-medium-font-size'>***These two components work fine, but the duplication in logic between them is unfortunate. It seems like even though they have different visual appearance, you want to reuse the logic between them.***</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Extracting your own custom Hook from a component 
function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        function handleOnline() {
            setIsOnline(true);
        }
        function handleOffline() {
            setIsOnline(false);
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return isOnline;
}

function ExtractingCustomHookStatusBar() {
    const isOnline = useOnlineStatus();
    return <h1>Extracting Own Custom Hook | {isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function ExtractingCustomHookSaveButton() {
    const isOnline = useOnlineStatus();

    function handleSaveClick() {
        console.log('✅ Progress saved');
    }

    return (
        <button disabled={!isOnline} onClick={handleSaveClick}>
            {isOnline ? 'Extracting Own Custom Hook | Save progress ' : 'Extracting Own Custom Hook | Reconnecting...'}
        </button>
    );
}

function ExtractingCustomHookApp() {
    return (
        <>
            <ExtractingCustomHookSaveButton />
            <ExtractingCustomHookStatusBar />
        </>
    );
}

function ExtractingOwnCustomHookDemo() {
    return (<div className="App-left-aligned-content">
        <p>Although there is no such built-in Hook, you can write it yourself. Declare a function called useOnlineStatus and move all the duplicated code into it from the components you wrote earlier.</p>
        <ExtractingCustomHookApp />
    </div>);
}

//--------------------------------------------------------------------------------------
// Hook names always start with use 
function HookNamesDemo() {
    return (<div className="App-left-aligned-content">
        <p className='App-hilight-color'>You must follow these naming conventions.</p>
        <ul>
            <ol className='App-no-tabbed-content'>
                <li>
                    React component names must start with a capital letter
                    <p className='App-medium-font-size'>like StatusBar and SaveButton. React components also need to return something that React knows how to display, like a piece of JSX.</p>
                </li>
                <li>Hook names must start with use followed by a capital letter
                    <p className='App-medium-font-size'>like useState (built-in) or useOnlineStatus (custom, like earlier on the page). Hooks may return arbitrary values.</p>
                </li>
            </ol>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
// Custom Hooks let you share stateful logic, not state itself 
function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    const inputProps = {
        value: value,
        onChange: handleChange
    };

    return inputProps;
}

function ShareStatefulForm() {
    const firstNameProps = useFormInput('Mary');
    const lastNameProps = useFormInput('Poppins');

    return (
        <div className="App-left-aligned-content">
            <label>
                First name : <b></b>
                <input {...firstNameProps} />
            </label>
            <br></br>
            <label>
                Last name : <b></b>
                <input {...lastNameProps} />
            </label>
            <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
        </div>
    );
}

function CustomHooksLetShareStatefulLogicDemo() {
    return (<div className="App-left-aligned-content">
        <p>These are two completely independent state variables and Effects! They happened to have the same value at the same time because you synchronized them with the same external value (whether the network is on).</p>

        <div className='App-row-center-container App-no-tabbed-content'>
            <ShareStatefulForm />
            <div className='App-left-aligned-small-box-border App-medium-font-size App-hilight-color'>
                <p className='App-small-font-size App-success-color'>***Custom Hooks let you share stateful logic but not state itself. Each call to a Hook is completely independent from every other call to the same Hook***</p>
                <p>const firstNameProps = useFormInput('Mary');</p>
                <p>const lastNameProps = useFormInput('Poppins');</p>
                <p>{'<'}input {'{'}...firstNameProps{'}'} / {'>'}</p>
                <p>{'<'}input {'{'}...lastNameProps{'}'} / {'>'}</p>
            </div>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Passing reactive values between Hooks 
function showNotificationUseChatRoom(message, theme = 'dark') {
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

function createConnectionUseChatRoom({ serverUrl, roomId }) {
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
            console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
            clearInterval(intervalId);
            intervalId = setInterval(() => {
                if (messageCallback) {
                    if (Math.random() > 0.5) {
                        messageCallback('hey')
                    } else {
                        messageCallback('lol');
                    }
                }
            }, 3000);
        },
        disconnect() {
            clearInterval(intervalId);
            messageCallback = null;
            console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl + '');
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

function useChatRoom({ serverUrl, roomId }) {
    useEffect(() => {
        const options = {
            serverUrl: serverUrl,
            roomId: roomId
        };
        const connection = createConnectionUseChatRoom(options);
        connection.connect();
        connection.on('message', (msg) => {
            showNotificationUseChatRoom('New message: ' + msg);
        });
        return () => connection.disconnect();
    }, [roomId, serverUrl]);
}

function UseChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    useChatRoom({
        roomId: roomId,
        serverUrl: serverUrl
    });

    return (
        <>
            <label>
                Server URL : <b></b>
                <input value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
            </label>
            <h1>Welcome to the {roomId} room!</h1>
        </>
    );
}

function UseChatApp() {
    const [roomId, setRoomId] = useState('general');

    return (
        <div className="App-left-aligned-content">
            <label>
                Choose the chat room : {' '}
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
            <UseChatRoom
                roomId={roomId}
            />
        </div>
    );
}

function PassingReactiveValuesBetweenHooksDemo() {
    return (<div className="App-left-aligned-content">
        <p>Every time your ChatRoom component re-renders, it passes the latest roomId and serverUrl to your Hook. This is why your Effect re-connects to the chat whenever their values are different after a re-render. (If you ever worked with audio or video processing software, chaining Hooks like this might remind you of chaining visual or audio effects. It’s as if the output of useState “feeds into” the input of the useChatRoom.)</p>
        <hr></hr>

        <div className='App-row-center-container App-no-tabbed-content'>
            <div className='App-left-aligned-small-box-border App-medium-font-size App-hilight-color'>
                <p className='App-small-font-size App-success-color'>***Because custom Hooks re-render together with your component, they always receive the latest props and state. To see what this means, consider this chat room example. Change the server URL or the chat room.***</p>
                <div className='App-double-tabbed-content'>
                    <p> useChatRoom{'('}{'{'}</p>
                    <div className='App-tabbed-content'>
                        <p>roomId: roomId,</p>
                        <p>serverUrl: serverUrl</p>
                    </div>
                    <p>{')'}{'}'} :</p>
                </div>
            </div>

            <UseChatApp />
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Passing event handlers to custom Hooks 
const useEffectEvent = (callback) => {
    const ref = useRef(callback);

    ref.current = callback;

    return (...args) => {
        ref.current(...args);
    }
}

function useChatRoomPassingEventHandlers({ serverUrl, roomId, onReceiveMessage }) {
    const onMessage = useEffectEvent(onReceiveMessage);

    useEffect(() => {
        const options = {
            serverUrl: serverUrl,
            roomId: roomId
        };
        const connection = createConnectionPassingEventHandlers(options);
        connection.connect();
        connection.on('message', (msg) => {
            onMessage(msg);
        });
        return () => connection.disconnect();
    }, [roomId, serverUrl, onMessage]);
}

function showNotificationPassingEventHandlers(message, theme = 'dark') {
    Toastify({
        text: message,
        duration: 2000,
        gravity: 'top',
        position: 'right',
        style: {
            background: theme === 'dark' ? 'brown' : 'yellow',
            color: theme === 'dark' ? 'yellow' : 'brown',
        },
    }).showToast();
}

function createConnectionPassingEventHandlers({ serverUrl, roomId }) {
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
            console.log('✅ Event Handle | Connecting to "' + roomId + '" room at ' + serverUrl + '...');
            clearInterval(intervalId);
            intervalId = setInterval(() => {
                if (messageCallback) {
                    if (Math.random() > 0.5) {
                        messageCallback('hey with event handle')
                    } else {
                        messageCallback('lol with event handle');
                    }
                }
            }, 3000);
        },
        disconnect() {
            clearInterval(intervalId);
            messageCallback = null;
            console.log('❌ Event Handle | Disconnected from "' + roomId + '" room at ' + serverUrl + '');
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

function PassingEventHandlersChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    useChatRoomPassingEventHandlers({
        roomId: roomId,
        serverUrl: serverUrl,
        onReceiveMessage(msg) {
            showNotificationPassingEventHandlers('New message with event handle : ' + msg);
            if (roomId === 'music') {
                alert('Welcome to music room. Let have some fun.... \n New message with event handle : ' + msg);
            }
        }
    });

    return (
        <>
            <label>
                Server URL with event handle : <b></b>
                <input value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
            </label>
            <h1>Welcome to the {roomId} room with event handle !</h1>
        </>
    );
}

function PassingEventHandlersChatApp() {
    const [roomId, setRoomId] = useState('general');
    return (
        <div className="App-left-aligned-content">
            <label>
                Choose the chat room with event handle : {' '}
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
            <hr />
            <PassingEventHandlersChatRoom
                roomId={roomId}
            />
        </div>
    );
}

function PassingEventHandlersToCustomHooksDemo() {
    return (<div className="App-left-aligned-content">
        <p>As you start using useChatRoom in more components, you might want to let components customize its behavior. For example, currently, the logic for what to do when a message arrives is hardcoded inside the Hook.</p>
        <hr></hr>

        <div className='App-row-center-container App-no-tabbed-content'>
            <PassingEventHandlersChatApp />

            <div className='App-left-aligned-small-box-border App-medium-font-size App-hilight-color'>
                <p className='App-small-font-size App-success-color'>***Notice how you no longer need to know how useChatRoom works in order to use it. You could add it to any other component, pass any other options, and it would work the same way. That’s the power of custom Hooks.***</p>
                <p> useChatRoom{'('}{'{'}</p>
                <div className='App-tabbed-content'>
                    <p>roomId: roomId,</p>
                    <p>serverUrl: serverUrl</p>
                    <p> onReceiveMessage(msg) {'{'} </p>
                    <p className='App-tabbed-content'>showNotification('New message : ' + msg); </p>
                    <p>    {'}'} </p>
                </div>
                <p>{')'}{'}'} :</p>
            </div>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// When to use custom Hooks 
function WhenToUseCustomHooksDemo() {
    return (<div className="App-left-aligned-content">
        <p className='App-hilight-color'>You don’t need to extract a custom Hook for every little duplicated bit of code. Some duplication is fine. For example, extracting a useFormInput Hook to wrap a single useState call like earlier is probably unnecessary.</p>
        <p>However, whenever you write an Effect, consider whether it would be clearer to also wrap it in a custom Hook. You shouldn’t need Effects very often, so if you’re writing one, it means that you need to “step outside React” to synchronize with some external system or to do something that React doesn’t have a built-in API for. Wrapping it into a custom Hook lets you precisely communicate your intent and how the data flows through it.</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Custom Hooks help you migrate to better patterns 
function subscribe(callback) {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
    return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
    };
}

function useOnlineStatusMigrate() {
    return useSyncExternalStore(
        subscribe,
        () => navigator.onLine, // How to get the value on the client
        () => true // How to get the value on the server
    );
}

function MigrateStatusBar() {
    const isOnline = useOnlineStatusMigrate();
    return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function MigrateSaveButton() {
    const isOnline = useOnlineStatusMigrate();

    function handleSaveClick() {
        console.log('✅ Progress saved');
    }

    return (
        <button disabled={!isOnline} onClick={handleSaveClick}>
            <h4>Custom Hooks Help Migrate</h4> {isOnline ? 'Save progress' : 'Reconnecting...'}
        </button>
    );
}

function MigrateApp() {
    return (
        <>
            <h4>Custom Hooks Help Migrate</h4>
            <MigrateSaveButton />
            <MigrateStatusBar />
        </>
    );
}

function CustomHooksHelpMigrateDemo() {
    return (<div className="App-left-aligned-content">
        <p>Effects are an “escape hatch”: you use them when you need to “step outside React” and when there is no better built-in solution for your use case. With time, the React team’s goal is to reduce the number of the Effects in your app to the minimum by providing more specific solutions to more specific problems. Wrapping your Effects in custom Hooks makes it easier to upgrade your code when these solutions become available.</p>

        <div className='App-row-center-container App-no-tabbed-content'>
            <div className='App-smallest-box-border-error-color App-small-font-size App-hilight-color'>
                <p className='App-error-color'>In the above example, useOnlineStatus is implemented with a pair of useState and useEffect. However, this isn’t the best possible solution. There is a number of edge cases it doesn’t consider. For example, it assumes that when the component mounts, isOnline is already true, but this may be wrong if the network already went offline. You can use the browser navigator.onLine API to check for that, but using it directly would not work on the server for generating the initial HTML. In short, this code could be improved.</p>
                <hr></hr>
                <ExtractingCustomHookApp />
            </div>

            <div className='App-smallest-box-border-success-color App-medium-font-size App-hilight-color'>
                <p className='App-success-color'>Luckily, React 18 includes a dedicated API called useSyncExternalStore which takes care of all of these problems for you. Here is how your useOnlineStatus Hook, rewritten to take advantage of this new API.</p>
                <hr></hr>
                <MigrateApp />
            </div>
        </div>


        <div>
            <p>This is another reason for why wrapping Effects in custom Hooks is often beneficial:</p>
            <ul>
                <ol>
                    <li>You make the data flow to and from your Effects very explicit. </li>
                    <li>You let your components focus on the intent rather than on the exact implementation of your Effects. </li>
                    <li>When React adds new features, you can remove those Effects without changing any of your components. </li>
                </ol>
            </ul>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// There is more than one way to do it : Demo 1
function Welcome1() {
    const ref = useRef(null);

    useEffect(() => {
        const duration = 1000;
        const node = ref.current;

        let startTime = performance.now();
        let frameId = null;

        function onFrame(now) {
            const timePassed = now - startTime;
            const progress = Math.min(timePassed / duration, 1);
            onProgress(progress);
            if (progress < 1) {
                // We still have more frames to paint
                frameId = requestAnimationFrame(onFrame);
            }
        }

        function onProgress(progress) {
            node.style.opacity = progress;
        }

        function start() {
            onProgress(0);
            startTime = performance.now();
            frameId = requestAnimationFrame(onFrame);
        }

        function stop() {
            cancelAnimationFrame(frameId);
            startTime = null;
            frameId = null;
        }

        start();
        return () => stop();
    }, []);

    return (
        <h1 className="App-welcome" ref={ref}>
            Welcome
        </h1>
    );
}

function Welcome1App() {
    const [show, setShow] = useState(false);
    return (
        <>
            <h1>Demo 1 : Welcome</h1>
            <p className='App-small-box-border'>    const ref = useRef(null);</p>
            <button onClick={() => setShow(!show)}>
                {show ? 'Remove' : 'Show'}
            </button>
            <hr />
            {show && <Welcome1 />}
        </>
    );
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// There is more than one way to do it : Demo 2
function useFadeIn(ref, duration) {
    useEffect(() => {
        const node = ref.current;

        let startTime = performance.now();
        let frameId = null;

        function onFrame(now) {
            const timePassed = now - startTime;
            const progress = Math.min(timePassed / duration, 1);
            onProgress(progress);
            if (progress < 1) {
                // We still have more frames to paint
                frameId = requestAnimationFrame(onFrame);
            }
        }

        function onProgress(progress) {
            node.style.opacity = progress;
        }

        function start() {
            onProgress(0);
            startTime = performance.now();
            frameId = requestAnimationFrame(onFrame);
        }

        function stop() {
            cancelAnimationFrame(frameId);
            startTime = null;
            frameId = null;
        }

        start();
        return () => stop();
    }, [ref, duration]);
}

function WelcomeUseFadeIn() {
    const ref = useRef(null);

    useFadeIn(ref, 1000);

    return (
        <h1 className="App-welcome" ref={ref}>
            Welcome using useFadeIn() function.
        </h1>
    );
}

function WelcomeUseFadeInApp() {
    const [show, setShow] = useState(false);
    return (
        <>
            <h1>Demo 2 : Welcome | useFadeIn()</h1>

            <div className='App-left-aligned-border '>
                <p>To make the component more readable, you might extract the logic into a useFadeIn custom Hook:</p>
                <p className='App-hilight-color'> function useFadeIn(ref, duration) {'{'}......{'}'}</p>
            </div>

            <button onClick={() => setShow(!show)}>
                {show ? 'Remove' : 'Show'}
            </button>
            <hr />
            {show && <WelcomeUseFadeIn />}
        </>
    );
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// There is more than one way to do it : Demo 3
function useAnimationLoop(isRunning, drawFrame) {
    const onFrame = useEffectEvent(drawFrame);

    useEffect(() => {
        if (!isRunning) {
            return;
        }

        const startTime = performance.now();
        let frameId = null;

        function tick(now) {
            const timePassed = now - startTime;
            onFrame(timePassed);
            frameId = requestAnimationFrame(tick);
        }

        tick();
        return () => cancelAnimationFrame(frameId);
    }, [isRunning, onFrame]);
}

function useFadeInUseAnimationLoop(ref, duration) {
    const [isRunning, setIsRunning] = useState(true);

    useAnimationLoop(isRunning, (timePassed) => {
        const progress = Math.min(timePassed / duration, 1);
        ref.current.style.opacity = progress;
        if (progress === 1) {
            setIsRunning(false);
        }
    });
}

function WelcomeUseAnimationLoop() {
    const ref = useRef(null);

    useFadeInUseAnimationLoop(ref, 1000);

    return (
        <h1 className="App-welcome" ref={ref}>
            Welcome using useAnimationLoop() function.
        </h1>
    );
}

function WelcomeUseAnimationLoopApp() {
    const [show, setShow] = useState(false);

    return (
        <>
            <h1>Demo 3 : Welcome | useAnimationLoop()</h1>

            <div className='App-left-aligned-border '>
                <p>You could keep the useFadeIn code as is, but you could also refactor it more. For example, you could extract the logic for setting up the animation loop out of useFadeIn into a custom useAnimationLoop Hook:</p>
                <p className='App-hilight-color'> function useAnimationLoop(ref, duration) {'{'}......{'}'}</p>
            </div>
            <button onClick={() => setShow(!show)}>
                {show ? 'Remove' : 'Show'}
            </button>
            <hr />
            {show && <WelcomeUseAnimationLoop />}
        </>
    );
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// There is more than one way to do it : Demo 4
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
        if (progress === 1) {
            this.stop();
        } else {
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

function useFadeInFadeInAnimationClass(ref, duration) {
    useEffect(() => {
        const animation = new FadeInAnimation(ref.current);
        animation.start(duration);
        return () => {
            animation.stop();
        };
    }, [ref, duration]);
}

function WelcomeFadeInAnimationClass() {
    const ref = useRef(null);

    useFadeInFadeInAnimationClass(ref, 1000);

    return (
        <h1 className="App-welcome" ref={ref}>
            Welcome using FadeInAnimation Class
        </h1>
    );
}

function WelcomeFadeInAnimationClassApp() {
    const [show, setShow] = useState(false);
    return (
        <>
            <h1>Demo 4 : Welcome | FadeInAnimation Class</h1>

            <div className='App-left-aligned-border '>
                <p className='App-hilight-color'> class FadeInAnimation  {'{'}......{'}'}</p>
                <p>However, you didn’t have to do that. As with regular functions, ultimately you decide where to draw the boundaries between different parts of your code. You could also take a very different approach. Instead of keeping the logic in the Effect, you could move most of the imperative logic inside a JavaScript class.</p>
            </div>
            <button onClick={() => setShow(!show)}>
                {show ? 'Remove' : 'Show'}
            </button>
            <hr />
            {show && <WelcomeFadeInAnimationClass />}
        </>
    );
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// There is more than one way to do it : Demo 5
function WelcomeCSS() {
    return (
        <h1 className="App-welcome-animation">
            Welcome using CSS class.
        </h1>
    );
}

function WelcomeCSSApp() {
    const [show, setShow] = useState(false);
    return (
        <>
            <h1>Demo 5 : Welcome | CSS </h1>

            <div className='App-left-aligned-border '>
                <p>Sometimes, you don’t even need a Hook!</p>
                <p>The examples above assume that the fade-in logic needs to be written in JavaScript. However, this particular fade-in animation is both simpler and much more efficient to implement with a plain CSS Animation.</p>
            </div>
            <button onClick={() => setShow(!show)}>
                {show ? 'Remove' : 'Show'}
            </button>
            <hr />
            {show && <WelcomeCSS />}
        </>
    );
}

//--------------------------------------------------------------------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// There is more than one way to do it : Main
function ThereIsMoreThanOneWayDemo() {
    return (<div className="App-left-aligned-content">
        <p>Let’s say you want to implement a fade-in animation from scratch using the browser requestAnimationFrame API. You might start with an Effect that sets up an animation loop. During each frame of the animation, you could change the opacity of the DOM node you hold in a ref until it reaches.</p>
        <Welcome1App />
        <hr></hr>
        <WelcomeUseFadeInApp />
        <hr></hr>
        <WelcomeUseAnimationLoopApp />
        <hr></hr>
        <WelcomeFadeInAnimationClassApp />
        <hr></hr>
        <WelcomeCSSApp />
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
function useCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + 1);
        }, 1000);
        return () => clearInterval(id);
    }, []);

    return count;
}

function Challenge1Counter() {
    const count = useCounter();
    return <h1>Seconds passed: {count}</h1>;
}

function Challenge1ReusingLogicWithCustomHooksDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 5: Extract a useCounter Hook </p>
        <Challenge1Counter />
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 2 of 5: Make the counter delay configurable 
- In this example, there is a delay state variable controlled by a slider, but its value is not used. Pass the delay value to your custom useCounter Hook, and change the useCounter Hook to use the passed delay instead of hardcoding 1000 ms.
*/
function useCounterChallenge2(delay) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + 1);
        }, delay);
        return () => clearInterval(id);
    }, [delay]);

    return count;
}

function Challenge2Counter() {
    const [delay, setDelay] = useState(1000);
    const count = useCounterChallenge2(delay);

    return (
        <>
            <label>
                Tick duration: {delay} ms
                <br />
                <input
                    type="range"
                    value={delay}
                    min="10"
                    max="2000"
                    onChange={e => setDelay(Number(e.target.value))}
                />
            </label>
            <hr />
            <h1>Ticks: {count}</h1>
        </>
    );
}

function Challenge2ReusingLogicWithCustomHooksDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 5: Make the counter delay configurable </p>
        <Challenge2Counter />
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 3 of 5: Extract useInterval out of useCounter 
- Currently, your useCounter Hook does two things. It sets up an interval, and it also increments a state variable on every interval tick. Split out the logic that sets up the interval into a separate Hook called useInterval. It should take two arguments: the onTick callback, and the delay. After this change, your useCounter implementation should look like this
*/
function useIntervalChallenge3(onTick, delay) {
    useEffect(() => {
        const id = setInterval(() => {
            onTick();
        }, delay);
        return () => clearInterval(id);
    }, [delay, onTick]);
}

function useCounterChallenge3(delay) {
    const [count, setCount] = useState(0);

    useIntervalChallenge3(() => {
        setCount(c => c + 1);
    }, delay);

    return count;
}

function useIntervalChallenge3Solution(onTick, delay) {
    useEffect(() => {
        const id = setInterval(onTick, delay);
        return () => clearInterval(id);
    }, [onTick, delay]);
}

function useCounterChallenge3Solution(delay) {
    const [count, setCount] = useState(0);

    useIntervalChallenge3Solution(() => {
        setCount(c => c + 1);
    }, delay);

    return count;
}

function Challenge3Counter() {
    const count = useCounterChallenge3(1000);
    const countSolution = useCounterChallenge3Solution(1000);

    return (<>
        <h4>Seconds passed : {count}</h4>
        <h4>Solution for Seconds passed : {countSolution}</h4>
    </>);
}

function Challenge3ReusingLogicWithCustomHooksDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 5: Extract useInterval out of useCounter </p>
        <Challenge3Counter />
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
function useIntervalChallenge4(callback, delay) {
    const onTick = useEffectEvent(callback);

    useEffect(() => {
        const id = setInterval(onTick, delay);
        return () => clearInterval(id);
    }, [delay, onTick]);
}

function useCounterChallenge4(delay) {
    const [count, setCount] = useState(0);
    useIntervalChallenge4(() => {
        setCount(c => c + 1);
    }, delay);
    return count;
}

function getRandomColor() {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33E8', '#33E8FF'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function Challenge4Counter() {
    const count = useCounter(1000);
    const bgColor = getRandomColor();
    const divStyle = {
        backgroundColor: bgColor
    };

    useIntervalChallenge4(() => {
        bgColor = getRandomColor();
    }, 2000);

    return (<div style={divStyle}>
        <h4>Seconds passed with random background : {count}</h4>
    </div>);
}

function Challenge4ReusingLogicWithCustomHooksDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 5: Fix a resetting interval</p>
        <Challenge4Counter />
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

function useDelayedValue(value, delay) {
    const [delayedValue, setDelayedValue] = useState(value);

    useEffect(() => {
        setTimeout(() => {
            setDelayedValue(value);
        }, delay);
    }, [value, delay]);

    return delayedValue;
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

function Challenge5Canvas() {
    const pos1 = usePointerPosition();
    const pos2 = useDelayedValue(pos1, 100);
    const pos3 = useDelayedValue(pos2, 200);
    const pos4 = useDelayedValue(pos3, 100);
    const pos5 = useDelayedValue(pos3, 50);

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

function Challenge5ReusingLogicWithCustomHooksDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 5 of 5: Implement a staggering movement </p>
        <Challenge5Canvas />
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