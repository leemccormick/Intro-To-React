
import './App.css';
import { useState } from 'react';
import { sculptureList } from './data.js';
import { useImmer } from 'use-immer';

/* NOTE : Adding Interactivity
- Some things on the screen update in response to user input. For example, clicking an image gallery switches the active image. In React, data that changes over time is called state. You can add state to any component, and update it as needed. In this chapter, you’ll learn how to write components that handle interactions, update their state, and display different output over time.
*/

// Responding to events
function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
        <div>
            <Button onClick={onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick={onUploadImage}>
                Upload Image
            </Button>
        </div>
    );
}

function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function RespondingToEventsDemo() {
    return <Toolbar
        onPlayMovie={() => alert('Playing!')}
        onUploadImage={() => alert('Uploading!')}
    />
}

// State: a component’s memory 
/* NOTE : 
- Need to --> import { useState } from 'react';
- Need to --> import { sculptureList } from './data.js';
- Without export the app is not running
*/
export function StateComponentMemoryWithGalleryDemo() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < sculptureList.length - 1;

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];

    return (
        <div className="App-left-aligned-content">
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

            <div>
                {showMore && <p>{sculpture.description}</p>}
            </div>

            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </div>
    );
}

// Render and commit 
function RenderAndCommitDemo() {
    return (<div className="App-left-aligned-content">
        <h4>This process of requesting and serving UI has three steps:</h4>
        <ul>
            <li>1. Triggering a render (delivering the diner’s order to the kitchen)</li>
            <li>2.Rendering the component (preparing the order in the kitchen)</li>
            <li>3.Committing to the DOM (placing the order on the table)</li>
        </ul>
    </div>);
}

// State as a snapshot
function StateAsASnapshotWithChatFormDemo() {
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
                        <option value="Lee">Lee</option>
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
        </div>
    );
}

// Queueing a series of state updates 
function CounterBuggy() {
    const [score, setScore] = useState(0);

    function increment() {
        console.log("This a buggy score before set : " + score);
        setScore(score + 1);
        console.log("This a buggy score after set : " + score);
    }

    return (
        <>
            <button onClick={() => increment()}>+1</button>
            <button onClick={() => {
                increment();
                increment();
                increment();
            }}>+3</button>
            <h1>Score: {score}</h1>
        </>
    )
}

function CounterCleaned() {
    const [score, setScore] = useState(0);

    function increment() {
        console.log("This a correct score before set : " + score);
        setScore(score => score + 1);
        console.log("This a correct score before set : " + score);
    }

    return (
        <>
            <button onClick={() => increment()}>+1</button>
            <button onClick={() => {
                increment();
                increment();
                increment();
            }}>+3</button>
            <h1>Score: {score}</h1>
        </>
    )
}

function QueueingASeriesOfStateUpdatesDemo() {
    return (
        <div className="App-left-aligned-content">
            <h4 className='App-error-color '>This is a buggy counter demo.</h4>
            <CounterBuggy />

            <h4 className='App-success-color'>This is a counter demo without bugs using Queueing a serries of state.</h4>
            <p>
                You can fix this by passing an updater function when setting state. Notice how replacing setScore(score + 1) with setScore(s ={`>`} s + 1) fixes the “+3” button. This lets you queue multiple state updates.
            </p>
            <CounterCleaned />
        </div>
    );
}

// Updating objects in state 
/*
- If copying objects in code gets tedious, you can use a library like Immer to reduce repetitive code --> import { useImmer } from 'use-immer'; 
 */
function UpdatingObjectFormDemo() {
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

function UpdatingObjectFormUsingImmerLibraryDemo() {
    const [person, updatePerson] = useImmer({
        name: 'Immer Library',
        artwork: {
            title: 'Lee McCormick',
            city: 'Bangkok, Thailand',
            image: 'https://i.imgur.com/vIUntsq.jpeg',
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

function UpdatingObjectsInStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>
            State can hold any kind of JavaScript value, including objects. But you shouldn’t change objects and arrays that you hold in the React state directly. Instead, when you want to update an object and array, you need to create a new one (or make a copy of an existing one), and then update the state to use that copy.
        </p>

        <h4>Demo For Updating Object</h4>
        <UpdatingObjectFormDemo />
        <hr></hr>

        <h4 className='App-success-color'>Demo For Updating Object Using Immer Library</h4>
        <ul>
            <li>Step 1 : npm install use-immer</li>
            <li>Step 2 : import useImmer from 'use-immer';</li>
        </ul>
        <UpdatingObjectFormUsingImmerLibraryDemo />
    </div>);
}

// Updating arrays in state 
const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
    { id: 3, title: 'Lee Demo', seen: true },
];

function UpdatingArrayItemList({ artworks, onToggle }) {
    return (
        <ul className='App-no-bullet-ul'>
            {artworks.map(artwork => (
                <li key={artwork.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={artwork.seen}
                            onChange={e => {
                                onToggle(
                                    artwork.id,
                                    e.target.checked
                                );
                            }}
                        />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    );
}

function UpdatingArrayBucketListDemo() {
    const [list, setList] = useState(
        initialList
    );

    function handleToggle(artworkId, nextSeen) {
        setList(list.map(artwork => {
            if (artwork.id === artworkId) {
                return { ...artwork, seen: nextSeen };
            } else {
                return artwork;
            }
        }));
    }

    return (
        <>
            <h1>Art Bucket List</h1>

            <h4>Inital List to see :</h4>
            <div>
            <ul className='App-no-bullet-ul'>
                {initialList.map(artwork => (
                    <li className='App-success-color' key={artwork.id}>
                         <label> {artwork.seen  && '✔ '}   {artwork.title} </label>
                    </li>))}
            </ul>
            </div>

            <h2>My list of art to see :</h2>
            <UpdatingArrayItemList
                artworks={list}
                onToggle={handleToggle} />
        </>
    );
}

function UpdatingArraysInStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>
            Arrays are another type of mutable JavaScript objects you can store in state and should treat as read-only. Just like with objects, when you want to update an array stored in state, you need to create a new one (or make a copy of an existing one), and then set state to use the new array:
        </p>
        <UpdatingArrayBucketListDemo />
    </div>);
}

// Main Default For Add Interactivity Demo
export default function AddInteractivityDemo() {
    return (
        <div>
            <h1 className="App-topic">Add Interactivity Demo</h1>

            <h2 className="App-title">Responding to events</h2>
            <RespondingToEventsDemo />

            <h2 className="App-title">State: a component’s memory</h2>
            <StateComponentMemoryWithGalleryDemo />

            <h2 className="App-title">Render and commit test test </h2>
            <RenderAndCommitDemo />

            <h2 className="App-title">State as a snapshot</h2>
            <StateAsASnapshotWithChatFormDemo />

            <h2 className="App-title">Queueing a series of state updates</h2>
            <QueueingASeriesOfStateUpdatesDemo />

            <h2 className="App-title">Updating objects in state</h2>
            <UpdatingObjectsInStateDemo />

            <h2 className="App-title">Updating arrays in state</h2>
            <UpdatingArraysInStateDemo />
        </div>
    );
}