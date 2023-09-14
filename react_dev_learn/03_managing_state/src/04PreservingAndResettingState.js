import './App.css';
import React from 'react';
import { useState } from 'react';

// Main Default For Preserving and Resetting State Demo
export default function PreservingAndResettingStateDemo() {
    return (
        <div>
            <hr></hr>
            <p>State is isolated between components. React keeps track of which state belongs to which component based on their place in the UI tree. You can control when to preserve state and when to reset it between re-renders.</p>

            <h2 className="App-title">The UI tree </h2>
            <TheUITreeDemo />

            <h2 className="App-title">State is tied to a position in the tree </h2>
            <StateIsTiedToPositionInTheTreeDemo />

            <h2 className="App-title">Same component at the same position preserves state </h2>
            <SameComponentAtTheSamePositionPreservesStateDemo />

            <h2 className="App-title"> Different components at the same position reset state </h2>
            <DifferentComponentsAtTheSamePositionResetStateDemo />

            <h2 className="App-title">Resetting state at the same position </h2>
            <ResettingStateAtTheSamePositionDemo />

            <h2 className="App-title">Option 1: Rendering a component in different positions </h2>
            <Option1RenderingDemo />

            <h2 className="App-title">Option 2: Resetting state with a key </h2>
            <Option2ResettingStateDemo />

            <h2 className="App-title">Resetting a form with a key </h2>
            <ResettingFormWithKeyDemo />

            <h2 className="App-title"> Recap </h2>
            <RecapPreservingAndResettingStateDemo />

            <h2 className="App-title">Try out some challenges </h2>
            <ChallengesPreservingAndResettingStateDemo />
        </div>
    );
}

// The UI tree 
function TheUITreeDemo() {
    return (<div className="App-left-aligned-content">
        <p>React also uses tree structures to manage and model the UI you make. React makes UI trees from your JSX. Then React DOM updates the browser DOM elements to match that UI tree. </p>
        <img
            src='https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpreserving_state_dom_tree.png&w=1080&q=75'
            alt="UI Tree"
        />
    </div>);
}

// State is tied to a position in the tree 
function StateIsTiedToPositionInTheTreeCounter() {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'App-counter';
    if (hover) {
        className = 'App-hover';
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add one
            </button>
        </div>
    );
}

function StateIsTiedToPositionInTheTreeCounterApp() {
    const counter = <StateIsTiedToPositionInTheTreeCounter />;

    return (
        <div className='App-row-container'>
            {counter}
            <hr></hr>
            {counter}
            <hr></hr>

            <div className='App-small-box-border '>
                <p>Here, there is only one Counter JSX tag, but it’s rendered at two different positions:</p>
                <img className='App-img-small'
                    src='https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpreserving_state_tree.png&w=640&q=75'
                    alt="React tree"
                />
                <p className='App-small-font-size'>React tree</p>
            </div>
        </div>
    );
}

function StateIsTiedToPositionInTheTreeCounterDeleteApp() {
    const [showB, setShowB] = useState(true);

    return (
        <div>
            <div className='App-left-aligned-border'>
                <div className='App-row-container'>
                    <div>
                        <img className='App-img-medium'
                            src='https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpreserving_state_remove_component.png&w=640&q=75'
                            alt="Deleting a component"
                        />
                        <p className='App-small-font-size'>Deleting a component when showB is false</p>
                    </div>

                    <div>
                        <img className='App-img-medium'
                            src='https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpreserving_state_add_component.png&w=640&q=75'
                            alt="Adding a component"
                        />
                        <p className='App-small-font-size'>Adding a component a component when showB is true</p>
                    </div>
                </div>
            </div>

            <div className='App-row-container'>
                <StateIsTiedToPositionInTheTreeCounter />
                {showB && <StateIsTiedToPositionInTheTreeCounter />}

                <p className='App-left-aligned-small-box-border'>React preserves a component’s state for as long as it’s being rendered at its position in the UI tree. If it gets removed, or a different component gets rendered at the same position, React discards its state.</p>
            </div>

            <label>
                <input
                    type="checkbox"
                    checked={showB}
                    onChange={e => {
                        setShowB(e.target.checked)
                    }}
                />
                Render the second counter
            </label>
        </div>
    );
}

function StateIsTiedToPositionInTheTreeDemo() {
    return (<div className="App-left-aligned-content">
        <p>When you give a component state, you might think the state “lives” inside the component. But the state is actually held inside React.</p>
        <hr></hr>
        <p>These are two separate counters because each is rendered at its own position in the tree. </p>
        <StateIsTiedToPositionInTheTreeCounterApp />
        <hr></hr>
        <StateIsTiedToPositionInTheTreeCounterDeleteApp />
    </div>);
}

