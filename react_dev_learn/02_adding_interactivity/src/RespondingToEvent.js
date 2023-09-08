
import './App.css';
import { useState } from 'react';

/* NOTE : Responding to Events 
- React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.
*/

import { sculptureList } from './data.js';

// Main Default For Responding to Events Demo
export default function RespondingToEventsDemo() {
    return (
        <div>
            <hr></hr>
            <h1 className="App-topic">Responding to Events</h1>
            <p>
                React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.
            </p>

            <h2 className="App-title">Adding event handlers</h2>
            <AddingEventHandlersDemo />

            <h2 className="App-title">Reading props in event handlers</h2>
            <ReadingPropsInEventHandlersDemo />

            <h2 className="App-title">Passing event handlers as props</h2>
            <PassingEventHandlersAsPropsDemo />

            <h2 className="App-title">Naming event handler props</h2>
            <NamingEventHandlerPropsDemo />

            <h2 className="App-title">Event propagation</h2>
            <EventPropagationDemo />

            <h2 className="App-title">Stopping propagation</h2>
            <StoppingPropagationDemo />

            <h2 className="App-title">Passing handlers as alternative to propagation</h2>
            <PassingHandlersAsAlternativeToPropagationDemo />

            <h2 className="App-title">Preventing default behavior</h2>
            <PreventingDefaultBehaviorDemo />

            <h2 className="App-title">Can event handlers have side effects?</h2>
            <CanEventHandlersHaveSideEffectsDemo />

            <h2 className="App-title">Responding to Events Recap</h2>
            <RespondingToEventsRecapDemo />

            <h2 className="App-title">Responding to Events : Try out some challenges</h2>
            <RespondingToEventsTryOutSomeChallengesDemo />
        </div>
    );
}

// Adding event handlers 
function AddingEventHandlersDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-container'>
            <h5>This is a handler click button example : </h5>
            <AddingEventHandlersButton />

            <hr></hr>

            <h5>This is a button with no event handle : </h5>
            <NonEventHandlersButton />
        </div>
    </div>);
}

function NonEventHandlersButton() {
    return (
        <button>
            I don't do anything
        </button>
    );
}

function AddingEventHandlersButton() {
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <div>
            <button onClick={handleClick}>
                Click me
            </button>

            <button onClick={() => {
                alert('Alert in side onClick! You clicked me!');
            }}>
                Click me with alert inside
            </button>

            <button onClick={function handleClickLongest() {
                alert('Alert ! Longest way of writing ! You clicked me!');
            }}>
                Click me longest way of writing
            </button>
        </div>
    );
}

// Reading props in event handlers 
function ReadingPropsInEventHandlersAlertButton({ message, children }) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

function ReadingPropsInEventHandlersToolbar() {
    return (
        <div>
            <ReadingPropsInEventHandlersAlertButton message="Playing!">
                Play Movie
            </ReadingPropsInEventHandlersAlertButton>

            <ReadingPropsInEventHandlersAlertButton message="Uploading!">
                Upload Image
            </ReadingPropsInEventHandlersAlertButton>

            <ReadingPropsInEventHandlersAlertButton message="Testing!">
                I am a button with message "Testing!"
            </ReadingPropsInEventHandlersAlertButton>
        </div>
    );
}

function ReadingPropsInEventHandlersDemo() {
    return (<div className="App-left-aligned-content">
        <p>Because event handlers are declared inside of a component, they have access to the component’s props. Here is a button that, when clicked, shows an alert with its message prop: </p>
        <ReadingPropsInEventHandlersToolbar />
    </div>);
}

