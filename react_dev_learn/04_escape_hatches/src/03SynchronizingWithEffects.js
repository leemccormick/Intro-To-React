import './App.css';
import { useState, useRef, useEffect } from 'react';

// Main Default For Synchronizing with Effects Demo
export default function SynchronizingWithEffectsDemo() {
    return (
        <div>
            <h1 className="App-topic">Synchronizing with Effects</h1>
            <p>Effects let you run some code after rendering so that you can synchronize your component with some system outside of React.</p>

            <h2 className="App-title"> What are Effects and how are they different from events? </h2>
            <WhatEffectsAndHowDifferentFromEventsDemo />

            <h2 className="App-title"> You might not need an Effect </h2>
            <YouMightNotNeedEffectDemo />

            <h2 className="App-title"> How to write an Effect </h2>
            <HowToWriteAnEffectDemo />

            <h2 className="App-title"> Step 1: Declare an Effect </h2>
            <Step1DeclareEffectDemo />

            <h2 className="App-title">Step 2: Specify the Effect dependencies </h2>
            <Step2SpecifyEffectDependenciesDemo />

            <h2 className="App-title"> Step 3: Add cleanup if needed </h2>
            <Step3AddCleanupIfNeededDemo />

            <h2 className="App-title">How to handle the Effect firing twice in development? </h2>
            <HowToHandleTheEffectFiringTwiceInDevelopmentDemo />

            <h2 className="App-title">Controlling non-React widgets </h2>
            <ControllingNonReactWidgetsDemo />

            <h2 className="App-title">Subscribing to events </h2>
            <SubscribingToEventsDemo />

            <h2 className="App-title">Triggering animations </h2>
            <TriggeringAnimationsDemo />

            <h2 className="App-title"> Fetching data </h2>
            <FetchingDataDemo />

            <h2 className="App-title">Sending analytics </h2>
            <SendingAnalyticsDemo />

            <h2 className="App-title">Not an Effect: Initializing the application </h2>
            <NotEffectInitializingApplicationDemo />

            <h2 className="App-title"> Not an Effect: Buying a product </h2>
            <NotEffectBuyingProductDemo />

            <h2 className="App-title">Putting it all together </h2>
            <PuttingItAllTogetherDemo />

            <h2 className="App-title">Recap</h2>
            <RecapSynchronizingWithEffectsDemo />

            <h2 className="App-title"> Try out some challenges</h2>
            <ChallengesSynchronizingWithEffectsDemo />
        </div>
    );
}

//--------------------------------------------------------------------------------------
// What are Effects and how are they different from events? 
function WhatEffectsAndHowDifferentFromEventsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Effects let you specify side effects that are caused by rendering itself, rather than by a particular event. </p>
        <p className='App-small-font-size'>Sending a message in the chat is an event because it is directly caused by the user clicking a specific button. However, setting up a server connection is an Effect because it should happen no matter which interaction caused the component to appear. Effects run at the end of a commit after the screen updates. This is a good time to synchronize the React components with some external system (like network or a third-party library).</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// You might not need an Effect 
function YouMightNotNeedEffectDemo() {
    return (<div className="App-left-aligned-content">
        <p> If your Effect only adjusts some state based on other state, you might not need an Effect.</p>
        <p className='App-small-font-size'>Keep in mind that Effects are typically used to “step out” of your React code and synchronize with some external system. This includes browser APIs, third-party widgets, network, and so on. </p>
    </div>);
}

//--------------------------------------------------------------------------------------
// How to write an Effect 
function HowToWriteAnEffectDemo() {
    return (<div className="App-left-aligned-content">
        <p>To write an Effect, follow these three steps:</p>
        <ul>
            <ol>
                <li>Declare an Effect.</li>
                <li>Specify the Effect dependencies.</li>
                <li> Add cleanup if needed.</li>
            </ol>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
// Step 1: Declare an Effect 
function Step1VideoPlayer({ src, isPlaying }) {
    const ref = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    });

    return <video ref={ref} src={src} loop playsInline />;
}

function Step1VideoPlayerApp() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <>
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <Step1VideoPlayer
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </>
    );
}

