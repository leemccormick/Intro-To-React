import './App.css';
import { useState } from 'react';
import { useImmer } from 'use-immer';

// Main Default For Updating Objects in State Demo
export default function UpdatingObjectsInStateDemo() {
    return (
        <div>
            <h1 className="App-topic">Updating Objects in State</h1>
            <p>State can hold any kind of JavaScript value, including objects. But you shouldn’t change objects that you hold in the React state directly. Instead, when you want to update an object, you need to create a new one (or make a copy of an existing one), and then set the state to use that copy.</p>

            <h2 className="App-title">What’s a mutation?</h2>
            <WhatMutationDemo />

            <h2 className="App-title">Treat state as read-only</h2>
            <TreatStateAsReadOnlyDemo />

            <h2 className="App-title">Copying objects with the spread syntax</h2>
            <CopyingObjectsWithTheSpreadSyntaxDemo />

            <h2 className="App-title">Updating a nested object</h2>
            <UpdatingNestedObjectDemo />

            <h2 className="App-title">Write concise update logic with Immer</h2>
            <WriteConciseUpdateLogicWithImmerDemo />

            <h2 className="App-title">Recap</h2>
            <UpdatingObjectsInStateRecapDemo />

            <h2 className="App-title">Try out some challenges</h2>
            <UpdatingObjectsInStateChallengesDemo />
        </div>
    );
}

// What’s a mutation?
function WhatMutationDemo() {
    return (<div className="App-left-aligned-content">
        <p>However, although objects in React state are technically mutable, you should treat them as if they were immutable—like numbers, booleans, and strings. Instead of mutating them, you should always replace them.</p>
    </div>);
}

// Treat state as read-only 
function TreatStateAsReadOnlyMovingDot() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    function handelClickMove() {
        setPosition({
            x: 100,
            y: 100
        });
    }

    return (
        <div className='App-container-square'
            onPointerMove={e => {
                position.x = e.clientX;
                position.y = e.clientY;
            }}
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
            }}>

            <div className='App-error-color'>
                <p>This is never use setPosition : So the dot can not be moved, unless click button below.</p>
                <button onClick={handelClickMove}>Move To X : 100 and Y : 100</button>
            </div>

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
    );
}

function TreatStateAsReadOnlyMovingDotWithSetPosition() {
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

            <div className='App-success-color'>
                <p>This is use setPosition : So the dot can be moved.</p>
            </div>

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
    );
}

function TreatStateAsReadOnlyDemo() {
    return (<div className="App-left-aligned-content">
        <p>In other words, you should treat any JavaScript object that you put into state as read-only.</p>
        <div className='App-row-container'>
            <TreatStateAsReadOnlyMovingDot />
            <hr></hr>
            <TreatStateAsReadOnlyMovingDotWithSetPosition />
        </div>
    </div>);
}

