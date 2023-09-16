import './App.css';
import { useState } from 'react';
import { useRef } from 'react';

// Main Default For Referencing Values with Refs Demo
export default function ReferencingValuesWithRefsDemo() {
    return (
        <div>
            <h1 className="App-topic">Referencing Values with Refs</h1>
            <p>When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref.</p>

            <h2 className="App-title"> Adding a ref to your component </h2>
            <AddingARefToYourComponentDemo />

            <h2 className="App-title">Example: building a stopwatch </h2>
            <ExampleBuildingAStopwatchDemo />

            <h2 className="App-title">Differences between refs and state </h2>
            <DifferencesBetweenRefsAndStateDemo />

            <h2 className="App-title">When to use refs </h2>
            <WhenToUseRefsDemo />

            <h2 className="App-title">Best practices for refs </h2>
            <BestPracticesForRefsDemo />

            <h2 className="App-title"> Refs and the DOM </h2>
            <RefsAndDOMDemo />

            <h2 className="App-title">Recap</h2>
            <RecapReferencingValuesWithRefsDemo />

            <h2 className="App-title"> Try out some challenges</h2>
            <ChallengesReferencingValuesWithRefsDemo />
        </div>
    );
}

//--------------------------------------------------------------------------------------
// Adding a ref to your component 
function AddingARefToYourComponentCounter() {
    let ref = useRef(0);

    function handleClick() {
        ref.current = ref.current + 1;
        alert('You clicked ' + ref.current + ' times!');
    }

    return (
        <button onClick={handleClick}>
            Click me ! | Using ref | let ref = useRef(0);
        </button>
    );
}