// Same component at the same position preserves state 
function FancyCounter({ isFancy }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'App-counter';
    if (hover) {
        className = 'App-hover';
    }

    if (isFancy) {
        className = 'App-fancy';
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add one
            </button>
        </div>
    );
}

function FancyCounterApp() {
    const [isFancy, setIsFancy] = useState(false);

    return (
        <div>
            {isFancy ? (
                <FancyCounter isFancy={true} />
            ) : (
                <FancyCounter isFancy={false} />
            )}
            <label>
                <input
                    type="checkbox"
                    checked={isFancy}
                    onChange={e => {
                        setIsFancy(e.target.checked)
                    }}
                />
                Use fancy styling
            </label>
        </div>
    );
}

function SameComponentAtTheSamePositionPreservesStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>When you tick or clear the checkbox, the counter state does not get reset. Whether isFancy is true or false, you always have a Counter as the first child of the div returned from the root App component:</p>
        <div className="App-row-container">
            <img className='App-img-small'
                src='https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpreserving_state_same_component.png&w=640&q=75'
                alt="Deleting a component"
            />
            <hr></hr>
            <FancyCounterApp />
        </div>

    </div>);
}

// Different components at the same position reset state 
function TakeABreakCounter() {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'App-counter';
    if (hover) {
        className += ' App-hover';
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add one
            </button>
        </div>
    );
}

function TakeABreakCounterApp() {
    const [isPaused, setIsPaused] = useState(false);
    return (
        <div>
            {isPaused ? (
                <p className='App-hilight-color'>See you later!</p>
            ) : (
                <TakeABreakCounter />
            )}
            <label>
                <input
                    type="checkbox"
                    checked={isPaused}
                    onChange={e => {
                        setIsPaused(e.target.checked)
                    }}
                />
                Take a break
            </label>
        </div>
    );
}

function DifferentComponentsAtTheSamePositionResetStateMyComponent() {
    const [counter, setCounter] = useState(0);

    function MyTextField() {
        const [text, setText] = useState('');

        return (
            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
        );
    }

    return (
        <>
            <MyTextField />
            <button onClick={() => {
                setCounter(counter + 1)
            }}>Clicked {counter} times</button>
        </>
    );
}

function DifferentComponentsAtTheSamePositionResetStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>As a rule of thumb, if you want to preserve the state between re-renders, the structure of your tree needs to “match up” from one render to another. </p>
        <div className="App-row-container">

            <TakeABreakCounterApp />
            <hr></hr>

            <div>
                <p className='App-small-font-size'>Here, you switch between different component types at the same position. Initially, the first child of the div contained a Counter. But when you swapped in a p, React removed the Counter from the UI tree and destroyed its state.</p>

                <div className="App-row-container">
                    <div className='App-success-color'>
                        <p className='App-small-font-size'>When Counter changes to p, the Counter is deleted and the p is added</p>
                        <img className='App-img-medium'
                            src='https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpreserving_state_diff_pt1.png&w=828&q=75'
                            alt="Change P"
                        />
                    </div>
                    <hr></hr>
                    <div className='App-success-color'>
                        <p className='App-small-font-size'>When switching back, the p is deleted and the Counter is added</p>
                        <img className='App-img-medium'
                            src='https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpreserving_state_diff_pt2.png&w=828&q=75'
                            alt="Add P"
                        />
                    </div>
                </div>
            </div>

        </div>
        <hr></hr>
        <p>Every time you click the button, the input state disappears! This is because a different MyTextField function is created for every render of MyComponent. You’re rendering a different component in the same position, so React resets all state below. This leads to bugs and performance problems. To avoid this problem, always declare component functions at the top level, and don’t nest their definitions.</p>
        <DifferentComponentsAtTheSamePositionResetStateMyComponent />
    </div>);
}

// Resetting state at the same position 
function ScoreboardCounter({ person }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'counter';
    if (hover) {
        className += ' hover';
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{person}'s score: {score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add one
            </button>
        </div>
    );
}

function ResettingStateAtTheSamePositionScoreboard() {
    const [isPlayerA, setIsPlayerA] = useState(true);
    return (
        <div>
            {isPlayerA ? (
                <ScoreboardCounter person="Taylor" />
            ) : (
                <ScoreboardCounter person="Sarah" />
            )}
            <button onClick={() => {
                setIsPlayerA(!isPlayerA);
            }}>
                Next player!
            </button>
        </div>
    );
}