// Copying objects with the spread syntax 
function CopyingObjectsWithTheSpreadSyntaxForm() {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    function handleFirstNameChange(e) {
        person.firstName = e.target.value;
    }

    function handleLastNameChange(e) {
        person.lastName = e.target.value;
    }

    function handleEmailChange(e) {
        person.email = e.target.value;
    }

    function handleReset() {
        setPerson({
            firstName: '',
            lastName: '',
            email: '',
        });
    }

    return (
        <div>
            <p className='App-error-color'>*** These input fields don’t work because the onChange handlers mutate the state ***</p>

            <label>
                First name:
                <input
                    value={person.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input
                    value={person.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <label>
                Email:
                <input
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </label>
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
            </p>

            <button onClick={handleReset}>Reset</button>

        </div>
    );
}

function CopyingObjectsWithTheSpreadSyntaxFormWithSetPerson() {
    const [person, setPerson] = useState({
        firstName: 'Set',
        lastName: 'Person',
        email: 'setperson@sculpture.com'
    });

    function handleFirstNameChange(e) {
        setPerson({
            firstName: e.target.value, // New first name from the input
            lastName: person.lastName,
            email: person.email
        });
    }

    function handleLastNameChange(e) {
        setPerson({
            firstName: person.firstName,
            lastName: e.target.value, // New last name from the input
            email: person.email
        });
    }

    function handleEmailChange(e) {
        setPerson({
            firstName: person.firstName,
            lastName: person.lastName,
            email: e.target.value // New email from the input
        });
    }

    return (
        <div>
            <p className='App-hilight-color'>*** The reliable way to get the behavior you’re looking for is to create a new object and pass it to setPerson. But here, you want to also copy the existing data into it because only one of the fields has changed: ***</p>

            <label>
                First name:
                <input
                    value={person.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input
                    value={person.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <label>
                Email:
                <input
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </label>
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
            </p>

        </div>
    );
}

function CopyingObjectsWithTheSpreadSyntaxFormWithObjectSpread() {
    const [person, setPerson] = useState({
        firstName: 'Object',
        lastName: 'Spread',
        email: 'objectspread@sculpture.com'
    });

    function handleFirstNameChange(e) {
        setPerson({
            ...person,
            firstName: e.target.value // New first name from the input
        });
    }

    function handleLastNameChange(e) {
        setPerson({
            ...person,
            lastName: e.target.value // New last name from the input
        });
    }

    function handleEmailChange(e) {
        setPerson({
            ...person,
            email: e.target.value // New email from the input
        });
    }

    return (
        <div>
            <p className='App-success-color'>*** You can use the ... object spread syntax so that you don’t need to copy every property separately.

                ***</p>

            <label>
                First name:
                <input
                    value={person.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input
                    value={person.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <label>
                Email:
                <input
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </label>
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
            </p>

        </div>
    );
}

function CopyingObjectsWithTheSpreadSyntaxDemo() {
    return (<div className="App-left-aligned-content">
        <p>In the previous example, the position object is always created fresh from the current cursor position. But often, you will want to include existing data as a part of the new object you’re creating. For example, you may want to update only one field in a form, but keep the previous values for all other fields.</p>

        <hr></hr>
        <div>
            <CopyingObjectsWithTheSpreadSyntaxForm />
            <hr></hr>
            <CopyingObjectsWithTheSpreadSyntaxFormWithSetPerson />
            <hr></hr>
            <CopyingObjectsWithTheSpreadSyntaxFormWithObjectSpread />

        </div>
    </div>);
}

// Updating a nested object 
function UpdatingNestedObjectForm() {
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });

    function handleNameChange(e) {
        setPerson({
            ...person,
            name: e.target.value
        });
    }

    function handleTitleChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        });
    }

    function handleCityChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value
            }
        });
    }

    function handleImageChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value
            }
        });
    }

    return (
        <>
            <label>
                Name:
                <input
                    value={person.name}
                    onChange={handleNameChange}
                />
            </label>
            <label>
                Title:
                <input
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                />
            </label>
            <label>
                City:
                <input
                    value={person.artwork.city}
                    onChange={handleCityChange}
                />
            </label>
            <label>
                Image:
                <input
                    value={person.artwork.image}
                    onChange={handleImageChange}
                />
            </label>
            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
            <img
                src={person.artwork.image}
                alt={person.artwork.title}
            />
        </>
    );
}

function UpdatingNestedObjectDemo() {
    return (<div className="App-left-aligned-content">
        <p className='App-success-color'>Objects are not really nested </p>
        <p>But in React, you treat state as immutable! In order to change city, you would first need to produce the new artwork object (pre-populated with data from the previous one), and then produce the new person object which points at the new artwork:</p>
        <UpdatingNestedObjectForm />
    </div>);
}

// Write concise update logic with Immer 
function WriteConciseUpdateLogicWithImmerForm() {
    const [person, updatePerson] = useImmer({
        name: 'Immer Library',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });

    function handleNameChange(e) {
        updatePerson(draft => {
            draft.name = e.target.value;
        });
    }

    function handleTitleChange(e) {
        updatePerson(draft => {
            draft.artwork.title = e.target.value;
        });
    }

    function handleCityChange(e) {
        updatePerson(draft => {
            draft.artwork.city = e.target.value;
        });
    }

    function handleImageChange(e) {
        updatePerson(draft => {
            draft.artwork.image = e.target.value;
        });
    }

    return (
        <>
            <p className='App-left-aligned-border '>draft.name = e.target.value;</p>
            <label>
                Name:
                <input
                    value={person.name}
                    onChange={handleNameChange}
                />
            </label>
            <label>
                Title:
                <input
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                />
            </label>
            <label>
                City:
                <input
                    value={person.artwork.city}
                    onChange={handleCityChange}
                />
            </label>
            <label>
                Image:
                <input
                    value={person.artwork.image}
                    onChange={handleImageChange}
                />
            </label>
            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
            <img
                src={person.artwork.image}
                alt={person.artwork.title}
            />
        </>
    );
}

