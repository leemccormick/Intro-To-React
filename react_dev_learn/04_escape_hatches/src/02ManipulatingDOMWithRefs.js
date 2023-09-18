import './App.css';
import { useState } from 'react';
import { forwardRef, useRef } from 'react';
import { flushSync } from 'react-dom';

// Main Default For Manipulating the DOM with Refs Demo
export default function ManipulatingTheDOMWithRefsDemo() {
    return (
        <div>
            <h1 className="App-topic">Manipulating the DOM with Refs</h1>
            <p>However, sometimes you might need access to the DOM elements managed by React—for example, to focus a node, scroll to it, or measure its size and position. There is no built-in way to do those things in React, so you will need a ref to the DOM node.</p>

            <h2 className="App-title">Getting a ref to the node </h2>
            <GettingRefRoTheNodeDemo />

            <h2 className="App-title">Example: Focusing a text input </h2>
            <ExampleFocusingTextInputDemo />

            <h2 className="App-title">Example: Scrolling to an element </h2>
            <ExampleScrollingToElementDemo />

            <h2 className="App-title">Accessing another component’s DOM nodes </h2>
            <AccessingAnotherComponentDOMNodesDemo />

            <h2 className="App-title"> When React attaches the refs </h2>
            <WhenReactAttachesRefsDemo />

            <h2 className="App-title">Best practices for DOM manipulation with refs </h2>
            <BestPracticesDOMManipulationWithRefsDemo />

            <h2 className="App-title">Recap</h2>
            <RecapManipulatingTheDOMDemo />

            <h2 className="App-title"> Try out some challenges</h2>
            <ChallengesManipulatingTheDOMDemo />
        </div>
    );
}

//--------------------------------------------------------------------------------------
// Getting a ref to the node 
function GettingRefRoTheNodeDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <ol>
                <li>import {'{'} useRef{'}'} from 'react';
                    <span className='App-small-font-size App-hilight-color'> | To access a DOM node managed by React, first, import the useRef Hook </span>
                </li>
                <li> const myRef = useRef(null);
                    <span className='App-small-font-size App-hilight-color'> | Then, use it to declare a ref inside your component</span>
                </li>
                <li> {'<'} udiv ref={'{'} myRef{'}'} {'>'}
                    <span className='App-small-font-size App-hilight-color'> | Finally, pass your ref as the ref attribute to the JSX tag for which you want to get the DOM node. </span>
                </li>
                <li>myRef.current.scrollIntoView();
                    <span className='App-small-font-size App-hilight-color'> | The useRef Hook returns an object with a single property called current. Initially, myRef.current will be null. When React creates a DOM node for this div, React will put a reference to this node into myRef.current. You can then access this DOM node from your event handlers and use the built-in browser APIs defined on it.</span>
                </li>
            </ol>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
// Example: Focusing a text input 
function ExampleFocusingTextInputForm() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} />
            <button onClick={handleClick}>
                Focus the input
            </button>
        </>
    );
}