function ResettingStateAtTheSamePositionDemo() {
    return (<div className="App-left-aligned-content">
        <p>By default, React preserves state of a component while it stays at the same position. Usually, this is exactly what you want, so it makes sense as the default behavior. But sometimes, you may want to reset a component’s state. Consider this app that lets two players keep track of their scores during each turn</p>
        <div className="App-row-container">
            <ResettingStateAtTheSamePositionScoreboard />
            <div className='App-left-aligned-border'>
                <p className='App-small-font-size'>There are two ways to reset state when switching between them:</p>
                <ul>
                    <li>
                        1. Render components in different positions
                    </li>
                    <li>
                        2. Give each component an explicit identity with key
                    </li>
                </ul>
            </div>
        </div>
    </div>);
}

// Option 1: Rendering a component in different positions 
function Option1Counter({ person }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'counter';
    if (hover) {
        className += ' hover';
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{person}'s score: {score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add one
            </button>
        </div>
    );
}

function Option1Scoreboard() {
    const [isPlayerA, setIsPlayerA] = useState(true);
    
    return (
        <div>
            {isPlayerA &&
                <Option1Counter person="Taylor" />
            }
            {!isPlayerA &&
                <Option1Counter person="Sarah" />
            }
            <button onClick={() => {
                setIsPlayerA(!isPlayerA);
            }}>
                Next player!
            </button>
        </div>
    );
}

function Option1RenderingDemo() {
    return (<div className="App-left-aligned-content">
        <div className="App-row-container">
            <Option1Scoreboard />
            <div className='App-left-aligned-border'>
                <p className='App-small-font-size'>If you want these two Counters to be independent, you can render them in two different positions:</p>
                <ul className='App-success-color'>
                    <li>
                        Initially, isPlayerA is true. So the first position contains Counter state, and the second one is empty.
                    </li>
                    <li>
                        When you click the “Next player” button the first position clears but the second one now contains a Counter.
                    </li>
                    <li>
                        Counter person="Sarah"
                    </li>
                </ul>
            </div>
        </div>
    </div>);
}

// Option 2: Resetting state with a key 
function Option2Counter({ person }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'counter';
    if (hover) {
        className += ' hover';
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{person}'s score: {score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add one
            </button>
        </div>
    );
}

function Option2Scoreboard() {
    const [isPlayerA, setIsPlayerA] = useState(true);

    return (
        <div>
            {isPlayerA ? (
                <Option2Counter key="Taylor" person="Taylor" />
            ) : (
                <Option2Counter key="Sarah" person="Sarah" />
            )}
            <button onClick={() => {
                setIsPlayerA(!isPlayerA);
            }}>
                Next player!
            </button>
        </div>
    );
}

function Option2ResettingStateDemo() {
    return (<div className="App-left-aligned-content">
        <div className="App-row-container">
            <div className='App-left-aligned-border'>
                <p className='App-small-font-size'>You might have seen keys when rendering lists. Keys aren’t just for lists! You can use keys to make React distinguish between any components. By default, React uses order within the parent (“first counter”, “second counter”) to discern between components. But keys let you tell React that this is not just a first counter, or a second counter, but a specific counter—for example, Taylor’s counter. This way, React will know Taylor’s counter wherever it appears in the tree!</p>
                <ul className='App-success-color'>
                    <li>
                        Counter key="Taylor" person="Taylor"
                    </li>
                </ul>
            </div>
            <Option2Scoreboard />
        </div>
    </div>);
}

// Resetting a form with a key 
function Chat({ contact }) {
    const [text, setText] = useState('');
    return (
        <section className="chat">
            <textarea
                value={text}
                placeholder={'Chat to ' + contact.name}
                onChange={e => setText(e.target.value)}
            />
            <br />
            <button>Send to {contact.email}</button>
        </section>
    );
}

function ContactList({
    selectedContact,
    contacts,
    onSelect
}) {
    return (
        <section className="contact-list">
            <ul className='App-no-bullet-ul '>
                {contacts.map(contact =>
                    <li key={contact.id}>
                        <button onClick={() => {
                            onSelect(contact);
                        }}>
                            {contact.name}
                        </button>
                    </li>
                )}
            </ul>
        </section>
    );
}

const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

