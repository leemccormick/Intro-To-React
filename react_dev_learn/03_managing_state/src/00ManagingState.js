import React, { createContext, useContext, useReducer, useState } from 'react';
import './App.css';

// Main Default For Managing State Demo
export default function ManagingStateDemo() {
    return (
        <div>
            <h2 className="App-title">Reacting to input with state </h2>
            <ReactingToInputWithStateDemo />

            <h2 className="App-title">Choosing the state structure</h2>
            <ChoosingTheStateStructureDemo />

            <h2 className="App-title">Sharing state between components </h2>
            <SharingStateBetweenComponentsDemo />

            <h2 className="App-title">Preserving and resetting state </h2>
            <PreservingAndResettingStateDemo />

            <h2 className="App-title">Extracting state logic into a reducer </h2>
            <ExtractingStateLogicIntoAReducerDemo />

            <h2 className="App-title">Passing data deeply with context </h2>
            <PassingDataDeeplyWithContextDemo />

            <h2 className="App-title">Scaling up with reducer and context </h2>
            <ScalingUpWithReducerAndContextDemo />
        </div>
    );
}

// Reacting to input with state 
function submitForm(answer) {
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

function submitLeeForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lee'
            if (shouldError) {
                reject(new Error('Good guess but a wrong answer. Try again!'));
            } else {
                resolve();
            }
        }, 1500);
    });
}

function ReactingToInputWithStateForm() {
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
            await submitForm(answer);
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
                    <p className='App-error-color'>
                        {error.message}
                    </p>
                }
            </form>
        </>
    );
}

function ReactingToInputWithStateFormByLee() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <>
            <h2 className='App-hilight-color'>Lee's quiz</h2><p className='App-success-color'>That's right! I am Lee McCormick.</p>
        </>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitLeeForm(answer);
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
            <h2 className='App-hilight-color'>Lee's quiz</h2>
            <p>
                What is my first name?
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
            </form>
        </>
    );
}

function ReactingToInputWithStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>With React, you won’t modify the UI from code directly. For example, you won’t write commands like “disable the button”, “enable the button”, “show the success message”, etc. Instead, you will describe the UI you want to see for the different visual states of your component (“initial state”, “typing state”, “success state”), and then trigger the state changes in response to user input.</p>

        <div className='App-row-container'>
            <ReactingToInputWithStateForm />
            <hr></hr>
            <ReactingToInputWithStateFormByLee />
        </div>

    </div>);
}

// Choosing the state structure 
function ChoosingTheStateStructureRedundantForm() {
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
        <>
            <h2 className='App-error-color'>Redundant Form</h2>
            <h2>Let’s check you in</h2>
            <label>
                First name:{' '}
                <input
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
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
        </>
    );
}

function ChoosingTheStateStructureBetterForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    //const [fullName, setFullName] = useState('');

    const fullName = firstName + ' ' + lastName;

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
        //setFullName(e.target.value + ' ' + lastName);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
        // setFullName(firstName + ' ' + e.target.value);
    }

    return (
        <>
            <h2 className='App-success-color'>Better Form</h2>
            <p>You can remove it and simplify the code by calculating fullName while the component is rendering:</p>
            <p className='App-left-aligned-border'>  const fullName = firstName + ' ' + lastName;</p>
            <h2>Let’s check you in</h2>
            <label>
                First name:{' '}
                <input
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
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
        </>
    );
}

function ChoosingTheStateStructureDemo() {
    return (<div className="App-left-aligned-content">
        <p> The most important principle is that state shouldn’t contain redundant or duplicated information.</p>

        <ChoosingTheStateStructureRedundantForm />
        <hr></hr>
        <ChoosingTheStateStructureBetterForm />
    </div>);
}

// Sharing state between components 
function PanelSharingStateBetweenComponents({
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

function SharingStateBetweenComponentsAccordion() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <h2>Almaty, Kazakhstan</h2>
            <PanelSharingStateBetweenComponents
                title="About"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            >
                With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
            </PanelSharingStateBetweenComponents>

            <PanelSharingStateBetweenComponents
                title="Etymology"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
                The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
            </PanelSharingStateBetweenComponents>

            <PanelSharingStateBetweenComponents
                title="Lee's Component Test"
                isActive={activeIndex === 2}
                onShow={() => setActiveIndex(2)}
            >
                <div className='App-left-aligned-border'>
                    <h1 className='App-hilight-color'> This does not have to be some text. We can pass some child component here...</h1>
                    <ChoosingTheStateStructureRedundantForm />
                </div>
            </PanelSharingStateBetweenComponents>
        </>
    );
}