function WriteConciseUpdateLogicWithImmerDemo() {
    return (<div className="App-left-aligned-content">
        <p>Immer is a popular library that lets you write using the convenient but mutating syntax and takes care of producing the copies for you. With Immer, the code you write looks like you are “breaking the rules” and mutating an object</p>
        <p>The draft provided by Immer is a special type of object, called a Proxy, that “records” what you do with it. This is why you can mutate it freely as much as you like! Under the hood, Immer figures out which parts of the draft have been changed, and produces a completely new object that contains your edits.</p>

        <ul>
            <li>
                1.  Run npm install use-immer to add Immer as a dependency
            </li>
            <li>
                2. Then replace import {useState} from 'react' with import {useImmer} from 'use-immer'
            </li>
        </ul>

        <hr></hr>
        <WriteConciseUpdateLogicWithImmerForm />
    </div>);
}

// Recap
function UpdatingObjectsInStateRecapDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>
                Treat all state in React as immutable.
            </li>
            <li>

                When you store objects in state, mutating them will not trigger renders and will change the state in previous render “snapshots”.
            </li>
            <li>
                Instead of mutating an object, create a new version of it, and trigger a re-render by setting state to it.
            </li>
            <li>
                You can use the ...obj, something : newValue object spread syntax to create copies of objects.
            </li>
            <li>
                Spread syntax is shallow: it only copies one level deep.
            </li>
            <li>
                To update a nested object, you need to create copies all the way up from the place you’re updating.
            </li>
            <li>
                To reduce repetitive copying code, use Immer.
            </li>
        </ul>
    </div>);
}

// Try out some challenges
/*
Challenge 1 of 3: Fix incorrect state updates 
- This form has a few bugs. Click the button that increases the score a few times. Notice that it does not increase. Then edit the first name, and notice that the score has suddenly “caught up” with your changes. Finally, edit the last name, and notice that the score has disappeared completely.
- Your task is to fix all of these bugs. As you fix them, explain why each of them happens.
*/
function Challenge1Scoreboard() {
    const [player, setPlayer] = useState({
        firstName: 'Ranjani',
        lastName: 'Shettar',
        score: 10,
    });

    function handlePlusClick() {
        setPlayer({
            ...player,
            score: player.score + 1,
        });
    }

    function handleFirstNameChange(e) {
        setPlayer({
            ...player,
            firstName: e.target.value,
        });
    }

    function handleLastNameChange(e) {
        setPlayer({
            ...player,
            lastName: e.target.value
        });
    }

    return (
        <div>
            <label>
                Score : <b>{player.score}</b>
                {' '}
                <button onClick={handlePlusClick}>
                    Add +1 to the score
                </button>
                {' '} for player : <b>{player.firstName}</b>   {' '} <b>{player.lastName}</b>
            </label>
            <div>
                <label>
                    First name:
                    <input
                        value={player.firstName}
                        onChange={handleFirstNameChange}
                    />
                </label>
                <label>
                    Last name:
                    <input
                        value={player.lastName}
                        onChange={handleLastNameChange}
                    />
                </label>
            </div>
        </div>
    );
}

function UpdatingObjectsInStateChallenge1Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 3: Fix incorrect state updates</p>
        <Challenge1Scoreboard />
    </div>);
}

