import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';
import { initialTravelPlan } from './02places.js';
import { initialTravelPlanWithChildIds } from './02travelPlaces.js'

// Main Default For Choosing the State Structure Demo
export default function ChoosingTheStateStructureDemo() {
    return (
        <div>
            <hr></hr>
            <p>Structuring state well can make a difference between a component that is pleasant to modify and debug, and one that is a constant source of bugs.</p>

            <h2 className="App-title">Principles for structuring state </h2>
            <PrinciplesForStructuringStateDemo />

            <h2 className="App-title"> Group related state </h2>
            <GroupRelatedStateDemo />

            <h2 className="App-title"> Avoid contradictions in state </h2>
            <AvoidContradictionsInStateDemo />

            <h2 className="App-title">Avoid redundant state </h2>
            <AvoidRedundantStateDemo />

            <h2 className="App-title"> Avoid duplication in state </h2>
            <AvoidDuplicationInStateDemo />

            <h2 className="App-title"> Avoid deeply nested state </h2>
            <AvoidDeeplyNestedStateDemo />

            <h2 className="App-title"> Recap </h2>
            <ChoosingTheStateStructureRecapDemo />

            <h2 className="App-title">Try out some challenges </h2>
            <ChoosingTheStateStructureChallengesDemo />
        </div>
    );
}

// Principles for structuring state 
function PrinciplesForStructuringStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>Albert Einstein said, “Make your state as simple as it can be—but no simpler.”</p>
        <ul>
            <li>
                1. Group related state. If you always update two or more state variables at the same time, consider merging them into a single state variable.
            </li>
            <li>
                2. Avoid contradictions in state. When the state is structured in a way that several pieces of state may contradict and “disagree” with each other, you leave room for mistakes. Try to avoid this.
            </li>
            <li>
                3. Avoid redundant state. If you can calculate some information from the component’s props or its existing state variables during rendering, you should not put that information into that component’s state.
            </li>
            <li>
                4. Avoid duplication in state. When the same data is duplicated between multiple state variables, or within nested objects, it is difficult to keep them in sync. Reduce duplication when you can.
            </li>
            <li>
                5. Avoid deeply nested state. Deeply hierarchical state is not very convenient to update. When possible, prefer to structure state in a flat way.
            </li>
        </ul>
    </div>);
}

// Group related state 
function GroupRelatedStatMovingDot() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    return (
        <div className='App-container-square'
            onPointerMove={e => {
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                });
            }}
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
            }}>
            <div style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: '50%',
                transform: `translate(${position.x}px, ${position.y}px)`,
                left: -10,
                top: -10,
                width: 20,
                height: 20,
            }} />
        </div>
    )
}

function GroupRelatedStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>THIS --{'>'}</p>
        <div className='App-left-aligned-border'>
            <p className='App-success-color'>const [position, setPosition] = useState({'{ x: 0, y: 0 }'});
            </p>
        </div>

        <p>OR  --{'>'}</p>
        <div className='App-left-aligned-border'>
            <p className='App-hilight-color'>const [x, setX] = useState(0);</p>
            <p className='App-hilight-color'>const [y, setY] = useState(0);</p>
        </div>

        <p>Technically, you can use either of these approaches. But if some two state variables always change together, it might be a good idea to unify them into a single state variable. </p>
        <GroupRelatedStatMovingDot />
    </div>);
}

// Avoid contradictions in state 
// Pretend to send a message.
function sendMessage(text) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    });
}

function AvoidContradictionsInStateUsing2StatesFeedbackForm() {
    const [text, setText] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSending(true);
        await sendMessage(text);
        setIsSending(false);
        setIsSent(true);
    }

    if (isSent) {
        return <h1>Thanks for feedback!</h1>
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='App-left-aligned-border'>
                <p className='App-error-color'>These use 2 states that might cause bug.</p>
                <p className='App-small-font-size'>const [isSending, setIsSending] = useState(false);  </p>
                <p className='App-small-font-size'>const [isSent, setIsSent] = useState(false); </p>
            </div>

            <p>How was your stay at The Prancing Pony?</p>

            <textarea
                disabled={isSending}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <br />

            <button
                disabled={isSending}
                type="submit"
            >
                Send
            </button>

            {isSending && <p>Sending...</p>}
        </form>
    );
}

