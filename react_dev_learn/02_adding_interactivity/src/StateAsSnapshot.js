import './App.css';
import { useState } from 'react';
import { ImageWithTitle } from './Image'

// Main Default For State as a Snapshot Demo
export default function StateAsSnapshotDemo() {
    return (
        <div>
            <h1 className="App-topic">State as a Snapshot</h1>
            <p>State variables might look like regular JavaScript variables that you can read and write to. However, state behaves more like a snapshot. Setting it does not change the state variable you already have, but instead triggers a re-render.</p>

            <h2 className="App-title">Setting state triggers renders</h2>
            <SettingStateTriggersRendersDemo />

            <h2 className="App-title">Rendering takes a snapshot in time</h2>
            <RenderingTakesSnapshotInTimeDemo />

            <h2 className="App-title">State over time</h2>
            <StateOverTimeDemo />

            <h2 className="App-title">Recap</h2>
            <StateAsSnapshotRecapDemo />

            <h2 className="App-title">Try out some challenges</h2>
            <StateAsSnapshotTryOutSomeChallengesDemo />
        </div>
    );
}

// Setting state triggers renders 
function SettingStateTriggersRendersForm() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('Hi!');

    if (isSent) {
        return <h1>Your message is on its way!</h1>
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setIsSent(true);
            settingStateTriggersRenderSendMessageFunction(message);
        }}>
            <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />

            <button type="submit">Send</button>
        </form>
    );
}

function settingStateTriggersRenderSendMessageFunction(message) {
    console.log("Message is " + message);
}

function SettingStateTriggersRendersDemo() {
    return (<div className="App-left-aligned-content">
        <p>In this example, when you press “send”, setIsSent(true) tells React to re-render the UI</p>
        <SettingStateTriggersRendersForm />

        <div className='App-left-aligned-border'>
            <ul className='App-no-bullet-ul'>
                <li className='App-hilight-color '>Here’s what happens : </li>
                <li>
                    1. The onSubmit event handler executes.
                </li>
                <li>
                    2. setIsSent(true) sets isSent to true and queues a new render.
                </li>
                <li>
                    3. React re-renders the component according to the new isSent value.
                </li>
            </ul>
        </div>
    </div>);
}

// Rendering takes a snapshot in time 
function RenderingTakesSnapshotInTimeCounterNumberPlusOne() {
    const [number, setNumber] = useState(0);

    return (
        <div className="App-left-aligned-content">
            <h1>{number}</h1>
            <p className='App-small-font-size'>onClick() function | Call this line 3 times : </p>
            <h5>setNumber(number + 1);</h5>
            <button onClick={() => {
                setNumber(number + 1);
                setNumber(number + 1);
                setNumber(number + 1);
            }}>+3</button>
        </div>
    )
}

function RenderingTakesSnapshotInTimeCounterZeroPlusOne() {
    const [number, setNumber] = useState(0);

    return (
        <div className="App-left-aligned-content">
            <h1>{number}</h1>
            <p className='App-small-font-size'>onClick() function | Call this line 3 times : </p>
            <h5>  setNumber(0 + 1);</h5>
            <button onClick={() => {
                setNumber(0 + 1);
                setNumber(0 + 1);
                setNumber(0 + 1);
            }}>+3</button>
        </div>
    )
}

function RenderingTakesSnapshotInTimeCounterOnePlusOne() {
    const [number, setNumber] = useState(0);

    return (
        <div className="App-left-aligned-content">
            <h1>{number}</h1>
            <p className='App-small-font-size'>onClick() function | Call this line 3 times : </p>
            <h5>  setNumber(1 + 1);</h5>
            <button onClick={() => {
                setNumber(1 + 1);
                setNumber(1 + 1);
                setNumber(1 + 1);
            }}>+3</button>
        </div>
    )
}

function RenderingTakesSnapshotInTimeDemo() {
    return (<div className="App-left-aligned-content">
        <p>When React re-renders a component : </p>

        <div className='App-row-container '>
            <ImageWithTitle url={'https://react.dev/images/docs/illustrations/i_render1.png'}
                title={'React excuting the function'}
            />
            <hr></hr>

            <ImageWithTitle url={'https://react.dev/images/docs/illustrations/i_render2.png'}
                title={'Calculating the snapshot'}
            />
            <hr></hr>

            <ImageWithTitle url={'https://react.dev/images/docs/illustrations/i_render3.png'}
                title={'Updating the DOM tree'}
            />
        </div>

        <p> State actually “lives” in React itself—as if on a shelf!—outside of your function. When React calls your component, it gives you a snapshot of the state for that particular render. Your component returns a snapshot of the UI with a fresh set of props and event handlers in its JSX, all calculated using the state values from that render!</p>

        <div className='App-row-container '>
            <ImageWithTitle url={'https://react.dev/images/docs/illustrations/i_state-snapshot1.png'}
                title={'1.Tell React to update state'}
            />
            <hr></hr>

            <ImageWithTitle url={'https://react.dev/images/docs/illustrations/i_state-snapshot2.png'}
                title={'2.React updates the state value'}
            />
            <hr></hr>
            <ImageWithTitle url={'https://react.dev/images/docs/illustrations/i_state-snapshot3.png'}
                title={'3.React passes a snapshot of the state value into the component'}
            />
        </div>

        <hr></hr>

        <div className='App-row-container '>
            <RenderingTakesSnapshotInTimeCounterNumberPlusOne />
            <hr></hr>
            <RenderingTakesSnapshotInTimeCounterZeroPlusOne />
            <hr></hr>
            <RenderingTakesSnapshotInTimeCounterOnePlusOne />
        </div>
    </div>);
}