function SharingStateBetweenComponentsDemo() {
    return (<div className="App-left-aligned-content">
        <p>Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as “lifting state up”.</p>
        <SharingStateBetweenComponentsAccordion />
    </div>);
}

// Preserving and resetting state 
function ContactList({
    selectedContact,
    contacts,
    onSelect
}) {
    return (
        <section className="contact-list">
            <ul className='App-no-bullet-ul' >
                {contacts.map(contact =>
                    <li key={contact.email}>
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

const contacts = [
    { name: 'Taylor', email: 'taylor@mail.com' },
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Bob', email: 'bob@mail.com' }
];

function PreservingAndResettingStateMessengerError() {
    const [to, setTo] = useState(contacts[0]);
    return (
        <div>
            <div className='App-left-aligned-border'>
                <p className='App-error-color'>In this chat app, typing a message and then switching the recipient does not reset the input. This can make the user accidentally send a message to the wrong person:</p>
            </div>
            <ContactList
                contacts={contacts}
                selectedContact={to}
                onSelect={contact => setTo(contact)}
            />
            <Chat contact={to} />
        </div>
    )
}

function PreservingAndResettingStateMessengerSuccussWithKey() {
    const [to, setTo] = useState(contacts[0]);
    return (
        <div>
            <p className='App-success-color'>Using Key to prevent error.</p>
            <p className='App-left-aligned-border'>key={`{`}``to.email{`}`} contact={`{`}`to{`}`}</p>
            <ContactList
                contacts={contacts}
                selectedContact={to}
                onSelect={contact => setTo(contact)}
            />
            <Chat key={to.email} contact={to} />
        </div>
    )
}

function PreservingAndResettingStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>When you re-render a component, React needs to decide which parts of the tree to keep (and update), and which parts to discard or re-create from scratch.</p>

        <div className='App-row-container'>
            <PreservingAndResettingStateMessengerSuccussWithKey />
            <hr></hr>
            <PreservingAndResettingStateMessengerError />
        </div>
    </div>);
}

// Extracting state logic into a reducer 
function AddTask({ onAddTask }) {
    const [text, setText] = useState('');
    return (
        <>
            <input
                placeholder="Add task"
                value={text}
                onChange={e => setText(e.target.value)}
            />

            <button onClick={() => {
                setText('');
                onAddTask(text);
            }}>Add</button>
        </>
    )
}

function TaskList({
    tasks,
    onChangeTask,
    onDeleteTask
}) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task
                        task={task}
                        onChange={onChangeTask}
                        onDelete={onDeleteTask}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);

    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={e => {
                        onChange({
                            ...task,
                            text: e.target.value
                        });
                    }} />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }

    return (
        <label>
            <input
                type="checkbox"
                checked={task.done}
                onChange={e => {
                    onChange({
                        ...task,
                        done: e.target.checked
                    });
                }}
            />
            {taskContent}
            <button onClick={() => onDelete(task.id)}>
                Delete
            </button>
        </label>
    );
}

let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false }
];

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }];
        }
        case 'changed': {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

function ExtractingStateLogicIntoAReducerTaskApp() {
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    );

    function handleAddTask(text) {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
        });
    }

    function handleChangeTask(task) {
        dispatch({
            type: 'changed',
            task: task
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'deleted',
            id: taskId
        });
    }

    return (
        <>
            <h1>Prague itinerary</h1>
            <AddTask
                onAddTask={handleAddTask}
            />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    );
}

function ExtractingStateLogicIntoAReducerDemo() {
    return (<div className="App-left-aligned-content">
        <p>Components with many state updates spread across many event handlers can get overwhelming. For these cases, you can consolidate all the state update logic outside your component in a single function, called “reducer”.</p>
        <ExtractingStateLogicIntoAReducerTaskApp />
    </div>);
}

// Passing data deeply with context 
const LevelContext = createContext(0);

function Heading({ children }) {
    const level = useContext(LevelContext);
    switch (level) {
        case 0:
            throw Error('Heading must be inside a Section!');
        case 1:
            return <h1>{children} | Level is {level}</h1>;
        case 2:
            return <h2>{children} | Level is {level}</h2>;
        case 3:
            return <h3>{children} | Level is {level}</h3>;
        case 4:
            return <h4>{children} | Level is {level}</h4>;
        case 5:
            return <h5>{children} | Level is {level}</h5>;
        case 6:
            return <h6>{children} | Level is {level}</h6>;
        default:
            throw Error('Unknown level: ' + level);
    }
}

function Section({ children }) {
    const level = useContext(LevelContext);
    return (
        <section className="App-section">
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}

function PassingDataDeeplyWithContextPage() {
    return (
        <Section>
            <Heading>Title 1</Heading>

            <Section>
                <Heading>Heading 2</Heading>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>

                <Section>
                    <Heading>Sub-heading 3</Heading>
                    <Heading>Sub-heading</Heading>
                    <Heading>Sub-heading</Heading>

                    <Section>
                        <Heading>Sub-sub-heading 4</Heading>
                        <Heading>Sub-sub-heading</Heading>
                        <Heading>Sub-sub-heading</Heading>

                        <Section>
                            <Heading>Very-sub-sub-heading 5</Heading>
                            <Heading>Very-sub-sub-heading</Heading>
                            <Heading>Very-sub-sub-heading</Heading>
                            <Section>
                                <Heading>Very-last-sub-sub-heading 6</Heading>
                                <Heading>Very-last-sub-sub-heading</Heading>
                                <Heading>Very-last-sub-sub-heading</Heading>
                            </Section>
                        </Section>
                    </Section>
                </Section>
            </Section>
        </Section>
    );
}

function PassingDataDeeplyWithContextDemo() {
    return (<div className="App-left-aligned-content">
        <p>Context lets the parent component make some information available to any component in the tree below it—no matter how deep it is—without passing it explicitly through props.</p>
        <PassingDataDeeplyWithContextPage />
    </div>);
}

// Scaling up with reducer and context 
const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);
const initialTasksForTasksProvider = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];

function useTasks() {
    return useContext(TasksContext);
}

function useTasksDispatch() {
    return useContext(TasksDispatchContext);
}

function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasksForTasksProvider
    );

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider
                value={dispatch}
            >
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

function AddTaskScalingUpWithReducerAndContext({ onAddTask }) {
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();

    return (
        <>
            <input
                placeholder="Add task"
                value={text}
                onChange={e => setText(e.target.value)}
            />

            <button onClick={() => {
                setText('');
                dispatch({
                    type: 'added',
                    id: nextId++,
                    text: text,
                });
            }}>Add</button>
        </>
    );
}

function TaskListScalingUpWithReducerAndContext() {
    const tasks = useTasks();

    return (
        <ul className='App-no-bullet-ul'>
            {tasks.map(task => (
                <li key={task.id}>
                    <TaskScalingUpWithReducerAndContext task={task} />
                </li>
            ))}
        </ul>
    );
}

function TaskScalingUpWithReducerAndContext({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTasksDispatch();

    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={e => {
                        dispatch({
                            type: 'changed',
                            task: {
                                ...task,
                                text: e.target.value
                            }
                        });
                    }} />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }

    return (
        <label>
            <input
                type="checkbox"
                checked={task.done}
                onChange={e => {
                    dispatch({
                        type: 'changed',
                        task: {
                            ...task,
                            done: e.target.checked
                        }
                    });
                }}
            />
            {taskContent}
            <button onClick={() => {
                dispatch({
                    type: 'deleted',
                    id: task.id
                });
            }}>
                Delete
            </button>
        </label>
    );
}

function ScalingUpWithReducerAndContextTaskApp() {
    return (
        <TasksProvider>
            <h1>Day off in Kyoto</h1>
            <AddTaskScalingUpWithReducerAndContext />
            <TaskListScalingUpWithReducerAndContext />
        </TasksProvider>
    );
}

function ScalingUpWithReducerAndContextDemo() {
    return (<div className="App-left-aligned-content">
        <p>Reducers let you consolidate a component’s state update logic. Context lets you pass information deep down to other components. You can combine reducers and context together to manage state of a complex screen.</p>
        <div className='App-left-aligned-border '>
            <p>- useContext(TasksContext);</p>
            <p>- useContext(TasksDispatchContext);</p>
        </div>

        <ScalingUpWithReducerAndContextTaskApp />
    </div>);
}