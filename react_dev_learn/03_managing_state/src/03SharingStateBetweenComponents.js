import './App.css';
import React from 'react';
import { useState } from 'react';

// Main Default For Sharing State Between Components Demo
export default function SharingStateBetweenComponentsDemo() {
    return (
        <div>
            <hr></hr>
            <p> This is known as lifting state up, and it’s one of the most common things you will do writing React code.</p>

            <h2 className="App-title">Lifting state up by example </h2>
            <LiftingStateUpDemo />

            <h2 className="App-title">Step 1: Remove state from the child components </h2>
            <Step1RemoveStateDemo />

            <h2 className="App-title">Step 2: Pass hardcoded data from the common parent </h2>
            <Step2PassHardcodedDataDemo />

            <h2 className="App-title"> Step 3: Add state to the common parent </h2>
            <Step3AddStateDemo />

            <h2 className="App-title">A single source of truth for each state </h2>
            <SingleSourceOfTruthForEachStateDemo />

            <h2 className="App-title"> Recap </h2>
            <RecapSharingStateBetweenComponentsDemo />

            <h2 className="App-title">Try out some challenges </h2>
            <ChallengesSharingStateBetweenComponentsDemo />
        </div>
    );
}

// Lifting state up by example 
function LiftingStateUpPanel({ title, children }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={() => setIsActive(true)}>
                    Show
                </button>
            )}
        </section>
    );
}

function LiftingStateUpAccordion() {
    return (
        <>
            <h2>Almaty, Kazakhstan</h2>
            <LiftingStateUpPanel title="About">
                With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
            </LiftingStateUpPanel>
            <LiftingStateUpPanel title="Etymology">
                The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
            </LiftingStateUpPanel>
        </>
    );
}

function LiftingStateUpDemo() {
    return (<div className="App-left-aligned-content">
        <LiftingStateUpAccordion />

        <div className='App-left-aligned-border'>
            <p>To coordinate these two panels, you need to “lift their state up” to a parent component in three steps:</p>
            <ul>
                <li>
                    1. Remove state from the child components.
                </li>
                <li>
                    2. Pass hardcoded data from the common parent.
                </li>
                <li>
                    3. Add state to the common parent and pass it down together with the event handlers.
                </li>
            </ul>
        </div>
    </div>);
}

// Step 1: Remove state from the child components 
function Step1RemoveStateDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-left-aligned-border'>
            <h4>Remove this line.</h4>
            <p className='App-error-color'>const [isActive, setIsActive] = useState(false);</p>
        </div>

        <div className='App-left-aligned-border'>
            <h4>And instead, add isActive to the Panel’s list of props:</h4>
            <p className='App-success-color'>function Panel(title, children, isActive)()</p>
        </div>

        <p>Now the Panel’s parent component can control isActive by passing it down as a prop. Conversely, the Panel component now has no control over the value of isActive—it’s now up to the parent component!</p>
    </div>);
}

// Step 2: Pass hardcoded data from the common parent 
function Step2PassHardcodedDataPanel({ title, children, isActive }) {
    let setIsActive = false; // Add this line to complie, step 3 implement useState
    return (
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={() => setIsActive(true)}>
                    Show
                </button>
            )}
        </section>
    );
}

function Step2PassHardcodedDataAccordion() {
    return (
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Step2PassHardcodedDataPanel title="About" isActive={true}>
                With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
            </Step2PassHardcodedDataPanel>
            <Step2PassHardcodedDataPanel title="Etymology" isActive={true}>
                The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
            </Step2PassHardcodedDataPanel>
        </>
    );
}

function Step2PassHardcodedDataDemo() {
    return (<div className="App-left-aligned-content">
        <p>To lift state up, you must locate the closest common parent component of both of the child components that you want to coordinate:</p>
        <Step2PassHardcodedDataAccordion />
    </div>);
}

// Step 3: Add state to the common parent 
function Step3Panel({
    title,
    children,
    isActive,
    onShow
}) {
    return (
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={onShow}>
                    Show
                </button>
            )}
        </section>
    );
}

function Step3Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Step3Panel
                title="About"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            >
                With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
            </Step3Panel>
            <Step3Panel
                title="Etymology"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
                The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
            </Step3Panel>
        </>
    );
}

