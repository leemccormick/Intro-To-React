import './App.css';
import React from 'react';
import { useState } from 'react';

// Main Default For Reacting to Input with State
export default function ReactingInputWithStateDemo() {
    return (
        <div>
            <hr></hr>
            <p>Instead of manipulating individual pieces of the UI directly, you describe the different states that your component can be in, and switch between them in response to the user input. This is similar to how designers think about the UI.</p>

            <h2 className="App-title">How declarative UI compares to imperative</h2>
            <HowDeclarativeUIComparesToImperativeDemo />

            <h2 className="App-title">Thinking about UI declaratively</h2>
            <ThinkingAboutUIDeclarativelyDemo />

            <h2 className="App-title">Step 1: Identify your component’s different visual states</h2>
            <Step1IdentifyDemo />

            <h2 className="App-title">Step 2: Determine what triggers those state changes</h2>
            <Step2DetermineDemo />

            <h2 className="App-title">Step 3: Represent the state in memory with useState </h2>
            <Step3RepresentDemo />

            <h2 className="App-title">Step 4: Remove any non-essential state variables </h2>
            <Step4RemoveDemo />

            <h2 className="App-title">Step 5: Connect the event handlers to set state </h2>
            <Step5ConnectDemo />

            <h2 className="App-title">Recap</h2>
            <ReactingInputWithStateRecapDemo />

            <h2 className="App-title">Try out some challenges</h2>
            <ReactingInputWithStateChallengesDemo />
        </div>
    );
}

// How declarative UI compares to imperative 
function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'istanbul'
            if (shouldError) {
                reject(new Error('Good guess but a wrong answer. Try again!'));
            } else {
                resolve();
            }
        }, 1500);
    });
}

function HowDeclarativeUIComparesToImperativeForm() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>That's right!</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        setLoading(true);
        setError('');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }

    return (
        <>
            <h2>City quiz</h2>
            <p>
                What city is located on two continents?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                />
                <br />

                <button disabled={
                    answer.length === 0 ||
                    status === 'submitting'
                }>
                    Submit
                </button>

                {error !== null &&
                    <p className='App-error-color'>
                        {error.message}
                    </p>
                }

                {loading &&
                    <h4 className='App-hilight-color'>
                        Loading...
                    </h4>
                }
            </form>
        </>
    );
}

function HowDeclarativeUIComparesToImperativeDemo() {
    return (<div className="App-left-aligned-content">
        <p>In imperative programming, the above corresponds directly to how you implement interaction. You have to write the exact instructions to manipulate the UI depending on what just happened.</p>

        <ul>
            <li>
                When you type something into the form, the “Submit” button becomes enabled.
            </li>
            <li>
                When you press “Submit”, both the form and the button become disabled, and a spinner appears.
            </li>
            <li>
                If the network request succeeds, the form gets hidden, and the “Thank you” message appears.
            </li>
            <li>
                If the network request fails, an error message appears, and the form becomes enabled again.
            </li>
        </ul>

        <HowDeclarativeUIComparesToImperativeForm />
    </div>);
}

// Thinking about UI declaratively 
function ThinkingAboutUIDeclarativelyDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>
                1. Identify |  your component’s different visual states
            </li>
            <li>
                2. Determine |  what triggers those state changes
            </li>
            <li>
                3. Represent | the state in memory using useState
            </li>
            <li>
                4. Remove | any non-essential state variables
            </li>
            <li>
                5. Connect | the event handlers to set the state
            </li>
        </ul>
    </div>);
}

// Step 1: Identify your component’s different visual states 
function Step1IdentifyEmptyForm({
    status = 'empty'
}) {
    if (status === 'success') {
        return <h1>That's right!</h1>
    }
    return (
        <>
            <h2>City quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkable water?
            </p>
            <form>
                <textarea disabled={
                    status === 'submitting'
                } />
                <br />
                <button disabled={
                    status === 'empty' ||
                    status === 'submitting'
                }>
                    Submit
                </button>
                {status === 'error' &&
                    <p className="App-error-color">
                        Good guess but a wrong answer. Try again!
                    </p>
                }
            </form>
        </>
    );
}

function Step1IdentifySubmittingForm({
    status = 'submitting'
}) {
    if (status === 'success') {
        return <h1>That's right!</h1>
    }
    return (
        <>
            <h2>City quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkable water?
            </p>
            <form>
                <textarea disabled={
                    status === 'submitting'
                } />
                <br />
                <button disabled={
                    status === 'empty' ||
                    status === 'submitting'
                }>
                    Submit
                </button>
                {status === 'error' &&
                    <p className="App-error-color">
                        Good guess but a wrong answer. Try again!
                    </p>
                }
            </form>
        </>
    );
}