function AvoidContradictionsInStateBetterFeedbackForm() {
    const [text, setText] = useState('');
    const [status, setStatus] = useState('typing');

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('sending');
        await sendMessage(text);
        setStatus('sent');
    }

    const isSending = status === 'sending';
    const isSent = status === 'sent';

    if (isSent) {
        return <h1>Thanks for feedback with status!</h1>
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='App-left-aligned-border'>
                <p className='App-small-font-size'>Since isSending and isSent should never be true at the same time </p>
                <p className='App-success-color'>it is better to replace them with one status state variable that may take one of three valid states: 'typing' (initial), 'sending', and 'sent':</p>
                <p className='App-small-font-size'>    const [status, setStatus] = useState('typing'); </p>
            </div>

            <p>How was your stay at The Prancing Pony  with status?</p>

            <textarea
                disabled={isSending}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <br />

            <button
                disabled={isSending}
                type="submit"
            >
                Send
            </button>

            {isSending && <p>Sending...</p>}
        </form>
    );
}

function AvoidContradictionsInStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>While this code works, it leaves the door open for “impossible” states. Here is example to avoid contradictions in state.</p>
        <div className='App-row-container'>
            <AvoidContradictionsInStateUsing2StatesFeedbackForm />
            <hr></hr>
            <AvoidContradictionsInStateBetterFeedbackForm />
        </div>
    </div>);
}

// Avoid redundant state 
function AvoidRedundantStatForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
        setFullName(e.target.value + ' ' + lastName);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
        setFullName(firstName + ' ' + e.target.value);
    }

    return (
        <div className="App-left-aligned-content">
            <div className='App-left-aligned-border'>
                <p className='App-error-color'>Calling setFullName Redundant :</p>
                <p className='App-small-font-size'>setFullName(e.target.value + ' ' + lastName);</p>
                <p className='App-small-font-size'>setFullName(firstName + ' ' + e.target.value);</p>
            </div>

            <h2 className='App-error-color'>Let’s check you in</h2>
            <label>
                First name:{' '}
                <input
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <hr></hr>
            <label>
                Last name:{' '}
                <input
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <p>
                Your ticket will be issued to: <b>{fullName}</b>
            </p>
        </div>
    );
}

function AvoidRedundantStatBetterForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const fullName = firstName + ' ' + lastName;

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    return (
        <div className="App-left-aligned-content">
            <div className='App-left-aligned-border'>
                <p className='App-small-font-size'>You can always calculate fullName from firstName and lastName during render, so remove it from state.</p>
                <p className='App-success-color'>const fullName = firstName + ' ' + lastName;</p>
            </div>

            <h2 className='App-success-color'>Let’s check you in</h2>
            <label>
                First name:{' '}
                <input
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <hr></hr>
            <label>
                Last name:{' '}
                <input
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <p>
                Your ticket will be issued to: <b>{fullName}</b>
            </p>
        </div>
    );
}

function AvoidRedundantStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>If you can calculate some information from the component’s props or its existing state variables during rendering, you should not put that information into that component’s state.</p>
        <div className='App-row-container'>
            <AvoidRedundantStatForm />
            <hr></hr>
            <AvoidRedundantStatBetterForm />
        </div>
    </div>);
}

// Avoid duplication in state 
const initialItems = [
    { title: 'pretzels', id: 0 },
    { title: 'crispy seaweed', id: 1 },
    { title: 'granola bar', id: 2 },
];

function AvoidDuplicationInStateError1Menu() {
    const [items, setItems] = useState(initialItems);
    const [selectedItem, setSelectedItem] = useState(
        items[0]
    );

    return (
        <div className='App-row-container'>
            <div>
                <h2>What's your travel snack?</h2>

                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.title}
                            {' '}
                            <button onClick={() => {
                                setSelectedItem(item);
                            }}>Choose</button>
                        </li>
                    ))}
                </ul>

                <p>You picked {selectedItem.title}.</p>

                <button onClick={() => {
                    setItems(initialItems);
                }}>Reset Items</button>
            </div>

            <div className='App-small-box-border'>
                <p className='App-error-color'>The item itself is duplicated in two places.</p>
                <p className='App-small-font-size'>Currently, it stores the selected item as an object in the selectedItem state variable. However, this is not great: the contents of the selectedItem is the same object as one of the items inside the items list. </p>
            </div>
        </div>
    );
}