// Passing event handlers as props 
function PassingEventButton({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function PlayButton({ movieName }) {
    function handlePlayClick() {
        alert(`Playing ${movieName}!`);
    }

    return (
        <PassingEventButton onClick={handlePlayClick}>
            Play "{movieName}"
        </PassingEventButton>
    );
}

function UploadButton() {
    return (
        <PassingEventButton onClick={() => alert('Uploading!')}>
            Upload Image
        </PassingEventButton>
    );
}

function PropSculptureButton({ sculpture }) {
    function handlePropSculptureClick() {
        alert(`Testing Prop Sculpture : ${sculpture} |  ${sculpture.name} |  ${sculpture.description}`);
    }

    return (
        <PassingEventButton onClick={handlePropSculptureClick}>
            Sculpture "{sculpture.name}"
        </PassingEventButton>
    );
}

function PassingEventHandlersAsPropsDemo() {
    let index = 0
    let sculpture = sculptureList[index];

    return (<div className="App-left-aligned-content">
        <p>To do this, pass a prop the component receives from its parent as the event handler like so:</p>
        <PlayButton movieName="Kiki's Delivery Service" />
        <UploadButton />
        <PropSculptureButton sculpture={sculpture} />
    </div>);
}

// Naming event handler props 
function OnSmashButton({ onSmash, children }) {
    return (
        <button onClick={onSmash}>
            {children}
        </button>
    );
}

function OnClickButton({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function NamimgToolbar({ onPlayMovie, onUploadImage }) {
    return (
        <div>
            <OnClickButton onClick={onPlayMovie}>
                Play Movie : onClick
            </OnClickButton>

            <OnClickButton onClick={onUploadImage}>
                Upload Image : onClick
            </OnClickButton>
        </div>
    );
}

function NamimgToolbarWithName({ sculpture, onPlayMovie, onUploadImage }) {
    function handlePlayMovie() {
        alert(`Before onPlayMovie() | Prop Sculpture : ${sculpture} |  ${sculpture.name} |  ${sculpture.description}`);
        onPlayMovie();
        alert(`After onPlayMovie() | Prop Sculpture : ${sculpture} |  ${sculpture.name}`);
    }

    function handleUploadMovie() {
        alert(`Before onUploadImage() | Prop Sculpture : ${sculpture} |  ${sculpture.name} |  ${sculpture.description}`);
        onUploadImage();
        alert(`After onUploadImage() | Prop Sculpture : ${sculpture} |  ${sculpture.name}`);
    }

    return (
        <div>
            <OnClickButton onClick={handlePlayMovie}>
                Playing Sculpture "{sculpture.name}"
            </OnClickButton>

            <OnClickButton onClick={handleUploadMovie}>
                Uploading Sculpture "{sculpture.name}"
            </OnClickButton>
        </div>
    );
}

function NamingEventHandlerPropsDemo() {
    let index = 2
    let sculpture = sculptureList[index];

    function handlePlayMovieNoParameter() {
        alert(`Playing with handle`)
    }

    function handleUploadMovieNoParameter() {
        alert(`Upload with handle`)
    }

    return (<div className="App-left-aligned-content">
        <p>Built-in components like button and div only support browser event names like onClick. However, when you’re building your own components, you can name their event handler props any way that you like. By convention, event handler props should start with on, followed by a capital letter.</p>

        <OnSmashButton onSmash={() => alert('Playing!')}>
            OnSmash Button : Play Movie
        </OnSmashButton>

        <OnSmashButton onSmash={() => alert('Uploading!')}>
            OnSmash Button : Upload Image
        </OnSmashButton>

        <NamimgToolbar
            onPlayMovie={() => alert('Playing with Good Naming Toolbar!')}
            onUploadImage={() => alert('Uploading with Good Naming Toolbar!!')}
        />

        <NamimgToolbar
            onPlayMovie={handlePlayMovieNoParameter}
            onUploadImage={handleUploadMovieNoParameter}
        />

        <NamimgToolbarWithName
            sculpture={sculpture}
            onPlayMovie={handlePlayMovieNoParameter}
            onUploadImage={handleUploadMovieNoParameter}
        />
    </div>);
}

// Event propagation 
function EventPropagationToolbar() {
    return (
        <div className="App-toolbar" onClick={() => {
            alert('Event propagation --> You clicked on the toolbar!');
        }}>
            <button onClick={() => alert('Playing Event propagation !')}>
                Play Movie
            </button>
            <button onClick={() => alert('Uploading Event propagation !')}>
                Upload Image
            </button>
        </div>
    );
}

function EventPropagationDemo() {
    return (
        <div className="App-left-aligned-content">
            <ul>
                <li>
                    Event handlers will also catch events from any children your component might have. We say that an event “bubbles” or “propagates” up the tree: it starts with where the event happened, and then goes up the tree.
                </li>

                <li>
                    If you click on either button, its onClick will run first, followed by the parent {`<`}div{`>`}’s onClick. So two messages will appear. If you click the toolbar itself, only the parent {`<`}div{`>`}’s onClick will run.
                </li>
            </ul>

            <EventPropagationToolbar />
        </div>
    );
}

// Stopping propagation 
function StoppingPropagationButton({ onClick, children }) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

function StoppingPropagationToolbar() {
    return (
        <div className="App-toolbar" onClick={() => {
            alert('Stopping Propagation Demo : You clicked on the toolbar!');
        }}>
            <StoppingPropagationButton onClick={() => alert('Playing Stopping Propagation Demo!')}>
                Play Movie | Stopping Propagation Demo
            </StoppingPropagationButton>

            <StoppingPropagationButton onClick={() => alert('Uploading Stopping Propagation Demo!')}>
                Upload Image | Stopping Propagation Demo
            </StoppingPropagationButton>
        </div>
    );
}

function StoppingPropagationDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>Event handlers receive an event object as their only argument. By convention, it’s usually called e, which stands for “event”. You can use this object to read information about the event.</li>
            <li>That event object also lets you stop the propagation. If you want to prevent an event from reaching parent components, you need to call e.stopPropagation() like this Button component does:</li>
            <li>Using this code :  e.stopPropagation(); | Before onClick();</li>
        </ul>

        <StoppingPropagationToolbar />
    </div>);
}

// Passing handlers as alternative to propagation 
function PassingHandlersAsAlternativeToPropagationDemo() {
    return (<div className="App-left-aligned-content">
        <p>
            You could add more code to this handler before calling the parent onClick event handler, too. This pattern provides an alternative to propagation. It lets the child component handle the event, while also letting the parent component specify some additional behavior. Unlike propagation, it’s not automatic. But the benefit of this pattern is that you can clearly follow the whole chain of code that executes as a result of some event.
            If you rely on propagation and it’s difficult to trace which handlers execute and why, try this approach instead.
        </p>
    </div>);
}

// Preventing default behavior 
function NonPreventingDefaultBehaviorSignup() {
    return (
        <form onSubmit={() => alert('Submitting! without Preventing default behavior')}>
            <input />
            <button>Send without Preventing default behavior </button>
        </form>
    );
}

function PreventingDefaultBehaviorSignup() {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            alert('Submitting! with Preventing default behavior using e.preventDefault(); inside onSubmit');
        }}>
            <input />
            <button>Send with Preventing default behavior</button>
        </form>
    );
}