function Step1IdentifyErrorForm({
    status = 'error'
}) {
    if (status === 'success') {
        return <h1>That's right!</h1>
    }
    return (
        <>
            <h2>City quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkable water?
            </p>
            <form>
                <textarea disabled={
                    status === 'submitting'
                } />
                <br />
                <button disabled={
                    status === 'empty' ||
                    status === 'submitting'
                }>
                    Submit
                </button>
                {status === 'error' &&
                    <p className="App-error-color">
                        Good guess but a wrong answer. Try again!
                    </p>
                }
            </form>
        </>
    );
}

function Step1IdentifySuccessForm({
    status = 'success'
}) {
    if (status === 'success') {
        return <h1>That's right!</h1>
    }
    return (
        <>
            <h2>City quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkable water?
            </p>
            <form>
                <textarea disabled={
                    status === 'submitting'
                } />
                <br />
                <button disabled={
                    status === 'empty' ||
                    status === 'submitting'
                }>
                    Submit
                </button>
                {status === 'error' &&
                    <p className="App-error-color">
                        Good guess but a wrong answer. Try again!
                    </p>
                }
            </form>
        </>
    );
}

function Step1IdentifyDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>
                Empty: Form has a disabled “Submit” button.
            </li>
            <li>
                Typing: Form has an enabled “Submit” button.
            </li>
            <li>
                Submitting: Form is completely disabled. Spinner is shown.
            </li>
            <li>
                Success: “Thank you” message is shown instead of a form.
            </li>
            <li>
                Error: Same as Typing state, but with an extra error message.
            </li>
        </ul>

        <div>
            <h4 className='App-hilight-color'>Empty State Example</h4>
            <Step1IdentifyEmptyForm />
            <hr></hr>

            <h4 className='App-hilight-color'>Submitting State Example</h4>
            <Step1IdentifySubmittingForm />
            <hr></hr>

            <h4 className='App-hilight-color'>Error State Example</h4>
            <Step1IdentifyErrorForm />
            <hr></hr>

            <h4 className='App-hilight-color'>Success State Example</h4>
            <Step1IdentifySuccessForm />
            <hr></hr>
        </div>
    </div>);
}

// Step 2: Determine what triggers those state changes 
function Step2DetermineDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-container'>
            <img
                src='https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fresponding_to_input_flow.png&w=750&q=75'
                alt="Determine Demo"
            />

            <div className='App-left-aligned-border'>
                <ul>
                    <li className='App-medium-font-size'>
                        - Changing the text input (human) should switch it from the Empty state to the Typing state or back, depending on whether the text box is empty or not.
                    </li>
                    <li className='App-medium-font-size'>
                        - Clicking the Submit button (human) should switch it to the Submitting state.
                    </li>
                    <li className='App-medium-font-size'>
                        - Successful network response (computer) should switch it to the Success state.
                    </li>
                    <li className='App-medium-font-size'>
                        - Failed network response (computer) should switch it to the Error state with the matching error message.
                    </li>
                </ul>
            </div>
        </div>

        <ul>
            <li className='App-medium-font-size'>- Human inputs, like clicking a button, typing in a field, navigating a link.</li>
            <li className='App-medium-font-size'>- Computer inputs, like a network response arriving, a timeout completing, an image loading.</li>
        </ul>
    </div>);
}

// Step 3: Represent the state in memory with useState
function Step3RepresentDemo() {
    return (<div className="App-left-aligned-content">
        <p> Simplicity is key: each piece of state is a “moving piece”, and you want as few “moving pieces” as possible. </p>
        <ul>
            <li>const [answer, setAnswer] = useState(''); </li>
            <li>const [error, setError] = useState(null);</li>
            <li>const [isEmpty, setIsEmpty] = useState(true);</li>
            <li>const [isTyping, setIsTyping] = useState(false);</li>
            <li>const [isSubmitting, setIsSubmitting] = useState(false); </li>
            <li>const [isSuccess, setIsSuccess] = useState(false);    </li>
            <li>const [isError, setIsError] = useState(false);</li>
        </ul>
    </div>);
}