function Step1DeclareEffectDemo() {
    return (<div className="App-left-aligned-content">
        <Step1VideoPlayerApp />
        <ul>
            <ol>
                <li>import {'{'} useEffect  {'}'} from 'react'; | To declare an Effect in your component, import the useEffect Hook from React</li>
                <li>Then, call it at the top level of your component and put some code inside your Effect:
                    <div className='App-left-aligned-small-box-border App-small-font-size'>
                        <p> useEffect{'('} () ={'> '} {'{'}  </p>
                        <p className='App-tabbed-content App-success-color'>{'//'} Code here will run after *every* render</p>
                        <p>  {'}'}{')'}; </p>
                    </div>
                </li>
            </ol>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
// Step 2: Specify the Effect dependencies 
function Step2VideoPlayer({ src, isPlaying }) {
    const ref = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            console.log('Calling video.play()');
            ref.current.play();
        } else {
            console.log('Calling video.pause()');
            ref.current.pause();
        }
    }, [isPlaying]);

    return <video ref={ref} src={src} loop playsInline />;
}

function Step2VideoPlayerApp() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <>
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <Step2VideoPlayer
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </>
    );
}

function Step2SpecifyEffectDependenciesDemo() {
    return (<div className="App-left-aligned-content">
        <p>By default, Effects run after every render. Often, this is not what you want:</p>
        <p>The problem is that the code inside of your Effect depends on the isPlaying prop to decide what to do, but this dependency was not explicitly declared. To fix this issue, add isPlaying to the dependency array:</p>
        <Step2VideoPlayerApp />

        <div className='App-left-aligned-border   App-small-font-size'>
            <p> useEffect{'('} () ={'> '} {'{'}  </p>
            <div className='App-tabbed-content'>
                <p>if (isPlaying) {'{'} <span className='App-success-color'>{'//'} It's used here...</span></p>
                <p className='App-tabbed-content'> {'//'}...</p>
                <p> {'}'} else {'{'} </p>
                <p className='App-tabbed-content'> {'//'}...</p>
                <p> {'}'}</p>
            </div>
            <p>  {'}'}, [isPlaying]{')'};  <span className='App-success-color'>{'//'} ...so it must be declared here!</span></p>
        </div>

        <div className='App-left-aligned-border   App-small-font-size'>
            <h4>The behaviors without the dependency array and with an empty [] dependency array are different:</h4>
            <hr></hr>
            <p> useEffect{'('} () ={'> '} {'{'}  </p>
            <p className='App-tabbed-content App-success-color App-super-small-font-size '>{'//'} This runs after every render </p>
            <p className='App-hilight-color'>  {'}'}{')'};</p>
            <hr></hr>

            <p> useEffect{'('} () ={'> '} {'{'}  </p>
            <p className='App-tabbed-content App-success-color App-super-small-font-size '>{'//'}  This runs only on mount (when the component appears) </p>
            <p className='App-hilight-color'>  {'}'}, []{')'};</p>
            <hr></hr>

            <p> useEffect{'('} () ={'> '} {'{'}  </p>
            <p className='App-tabbed-content App-success-color App-super-small-font-size '>{'//'} This runs on mount *and also* if either a or b have changed since the last render </p>
            <p className='App-hilight-color'>  {'}'}, [a, b]{')'};</p>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Step 3: Add cleanup if needed 
function createConnectionStep3() {
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

function Step3ChatRoom() {
    useEffect(() => {
        const connection = createConnectionStep3();
        connection.connect();
        return () => connection.disconnect();
    }, []);

    return <h1>Welcome to the chat!</h1>;
}

function Step3AddCleanupIfNeededDemo() {
    return (<div className="App-left-aligned-content">
        <p>Consider a different example. You’re writing a ChatRoom component that needs to connect to the chat server when it appears. You are given a createConnection() API that returns an object with connect() and disconnect() methods.</p>
        <Step3ChatRoom />

        <div className='App-left-aligned-border'>
            <p>Seeing the "✅ Connecting..." log twice helps you notice the real issue: your code doesn’t close the connection when the component unmounts.</p>
            <p>To fix the issue, return a cleanup function from your Effect:</p>

            <div className='App-left-aligned-small-box-border App-tabbed-content  App-super-small-font-size '>
                <p> useEffect{'('} () ={'> '} {'{'}  </p>
                <div className='App-tabbed-content '>
                    <p>const connection = createConnection();</p>
                    <p>connection.connect();</p>
                    <div className='App-success-color '>
                        <p>return () ={'> '} {'{'} </p>
                        <p className='App-tabbed-content'>connection.disconnect();</p>
                        <p>{'}'}</p>
                    </div>
                </div>
                <p>  {'}'}{')'};</p>
            </div>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// How to handle the Effect firing twice in development? 
function HowToHandleTheEffectFiringTwiceInDevelopmentDemo() {
    return (<div className="App-left-aligned-content">
        <p>Usually, the answer is to implement the cleanup function.  The cleanup function should stop or undo whatever the Effect was doing. The rule of thumb is that the user shouldn’t be able to distinguish between the Effect running once (as in production) and a setup → cleanup → setup sequence (as you’d see in development).</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Controlling non-React widgets 
function ControllingNonReactWidgetsDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-container'>
            <div className='App-left-aligned-small-box-border App-tabbed-content  App-super-small-font-size '>
                <p className='App-hilight-color'>Sometimes you need to add UI widgets that aren’t written to React.</p>
                <hr></hr>
                <p> useEffect{'('} () ={'> '} {'{'}  </p>
                <div className='App-tabbed-content '>
                    <p>const map = mapRef.current;</p>
                    <p>map.setZoomLevel(zoomLevel);</p>
                </div>
                <p>  {'}'}, [zoomLevel]{')'};</p>
                <hr></hr>
                <p className='App-hilight-color'>Note that there is no cleanup needed in this case. In development, React will call the Effect twice, but this is not a problem because calling setZoomLevel twice with the same value does not do anything.</p>
            </div>

            <div className='App-left-aligned-small-box-border App-tabbed-content  App-super-small-font-size '>
                <p className='App-hilight-color'>Some APIs may not allow you to call them twice in a row. For example, the showModal method of the built-in dialog element throws if you call it twice. Implement the cleanup function and make it close the dialog.</p>
                <hr></hr>
                <p> useEffect{'('} () ={'> '} {'{'}  </p>
                <div className='App-tabbed-content '>
                    <p>const dialog = dialogRef.current;</p>
                    <p>  dialog.showModal();</p>
                    <p className='App-hilight-color'>  return () ={'> '}  dialog.close();</p>
                </div>
                <p>  {'}'}, [ ]{')'};</p>
            </div>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Subscribing to events 
function SubscribingToEventsDemo() {
    return (<div className="App-left-aligned-content">
        <p>If your Effect subscribes to something, the cleanup function should unsubscribe:</p>
        <div className='App-left-aligned-border App-tabbed-content  App-super-small-font-size '>
            <p> useEffect{'('} () ={'> '} {'{'}  </p>
            <div className='App-tabbed-content '>
                <p>  function handleScroll(e) {'{'} </p>
                <p className='App-tabbed-content'>  console.log(window.scrollX, window.scrollY);</p>
                <p>{'}'} </p>
                <p>  window.addEventListener('scroll', handleScroll);</p>
                <p className='App-hilight-color'>  return () ={'> '} window.removeEventListener('scroll', handleScroll);</p>
            </div>
            <p>  {'}'}, [ ]{')'};</p>
        </div>
        <p>In development, your Effect will call addEventListener(), then immediately removeEventListener(), and then addEventListener() again with the same handler. </p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Triggering animations 
function TriggeringAnimationsDemo() {
    return (<div className="App-left-aligned-content">
        <p>If your Effect animates something in, the cleanup function should reset the animation to the initial values:</p>
        <div className='App-left-aligned-border App-tabbed-content  App-super-small-font-size '>
            <p> useEffect{'('} () ={'> '} {'{'}  </p>
            <div className='App-tabbed-content '>
                <p>   const node = ref.current; </p>
                <p>  node.style.opacity = 1; // Trigger the animation</p>

                <p className='App-hilight-color'>  return () ={'> '} {'{'}  </p>
                <p className='App-hilight-color  App-tabbed-content '>    node.style.opacity = 0; // Reset to the initial value </p>
                <p className='App-hilight-color'>  {'}'} ;</p>
            </div>
            <p>  {'}'}, [ ]{')'};</p>
        </div>
        <p>In development, opacity will be set to 1, then to 0, and then to 1 again. This should have the same user-visible behavior as setting it to 1 directly, which is what would happen in production. If you use a third-party animation library with support for tweening, your cleanup function should reset the timeline to its initial state.</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Fetching data 
function FetchingDataDemo() {
    return (<div className="App-left-aligned-content">
        <div className="App-row-container">
            <div>
                <p>If your Effect fetches something, </p>
                <p>the cleanup function should either abort the fetch or ignore its result.</p>
                <div className='App-left-aligned-content App-super-small-font-size'>
                    <h4 >In development,</h4>
                    <p> you will see two fetches in the Network tab. There is nothing wrong with that.  </p>
                    <p>  With the approach above, the first Effect will immediately get cleaned up so its copy of the ignore variable will be set to true. </p>
                    <p>So even though there is an extra request, it won’t affect the state thanks to the if (!ignore) check.</p>

                    <h4>In production, </h4>
                    <p>there will only be one request. If the second request in development is bothering you,</p>
                    <p>the best approach is to use a solution that deduplicates requests and caches their responses between components:</p>
                </div>
            </div>

            <div className='App-left-aligned-small-box-border  App-tabbed-content  App-super-small-font-size '>
                <p> useEffect{'('} () ={'> '} {'{'}  </p>
                <div className='App-tabbed-content '>
                    <p className='App-hilight-color'> let ignore = false; </p>
                    <p>    async function startFetching() {'{'}  </p>
                    <div className='App-tabbed-content '>
                        <p> const json = await fetchTodos(userId);</p>
                        <p className='App-hilight-color'>if (!ignore) {'{'}  </p>
                        <p className='App-tabbed-content '>  setTodos(json);</p>
                        <p> {'}'}</p>
                    </div>
                    <p> {'}'}</p>
                    <p>  startFetching();</p>
                    <p className='App-hilight-color'>  return () ={'> '} {'{'}  </p>
                    <p className='App-hilight-color  App-tabbed-content '>       ignore = true;</p>
                    <p className='App-hilight-color'>  {'}'} ;</p>
                </div>
                <p>  {'}'}, [userId]{')'};</p>
            </div>
        </div>
        <hr></hr>
        <p>Writing fetch calls inside Effects is a popular way to fetch data, especially in fully client-side apps. This is, however, a very manual approach and it has significant downsides:</p>
        <ul>
            <li>Effects don’t run on the server. </li>
            <li>Fetching directly in Effects makes it easy to create “network waterfalls”.</li>
            <li>Fetching directly in Effects usually means you don’t preload or cache data.</li>
            <li>It’s not very ergonomic. </li>
            <li>If you use a framework, use its built-in data fetching mechanism. </li>
            <li>Otherwise, consider using or building a client-side cache. Popular open source solutions include React Query, useSWR, and React Router 6.4+. </li>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
// Sending analytics 
function SendingAnalyticsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Consider this code that sends an analytics event on the page visit:</p>

        <div className='App-row-container App-super-small-font-size'>
            <div className='App-left-aligned-small-box-border  App-tabbed-content  App-super-small-font-size '>
                <p> useEffect{'('} () ={'> '} {'{'}  </p>
                <div className='App-tabbed-content '>
                    <p className='App-hilight-color'>   logVisit(url); // Sends a POST request</p>
                </div>
                <p>  {'}'}, [url]{')'};</p>
            </div>

            <ul>
                <li>In development, logVisit will be called twice for every URL, so you might be tempted to try to fix that. We recommend keeping this code as is. </li>
                <li>In production, there will be no duplicate visit logs.</li>
            </ul>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Not an Effect: Initializing the application 
function NotEffectInitializingApplicationDemo() {
    return (<div className="App-left-aligned-content">
        <p>Some logic should only run once when the application starts. You can put it outside your components:</p>
        <div className='App-left-aligned-border  App-tabbed-content  App-super-small-font-size '>
            <p>if (typeof window !== 'undefined') {'{'} {'//'} Check if we're running in the browser.</p>
            <p className='App-tabbed-content '>   checkAuthToken();</p>
            <p className='App-tabbed-content '>   loadDataFromLocalStorage();</p>
            <p>  {'}'} </p>

            <p> function App() {'{'}  </p>
            <p className='App-tabbed-content '>{'//'}.... </p>
            <p>  {'}'} </p>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Not an Effect: Buying a product 
function NotEffectBuyingProductDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-center-container'>
            <div className='App-smallest-box-border-error-color App-tabbed-content  App-super-small-font-size '>
                <p className='App-hilight-color'>Sometimes, even if you write a cleanup function, there’s no way to prevent user-visible consequences of running the Effect twice. For example, maybe your Effect sends a POST request like buying a product:</p>
                <hr></hr>
                <p> useEffect{'('} () ={'> '} {'{'}  </p>
                <div className='App-tabbed-content '>
                    <p> {'//'} 🔴 Wrong: This Effect fires twice in development, exposing a problem in the code.</p>
                    <p>  fetch('/api/buy', {'{'} method: 'POST'{'}'});</p>
                </div>
                <p>  {'}'}, [ ]{')'};</p>
                <hr></hr>
                <p className='App-error-color'>You wouldn’t want to buy the product twice. However, this is also why you shouldn’t put this logic in an Effect. What if the user goes to another page and then presses Back? Your Effect would run again</p>
            </div>

            <div className='App-smallest-box-border-success-color App-tabbed-content  App-super-small-font-size '>
                <p className='App-hilight-color'>Buying is not caused by rendering; it’s caused by a specific interaction. It should run only when the user presses the button. Delete the Effect and move your /api/buy request into the Buy button event handler:</p>
                <hr></hr>
                <p>  function handleClick() {'{'}  </p>
                <div className='App-tabbed-content '>
                    <p>   {'//'}✅ Buying is an event because it is caused by a particular interaction.</p>
                    <p>  fetch('/api/buy', {'{'} method: 'POST'{'}'});</p>
                </div>
                <p>  {'}'}, [ ]{')'};</p>
            </div>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Putting it all together 
function Playground() {
    const [text, setText] = useState('a');

    useEffect(() => {
        function onTimeout() {
            console.log('⏰ ' + text);
        }

        console.log('🔵 Schedule "' + text + '" log');
        const timeoutId = setTimeout(onTimeout, 3000);

        return () => {
            console.log('🟡 Cancel "' + text + '" log');
            clearTimeout(timeoutId);
        };
    }, [text]);

    return (
        <>
            <label>
                What to log:{' '}
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </label>
            <h1>{text}</h1>
        </>
    );
}

function PlaygroundApp() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(!show)}>
                {show ? 'Unmount' : 'Mount'} the component
            </button>
            {show && <hr />}
            {show && <Playground />}
        </>
    );
}

function PuttingItAllTogetherDemo() {
    return (<div className="App-left-aligned-content">
        <p>This playground can help you “get a feel” for how Effects work in practice.</p>
        <PlaygroundApp />
    </div>);
}

//--------------------------------------------------------------------------------------
// Recap
function RecapSynchronizingWithEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>Unlike events, Effects are caused by rendering itself rather than a particular interaction.</li>
            <li>Effects let you synchronize a component with some external system (third-party API, network, etc).</li>
            <li>By default, Effects run after every render (including the initial one).</li>
            <li>React will skip the Effect if all of its dependencies have the same values as during the last render.</li>
            <li>You can’t “choose” your dependencies. They are determined by the code inside the Effect.</li>
            <li>Empty dependency array ([]) corresponds to the component “mounting”, i.e. being added to the screen.</li>
            <li>In Strict Mode, React mounts components twice (in development only!) to stress-test your Effects.</li>
            <li>If your Effect breaks because of remounting, you need to implement a cleanup function.</li>
            <li>React will call your cleanup function before the Effect runs next time, and during the unmount.</li>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
//**************************************************************************************
// Try out some challenges
/*
Challenge 1 of 4: Focus a field on mount 
- In this example, the form renders a <MyInput /> component.
- Use the input’s focus() method to make MyInput automatically focus when it appears on the screen. There is already a commented out implementation, but it doesn’t quite work. Figure out why it doesn’t work, and fix it. (If you’re familiar with the autoFocus attribute, pretend that it does not exist: we are reimplementing the same functionality from scratch.)
*/
function Challenge1MyInput({ value, onChange }) {
    const ref = useRef(null);

    useEffect(() => {
        ref.current.focus()
    }, []);

    return (
        <input
            ref={ref}
            value={value}
            onChange={onChange}
        />
    );
}

function Challenge1Form() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('Taylor');
    const [upper, setUpper] = useState(false);
    return (
        <>
            <button onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'} form</button>
            <br />
            <hr />
            {show && (
                <>
                    <label>
                        Enter your name:
                        <Challenge1MyInput
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={upper}
                            onChange={e => setUpper(e.target.checked)}
                        />
                        Make it uppercase
                    </label>
                    <p>Hello, <b>{upper ? name.toUpperCase() : name}</b></p>
                </>
            )}
        </>
    );
}

function Challenges1SynchronizingWithEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 4: Focus a field on mount</p>
        <Challenge1Form />
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 2 of 4: Focus a field conditionally 
- This form renders two <MyInput /> components.
- Press “Show form” and notice that the second field automatically gets focused. This is because both of the <MyInput /> components try to focus the field inside. When you call focus() for two input fields in a row, the last one always “wins”.
- Let’s say you want to focus the first field. The first MyInput component now receives a boolean shouldFocus prop set to true. Change the logic so that focus() is only called if the shouldFocus prop received by MyInput is true.
*/
function Challenge2MyInput({ shouldFocus, value, onChange }) {
    const ref = useRef(null);

    useEffect(() => {
        if (shouldFocus) {
            ref.current.focus();
        }
    }, [shouldFocus]);

    return (
        <input
            ref={ref}
            value={value}
            onChange={onChange}
        />
    );
}

function Challenge2Form() {
    const [show, setShow] = useState(false);
    const [firstName, setFirstName] = useState('Taylor');
    const [lastName, setLastName] = useState('Swift');
    const [upper, setUpper] = useState(false);
    const name = firstName + ' ' + lastName;
    return (
        <>
            <button onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'} form</button>
            <br />
            <hr />
            {show && (
                <>
                    <label>
                        Enter your first name:
                        <Challenge2MyInput
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            shouldFocus={true}
                        />
                    </label>
                    <br></br>
                    <label>
                        Enter your last name:
                        <Challenge2MyInput
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            shouldFocus={false}
                        />
                    </label>
                    <p>Hello, <b>{upper ? name.toUpperCase() : name}</b></p>

                    <button onClick={() => setUpper(!upper)}>{upper ? 'Set Lowercase' : 'Set Uppercase'} form</button>

                </>
            )}
        </>
    );
}

function Challenges2SynchronizingWithEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 4: Focus a field conditionally </p>
        <Challenge2Form />
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 3 of 4: Fix an interval that fires twice 
- This Counter component displays a counter that should increment every second. On mount, it calls setInterval. This causes onTick to run every second. The onTick function increments the counter.
- However, instead of incrementing once per second, it increments twice. Why is that? Find the cause of the bug and fix it.
*/
function Challenge3Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        function onTick() {
            setCount(c => c + 1);
        }

        const intervalId = setInterval(onTick, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return <h1>{count}</h1>;
}

function Challenge3Form() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'} counter</button>
            <br />
            <hr />
            {show && <Challenge3Counter />}
        </>
    );
}

function Challenges3SynchronizingWithEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 4: Fix an interval that fires twice </p>
        <Challenge3Form />
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 4 of 4: Fix fetching inside an Effect 
- This component shows the biography for the selected person. It loads the biography by calling an asynchronous function fetchBio(person) on mount and whenever person changes. That asynchronous function returns a Promise which eventually resolves to a string. When fetching is done, it calls setBio to display that string under the select box.
*/
async function fetchBioChallenge4(person) {
    const delay = person === 'Bob' ? 2000 : 200;
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('This is ' + person + '’s bio.');
        }, delay);
    })
}

function Challenge4Page() {
    const [person, setPerson] = useState('Alice');
    const [bio, setBio] = useState(null);

    useEffect(() => {
        let ignore = false;

        setBio(null);

        fetchBioChallenge4(person).then(result => {
            if (!ignore) {
                setBio(result);
            }
        });

        return () => {
            ignore = true;
        };
    }, [person]);

    return (
        <>
            <select value={person} onChange={e => {
                setPerson(e.target.value);
            }}>
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
                <option value="Taylor">Taylor</option>
            </select>
            <hr />
            <p><i>{bio ?? 'Loading...'}</i></p>
        </>
    );
}

function Challenges4SynchronizingWithEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 4: Fix fetching inside an Effect </p>
        <Challenge4Page />
    </div>);
}

//**************************************************************************************
// Try out some challenges
function ChallengesSynchronizingWithEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <Challenges1SynchronizingWithEffectsDemo />
        <hr></hr>
        <Challenges2SynchronizingWithEffectsDemo />
        <hr></hr>
        <Challenges3SynchronizingWithEffectsDemo />
        <hr></hr>
        <Challenges4SynchronizingWithEffectsDemo />
    </div>);
}