function AvoidDuplicationInStateError2Menu() {
    const [items, setItems] = useState(initialItems);
    const [selectedItem, setSelectedItem] = useState(
        items[0]
    );

    function handleItemChange(id, e) {
        setItems(items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    title: e.target.value,
                };
            } else {
                return item;
            }
        }));
    }

    return (
        <div className='App-row-container'>
            <div>
                <h2>What's your travel snack?</h2>
                <ul>
                    {items.map((item, index) => (
                        <li key={item.id}>
                            <input
                                value={item.title}
                                onChange={e => {
                                    handleItemChange(item.id, e)
                                }}
                            />
                            {' '}
                            <button onClick={() => {
                                setSelectedItem(item);
                            }}>Choose</button>
                        </li>
                    ))}
                </ul>
                <p>You picked {selectedItem.title}.</p>
            </div>

            <div className='App-small-box-border'>
                <p className='App-error-color'>You have duplicated state</p>
                <p className='App-small-font-size'>Notice how if you first click “Choose” on an item and then edit it, the input updates but the label at the bottom does not reflect the edits. This is because you have duplicated state, and you forgot to update selectedItem.</p>

                <div className='App-error-color'>
                    <p className='App-small-font-size'>The state is duplicated like this:</p>
                    <p className='App-small-font-size'>items = {'[{ id: 0, title: pretzels, ...]'}</p>
                    <p className='App-small-font-size'>selectedItem = {'{id: 0, title: pretzels}'}</p>
                </div>
            </div>
        </div>
    );
}

function AvoidDuplicationInStateSuccessMenu() {
    const [items, setItems] = useState(initialItems);
    const [selectedId, setSelectedId] = useState(0);

    const selectedItem = items.find(item =>
        item.id === selectedId
    );

    function handleItemChange(id, e) {
        setItems(items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    title: e.target.value,
                };
            } else {
                return item;
            }
        }));
    }

    return (
        <div className='App-row-container'>
            <div>
                <h2>What's your travel snack?</h2>

                <ul>
                    {items.map((item, index) => (
                        <li key={item.id}>
                            <input
                                value={item.title}
                                onChange={e => {
                                    handleItemChange(item.id, e)
                                }}
                            />
                            {' '}
                            <button onClick={() => {
                                setSelectedId(item.id);
                            }}>Choose</button>
                        </li>
                    ))}
                </ul>

                <p>You picked {selectedItem.title}.</p>
            </div>

            <div className='App-small-box-border'>
                <p className='App-success-color'>The duplication is gone, and you only keep the essential state!</p>
                <p className='App-hilight-color'>const selectedItem = items.find();</p>
                <p className='App-small-font-size'>Imagine a travel plan consisting of planets, continents, and countries. You might be tempted to structure its state using nested objects and arrays, like in this example:</p>

                <div className='App-success-color'>
                    <p className='App-small-font-size'>But after the change it’s like this:</p>
                    <p className='App-small-font-size'>items = {'[{ id: 0, title: pretzels, ...]'}</p>
                    <p className='App-small-font-size'>selectedId = 0</p>
                </div>
            </div>
        </div>
    );
}

function AvoidDuplicationInStateDemo() {
    return (<div className="App-left-aligned-content">
        <AvoidDuplicationInStateError1Menu />
        <hr></hr>
        <AvoidDuplicationInStateError2Menu />
        <hr></hr>
        <AvoidDuplicationInStateSuccessMenu />
    </div>);
}

// Avoid deeply nested state 
function InfoPlaceTree({ place }) {
    const childPlaces = place.childPlaces;
    return (
        <li>
            {place.title}
            {childPlaces.length > 0 && (
                <ol>
                    {childPlaces.map(place => (
                        <InfoPlaceTree key={place.id} place={place} />
                    ))}
                </ol>
            )}
        </li>
    );
}

