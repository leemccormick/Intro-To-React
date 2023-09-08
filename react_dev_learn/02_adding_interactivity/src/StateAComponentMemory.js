import './App.css';
import { sculptureList } from './data.js';
import { useState } from 'react';

// Main Default For State: A Component's Memory Demo
export default function StateComponentMemoryDemo() {
    return (
        <div>
            <h1 className="App-topic">State: A Component's Memory</h1>
            <p>Components often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart. Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state.</p>

            <h2 className="App-title">When a regular variable isn’t enough</h2>
            <WhenRegularVariableIsNotEnoughDemo />

            <h2 className="App-title">Adding a state variable</h2>
            <AddingStateVariableDemo />

            <h2 className="App-title">Meet your first Hook</h2>
            <MeetYourFirstHookDemo />

            <h2 className="App-title">Anatomy of useState</h2>
            <AnatomyOfUseStateDemo />

            <h2 className="App-title">Giving a component multiple state variables</h2>
            <GivingComponentMultipleStateVariablesDemo />

            <h2 className="App-title">State is isolated and private</h2>
            <StateIsIsolatedAndPrivateDemo />

            <h2 className="App-title">Recap</h2>
            <StateComponentMemoryRecapDemo />

            <h2 className="App-title">Try out some challenges</h2>
            <StateComponentMemoryChallengesDemo />
        </div>
    );
}

// When a regular variable isn’t enough 
function WhenRegularVariableIsNotEnoughGallery() {
    let index = 0;

    function handleClick() {
        index = index + 1;
    }

    let sculpture = sculptureList[index];

    return (
        <>
            <button onClick={handleClick}>
                Next
            </button>

            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>

            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>

            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />

            <p>
                {sculpture.description}
            </p>
        </>
    );
}

function WhenRegularVariableIsNotEnoughDemo() {
    return (<div className="App-left-aligned-content">
        <WhenRegularVariableIsNotEnoughGallery />

        <div className='App-left-aligned-border'>
            <p className='App-error-color'>Why Not Working ?</p>
            <ul className='App-error-color'>
                <li>Local variables don’t persist between renders.</li>
                <li>Changes to local variables won’t trigger renders.</li>
            </ul>

            <p className='App-success-color'>How To Fix?</p>
            <ul className='App-success-color'>
                <li>Retain the data between renders..</li>
                <li>Trigger React to render the component with new data (re-rendering).</li>
                <li>The useState Hook provides those two things : 1.A state variable  | 2.A state setter function</li>
            </ul>

        </div>
    </div>);
}

// Adding a state variable 
function AddingStateVariableGallery() {
    const [index, setIndex] = useState(0); // let index = 0; --> Not Working 

    function handleClick() {
        // index = index + 1; --> Not Working 
        setIndex(index + 1);
    }

    let sculpture = sculptureList[index];

    return (
        <>
            <button onClick={handleClick}>
                Next
            </button>

            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>

            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>

            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />

            <p>
                {sculpture.description}
            </p>
        </>
    );
}

function AddingStateVariableDemo() {
    return (<div className="App-left-aligned-content">
        <AddingStateVariableGallery />

        <div className='App-left-aligned-border'>
            <p className='App-success-color'>How to adding a state variable ?</p>
            <ul>
                <li>1.import useState from React at the top of the file</li>
                <li>2.const [index, setIndex] = useState(0); | Replace this line on : let index = 0;</li>
                <li>3.setIndex(index + 1); | Use setIndex in handleClick function instead of index = index + 1</li>
            </ul>
        </div>
    </div>);
}

// Meet your first Hook 
function MeetYourFirstHookDemo() {
    return (<div className="App-left-aligned-content">
        <p>Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks. You can’t call Hooks inside conditions, loops, or other nested functions. Hooks are functions, but it’s helpful to think of them as unconditional declarations about your component’s needs. You “use” React features at the top of your component similar to how you “import” modules at the top of your file.</p>
    </div>);
}

// Anatomy of useState 
function AnatomyOfUseStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>The convention is to name this pair like const [something, setSomething]. You could name it anything you like, but conventions make things easier to understand across projects.</p>

        <div className='App-left-aligned-border'>
            <p>useState gives you an array containing two values :</p>
            <ul>
                <li>1.The state variable (index) with the value you stored.</li>
                <li>2.The state setter function (setIndex) which can update the state variable and trigger React to render the component again.</li>
            </ul>
        </div>
    </div>);
}

// Giving a component multiple state variables 
function MultipleStateVariablesGallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        setIndex(index + 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];

    return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>

            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>

            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>

            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>

            {showMore && <p>{sculpture.description}</p>}

            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}

function GivingComponentMultipleStateVariablesDemo() {
    return (<div className="App-left-aligned-content">
        <p>You can have as many state variables of as many types as you like in one component. This component has two state variables, a number index and a boolean showMore that’s toggled when you click “Show details”:</p>
        <MultipleStateVariablesGallery />
    </div>);
}

// State is isolated and private 
function StateIsIsolatedAndPrivateDemo() {
    return (<div className="App-left-aligned-content">
        <p>State is local to a component instance on the screen. In other words, if you render the same component twice, each copy will have completely isolated state! Changing one of them will not affect the other.</p>

        <hr></hr>
        <h2>This is a first gallary : </h2>
        <MultipleStateVariablesGallery />

        <hr></hr>
        <h2>This is a second gallary : </h2>
        <h2 className='App-success-color'>Both are isolated state!</h2>
        <MultipleStateVariablesGallery />
    </div>);
}