// Step 4: Remove any non-essential state variables 
function Step4RemoveDemo() {
    return (<div className="App-left-aligned-content">
        <p> Your goal is to prevent the cases where the state in memory doesn’t represent any valid UI that you’d want a user to see.</p>

        <div className='App-left-aligned-border'>
            <h4 className='App-medium-font-size'>Does this state cause a paradox? </h4>
            <p className='App-small-font-size'> For example, isTyping and isSubmitting can’t both be true. A paradox usually means that the state is not constrained enough. There are four possible combinations of two booleans, but only three correspond to valid states. To remove the “impossible” state, you can combine these into a status that must be one of three values: 'typing', 'submitting', or 'success'.</p>
        </div>

        <div className='App-left-aligned-border'>
            <h4 className='App-medium-font-size'>Is the same information available in another state variable already? </h4>
            <p className='App-small-font-size'> Another paradox: isEmpty and isTyping can’t be true at the same time. By making them separate state variables, you risk them going out of sync and causing bugs. Fortunately, you can remove isEmpty and instead check answer.length === 0.</p>
        </div>

        <div className='App-left-aligned-border'>
            <h4 className='App-medium-font-size'>Can you get the same information from the inverse of another state variable?</h4>
            <p className='App-small-font-size'> isError is not needed because you can check error !== null instead.</p>
        </div>

        <p className='App-success-color'>After this clean-up, you’re left with 3 (down from 7!) essential state variables:</p>
        <ul>
            <li>const [answer, setAnswer] = useState(''); </li>
            <li>const [error, setError] = useState(null);</li>
            <li>const [status, setStatus] = useState('typing'); // 'typing', 'submitting', or 'success'</li>
        </ul>
    </div>);
}

// Step 5: Connect the event handlers to set state 
function submitStep5ConnectForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima'
            if (shouldError) {
                reject(new Error('Good guess but a wrong answer. Try again!'));
            } else {
                resolve();
            }
        }, 1500);
    });
}

function Step5ConnectForm() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>That's right!</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitStep5ConnectForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }

    return (
        <>
            <h2>City quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkable water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                />
                <br />
                <button disabled={
                    answer.length === 0 ||
                    status === 'submitting'
                }>
                    Submit
                </button>
                {error !== null &&
                    <p className="Error">
                        {error.message}
                    </p>
                }
            </form>
        </>
    );
}



function Step5ConnectDemo() {
    return (<div className="App-left-aligned-content">
        <p>Expressing all interactions as state changes lets you later introduce new visual states without breaking existing ones. It also lets you change what should be displayed in each state without changing the logic of the interaction itself.</p>
        <Step5ConnectForm />
    </div>);
}

// Recap
function ReactingInputWithStateRecapDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>
                Declarative programming means describing the UI for each visual state rather than micromanaging the UI (imperative).
            </li>
            <li>
                When developing a component:
                <div className='App-left-aligned-border'>
                    <li className='App-medium-font-size'>1.Identify all its visual states.</li>
                    <li className='App-medium-font-size'>2.Determine the human and computer triggers for state changes.</li>
                    <li className='App-medium-font-size'>3.Model the state with useState.</li>
                    <li className='App-medium-font-size'>4.Remove non-essential state to avoid bugs and paradoxes.</li>
                    <li className='App-medium-font-size'>5.Connect the event handlers to set state.</li>
                </div>
            </li>
        </ul>
    </div>);
}

// Try out some challenges
/*
Challenge 1 of 3: Add and remove a CSS class 
- Make it so that clicking on the picture removes the background--active CSS class from the outer <div>, but adds the picture--active class to the <img>. Clicking the background again should restore the original CSS classes.
- Visually, you should expect that clicking on the picture removes the purple background and highlights the picture border. Clicking outside the picture highlights the background, but removes the picture border highlight.
 */
function Challenge1Picture() {
    const [isActive, setIsActive] = useState(false);
    let backgroundClassName = 'App-background';
    let pictureClassName = 'App-picture';
    if (isActive) {
        pictureClassName = 'App-picture--active'
    } else {
        backgroundClassName = 'App-background--active '
    }

    return (
        <div className={backgroundClassName}
            onClick={() => setIsActive(false)}>

            <img
                className={pictureClassName}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="https://i.imgur.com/5qwVYb1.jpeg"
                onClick={e => {
                    e.stopPropagation();
                    setIsActive(true);
                }}
            />
        </div>
    );
}

function ReactingInputWithStateChallenge1Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 3: Add and remove a CSS class </p>
        <Challenge1Picture />
    </div>);
}

// Try out some challenges
/*
Challenge 2 of 3: Profile editor 
- Here is a small form implemented with plain JavaScript and DOM. Play with it to understand its behavior:
 */