function AvoidDeeplyNestedStateInfoTravelPlan() {
    const [plan, setPlan] = useState(initialTravelPlan);
    const planets = plan.childPlaces;

    return (
        <div className='App-left-aligned-small-box-border'>
            <div className='App-left-aligned-border'>
                <p className='App-small-font-size'>Imagine a travel plan consisting of planets, continents, and countries. You might be tempted to structure its state using nested objects and arrays, like in this example:</p>
            </div>

            <h2>Places to visit Info</h2>

            <button onClick={() => {
                setPlan(initialTravelPlan);
            }}>Reset Plan</button>

            <ol>
                {planets.map(place => (
                    <InfoPlaceTree key={place.id} place={place} />
                ))}
            </ol>
        </div>
    );
}

function FlatPlaceTree({ id, placesById }) {
    const place = placesById[id];
    const childIds = place.childIds;

    return (
        <li>
            {place.title}
            {childIds.length > 0 && (
                <ol>
                    {childIds.map(childId => (
                        <FlatPlaceTree
                            key={childId}
                            id={childId}
                            placesById={placesById}
                        />
                    ))}
                </ol>
            )}
        </li>
    );
}

function AvoidDeeplyNestedStateTravelPlanFlat() {
    const [plan, setPlan] = useState(initialTravelPlanWithChildIds);
    const root = plan[0];
    const planetIds = root.childIds;

    return (
        <div className='App-left-aligned-small-box-border'>
            <div className='App-left-aligned-border'>
                <p className='App-small-font-size'>If the state is too nested to update easily, consider making it “flat”</p>
                <p>FlatPlaceTree(id, placesById)</p>
            </div>

            <h2>Places to visit : Flat</h2>
            <ol>
                {planetIds.map(id => (
                    <FlatPlaceTree
                        key={id}
                        id={id}
                        placesById={plan}
                    />
                ))}
            </ol>
        </div>
    );
}

function FinalPlaceTree({ id, parentId, placesById, onComplete }) {
    const place = placesById[id];
    const childIds = place.childIds;

    return (
        <li>
            {place.title}
            <button onClick={() => {
                onComplete(parentId, id);
            }}>
                Complete
            </button>
            {childIds.length > 0 &&
                <ol>
                    {childIds.map(childId => (
                        <FinalPlaceTree
                            key={childId}
                            id={childId}
                            parentId={id}
                            placesById={placesById}
                            onComplete={onComplete}
                        />
                    ))}
                </ol>
            }
        </li>
    );
}

function AvoidDeeplyNestedStateFinalTravelPlan() {
    const [plan, setPlan] = useState(initialTravelPlanWithChildIds);

    function handleComplete(parentId, childId) {
        const parent = plan[parentId];
        // Create a new version of the parent place
        // that doesn't include this child ID.
        const nextParent = {
            ...parent,
            childIds: parent.childIds
                .filter(id => id !== childId)
        };
        // Update the root state object...
        setPlan({
            ...plan,
            // ...so that it has the updated parent.
            [parentId]: nextParent
        });
    }

    const root = plan[0];
    const planetIds = root.childIds;

    return (
        <div className='App-left-aligned-small-box-border'>
            <div className='App-left-aligned-border'>
                <p className='App-success-color'>Final Version For Updating</p>
                <p className='App-small-font-size'>In order to remove a place now, you only need to update two levels of state:</p>
                <p className='App-small-font-size'> - The updated version of its parent place should exclude the removed ID from its childIds array.</p>
                <p className='App-small-font-size'> - The updated version of the root “table” object should include the updated version of the parent place.</p>
            </div>

            <h2>Places to visit Final</h2>

            <button onClick={() => {
                setPlan(initialTravelPlanWithChildIds);
            }}>Reset Plan</button>

            <ol>
                {planetIds.map(id => (
                    <FinalPlaceTree
                        key={id}
                        id={id}
                        parentId={0}
                        placesById={plan}
                        onComplete={handleComplete}
                    />
                ))}
            </ol>
        </div>
    );
}