function PreventingDefaultBehaviorDemo() {
    return (<div className="App-left-aligned-content">
        <p>Some browser events have default behavior associated with them. For example, a form submit event, which happens when a button inside of it is clicked, will reload the whole page by default:</p>
        <NonPreventingDefaultBehaviorSignup />
        <PreventingDefaultBehaviorSignup />
        <p>Don’t confuse e.stopPropagation() and e.preventDefault(). They are both useful, but are unrelated:

        </p>
        <ul>
            <li>
                e.stopPropagation() stops the event handlers attached to the tags above from firing.
            </li>
            <li>
                e.preventDefault() prevents the default browser behavior for the few events that have it.
            </li>
        </ul>
    </div>);
}

// Can event handlers have side effects? 
function CanEventHandlersHaveSideEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Absolutely! Event handlers are the best place for side effects.</p>
    </div>);
}

// Recap
function RespondingToEventsRecapDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>
                You can handle events by passing a function as a prop to an element like button
            </li>
            <li>
                Event handlers must be passed, not called! onClick=handleClick, not onClick=handleClick().
            </li>
            <li>
                You can define an event handler function separately or inline.
            </li>
            <li>
                Event handlers are defined inside a component, so they can access props.
            </li>
            <li>
                You can declare an event handler in a parent and pass it as a prop to a child.
            </li>
            <li>
                You can define your own event handler props with application-specific names.
            </li>
            <li>
                Events propagate upwards. Call e.stopPropagation() on the first argument to prevent that.
            </li>
            <li>
                Events may have unwanted default browser behavior. Call e.preventDefault() to prevent that.
            </li>
            <li>
                Explicitly calling an event handler prop from a child handler is a good alternative to propagation.
            </li>
        </ul>
    </div>);
}

// Try out some challenges
/*
Challenge 1 of 2: Fix an event handler 
- Clicking this button is supposed to switch the page background between white and black. However, nothing happens when you click it. Fix the problem. (Don’t worry about the logic inside handleClick—that part is fine.)
 */