// Recap
function StateComponentMemoryRecapDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>
                Use a state variable when a component needs to “remember” some information between renders.
            </li>
            <li>
                State variables are declared by calling the useState Hook.
            </li>
            <li>
                Hooks are special functions that start with use. They let you “hook into” React features like state.
            </li>
            <li>
                Hooks might remind you of imports: they need to be called unconditionally. Calling Hooks, including useState, is only valid at the top level of a component or another Hook.
            </li>
            <li>
                The useState Hook returns a pair of values: the current state and the function to update it.
            </li>
            <li>
                You can have more than one state variable. Internally, React matches them up by their order.
            </li>
            <li>
                State is private to the component. If you render it in two places, each copy gets its own state.
            </li>
        </ul>
    </div>);
}

// Try out some challenges
/*
Challenge 1 of 4: Complete the gallery 
- When you press “Next” on the last sculpture, the code crashes. Fix the logic to prevent the crash. You may do this by adding extra logic to event handler or by disabling the button when the action is not possible.
- After fixing the crash, add a “Previous” button that shows the previous sculpture. It shouldn’t crash on the first sculpture.
*/
function Challenge1CompleteTheGallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        if (index < sculptureList.length - 1) {
            setIndex(index + 1);
        }
    }

    function handlePreviousClick() {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handlePreviousClick}>Previous</button>

            <button onClick={handleNextClick}>Next</button>

            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>

            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>

            <button onClick={handleMoreClick}>
                {showMore ? "Hide" : "Show"} details
            </button>

            {showMore && <p>{sculpture.description}</p>}

            <img src={sculpture.url} alt={sculpture.alt} />
        </>
    );
}

function StateComponentMemoryChallenge1Demo() {
    return (<div className="App-left-aligned-content">
        <h2>Challenge 1 : Complete the gallery</h2>
        <Challenge1CompleteTheGallery />
    </div>);
}

// Try out some challenges
/*
Challenge 2 of 4: Fix stuck form inputs 
- When you type into the input fields, nothing appears. It’s like the input values are “stuck” with empty strings. The value of the first <input> is set to always match the firstName variable, and the value for the second <input> is set to always match the lastName variable. This is correct. Both inputs have onChange event handlers, which try to update the variables based on the latest user input (e.target.value). However, the variables don’t seem to “remember” their values between re-renders. Fix this by using state variables instead.
*/
function Challenge2FixStuckFormInputs() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    function handleReset() {
        setFirstName('');
        setLastName('');
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                placeholder="First name"
                value={firstName}
                onChange={handleFirstNameChange}
            />

            <input
                placeholder="Last name"
                value={lastName}
                onChange={handleLastNameChange}
            />

            <h1>Hi, {firstName} {lastName}</h1>

            <button onClick={handleReset}>Reset</button>
        </form>
    );
}

function StateComponentMemoryChallenge2Demo() {
    return (<div className="App-left-aligned-content">
        <h2>Challenge 2 : Fix stuck form inputs </h2>
        <Challenge2FixStuckFormInputs />
    </div>);
}

// Try out some challenges
/*
Challenge 3 of 4: Fix a crash 
- Here is a small form that is supposed to let the user leave some feedback. When the feedback is submitted, it’s supposed to display a thank-you message. However, it crashes with an error message saying “Rendered fewer hooks than expected”. Can you spot the mistake and fix it?
*/
function Challenge3FixCrashFeedbackForm() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');

    function handleMessageChange(e) {
        setMessage(e.target.value);
    }

    function handleSent() {
        alert(`Sending: "${message}"`);
        setIsSent(true);
    }

    if (isSent) {
        return <h1>Thank you!</h1>;
    } else {
        return (
            <form onSubmit={e => {
                e.preventDefault();
            }}>
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={handleMessageChange}
                />

                <br />
                <button onClick={handleSent} type="submit">Send</button>
            </form>
        );
    }
}

function StateComponentMemoryChallenge3Demo() {
    return (<div className="App-left-aligned-content">
        <h2>Challenge 3 : Fix a crash </h2>
        <Challenge3FixCrashFeedbackForm />
    </div>);
}

// Try out some challenges
/*
Challenge 4 of 4: Remove unnecessary state 
- When the button is clicked, this example should ask for the user’s name and then display an alert greeting them. You tried to use state to keep the name, but for some reason it always shows “Hello, !“.
- To fix this code, remove the unnecessary state variable. (We will discuss about why this didn’t work later.)
- Can you explain why this state variable was unnecessary?
*/
function Challenge4RemoveUnnecessaryStateFeedbackForm() {
    // const [name, setName] = useState(''); --> DO NOT NEED useState

    function handleClick() {
        // setName(prompt('What is your name?'));  --> DO NOT NEED useState
        const name = prompt('What is your name?');
        alert(`Hello, ${name}!`);
    }

    return (
        <button onClick={handleClick}>
            Greet
        </button>
    );
}

function StateComponentMemoryChallenge4Demo() {
    return (<div className="App-left-aligned-content">
        <h2>Challenge 4 : Remove unnecessary state</h2>
        <p>A state variable is only necessary to keep information between re-renders of a component. Within a single event handler, a regular variable will do fine. Don’t introduce state variables when a regular variable works well.</p>
        <Challenge4RemoveUnnecessaryStateFeedbackForm />
    </div>);
}

// Try out some challenges
function StateComponentMemoryChallengesDemo() {
    return (<div className="App-left-aligned-content">
        <StateComponentMemoryChallenge1Demo />
        <hr></hr>

        <StateComponentMemoryChallenge2Demo />
        <hr></hr>

        <StateComponentMemoryChallenge3Demo />
        <hr></hr>

        <StateComponentMemoryChallenge4Demo />
        <hr></hr>
    </div>);
}