function ImmerPlaceTree({ id, parentId, placesById, onComplete }) {
    const place = placesById[id];
    const childIds = place.childIds;

    return (
        <li>
            {place.title}
            <button onClick={() => {
                onComplete(parentId, id);
            }}>
                Complete
            </button>
            {childIds.length > 0 &&
                <ol>
                    {childIds.map(childId => (
                        <ImmerPlaceTree
                            key={childId}
                            id={childId}
                            parentId={id}
                            placesById={placesById}
                            onComplete={onComplete}
                        />
                    ))}
                </ol>
            }
        </li>
    );
}

function AvoidDeeplyNestedStateTravelPlanImmer() {
    const [plan, updatePlan] = useImmer(initialTravelPlanWithChildIds);

    function handleComplete(parentId, childId) {
        updatePlan(draft => {
            // Remove from the parent place's child IDs.
            const parent = draft[parentId];
            parent.childIds = parent.childIds
                .filter(id => id !== childId);

            // Forget this place and all its subtree.
            deleteAllChildren(childId);
            function deleteAllChildren(id) {
                const place = draft[id];
                place.childIds.forEach(deleteAllChildren);
                delete draft[id];
            }
        });
    }

    const root = plan[0];
    const planetIds = root.childIds;
    return (
        <div className='App-left-aligned-small-box-border'>
            <div className='App-left-aligned-border'>
                <p className='App-success-color'>Immer Version For Updating</p>
                <p>Improving memory usage </p>
                <p className='App-small-font-size'>Ideally, you would also remove the deleted items (and their children!) from the “table” object to improve memory usage. This version does that. It also uses Immer to make the update logic more concise.</p>
            </div>

            <h2>Places to visit Immer</h2>

            <button onClick={() => {
                updatePlan(initialTravelPlanWithChildIds);
            }}>Reset Plan</button>

            <ol>
                {planetIds.map(id => (
                    <ImmerPlaceTree
                        key={id}
                        id={id}
                        parentId={0}
                        placesById={plan}
                        onComplete={handleComplete}
                    />
                ))}
            </ol>
        </div>
    );
}

function AvoidDeeplyNestedStateDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-container'>
            <AvoidDeeplyNestedStateInfoTravelPlan />
            <AvoidDeeplyNestedStateTravelPlanFlat />
        </div>
        <div className='App-row-container'>
            <AvoidDeeplyNestedStateFinalTravelPlan />
            <AvoidDeeplyNestedStateTravelPlanImmer />
        </div>
    </div>);
}

// Recap
function ChoosingTheStateStructureRecapDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>
                If two state variables always update together, consider merging them into one.
            </li>
            <li>
                Choose your state variables carefully to avoid creating “impossible” states.
            </li>
            <li>
                Structure your state in a way that reduces the chances that you’ll make a mistake updating it.
            </li>
            <li>
                Avoid redundant and duplicate state so that you don’t need to keep it in sync.
            </li>
            <li>
                Don’t put props into state unless you specifically want to prevent updates.
            </li>
            <li>
                For UI patterns like selection, keep ID or index in state instead of the object itself.
            </li>
            <li>
                If updating deeply nested state is complicated, try flattening it.
            </li>
        </ul>
    </div>);
}

// Try out some challenges
/*
Challenge 1 of 4: Fix a component that’s not updating 
- This Clock component receives two props: color and time. When you select a different color in the select box, the Clock component receives a different color prop from its parent component. However, for some reason, the displayed color doesn’t update. Why? Fix the problem.
 */
function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

function Challenge1Clock(props) {
    return (
        <h1 style={{ color: props.color }}>
            {props.time}
        </h1>
    );
}

function Challenge1ClockWithColorAndTime({ color, time }) {
    return (
        <h1 style={{ color: color }}>
            {time}
        </h1>
    );
}