function LightSwitch() {
    function handleClick() {
        let bodyStyle = document.body.style;
        if (bodyStyle.backgroundColor === 'black') {
            bodyStyle.backgroundColor = 'white';
        } else {
            bodyStyle.backgroundColor = 'black';
        }
    }

    return (
        <button onClick={handleClick}>
            Toggle the lights
        </button>
    );
}

function RespondingToEventsChallenges1Demo() {
    return (<div className="App-left-aligned-content">
        <LightSwitch />
    </div>);
}

// Challenge 1 of 2: Fix an event handler | Redo myself
function LightSwitchChallenges1Demo() {
    const [color, setColor] = useState('grey');

    function handleClick() {
        if (color === 'yellow') {
            setColor('grey');
        } else {
            setColor('yellow');
        }
    }

    return (
        <div style={{ background: color }}>
        <button onClick={handleClick}>
            Toggle the lights
        </button>
        </div>
    );
}

/*
Challenge 2 of 2: Wire up the events 
- This ColorSwitch component renders a button. It’s supposed to change the page color. Wire it up to the onChangeColor event handler prop it receives from the parent so that clicking the button changes the color.
- After you do this, notice that clicking the button also increments the page click counter. Your colleague who wrote the parent component insists that onChangeColor does not increment any counters. What else might be happening? Fix it so that clicking the button only changes the color, and does not increment the counter.
*/

function ColorSwitch({
    onChangeColor
}) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onChangeColor();
        }}>
            Change color
        </button>
    );
}

function RespondingToEventsChallenges2Demo() {
    const [clicks, setClicks] = useState(0);

    function handleClickOutside() {
        setClicks(c => c + 1);
    }

    function getRandomLightColor() {
        let r = 150 + Math.round(100 * Math.random());
        let g = 150 + Math.round(100 * Math.random());
        let b = 150 + Math.round(100 * Math.random());
        return `rgb(${r}, ${g}, ${b})`;
    }

    function handleChangeColor() {
        let bodyStyle = document.body.style;
        bodyStyle.backgroundColor = getRandomLightColor();
    }

    return (
        <div style={{ width: '100%', height: '100%' }} onClick={handleClickOutside}>
            <ColorSwitch onChangeColor={handleChangeColor} />
            <br />
            <br />
            <h2>Clicks on the page: {clicks}</h2>
        </div>
    );
}

// Challenge 2 of 2: Wire up the events | Redo myself
function ColorSwitchWithoutStopPropagation({
    onChangeColor
}) {
    return (
        <button onClick={e => {
            onChangeColor();
        }}>
            Change color
        </button>
    );
}

function ColorChangerChallenges2Demo() {
    const [clicks, setClicks] = useState(0);
    const [color, setColor] = useState('grey');

    function handleClickOutside() {
        setClicks(c => c + 1);
    }

    function getRandomLightColor() {
        let r = 150 + Math.round(100 * Math.random());
        let g = 150 + Math.round(100 * Math.random());
        let b = 150 + Math.round(100 * Math.random());
        return `rgb(${r}, ${g}, ${b})`;
    }

    function handleChangeColor() {
        setColor(getRandomLightColor());
    }

    return (
        <div style={{ background: color }}>
        <div style={{ width: '100%', height: '100%' }} onClick={handleClickOutside}>
            <ColorSwitchWithoutStopPropagation onChangeColor={handleChangeColor} />
            <br />
            <br />
            <h2 style={{ color: 'black' }}>Clicks on the page: {clicks}</h2>
        </div>
        </div>
    );
}

// Color Changer Demo
function ColorChangerDemo() {
    const [color, setColor] = useState('black');

    const changeColor = () => {
        setColor('red');
    };

    return (
        <div>
            <p style={{ color: color }}>This is some text.</p>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

function RespondingToEventsTryOutSomeChallengesDemo() {
    return (<div className="App-left-aligned-content">
        <h4>Challenge 1.1 : </h4>
        <RespondingToEventsChallenges1Demo />
        <hr></hr>

        <h4>Challenge 1.2 : Redo challenge my self</h4>
        <LightSwitchChallenges1Demo />
        <hr></hr>

        <h4>Challenge 2.1 : </h4>
        <RespondingToEventsChallenges2Demo />
        <hr></hr>

        <h4>Challenge 2.2 : Redo challenge my self </h4>
     <ColorChangerChallenges2Demo />
        <hr></hr>

        <h4>Challenge 3 : Color Changer </h4>
        <ColorChangerDemo />
        <hr></hr>
    </div>);
}