function Step3AddStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>Lifting state up often changes the nature of what you’re storing as state.</p>
        <p className='App-left-aligned-border'>Clicking the “Show” button in either Panel needs to change the active index in Accordion. A Panel can’t set the activeIndex state directly because it’s defined inside the Accordion. The Accordion component needs to explicitly allow the Panel component to change its state by passing an event handler down as a prop:</p>
        
        <Step3Accordion />
        <hr></hr>

        <div className='App-row-container'>
            <div>
                <h5 className='App-error-color'>Initially, Accordion’s activeIndex is 0, so the first Panel receives isActive = true</h5>
                <img
                    src='https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fsharing_state_parent.png&w=640&q=75'
                    alt="Before Lifting Up"
                />
            </div>
    
            <hr></hr>

            <div>
                <h5 className='App-success-color'>When Accordion’s activeIndex state changes to 1, the second Panel receives isActive = true instead</h5>
                <img
                    src='https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fsharing_state_parent_clicked.png&w=640&q=75'
                    alt="After Lifting Up"
                />
            </div>
        </div>
    </div>);
}

// A single source of truth for each state 
function SingleSourceOfTruthForEachStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>For each unique piece of state, you will choose the component that “owns” it</p>
        <h5 className='App-success-color'>This principle is also known as having a “single source of truth”. </h5>
    </div>);
}

// Recap
function RecapSharingStateBetweenComponentsDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>
                When you want to coordinate two components, move their state to their common parent.
            </li>
            <li>
                Then pass the information down through props from their common parent.
            </li>
            <li>
                Finally, pass the event handlers down so that the children can change the parent’s state.
            </li>
            <li>
                It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state).
            </li>
        </ul>
    </div>);
}

// Try out some challenges
/*
Challenge 1 of 2: Synced inputs 
- These two inputs are independent. Make them stay in sync: editing one input should update the other input with the same text, and vice versa.
 */
function Challenge1Input({ label, textValue, onChange }) {
    return (
        <label>
            {label}
            {' '}
            <input
                value={textValue}
                onChange={onChange}
            />
        </label>
    );
}

function Challenge1SyncedInputs() {
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <>
            <Challenge1Input label="First input" textValue={text} onChange={handleChange} />
            <hr></hr>
            <Challenge1Input label="Second input" textValue={text} onChange={handleChange} />
        </>
    );
}

function Challenge1SharingStateBetweenComponentsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 2: Synced inputs </p>
        <Challenge1SyncedInputs />
    </div>);
}

// Try out some challenges
/*
Challenge 2 of 2: Filtering a list 
- In this example, the SearchBar has its own query state that controls the text input. Its parent FilterableList component displays a List of items, but it doesn’t take the search query into account.
- Use the filterItems(foods, query) function to filter the list according to the search query. To test your changes, verify that typing “s” into the input filters down the list to “Sushi”, “Shish kebab”, and “Dim sum”.
- Note that filterItems is already implemented and imported so you don’t need to write it yourself!
 */
function Challenge2SearchBar({ query, onChange }) {
    return (
        <label>
            Search:{' '}
            <input
                value={query}
                onChange={onChange}
            />
        </label>
    );
}

function Challenge2List({ items }) {
    return (
        <table>
            <tbody>
                {items.map(food => (
                    <tr key={food.id}>
                        <td>{food.name}</td>
                        <td>{food.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function filterItemsChallenge2(items, query) {
    query = query.toLowerCase();

    return items.filter(item =>
        item.name.split(' ').some(word =>
            word.toLowerCase().startsWith(query)
        )
    );
}

const foods = [{
    id: 0,
    name: 'Sushi',
    description: 'Sushi is a traditional Japanese dish of prepared vinegared rice'
}, {
    id: 1,
    name: 'Dal',
    description: 'The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added'
}, {
    id: 2,
    name: 'Pierogi',
    description: 'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water'
}, {
    id: 3,
    name: 'Shish kebab',
    description: 'Shish kebab is a popular meal of skewered and grilled cubes of meat.'
}, {
    id: 4,
    name: 'Dim sum',
    description: 'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch'
}];

function Challenge2FilterableList() {
    const [query, setQuery] = useState('');
    const searchResult = filterItemsChallenge2(foods, query);

    function handleChange(e) {
        setQuery(e.target.value);
    }

    return (
        <>
            <Challenge2SearchBar query={query} onChange={handleChange} />
            <hr />
            <Challenge2List items={searchResult} />
        </>
    );
}

function Challenge2SharingStateBetweenComponentsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 2: Filtering a list </p>
        <Challenge2FilterableList />
    </div>);
}

// Try out some challenges
function ChallengesSharingStateBetweenComponentsDemo() {
    return (<div className="App-left-aligned-content">
        <Challenge1SharingStateBetweenComponentsDemo />
        <hr></hr>
        <Challenge2SharingStateBetweenComponentsDemo />
        <hr></hr>
    </div>);
}