function Challenge1ClockWithPropApp() {
    const time = useTime();
    const [color, setColor] = useState('lightcoral');
    return (
        <div>
            <p>This clock is using Prop.</p>
            <p>
                Pick a color:{' '}
                <select value={color} onChange={e => setColor(e.target.value)}>
                    <option value="lightcoral">lightcoral</option>
                    <option value="midnightblue">midnightblue</option>
                    <option value="rebeccapurple">rebeccapurple</option>
                </select>
            </p>
            <Challenge1Clock color={color} time={time.toLocaleTimeString()} />
        </div>
    );
}

function Challenge1ClockWithColorAndTimeApp() {
    const time = useTime();
    const [color, setColor] = useState('lightcoral');
    return (
        <div>
            <p>This clock is using color and time.</p>
            <p>
                Pick a color:{' '}
                <select value={color} onChange={e => setColor(e.target.value)}>
                    <option value="lightcoral">lightcoral</option>
                    <option value="midnightblue">midnightblue</option>
                    <option value="rebeccapurple">rebeccapurple</option>
                </select>
            </p>
            <Challenge1ClockWithColorAndTime color={color} time={time.toLocaleTimeString()} />
        </div>
    );
}

function ChoosingTheStateStructureChallenge1Demo() {
    const time = useTime();
    const [color, setColor] = useState('lightcoral');
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 4: Fix a component that’s not updating </p>
        <div className='App-row-container'>
            <Challenge1ClockWithPropApp />

            <hr></hr>
            <Challenge1ClockWithColorAndTimeApp />
        </div>

    </div>);
}

// Try out some challenges
/*
Challenge 2 of 4: Fix a broken packing list 
- This packing list has a footer that shows how many items are packed, and how many items there are overall. It seems to work at first, but it is buggy. For example, if you mark an item as packed and then delete it, the counter will not be updated correctly. Fix the counter so that it’s always correct.
 */
function Challenge2AddItem({ onAddItem }) {
    const [title, setTitle] = useState('');
    return (
        <>
            <input
                placeholder="Add item"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button onClick={() => {
                setTitle('');
                onAddItem(title);
            }}>Add</button>
        </>
    )
}

function Challenge2PackingList({
    items,
    onChangeItem,
    onDeleteItem
}) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={item.packed}
                            onChange={e => {
                                onChangeItem({
                                    ...item,
                                    packed: e.target.checked
                                });
                            }}
                        />
                        {' '}
                        {item.title}
                    </label>
                    <button onClick={() => onDeleteItem(item.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

let nextIdChallenge2 = 3;
const initialItemsChallenge2 = [
    { id: 0, title: 'Warm socks', packed: true },
    { id: 1, title: 'Travel journal', packed: false },
    { id: 2, title: 'Watercolors', packed: false },
];

function Challenge2TravelPlan() {
    const [items, setItems] = useState(initialItemsChallenge2);
    const total = items.length;
    const packed = items
        .filter(item => item.packed)
        .length;

    function handleAddItem(title) {
        setItems([
            ...items,
            {
                id: nextIdChallenge2++,
                title: title,
                packed: false
            }
        ]);
    }

    function handleChangeItem(nextItem) {
        setItems(items.map(item => {
            if (item.id === nextItem.id) {
                return nextItem;
            } else {
                return item;
            }
        }));
    }

    function handleDeleteItem(itemId) {
        setItems(
            items.filter(item => item.id !== itemId)
        );
    }

    return (
        <>
            <Challenge2AddItem
                onAddItem={handleAddItem}
            />
            <Challenge2PackingList
                items={items}
                onChangeItem={handleChangeItem}
                onDeleteItem={handleDeleteItem}
            />
            <hr />
            <b>{packed} out of {total} packed!</b>
        </>
    );
}

function ChoosingTheStateStructureChallenge2Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 4: Fix a broken packing list </p>
        <Challenge2TravelPlan />
    </div>);
}