function AddingARefToYourComponentDemo() {
    return (<div className="App-left-aligned-content">
        <p className='App-small-font-size App-hilight-color'>Note that the component doesn’t re-render with every increment. Like state, refs are retained by React between re-renders. However, setting state re-renders a component. Changing a ref does not!</p>
        <AddingARefToYourComponentCounter />
        <ul>
            <li>import {'{ '} useRef  {'}'} from 'react'; | Step 1 :  importing the useRef Hook from React: </li>
            <li>const ref = useRef(0); |  Step 2 : call the useRef Hook and pass the initial value that you want to reference as the only argument</li>
            <li> {'{ '}current: 0 // The value you passed to useRef {'}'} |  Step 3 : useRef returns an object</li>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
// Example: building a stopwatch 
function StopwatchNoRef() {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);

    function handleStart() {
        // Start counting.
        setStartTime(Date.now());
        setNow(Date.now());

        setInterval(() => {
            // Update the current time every 10ms.
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        setStartTime(null);
        setNow(null);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <div className='App-smallest-box-border-error-color'>
            <p className='App-hilight-color App-small-font-size '>When the user presses “Start”, you’ll use setInterval in order to update the time every 10 milliseconds:</p>

            <h4>Time passed: {secondsPassed.toFixed(3)}</h4>
            <button onClick={handleStart}>
                Start
            </button>

            <button onClick={handleStop}>
                Stop
            </button>
        </div>
    );
}

function StopwatchWithRef() {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <div className='App-smallest-box-border-success-color'>
            <p className='App-success-color App-small-font-size '>When the “Stop” button is pressed, you need to cancel the existing interval so that it stops updating the now state variable. You can do this by calling clearInterval, but you need to give it the interval ID that was previously returned by the setInterval call when the user pressed Start. You need to keep the interval ID somewhere. Since the interval ID is not used for rendering, you can keep it in a ref</p>
            <h4>Time passed: {secondsPassed.toFixed(3)}</h4>
            <button onClick={handleStart}>
                Start
            </button>
            <button onClick={handleStop}>
                Stop
            </button>
        </div>
    );
}

function ExampleBuildingAStopwatchDemo() {
    return (<div className="App-left-aligned-content">
        <p>You can combine refs and state in a single component. </p>
        <div className='App-row-center-container '>
            <StopwatchNoRef />
            <StopwatchWithRef />
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Differences between refs and state 
function UseStateCounter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            <p className='App-medium-font-size'>You clicked {count} times </p>
            <p>This is an useState button example.</p>

            <div className='App-left-aligned-content'>
                <p>const [count, setCount] = useState(0);</p>
                <p> function handleClick() {'{'}</p>
                <p className='App-tabbed-content'>    setCount(count + 1);
                </p>
                <p> {'}'}</p>
            </div>
        </button>
    );
}
function UseRefCounter() {
    let countRef = useRef(0);

    function handleClick() {
        // This doesn't re-render the component!
        countRef.current = countRef.current + 1;
    }

    return (
        <button onClick={handleClick}>
            <p className='App-medium-font-size'>You clicked {countRef.current} times</p>
            <p>This is an useRef button example.</p>

            <div className='App-left-aligned-content'>
                <p>let countRef = useRef(0);</p>
                <p> function handleClick() {'{'}</p>
                <p className='App-tabbed-content App-error-color'>// This doesn't re-render the component!</p>
                <p className='App-tabbed-content'>countRef.current = countRef.current + 1; </p>
                <p> {'}'}</p>
            </div>
        </button>
    );
}

function DifferencesBetweenRefsAndStateDemo() {
    return (<div className="App-left-aligned-content">
        <div>
            <table className="App-custom-table">
                <thead>
                    <tr>
                        <th>refs</th>
                        <th>state</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>useRef(initialValue) returns {'{'} current: initialValue {'}'}</td>
                        <td>useState(initialValue) returns the current value of a state variable and a state setter function ( [value, setValue])</td>
                    </tr>
                    <tr>
                        <td>Doesn’t trigger re-render when you change it.</td>
                        <td>Triggers re-render when you change it.</td>
                    </tr>
                    <tr>
                        <td>Mutable—you can modify and update current’s value outside of the rendering process.	</td>
                        <td>“Immutable”—you must use the state setting function to modify state variables to queue a re-render.</td>
                    </tr>
                    <tr>
                        <td>You shouldn’t read (or write) the current value during rendering.	</td>
                        <td>You can read state at any time. However, each render has its own snapshot of state which does not change.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <hr></hr>
        <div className='App-row-container'>
            <UseStateCounter />
            <UseRefCounter />
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// When to use refs 
function WhenToUseRefsDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>Storing timeout IDs</li>
            <li>Storing and manipulating DOM elements, which we cover on the next page</li>
            <li>Storing other objects that aren’t necessary to calculate the JSX.</li>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
// Best practices for refs 
function BestPracticesForRefsDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>
                <p>Treat refs as an escape hatch.
                    <span className='App-small-font-size'>Refs are useful when you work with external systems or browser APIs. If much of your application logic and data flow relies on refs, you might want to rethink your approach.
                    </span>
                </p>
            </li>
            <li>
                <p>Don’t read or write ref.current during rendering.
                    <span className='App-small-font-size'> If some information is needed during rendering, use state instead. Since React doesn’t know when ref.current changes, even reading it while rendering makes your component’s behavior difficult to predict.
                    </span>
                </p>
            </li>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
// Refs and the DOM 
function RefsAndDOMDemo() {
    return (<div className="App-left-aligned-content">
        <p>You can point a ref to any value. However, the most common use case for a ref is to access a DOM element. For example, this is handy if you want to focus an input programmatically. When you pass a ref to a ref attribute in JSX, like <span className='App-hilight-color App-medium-font-size'>{'<'}div ref={'{'}myRef{'}'} {'>'}</span>,  React will put the corresponding DOM element into myRef.current.</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Recap
function RecapReferencingValuesWithRefsDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>Refs are an escape hatch to hold onto values that aren’t used for rendering. You won’t need them often.</li>
            <li>A ref is a plain JavaScript object with a single property called current, which you can read or set.</li>
            <li>You can ask React to give you a ref by calling the useRef Hook.  </li>
            <li>Like state, refs let you retain information between re-renders of a component.  </li>
            <li>Unlike state, setting the ref’s current value does not trigger a re-render.  </li>
            <li>Don’t read or write ref.current during rendering. This makes your component hard to predict.  </li>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
//**************************************************************************************
// Try out some challenges
/*
Challenge 1 of 4: Fix a broken chat input 
- Type a message and click “Send”. You will notice there is a three second delay before you see the “Sent!” alert. During this delay, you can see an “Undo” button. Click it. This “Undo” button is supposed to stop the “Sent!” message from appearing. It does this by calling clearTimeout for the timeout ID saved during handleSend. However, even after “Undo” is clicked, the “Sent!” message still appears. Find why it doesn’t work, and fix it.
*/
function Challenge1Chat() {
    const [text, setText] = useState('');
    const [isSending, setIsSending] = useState(false);
    let timeoutIdRef = useRef(null);

    function handleSend() {
        setIsSending(true);
        timeoutIdRef.current = setTimeout(() => {
            alert('Sent!');
            setIsSending(false);
        }, 3000);
    }

    function handleUndo() {
        setIsSending(false);
        clearTimeout(timeoutIdRef.current);
    }

    return (
        <>
            <input
                disabled={isSending}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button
                disabled={isSending}
                onClick={handleSend}>
                {isSending ? 'Sending...' : 'Send'}
            </button>
            {isSending &&
                <button onClick={handleUndo}>
                    Undo
                </button>
            }
        </>
    );
}

function Challenges1ReferencingValuesWithRefsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 4: Fix a broken chat input </p>
        <Challenge1Chat />
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 2 of 4: Fix a component failing to re-render
-This button is supposed to toggle between showing “On” and “Off”. However, it always shows “Off”. What is wrong with this code? Fix it.
*/
function ToggleBeforeFix() {
    const isOnRef = useRef(false);
    return (
        <div className='App-error-color'>
            <p>This toggle using Ref : Not working !</p>
            <button onClick={() => {
                isOnRef.current = !isOnRef.current;
            }}>
                {isOnRef.current ? 'Ref On' : 'Ref Off'}
            </button>
        </div>
    );
}

function ToggleAfterFix() {
    const [isOn, setIsOn] = useState(false);
    return (
        <div className='App-success-color'>
            <p>This toggle using State : It is working !</p>
            <button onClick={() => {
                // isOnRef.current = !isOnRef.current;
                setIsOn(!isOn);
            }}>
                {isOn ? 'State On' : 'State Off'}
            </button>
        </div>
    );
}

function Challenges2ReferencingValuesWithRefsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 4: Fix a component failing to re-render</p>
        <div className='App-row-container'>
            <ToggleBeforeFix />
            <hr></hr>
            <ToggleAfterFix />
        </div>
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 3 of 4: Fix debouncing 
- In this example, all button click handlers are “debounced”. To see what this means, press one of the buttons. Notice how the message appears a second later. If you press the button while waiting for the message, the timer will reset. So if you keep clicking the same button fast many times, the message won’t appear until a second after you stop clicking. Debouncing lets you delay some action until the user “stops doing things”.
- This example works, but not quite as intended. The buttons are not independent. To see the problem, click one of the buttons, and then immediately click another button. You’d expect that after a delay, you would see both button’s messages. But only the last button’s message shows up. The first button’s message gets lost.
- Why are the buttons interfering with each other? Find and fix the issue.
*/
function Challenge3DebouncedButton({ onClick, children }) {
    const timeoutIdRef = useRef(null);

    return (
        <button onClick={() => {
            clearTimeout(timeoutIdRef.current);
            timeoutIdRef.current = setTimeout(() => {
                onClick();
            }, 1000);
        }}>
            {children}
        </button>
    );
}

function Challenge3Dashboard() {
    return (
        <>
            <Challenge3DebouncedButton
                onClick={() => alert('Spaceship launched!')}
            >
                Launch the spaceship
            </Challenge3DebouncedButton>

            <Challenge3DebouncedButton
                onClick={() => alert('Soup boiled!')}
            >
                Boil the soup
            </Challenge3DebouncedButton>

            <Challenge3DebouncedButton
                onClick={() => alert('Lullaby sung!')}
            >
                Sing a lullaby
            </Challenge3DebouncedButton>

            <Challenge3DebouncedButton
                onClick={() => alert('Successfully, fixing challenge 3!')}
            >
                Challenge 3
            </Challenge3DebouncedButton>
        </>
    )
}

function Challenges3ReferencingValuesWithRefsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 4: Fix debouncing </p>
        <Challenge3Dashboard />
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 4 of 4: Read the latest state 
- In this example, after you press “Send”, there is a small delay before the message is shown. Type “hello”, press Send, and then quickly edit the input again. Despite your edits, the alert would still show “hello” (which was the value of state at the time the button was clicked).
- Usually, this behavior is what you want in an app. However, there may be occasional cases where you want some asynchronous code to read the latest version of some state. Can you think of a way to make the alert show the current input text rather than what it was at the time of the click?
*/
function Challenge4Chat() {
    const [text, setText] = useState('');
    const textRef = useRef(text);

    function handleChange(e) {
        setText(e.target.value);
        textRef.current = e.target.value;
    }

    function handleSend() {
        setTimeout(() => {
            alert('Sending: ' + textRef.current);
        }, 3000);
    }

    return (
        <>
            <input
                value={text}
                onChange={handleChange}
            />
            <button
                onClick={handleSend}>
                Send
            </button>
        </>
    );
}

function Challenges4ReferencingValuesWithRefsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 4: Read the latest state </p>
        <Challenge4Chat />
    </div>);
}

//**************************************************************************************
// Try out some challenges
function ChallengesReferencingValuesWithRefsDemo() {
    return (<div className="App-left-aligned-content">
        <Challenges1ReferencingValuesWithRefsDemo />
        <hr></hr>
        <Challenges2ReferencingValuesWithRefsDemo />
        <hr></hr>
        <Challenges3ReferencingValuesWithRefsDemo />
        <hr></hr>
        <Challenges4ReferencingValuesWithRefsDemo />
    </div>);
}