// Try out some challenges
/*
Challenge 2 of 3: Find and fix the mutation 
- There is a draggable box on a static background. You can change the box’s color using the select input.
- But there is a bug. If you move the box first, and then change its color, the background (which isn’t supposed to move!) will “jump” to the box position. But this should not happen: the Background’s position prop is set to initialPosition, which is { x: 0, y: 0 }. Why is the background moving after the color change?
- Find the bug and fix it.
*/
function Background({
    position
}) {
    return (
        <div style={{
            position: 'absolute',
            transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
            width: 250,
            height: 250,
            backgroundColor: 'rgba(200, 200, 0, 0.2)',
        }} />
    );
};

function Box({
    children,
    color,
    position,
    onMove
}) {
    const [
        lastCoordinates,
        setLastCoordinates
    ] = useState(null);

    function handlePointerDown(e) {
        e.target.setPointerCapture(e.pointerId);
        setLastCoordinates({
            x: e.clientX,
            y: e.clientY,
        });
    }

    function handlePointerMove(e) {
        if (lastCoordinates) {
            setLastCoordinates({
                x: e.clientX,
                y: e.clientY,
            });
            const dx = e.clientX - lastCoordinates.x;
            const dy = e.clientY - lastCoordinates.y;
            onMove(dx, dy);
        }
    }

    function handlePointerUp(e) {
        setLastCoordinates(null);
    }

    return (
        <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            style={{
                width: 100,
                height: 100,
                cursor: 'grab',
                backgroundColor: color,
                position: 'absolute',
                border: '1px solid black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: `translate(
            ${position.x}px,
            ${position.y}px
          )`,
            }}
        >{children}</div>
    );
}

const initialPosition = {
    x: 0,
    y: 0
};

function Challenge2Canvas() {
    const [shape, setShape] = useState({
        color: 'orange',
        position: initialPosition
    });

    function handleMove(dx, dy) {
        setShape({
            ...shape,
            position: {
                x: shape.position.x + dx,
                y: shape.position.y + dy,
            }
        });
    }

    function handleColorChange(e) {
        setShape({
            ...shape,
            color: e.target.value
        });
    }

    return (
        <>
            <select
                value={shape.color}
                onChange={handleColorChange}
            >
                <option value="orange">orange</option>
                <option value="lightpink">lightpink</option>
                <option value="aliceblue">aliceblue</option>
            </select>
            <Background
                position={initialPosition}
            />
            <Box
                color={shape.color}
                position={shape.position}
                onMove={handleMove}
            >
                Drag me!
            </Box>
        </>
    );
}

function UpdatingObjectsInStateChallenge2Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 3: Find and fix the mutation </p>
        <Challenge2Canvas />
    </div>);
}

// Try out some challenges
/*
Challenge 3 of 3: Update an object with Immer 
- This is the same buggy example as in the previous challenge. This time, fix the mutation by using Immer. For your convenience, useImmer is already imported, so you need to change the shape state variable to use it.
*/
function Challenge3CanvasWithImmer() {
    const [shape, updateShape] = useImmer({
        color: 'aliceblue',
        position: initialPosition
    });

    function handleMove(dx, dy) {
        updateShape(draft => {
            draft.position.x += dx;
            draft.position.y += dy;
        });
    }

    function handleColorChange(e) {
        updateShape(draft => {
            draft.color = e.target.value;
        });
    }

    return (
        <>
            <select
                value={shape.color}
                onChange={handleColorChange}
            >
                <option value="orange">orange</option>
                <option value="lightpink">lightpink</option>
                <option value="aliceblue">aliceblue</option>
            </select>
            <Background
                position={initialPosition}
            />
            <Box
                color={shape.color}
                position={shape.position}
                onMove={handleMove}
            >
                Drag me!
            </Box>
        </>
    );
}

function UpdatingObjectsInStateChallenge3Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 3: Update an object with Immer </p>
        <Challenge3CanvasWithImmer />
    </div>);
}

// Try out some challenges
function UpdatingObjectsInStateChallengesDemo() {
    return (<div className="App-left-aligned-content">
        <UpdatingObjectsInStateChallenge1Demo />
        <hr></hr>

        <div className="App-row-container">
            <UpdatingObjectsInStateChallenge2Demo />
            <hr></hr>
            <UpdatingObjectsInStateChallenge3Demo />
        </div>
    </div>);
}