function Challenge2EditProfile() {
    const [displayMode, setDisplayMode] = useState('save');
    const [firstName, setFirstName] = useState('Jane');
    const [lastName, setLastName] = useState('Jacobs');
    let fullName = firstName + ' ' + lastName;
    let submitText = 'Edit Profile';

    if (displayMode == 'save') {
        submitText = 'Edit Profile';
    } else {
        submitText = 'Save Profile';
    }

    function handleFirstNameChanged(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChanged(e) {
        setLastName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (displayMode == 'save') {
            setDisplayMode('edit');
        } else {
            setFirstName(firstName);
            setLastName(lastName);
            setDisplayMode('save');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='App-left-aligned-border'>
                *** Using displayMode ***
                <p className='App-success-color'> const [displayMode, setDisplayMode] = useState('save');</p>
            </div>

            <div>
                <label>
                    First name:{' '}
                    {displayMode === 'save' &&
                        <b>{firstName}</b>
                    }

                    {displayMode !== 'save' &&
                        <input
                            type="firstNametext"
                            value={firstName}
                            onChange={handleFirstNameChanged}
                        />
                    }
                </label>

                <hr></hr>
                <label>
                    Last name:{' '}
                    {displayMode === 'save' &&
                        <b>{lastName}</b>
                    }

                    {displayMode !== 'save' &&
                        <input
                            type="lastNametext"
                            value={lastName}
                            onChange={handleLastNameChanged}
                        />
                    }
                </label>
            </div>

            <div>
                <button type="submit">
                    {submitText}
                </button>
            </div>

            <p><i>Hello, {fullName} !</i></p>
        </form>
    );
}

function SolutionEditProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState('Jane');
    const [lastName, setLastName] = useState('Jacobs');

    return (
        <form onSubmit={e => {
            e.preventDefault();
            setIsEditing(!isEditing);
        }}>
            <div className='App-left-aligned-border'>
                *** Using isEditing ***
                <p className='App-success-color'>const [isEditing, setIsEditing] = useState(false); </p>
            </div>

            <label>
                First name:{' '}
                {isEditing ? (
                    <input
                        value={firstName}
                        onChange={e => {
                            setFirstName(e.target.value)
                        }}
                    />
                ) : (
                    <b>{firstName}</b>
                )}
            </label>
            <hr></hr>

            <label>
                Last name:{' '}
                {isEditing ? (
                    <input
                        value={lastName}
                        onChange={e => {
                            setLastName(e.target.value)
                        }}
                    />
                ) : (
                    <b>{lastName}</b>
                )}
            </label>
            <hr></hr>

            <button type="submit">
                {isEditing ? 'Save' : 'Edit'} Profile
            </button>

            <p><i>Hello, {firstName} {lastName}!</i></p>
        </form>
    );
}

function ReactingInputWithStateChallenge2Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 3: Profile editor</p>
        <div className='App-row-container'>
            <Challenge2EditProfile />
            <hr></hr>
            <SolutionEditProfile />
        </div>
    </div>);
}

// Try out some challenges
/*
Challenge 3 of 3: Refactor the imperative solution without React 
- Here is the original sandbox from the previous challenge, written imperatively without React:
 */
function ReactingInputWithStateChallenge3Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 3: Refactor the imperative solution without React </p>

        <div className='App-left-aligned-border'>
            <p className='App-error-color'>The updateDOM function you wrote shows what React does under the hood when you set the state. (However, React also avoids touching the DOM for properties that have not changed since the last time they were set.)</p>
            <p className='App-small-font-size'>function updateDOM()</p>
            <p className='App-small-font-size'>(isEditing)</p>
            <p className='App-small-font-size'>editButton.textContent = 'Save Profile';</p>
            <p className='App-small-font-size'>hide(firstNameText);</p>
            <p className='App-small-font-size'>hide(lastNameText);</p>
            <p className='App-small-font-size'>show(firstNameInput);</p>
            <p className='App-small-font-size'>show(lastNameInput);</p>
            <p className='App-small-font-size'>else </p>
            <p className='App-small-font-size'>editButton.textContent = 'Edit Profile';</p>
            <p className='App-small-font-size'>hide(firstNameInput);</p>
            <p className='App-small-font-size'>hide(lastNameInput);</p>
            <p className='App-small-font-size'>show(firstNameText);</p>
            <p className='App-small-font-size'>show(lastNameText);</p>
            <p className='App-small-font-size'>firstNameText.textContent = firstName;</p>
            <p className='App-small-font-size'>lastNameText.textContent = lastName;</p>
            <p className='App-small-font-size'>helloText.textContent = (</p>
            <p className='App-small-font-size'>'Hello ' +</p>
            <p className='App-small-font-size'> firstName + ' ' +</p>
            <p className='App-small-font-size'> lastName + '!'</p>
            <p className='App-small-font-size'>);
            </p>
        </div>
    </div>);
}

// Try out some challenges
function ReactingInputWithStateChallengesDemo() {
    return (<div className="App-left-aligned-content">
        <ReactingInputWithStateChallenge1Demo />
        <hr></hr>
        <ReactingInputWithStateChallenge2Demo />
        <hr></hr>
        <ReactingInputWithStateChallenge3Demo />
        <hr></hr>
    </div>);
}