function Messenger() {
    const [to, setTo] = useState(contacts[0]);

    return (
        <div>
            <p className='App-error-color'>Try entering something into the input, and then press “Alice” or “Bob” to choose a different recipient. You will notice that the input state is preserved because the Chat is rendered at the same position in the tree.</p>
            <ContactList
                contacts={contacts}
                selectedContact={to}
                onSelect={contact => setTo(contact)}
            />
            <Chat contact={to} />
        </div>
    )
}

function MessengerWithKey() {
    const [to, setTo] = useState(contacts[0]);
    
    return (
        <div>
            <p className='App-success-color'>Chat key=to.id contact=to </p>
            <p className='App-small-font-size'>This ensures that when you select a different recipient, the Chat component will be recreated from scratch, including any state in the tree below it. React will also re-create the DOM elements instead of reusing them.</p>
            <ContactList
                contacts={contacts}
                selectedContact={to}
                onSelect={contact => setTo(contact)}
            />
            <Chat key={to.id} contact={to} />
        </div>
    )
}

function ResettingFormWithKeyDemo() {
    return (<div className="App-left-aligned-content">
        <p>Resetting state with a key is particularly useful when dealing with forms.</p>
        <div className="App-row-container">
            <Messenger />
            <hr></hr>
            <MessengerWithKey />
        </div>
    </div>);
}

// Recap
function RecapPreservingAndResettingStateDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>
                React keeps state for as long as the same component is rendered at the same position.
            </li>
            <li>
                State is not kept in JSX tags. It’s associated with the tree position in which you put that JSX.
            </li>
            <li>
                You can force a subtree to reset its state by giving it a different key.
            </li>
            <li>
                Don’t nest component definitions, or you’ll reset state by accident.
            </li>
        </ul>
    </div>);
}

// Try out some challenges
/*
Challenge 1 of 5: Fix disappearing input text 
- This example shows a message when you press the button. However, pressing the button also accidentally resets the input. Why does this happen? Fix it so that pressing the button does not reset the input text.
 */
function Challenge1PreservingAndResettingStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 5: Fix disappearing input text </p>
    </div>);
}

// Try out some challenges
/*
Challenge 2 of 5: Swap two form fields 
- This form lets you enter first and last name. It also has a checkbox controlling which field goes first. When you tick the checkbox, the “Last name” field will appear before the “First name” field.
- It almost works, but there is a bug. If you fill in the “First name” input and tick the checkbox, the text will stay in the first input (which is now “Last name”). Fix it so that the input text also moves when you reverse the order.
 */
function Challenge2PreservingAndResettingStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 5: Swap two form fields </p>
    </div>);
}

// Try out some challenges
/*
Challenge 3 of 5: Reset a detail form 
- This is an editable contact list. You can edit the selected contact’s details and then either press “Save” to update it, or “Reset” to undo your changes.
- When you select a different contact (for example, Alice), the state updates but the form keeps showing the previous contact’s details. Fix it so that the form gets reset when the selected contact changes.
*/
function Challenge3PreservingAndResettingStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 5: Reset a detail form </p>
    </div>);
}

// Try out some challenges
/*
Challenge 4 of 5: Clear an image while it’s loading 
- When you press “Next”, the browser starts loading the next image. However, because it’s displayed in the same <img> tag, by default you would still see the previous image until the next one loads. This may be undesirable if it’s important for the text to always match the image. Change it so that the moment you press “Next”, the previous image immediately clears.
 */
function Challenge4PreservingAndResettingStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 5: Clear an image while it’s loading </p>
    </div>);
}

// Try out some challenges
/*
Challenge 5 of 5: Fix misplaced state in the list 
- In this list, each Contact has state that determines whether “Show email” has been pressed for it. Press “Show email” for Alice, and then tick the “Show in reverse order” checkbox. You will notice that it’s Taylor’s email that is expanded now, but Alice’s—which has moved to the bottom—appears collapsed.
- Fix it so that the expanded state is associated with each contact, regardless of the chosen ordering.
 */
function Challenge5PreservingAndResettingStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 5 of 5: Fix misplaced state in the list </p>
    </div>);
}

// Try out some challenges
function ChallengesPreservingAndResettingStateDemo() {
    return (<div className="App-left-aligned-content">
        <Challenge1PreservingAndResettingStateDemo />
        <hr></hr>
        <Challenge2PreservingAndResettingStateDemo />
        <hr></hr>
        <Challenge3PreservingAndResettingStateDemo />
        <hr></hr>
        <Challenge4PreservingAndResettingStateDemo />
        <hr></hr>
        <Challenge5PreservingAndResettingStateDemo />
        <hr></hr>
    </div>);
}