// Try out some challenges
/*
Challenge 3 of 4: Fix the disappearing selection 
- There is a list of letters in state. When you hover or focus a particular letter, it gets highlighted. The currently highlighted letter is stored in the highlightedLetter state variable. You can “star” and “unstar” individual letters, which updates the letters array in state.
- This code works, but there is a minor UI glitch. When you press “Star” or “Unstar”, the highlighting disappears for a moment. However, it reappears as soon as you move your pointer or switch to another letter with keyboard. Why is this happening? Fix it so that the highlighting doesn’t disappear after the button click.
*/
const initialLetters = [{
    id: 0,
    subject: 'Ready for adventure?',
    isStarred: true,
}, {
    id: 1,
    subject: 'Time to check in!',
    isStarred: false,
}, {
    id: 2,
    subject: 'Festival Begins in Just SEVEN Days!',
    isStarred: false,
}];

function Challenge3Letter({
    letter,
    isHighlighted,
    onHover,
    onToggleStar,
}) {
    return (
        <li
            className={
                isHighlighted ? 'highlighted' : ''
            }
            onFocus={() => {
                onHover(letter.id);
            }}
            onPointerMove={() => {
                onHover(letter.id);
            }}
        >
            <button onClick={() => {
                onToggleStar(letter.id);
            }}>
                {letter.isStarred ? 'Unstar' : 'Star'}
            </button>
            {letter.subject}
        </li>
    )
}

function Challenge3MailClient() {
    const [letters, setLetters] = useState(initialLetters);
    const [highlightedId, setHighlightedId] = useState(null);

    function handleHover(letterId) {
        setHighlightedId(letterId);
    }

    function handleStar(starredId) {
        setLetters(letters.map(letter => {
            if (letter.id === starredId) {
                return {
                    ...letter,
                    isStarred: !letter.isStarred
                };
            } else {
                return letter;
            }
        }));
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Challenge3Letter
                        key={letter.id}
                        letter={letter}
                        isHighlighted={
                            letter.id === highlightedId
                        }
                        onHover={handleHover}
                        onToggleStar={handleStar}
                    />
                ))}
            </ul>
        </>
    );
}

function ChoosingTheStateStructureChallenge3Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 4: Fix the disappearing selection</p>
        <Challenge3MailClient />
    </div>);
}

// Try out some challenges
/*
Challenge 4 of 4: Implement multiple selection 
- In this example, each Letter has an isSelected prop and an onToggle handler that marks it as selected. This works, but the state is stored as a selectedId (either null or an ID), so only one letter can get selected at any given time.
- Change the state structure to support multiple selection. (How would you structure it? Think about this before writing the code.) Each checkbox should become independent from the others. Clicking a selected letter should uncheck it. Finally, the footer should show the correct number of the selected items.
*/
function Challenge4Letter({
    letter,
    onToggle,
    isSelected,
}) {
    return (
        <li className={
            isSelected ? 'selected' : ''
        }>
            <label>
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => {
                        onToggle(letter.id);
                    }}
                />
                {letter.subject}
            </label>
        </li>
    )
}

function Challenge4MailClient() {
    const [selectedIds, setSelectedIds] = useState(
        new Set()
    );

    const selectedCount = selectedIds.size;
    const letters = initialLetters;

    function handleToggle(toggledId) {
        // Create a copy (to avoid mutation).
        const nextIds = new Set(selectedIds);
        if (nextIds.has(toggledId)) {
            nextIds.delete(toggledId);
        } else {
            nextIds.add(toggledId);
        }
        setSelectedIds(nextIds);
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Challenge4Letter
                        key={letter.id}
                        letter={letter}
                        isSelected={
                            selectedIds.has(letter.id)
                        }
                        onToggle={handleToggle}
                    />
                ))}
                <hr />
                <p>
                    <b>
                        You selected {selectedCount} letters
                    </b>
                </p>
            </ul>
        </>
    );
}

function ChoosingTheStateStructureChallenge4Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 4: Implement multiple selection </p>
        <Challenge4MailClient />
    </div>);
}

// Try out some challenges
function ChoosingTheStateStructureChallengesDemo() {
    return (<div className="App-left-aligned-content">
        <ChoosingTheStateStructureChallenge1Demo />
        <hr></hr>
        <ChoosingTheStateStructureChallenge2Demo />
        <hr></hr>
        <ChoosingTheStateStructureChallenge3Demo />
        <hr></hr>
        <ChoosingTheStateStructureChallenge4Demo />
    </div>);
}