function ExampleFocusingTextInputDemo() {
    return (<div className="App-left-aligned-content">
        <ExampleFocusingTextInputForm />
        <p>To implement this:</p>
        <ul>
            <ol>
                <li>Declare inputRef with the useRef Hook.</li>
                <li>Pass it as {'<'} input ref={'{'} inputRef{'}'}{'>'}. This tells React to put this input’s DOM node into inputRef.current.</li>
                <li>In the handleClick function, read the input DOM node from inputRef.current and call focus() on it with inputRef.current.focus().</li>
                <li>Pass the handleClick event handler to {'<'} button{'>'} with onClick.</li>
            </ol>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
// Example: Scrolling to an element 
function ExampleScrollingToElementCatFriends1() {
    const firstCatRef = useRef(null);
    const secondCatRef = useRef(null);
    const thirdCatRef = useRef(null);

    function handleScrollToFirstCat() {
        firstCatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    function handleScrollToSecondCat() {
        secondCatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    function handleScrollToThirdCat() {
        thirdCatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    return (
        <>
            <nav>
                <button onClick={handleScrollToFirstCat}>
                    Tom
                </button>
                <button onClick={handleScrollToSecondCat}>
                    Maru
                </button>
                <button onClick={handleScrollToThirdCat}>
                    Jellylorum
                </button>
            </nav>
            <div>
                <ul>
                    <li className='App-li-inline '>
                        <img
                            src="https://placekitten.com/g/200/200"
                            alt="Tom"
                            ref={firstCatRef}
                        />
                    </li>
                    <li className='App-li-inline '>
                        <img
                            src="https://placekitten.com/g/300/200"
                            alt="Maru"
                            ref={secondCatRef}
                        />
                    </li>
                    <li className='App-li-inline '>
                        <img
                            src="https://placekitten.com/g/250/200"
                            alt="Jellylorum"
                            ref={thirdCatRef}
                        />
                    </li>
                </ul>
            </div>
        </>
    );
}

const catList = [];
for (let i = 0; i < 10; i++) {
    catList.push({
        id: i,
        imageUrl: 'https://placekitten.com/250/200?image=' + i
    });
}

function ExampleScrollingToElementWithListCatFriends2() {
    const itemsRef = useRef(null);

    function getMap() {
        if (!itemsRef.current) {
            // Initialize the Map on first usage.
            itemsRef.current = new Map();
        }
        return itemsRef.current;
    }

    function scrollToId(itemId) {
        const map = getMap();
        const node = map.get(itemId);
        node.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    return (
        <div className='App-left-aligned-content'>
            <nav>
                <button onClick={() => scrollToId(0)}>
                    Tom
                </button>
                <button onClick={() => scrollToId(5)}>
                    Maru
                </button>
                <button onClick={() => scrollToId(9)}>
                    Jellylorum
                </button>
            </nav>
            <hr></hr>
            <div>
                <ul>
                    {catList.map(cat => (
                        <li className='App-li-inline'
                            key={cat.id}
                            ref={(node) => {
                                const map = getMap();
                                if (node) {
                                    map.set(cat.id, node);
                                } else {
                                    map.delete(cat.id);
                                }
                            }}
                        >
                            <img
                                src={cat.imageUrl}
                                alt={'Cat #' + cat.id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function ExampleScrollingToElementDemo() {
    return (<div className="App-left-aligned-content">
        <p>Scrolling to the selected cat demo : </p>
        <ExampleScrollingToElementCatFriends1 />
        <hr></hr>
        <p>Scrolling to the selected arry of the cat demo : </p>
        <div>
            <div className='App-left-aligned-border  App-small-font-size '>
                <p>In this example, itemsRef doesn’t hold a single DOM node. Instead, it holds a Map from item ID to a DOM node. (Refs can hold any values!) The ref callback on every list item takes care to update the Map:</p>
                <hr></hr>
                <div >
                    <p>{'<'}li</p>
                    <div className='App-tabbed-content'>
                        <p>  ref={'{'}node ={'>'} {'{'}</p>
                        <div className='App-tabbed-content'>
                            <p>    const map = getMap();</p>
                            <p className='App-hilight-color'>if (node) {'{'}</p>
                            <p className='App-success-color'>{'//'} Add to the Map</p>
                            <p className='App-hilight-color'> map.set(cat.id, node);</p>
                            <p className='App-hilight-color'>{'}'} else {'{'}</p>
                            <p className='App-success-color'>{'//'} Remove from the Map</p>
                            <p className='App-hilight-color'>map.delete(cat.id);</p>
                            <p className='App-hilight-color'>{'}'} </p>
                        </div>
                        <p>  ref={'}'}{'}'}</p>
                    </div>
                    <p>{'>'}</p>
                </div>
                <hr></hr>
                <ExampleScrollingToElementWithListCatFriends2 />
            </div>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Accessing another component’s DOM nodes 
const MyInput = forwardRef((props, ref) => {
    return <input {...props} ref={ref} />;
});

function AccessingAnotherComponentDOMNodesDForm() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        <>
            <MyInput ref={inputRef} />
            <button onClick={handleClick}>
                Focus the input
            </button>
        </>
    );
}

function AccessingAnotherComponentDOMNodesDemo() {
    return (<div className="App-left-aligned-content">
        <p>This is how it works:</p>
        <ul>
            <ol>
                <li>{'<'}MyInput ref={'{'}inputRef{'}'} /{'>'} tells React to put the corresponding DOM node into inputRef.current. However, it’s up to the MyInput component to opt into that—by default, it doesn’t.</li>
                <li>The MyInput component is declared using forwardRef. This opts it into receiving the inputRef from above as the second ref argument which is declared after props.</li>
                <li>MyInput itself passes the ref it received to the {'<'}input{'>'} inside of it.</li>
            </ol>
        </ul>
        <AccessingAnotherComponentDOMNodesDForm />
    </div>);
}

//--------------------------------------------------------------------------------------
// When React attaches the refs 
let nextId = 0;
let initialTodos = [];
for (let i = 0; i < 20; i++) {
    initialTodos.push({
        id: nextId++,
        text: 'Todo #' + (i + 1)
    });
}

function WhenReactAttachesRefsTodoList() {
    const listRef = useRef(null);
    const [text, setText] = useState('');
    const [todos, setTodos] = useState(
        initialTodos
    );

    function handleAdd() {
        const newTodo = { id: nextId++, text: text };
        flushSync(() => {
            setText('');
            setTodos([...todos, newTodo]);
        });
        listRef.current.lastChild.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }

    function handleAddWithoutFlushSync() {
        const newTodo = { id: nextId++, text: text };
        setText('');
        setTodos([...todos, newTodo]);
        listRef.current.lastChild.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }

    return (
        <div className='App-left-aligned-content'>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <br></br>

            <div className='App-row-container'>
                <button onClick={handleAdd}>
                    <h4>Add With flushSync() </h4> This will scroll to the last element that just added.
                </button>

                <button onClick={handleAddWithoutFlushSync}>
                    <h4 className='App-error-color'> Add Without flushSync()</h4> This will scroll to the element before last one.
                </button>
            </div>

            <ul ref={listRef}>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}

function WhenReactAttachesRefsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Usually, you will access refs from event handlers. If you want to do something with a ref, but there is no particular event to do it in, you might need an Effect. We will discuss effects on the next pages.</p>
        <WhenReactAttachesRefsTodoList />
    </div>);
}

//--------------------------------------------------------------------------------------
// Best practices for DOM manipulation with refs 
function BestPracticesDOMManipulationWithRefsCounter() {
    const [show, setShow] = useState(true);
    const ref = useRef(null);

    return (
        <div>
            <button
                onClick={() => {
                    setShow(!show);
                }}>
                Toggle with setState
            </button>
            <button
                onClick={() => {
                    ref.current.remove();
                }}>
                Remove from the DOM
            </button>
            {show && <p ref={ref}>Hello world</p>}
        </div>
    );
}

function BestPracticesDOMManipulationWithRefsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Refs are an escape hatch. You should only use them when you have to “step outside React”. Common examples of this include managing focus, scroll position, or calling browser APIs that React does not expose.</p>
        <BestPracticesDOMManipulationWithRefsCounter />
        <div className='App-left-aligned-border App-small-font-size'>
            <p className=' App-error-color '>After you’ve manually removed the DOM element, trying to use setState to show it again will lead to a crash. This is because you’ve changed the DOM, and React doesn’t know how to continue managing it correctly.</p>
            <p>Avoid changing DOM nodes managed by React. Modifying, adding children to, or removing children from elements that are managed by React can lead to inconsistent visual results or crashes like above.</p>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Recap
function RecapManipulatingTheDOMDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>Refs are a generic concept, but most often you’ll use them to hold DOM elements.</li>
            <li>You instruct React to put a DOM node into myRef.current by passing {'<'}div ref={'{'}myRef{'}'} {'>'}.</li>
            <li>Usually, you will use refs for non-destructive actions like focusing, scrolling, or measuring DOM elements.</li>
            <li>A component doesn’t expose its DOM nodes by default. You can opt into exposing a DOM node by using forwardRef and passing the second ref argument down to a specific node.</li>
            <li>Avoid changing DOM nodes managed by React.</li>
            <li>If you do modify DOM nodes managed by React, modify parts that React has no reason to update.</li>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
//**************************************************************************************
// Try out some challenges
/*
Challenge 1 of 4: Play and pause the video 
- In this example, the button toggles a state variable to switch between a playing and a paused state. However, in order to actually play or pause the video, toggling state is not enough. You also need to call play() and pause() on the DOM element for the <video>. Add a ref to it, and make the button work.
*/
function Challenges1VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const ref = useRef(null);

    function handleClick() {
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying);
        if (nextIsPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }

    return (
        <>
            <button onClick={handleClick}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <video
                width="250"
                ref={ref}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4"
                />
            </video>
        </>
    )
}

function Challenges1ManipulatingTheDOM1Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 4: Play and pause the video </p>
        <Challenges1VideoPlayer />
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 2 of 4: Focus the search field 
- Make it so that clicking the “Search” button puts focus into the field.
*/
function Challenge2Page() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        <>
            <nav>
                <button onClick={handleClick}>Search</button>
            </nav>
            <input
                placeholder="Looking for something?"
                ref={inputRef}
            />
        </>
    );
}

function Challenges2ManipulatingTheDOMDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 4: Focus the search field </p>
        <Challenge2Page />
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 3 of 4: Scrolling an image carousel 
- This image carousel has a “Next” button that switches the active image. Make the gallery scroll horizontally to the active image on click. You will want to call scrollIntoView() on the DOM node of the active image:
*/
function Challenge3CatFriends() {
    const [index, setIndex] = useState(0);
    const itemsRef = useRef(null);

    function getMapChallenge3() {
        if (!itemsRef.current) {
            // Initialize the Map on first usage.
            itemsRef.current = new Map();
        }
        return itemsRef.current;
    }

    function scrollToNext() {
        if (index < catList.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }

        const map = getMapChallenge3();
        const node = map.get(index);
        node.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    return (
        <div>
            <nav>
                <button onClick={scrollToNext}>
                    Next
                </button>
            </nav>
            <div>
                <ul>
                    {catList.map((cat, i) => (
                        <li className='App-li-inline '
                            key={cat.id}
                            ref={(node) => {
                                const map = getMapChallenge3();
                                if (node) {
                                    map.set(cat.id, node);
                                } else {
                                    map.delete(cat.id);
                                }
                            }}
                        >
                            <img
                                className={
                                    index === i ?
                                        'App-img-with-border  App-active' :
                                        'App-img-with-border '
                                }
                                src={cat.imageUrl}
                                alt={'Cat #' + cat.id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function Challenge3CatFriendsSolutionWithFlushSync() {
    const selectedRef = useRef(null);
    const [index, setIndex] = useState(0);

    return (
        <div>
            <nav>
                <button onClick={() => {
                    flushSync(() => {
                        if (index < catList.length - 1) {
                            setIndex(index + 1);
                        } else {
                            setIndex(0);
                        }
                    });

                    selectedRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center'
                    });
                }}>
                    Next
                </button>
            </nav>
            <div>
                <ul>
                    {catList.map((cat, i) => (
                        <li className='App-li-inline '
                            key={cat.id}
                            ref={index === i ?
                                selectedRef :
                                null
                            }
                        >
                            <img
                                className={
                                    index === i ?
                                        'App-img-with-border  App-active-red' :
                                        'App-img-with-border '
                                }
                                src={cat.imageUrl}
                                alt={'Cat #' + cat.id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function Challenges3ManipulatingTheDOM1Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 4: Scrolling an image carousel </p>
        <Challenge3CatFriends />
        <hr></hr>
        <p>This is a solution with FlushSync().</p>
        <Challenge3CatFriendsSolutionWithFlushSync />
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 4 of 4: Focus the search field with separate components 
- Make it so that clicking the “Search” button puts focus into the field. Note that each component is defined in a separate file and shouldn’t be moved out of it. How do you connect them together?
*/
const SearchInputChallenge4 = forwardRef((props, ref) => {
    return <input {...props} ref={ref} placeholder="Looking for something?" />;
});

function SearchButtonChallenge4({ onClick }) {
    return (
        <button onClick={onClick}>
            Search
        </button>
    );
}

function Challenge4Page() {
    const inputRef = useRef(null);

    return (
        <>
            <nav>
                <SearchButtonChallenge4 onClick={() => {
                    inputRef.current.focus();
                }} />
            </nav>
            <SearchInputChallenge4 ref={inputRef} />
        </>
    );
}

function Challenges4ManipulatingTheDOMDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 4: Focus the search field with separate components </p>
        <Challenge4Page />
    </div>);
}

//**************************************************************************************
// Try out some challenges
function ChallengesManipulatingTheDOMDemo() {
    return (<div className="App-left-aligned-content">
        <Challenges1ManipulatingTheDOM1Demo />
        <hr></hr>
        <Challenges2ManipulatingTheDOMDemo />
        <hr></hr>
        <Challenges3ManipulatingTheDOM1Demo />
        <hr></hr>
        <Challenges4ManipulatingTheDOMDemo />
        <hr></hr>
    </div>);
}