// State over time 
function StateOverTimeCounter() {
    const [number, setNumber] = useState(0);

    return (
        <div className="App-left-aligned-content">
            <h1>{number}</h1>
            <p className='App-small-font-size'>onClick() function | Call this line only once : </p>
            <h5> setNumber(number + 5);</h5>

            <button onClick={() => {
                setNumber(number + 5);
                alert(number);
            }}>+5</button>
        </div>
    )
}

function StateOverTimeCounterWithAlertDelay3Seconds() {
    const [number, setNumber] = useState(0);

    return (
        <div className="App-left-aligned-content">
            <h1>{number}</h1>
            <p className='App-small-font-size'>onClick() function | Call this line only once : </p>
            <h5> setNumber(number + 5);</h5>
            <h5> setTimeout() for 3 seconds</h5>

            <button onClick={() => {
                setNumber(number + 5);
                setTimeout(() => {
                    alert(number);
                }, 3000);
            }}>+5</button>
        </div>
    )
}

function StateOverTimeForm() {
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('Hello');

    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`);
        }, 5000);
    }

    return (
        <div className="App-left-aligned-content">
            <form onSubmit={handleSubmit}>
                <label>
                    To:{' '}
                    <select
                        value={to}
                        onChange={e => setTo(e.target.value)}>
                        <option value="Alice">Alice</option>
                        <option value="Bob">Bob</option>
                    </select>
                </label>

                <div>
                    <textarea
                        placeholder="Message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                </div>

                <button type="submit">Send</button>
            </form>

            <p className='App-hilight-color'>React keeps the state values “fixed” within one render’s event handlers. You don’t need to worry whether the state has changed while the code is running.</p>
        </div>
    );
}

function StateOverTimeDemo() {
    return (<div className="App-left-aligned-content">
        <p>A state variable’s value never changes within a render, even if its event handler’s code is asynchronous. Inside that render’s onClick, the value of number continues to be 0 even after setNumber(number + 5) was called. Its value was “fixed” when React “took the snapshot” of the UI by calling your component.</p>

        <div className='App-row-container '>
            <StateOverTimeCounter />
            <hr></hr>

            <StateOverTimeCounterWithAlertDelay3Seconds />
            <hr></hr>

            <StateOverTimeForm />
        </div>
    </div>);
}

// Recap
function StateAsSnapshotRecapDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>
                Setting state requests a new render.
            </li>
            <li>
                React stores state outside of your component, as if on a shelf.
            </li>
            <li>
                When you call useState, React gives you a snapshot of the state for that render.
            </li>
            <li>
                Variables and event handlers don’t “survive” re-renders. Every render has its own event handlers.
            </li>
            <li>
                Every render (and functions inside it) will always “see” the snapshot of the state that React gave to that render.
            </li>
            <li>
                You can mentally substitute state in event handlers, similarly to how you think about the rendered JSX.
            </li>
            <li>
                Event handlers created in the past have the state values from the render in which they were created.
            </li>
        </ul>
    </div>);
}

// Try out some challenges
/*
Challenge 1 of 1: Implement a traffic light 
- Here is a crosswalk light component that toggles when the button is pressed
- Add an alert to the click handler. When the light is green and says “Walk”, clicking the button should say “Stop is next”. When the light is red and says “Stop”, clicking the button should say “Walk is next”.
- Does it make a difference whether you put the alert before or after the setWalk call?
*/
function ImplementTrafficLightChallenge() {
    const [walk, setWalk] = useState(true);

    function handleClick() {
        setWalk(!walk);
        // This is a short version using ternary
        alert(walk ? "Stop is next" : "Walk is next")

        // This is a longer if else 
        /*
        if (walk) {
            alert("Stop is next");
        } else {
            alert("Walk is next");
        }
        */
    }

    return (
        <>
            <button onClick={handleClick}>
                Change to {walk ? 'Stop' : 'Walk'}
            </button>

            <h1 style={{
                color: walk ? 'darkgreen' : 'darkred'
            }}>
                {walk ? 'Walk' : 'Stop'}
            </h1>
        </>
    );
}

function StateAsSnapshotTryOutSomeChallengesDemo() {
    return (<div className="App-left-aligned-content">
        <ImplementTrafficLightChallenge />
    </div>);
}