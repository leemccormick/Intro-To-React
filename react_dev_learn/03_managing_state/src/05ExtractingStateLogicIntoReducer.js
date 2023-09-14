import './App.css';
import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import { useImmerReducer } from 'use-immer';

// Main Default For Extracting State Logic into a Reducer Demo
export default function ExtractingStateLogicIntoReducerDemo() {
    return (
        <div>
            <hr></hr>
            <p>Components with many state updates spread across many event handlers can get overwhelming. For these cases, you can consolidate all the state update logic outside your component in a single function, called a reducer.</p>

            <h2 className="App-title">Consolidate state logic with a reducer </h2>
            <ConsolidateStateLogicWithReducerDemo />

            <h2 className="App-title">Step 1: Move from setting state to dispatching actions </h2>
            <Step1MoveFromSettingStateDemo />

            <h2 className="App-title"> Step 2: Write a reducer function </h2>
            <Step2WriteReducerFunctionDemo />

            <h2 className="App-title">Step 3: Use the reducer from your component </h2>
            <Step3UseTheReducerDemo />

            <h2 className="App-title"> Comparing useState and useReducer </h2>
            <ComparingUseStateAndUseReducerDemo />

            <h2 className="App-title">Writing reducers well </h2>
            <WritingReducersWellDemo />

            <h2 className="App-title"> Writing concise reducers with Immer </h2>
            <WritingReducersWellWithImmerDemo />

            <h2 className="App-title"> Recap </h2>
            <RecapExtractingStateLogicIntoReducerDemo />

            <h2 className="App-title">Try out some challenges </h2>
            <ChallengesExtractingStateLogicIntoReducerDemo />
        </div>
    );
}

// Consolidate state logic with a reducer 
function ConsolidateStateLogicWithReducerAddTask({ onAddTask }) {
    const [text, setText] = useState('');

    return (
        <>
            <input
                placeholder="Add task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    setText('');
                    onAddTask(text);
                }}>
                Add
            </button>
        </>
    );
}

function ConsolidateStateLogicWithReducerTaskList({ tasks, onChangeTask, onDeleteTask }) {
    return (
        <ul className='App-no-bullet-ul'>
            {tasks.map((task) => (
                <li key={task.id}>
                    <ConsolidateStateLogicWithReducerTask task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
                </li>
            ))}
        </ul>
    );
}

function ConsolidateStateLogicWithReducerTask({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={(e) => {
                        onChange({
                            ...task,
                            text: e.target.value,
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }

    return (
        <label>
            <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => {
                    onChange({
                        ...task,
                        done: e.target.checked,
                    });
                }}
            />
            {taskContent}
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </label>
    );
}

let nextIdConsolidateStateLogicWithReducer = 3;
const initialTasksConsolidateStateLogicWithReducer = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
];

function ConsolidateStateLogicWithReducerTaskApp() {
    const [tasks, setTasks] = useState(initialTasksConsolidateStateLogicWithReducer);

    function handleAddTask(text) {
        setTasks([
            ...tasks,
            {
                id: nextIdConsolidateStateLogicWithReducer++,
                text: text,
                done: false,
            },
        ]);
    }

    function handleChangeTask(task) {
        setTasks(
            tasks.map((t) => {
                if (t.id === task.id) {
                    return task;
                } else {
                    return t;
                }
            })
        );
    }

    function handleDeleteTask(taskId) {
        setTasks(tasks.filter((t) => t.id !== taskId));
    }

    return (
        <>
            <h1>Prague itinerary</h1>
            <ConsolidateStateLogicWithReducerAddTask onAddTask={handleAddTask} />
            <ConsolidateStateLogicWithReducerTaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    );
}

function ConsolidateStateLogicWithReducerDemo() {
    return (<div className="App-left-aligned-content">
        <p>As your components grow in complexity, it can get harder to see at a glance all the different ways in which a component’s state gets updated. </p>
        <ConsolidateStateLogicWithReducerTaskApp />

        <div className='App-left-aligned-border'>
            <p>Reducers are a different way to handle state. You can migrate from useState to useReducer in three steps:</p>
            <ul className='App-no-bullet-ul '>
                <ol>
                    <li>Move from setting state to dispatching actions.</li>
                    <li>Write a reducer function.</li>
                    <li>Use the reducer from your component. </li>
                </ol>
            </ul>
        </div>
    </div>);
}

// Step 1: Move from setting state to dispatching actions 
function Step1MoveFromSettingStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>Remove all the state setting logic. What you are left with are three event handlers:</p>
        <div className='App-left-aligned-border'>
            <ul>
                <li>handleAddTask(text) is called when the user presses “Add”.</li>
                <li>handleChangeTask(task) is called when the user toggles a task or presses “Save”.</li>
                <li>handleDeleteTask(taskId) is called when the user presses “Delete”.</li>
            </ul>
        </div>

        <div >
            <h4 className='App-error-color'>We need to change this functions belows to use dispatch : </h4>
            <div className='App-row-container'>
                <div className='App-smallest-box-border-error-color'>
                    <p className='App-error-color App-center-underline'>To Add</p>
                    <p className='App-medium-font-size'>function handleAddTask(text) {'{'}</p>
                    <p className='App-medium-font-size'>setTasks{'('} {'['}</p>
                    <p className='App-medium-font-size'>...tasks,</p>
                    <p className='App-medium-font-size'>{'{'} </p>
                    <p className='App-medium-font-size'>   id: nextId++,</p>
                    <p className='App-medium-font-size'>   text: text,</p>
                    <p className='App-medium-font-size'>{'}'}  {')'};</p>
                    <p className='App-medium-font-size'>{'}'}</p>
                </div>

                <div className='App-smallest-box-border-error-color'>
                    <p className='App-error-color App-center-underline'>To Change</p>
                    <p className='App-medium-font-size'>function handleChangeTask(task) {'{'}</p>
                    <p className='App-medium-font-size'>setTasks{'('} {'['}</p>
                    <p className='App-medium-font-size'>tasks.map{'('} (t) ={'>'} {'{'}</p>
                    <p className='App-medium-font-size'>   if (t.id === task.id) {'{'} </p>
                    <p className='App-medium-font-size'>           return task;</p>
                    <p className='App-medium-font-size'>{'}'} else  {'{'}  </p>
                    <p className='App-medium-font-size'>        return t;</p>
                    <p className='App-medium-font-size'>{'}'}</p>
                    <p className='App-medium-font-size'>{'}'}  {')'} {')'};</p>
                    <p className='App-medium-font-size'>{'}'}</p>
                </div>

                <div className='App-smallest-box-border-error-color'>
                    <p className='App-error-color App-center-underline'>To Delete</p>
                    <p className='App-medium-font-size'>function handleDeleteTask(taskId) {'{'}</p>
                    <p className='App-medium-font-size'>setTasks{'('} {'['}</p>
                    <p className='App-medium-font-size'>tasks.filter{'('} (t) ={'>'}</p>
                    <p className='App-medium-font-size'>   t.id !== taskId</p>
                    <p className='App-medium-font-size'>{')'}</p>
                    <p className='App-medium-font-size'>{')'};</p>
                    <p className='App-medium-font-size'>{'}'}</p>
                </div>
            </div>
        </div>

        <h4 className='App-success-color'>Managing state with reducers is slightly different from directly setting state. Instead of telling React “what to do” by setting state, you specify “what the user just did” by dispatching “actions” from your event handlers. </h4>
        <div className='App-row-container'>
            <div className='App-smallest-box-border-success-color'>
                <p className='App-success-color'>To Add</p>
                <hr></hr>
                <p className='App-medium-font-size'>function handleAddTask(text) {'{'}</p>
                <p className='App-medium-font-size'>dispatch{'('} {'{'}</p>
                <p className='App-medium-font-size App-success-color'>type: 'added',</p>
                <p className='App-medium-font-size'>   id: nextId++,</p>
                <p className='App-medium-font-size'>   text: text,</p>
                <p className='App-medium-font-size'>{'}'}  {')'};</p>
                <p className='App-medium-font-size'>{'}'}</p>
            </div>

            <div className='App-smallest-box-border-success-color'>
                <p className='App-success-color'>To Change</p>
                <hr></hr>
                <p className='App-medium-font-size'>function handleChangeTask(task) {'{'}</p>
                <p className='App-medium-font-size'>dispatch{'('} {'{'}</p>
                <p className='App-medium-font-size App-success-color'> type: 'changed'</p>
                <p className='App-medium-font-size'>       task: task,</p>
                <p className='App-medium-font-size'>{'}'}  {')'};</p>
                <p className='App-medium-font-size'>{'}'}</p>
            </div>

            <div className='App-smallest-box-border-success-color'>
                <p className='App-success-color'>To Delete</p>
                <hr></hr>
                <p className='App-medium-font-size'>function handleDeleteTask(taskId)  {'{'}</p>
                <p className='App-medium-font-size'>dispatch{'('} {'{'}</p>
                <p className='App-medium-font-size App-success-color'>type: 'deleted',</p>
                <p className='App-medium-font-size'>   id: taskId,</p>
                <p className='App-medium-font-size'>{'}'}  {')'};</p>
                <p className='App-medium-font-size'>{'}'}</p>
            </div>
        </div>
    </div>);
}

// Step 2: Write a reducer function 
function Step2WriteReducerFunctionDemo() {
    return (<div className="App-left-aligned-content">
        <p>A reducer function is where you will put your state logic. It takes two arguments, the current state and the action object, and it returns the next state:</p>
        <div className='App-left-aligned-border'>
            <p className='App-medium-font-size'>function yourReducer(state, action)  {'{'}</p>
            <p className='App-medium-font-size'>return next state for React to set</p>
            <p className='App-medium-font-size'>{'}'}</p>

            <hr></hr>
            <p className='App-hilight-color'>To move your state setting logic from your event handlers to a reducer function in this example, you will:</p>
            <ul>
                <ol>
                    <li>Declare the current state (tasks) as the first argument.</li>
                    <li>Declare the action object as the second argument.</li>
                    <li>Return the next state from the reducer (which React will set the state to). </li>
                </ol>
            </ul>
        </div>

        <div className='App-row-container'>
            <div className='App-left-aligned-small-box-border'>
                <p className='App-success-color'>Using If / Else</p>
                <hr></hr>

                <div className='App-medium-font-size'>
                    <p>function tasksReducer(tasks, action) {'{'}</p>
                    <p className='App-success-color'>&nbsp;&nbsp; if (action.type === 'added') {'{'}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp; return {'['}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...tasks,</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'} </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  id: nextId++,</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   text: text,</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  done: false, </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{']'};</p>

                    <p className='App-success-color'>&nbsp;&nbsp; {'}'} else if (action.type === 'changed') {'{'}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp; return tasks.map{'('} (t) ={'>'} {'{'}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  if (t.id === task.id) {'{'} </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return task;</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {'}'} else  {'{'}  </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return t;</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {'}'}  {')'};</p>

                    <p className='App-success-color'>&nbsp;&nbsp; {'}'} else if (action.type === 'deleted') {'{'}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return tasks.filter((t) ={'>'} t.id !== action.id);</p>
                    <p className='App-success-color'>&nbsp;&nbsp; {'} '} else {' {'}</p>

                    <p className='App-error-color'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; throw Error('Unknown action: ' + action.type);</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {'}'}</p>
                    <p>{'}'}</p>
                </div>
            </div>

            <div className='App-left-aligned-small-box-border'>
                <p className='App-success-color'>Using Switch Statement</p>
                <hr></hr>

                <div className='App-medium-font-size'>
                    <p>function tasksReducer(tasks, action) {'{'}</p>
                    <p className='App-success-color App-tabbed-content'>switch (action.type)  {'{'}</p>
                    <p className='App-success-color App-tabbed-content'>case 'added': {'{'}</p>
                    <div className='App-double-tabbed-content'>
                        <p> return {'['}</p>
                        <div className='App-double-tabbed-content'>
                            <p>...tasks,</p>
                            <p>{'{'} </p>
                            <p>id: nextId++,</p>
                            <p> text: text,</p>
                            <p> done: false, </p>
                            <p>{'}'},</p>
                        </div>
                        <p>{']'};</p>
                    </div>
                    <p className='App-success-color App-tabbed-content'> {'}'}</p>

                    <p className='App-success-color App-tabbed-content'>case 'changed': {'{'}</p>
                    <div className='App-double-tabbed-content'>
                        <p> return tasks.map{'('} (t) ={'>'} {'{'}</p>
                        <div className='App-double-tabbed-content'>
                            <p>   if (t.id === task.id) {'{'} </p>
                            <p>         return task;</p>
                            <p> {'}'} else  {'{'}  </p>
                            <p>      return t;</p>
                        </div>
                        <p> {'}'}  {')'};</p>
                    </div>
                    <p className='App-success-color App-tabbed-content'> {'}'}</p>

                    <p className='App-success-color App-tabbed-content'>case 'deleted': {'{'}</p>
                    <p className='App-double-tabbed-content'> return tasks.filter((t) ={'>'} t.id !== action.id);</p>
                    <p className='App-success-color App-tabbed-content'> {'}'}</p>

                    <p className='App-tabbed-content App-error-color'> default: {' {'}</p>
                    <p className='App-double-tabbed-content App-error-color'>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    throw Error('Unknown action: ' + action.type);</p>
                    <p className='App-error-color App-tabbed-content'> {'}'}</p>
                    <p>{'}'}</p>
                </div>
            </div>
        </div>
    </div>);
}

// Step 3: Use the reducer from your component 
function Step3UseTheReducerAddTask({ onAddTask }) {
    const [text, setText] = useState('');

    return (
        <>
            <input
                placeholder="Add task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    setText('');
                    onAddTask(text);
                }}>
                Add
            </button>
        </>
    );
}

function Step3UseTheReducerTaskList({ tasks, onChangeTask, onDeleteTask }) {
    return (
        <ul className='App-no-bullet-ul'>
            {tasks.map((task) => (
                <li key={task.id}>
                    <Step3UseTheReducerTask task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
                </li>
            ))}
        </ul>
    );
}

function Step3UseTheReducerTask({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={(e) => {
                        onChange({
                            ...task,
                            text: e.target.value,
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }

    return (
        <label>
            <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => {
                    onChange({
                        ...task,
                        done: e.target.checked,
                    });
                }}
            />
            {taskContent}
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </label>
    );
}

let nextIdStep3UseTheReducer = 3;
const initialTasksStep3UseTheReducer = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
];

function tasksReducerStep3UseTheReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
            ];
        }
        case 'changed': {
            return tasks.map((t) => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return tasks.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

function Step3UseTheReducerTaskApp() {
    const [tasks, dispatch] = useReducer(tasksReducerStep3UseTheReducer, initialTasksStep3UseTheReducer);

    function handleAddTask(text) {
        dispatch({
            type: 'added',
            id: nextIdStep3UseTheReducer++,
            text: text,
        });
    }

    function handleChangeTask(task) {
        dispatch({
            type: 'changed',
            task: task,
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'deleted',
            id: taskId,
        });
    }

    return (
        <>
            <h1>Prague itinerary</h1>
            <Step3UseTheReducerAddTask onAddTask={handleAddTask} />
            <Step3UseTheReducerTaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    );
}

function Step3UseTheReducerDemo() {
    return (<div className="App-left-aligned-content">
        <p>Finally, you need to hook up the tasksReducer to your component. Import the useReducer Hook from React:</p>
        <div className='App-left-aligned-border'>
            <ul>
                <li>import {'{'}useReducer {'}'} from 'react';</li>
                <li>const [tasks, setTasks] = useState(initialTasks);</li>
                <li>const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);</li>
            </ul>
        </div>
        <Step3UseTheReducerTaskApp />
    </div>);
}

// Comparing useState and useReducer 
function ComparingUseStateAndUseReducerDemo() {
    return (<div className="App-left-aligned-content">
        <p>Reducers are not without downsides!</p>
        <ul>
            <li>Code size: Generally, with useState you have to write less code upfront</li>
            <li>Readability: useState is very easy to read when the state updates are simple.</li>
            <li>Debugging: When you have a bug with useState, it can be difficult to tell where the state was set incorrectly, and why. With useReducer, you can add a console log into your reducer to see every state update, and why it happened (due to which action). </li>
            <li>Testing: A reducer is a pure function that doesn’t depend on your component. </li>
            <li>Personal preference: Some people like reducers, others don’t. That’s okay. </li>
        </ul>
    </div>);
}

// Writing reducers well 
function WritingReducersWellDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>Reducers must be pure.</li>
            <li>Each action describes a single user interaction, even if that leads to multiple changes in the data. </li>
        </ul>
    </div>);
}

// Writing concise reducers with Immer 
function ImmerAddTask({ onAddTask }) {
    const [text, setText] = useState('');

    return (
        <>
            <input
                placeholder="Add task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    setText('');
                    onAddTask(text);
                }}>
                Add
            </button>
        </>
    );
}

function ImmerTaskList({ tasks, onChangeTask, onDeleteTask }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <ImmerTask task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
                </li>
            ))}
        </ul>
    );
}

function ImmerTask({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={(e) => {
                        onChange({
                            ...task,
                            text: e.target.value,
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }

    return (
        <label>
            <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => {
                    onChange({
                        ...task,
                        done: e.target.checked,
                    });
                }}
            />
            {taskContent}
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </label>
    );
}

function tasksReducerImmer(draft, action) {
    switch (action.type) {
        case 'added': {
            draft.push({
                id: action.id,
                text: action.text,
                done: false,
            });
            break;
        }
        case 'changed': {
            const index = draft.findIndex((t) => t.id === action.task.id);
            draft[index] = action.task;
            break;
        }
        case 'deleted': {
            return draft.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

let nextIdImmer = 3;
const initialTasksImmer = [
    { id: 0, text: 'Visit Kafka Museum Immer', done: true },
    { id: 1, text: 'Watch a puppet show Immer', done: false },
    { id: 2, text: 'Lennon Wall pic Immer', done: false },
];

function ImmerTaskApp() {
    const [tasks, dispatch] = useImmerReducer(tasksReducerImmer, initialTasksImmer);

    function handleAddTask(text) {
        dispatch({
            type: 'added',
            id: nextIdImmer++,
            text: text,
        });
    }

    function handleChangeTask(task) {
        dispatch({
            type: 'changed',
            task: task,
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'deleted',
            id: taskId,
        });
    }

    return (
        <>
            <h1>Prague itinerary</h1>
            <ImmerAddTask onAddTask={handleAddTask} />
            <ImmerTaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    );
}

function WritingReducersWellWithImmerDemo() {
    return (<div className="App-left-aligned-content">
        <p>Just like with updating objects and arrays in regular state, you can use the Immer library to make reducers more concise.</p>
        <ImmerTaskApp />
    </div>);
}

// Recap
function RecapExtractingStateLogicIntoReducerDemo() {
    return (<div className="App-left-aligned-content">
        <ui>
            <li>
                To convert from useState to useReducer:
                <div className='App-left-aligned-border'>
                    <li className='App-small-font-size'>
                        1. Dispatch actions from event handlers.
                    </li>
                    <li className='App-small-font-size'>
                        2. Write a reducer function that returns the next state for a given state and action.
                    </li>
                    <li className='App-small-font-size'>
                        3. Replace useState with useReducer.
                    </li>
                </div>
            </li>
            <li>
                Reducers require you to write a bit more code, but they help with debugging and testing.
            </li>
            <li>
                Reducers must be pure.
            </li>
            <li>
                Each action describes a single user interaction.
            </li>
            <li>
                Use Immer if you want to write reducers in a mutating style.
            </li>
        </ui>
    </div>);
}

// Try out some challenges
/*
Challenge 1 of 4: Dispatch actions from event handlers 
- Currently, the event handlers in ContactList.js and Chat.js have // TODO comments. This is why typing into the input doesn’t work, and clicking on the buttons doesn’t change the selected recipient.
- Replace these two // TODOs with the code to dispatch the corresponding actions. To see the expected shape and the type of the actions, check the reducer in messengerReducer.js. The reducer is already written so you won’t need to change it. You only need to dispatch the actions in ContactList.js and Chat.js.
 */
function messengerReducerChallenge1(state, action) {
    switch (action.type) {
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId,
                message: '',
            };
        }
        case 'edited_message': {
            return {
                ...state,
                message: action.message,
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

function Challenge1Chat({ contact, message, dispatch }) {
    return (
        <section className="chat">
            <textarea
                value={message}
                placeholder={'Chat to ' + contact.name}
                onChange={(e) => {
                    //  dispatch edited_message | (Read the input value from e.target.value)
                    dispatch({
                        type: 'edited_message',
                        message: e.target.value,
                    });
                }}
            />
            <br />
            <button>Send to {contact.email}</button>
        </section>
    );
}

function Challenge1ContactList({ contacts, selectedId, dispatch }) {
    return (
        <section className="contact-list">
            <ul className='App-no-bullet-ul'>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <button
                            onClick={() => {
                                // dispatch changed_selection
                                dispatch({
                                    type: 'changed_selection',
                                    contactId: contact.id,
                                });
                            }}>
                            {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

const initialStateChallenge1 = {
    selectedId: 0,
    message: 'Hello',
};

const contactsChallenge1 = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' },
    { id: 3, name: 'Lee', email: 'lee@mail.com' },
];

function Challenge1Messenger() {
    const [state, dispatch] = useReducer(messengerReducerChallenge1, initialStateChallenge1);
    const message = state.message;
    const contact = contactsChallenge1.find((c) => c.id === state.selectedId);

    return (
        <div>
            <Challenge1ContactList
                contacts={contactsChallenge1}
                selectedId={state.selectedId}
                dispatch={dispatch}
            />
            <Challenge1Chat
                key={contact.id}
                message={message}
                contact={contact}
                dispatch={dispatch}
            />
        </div>
    );
}

function Challenge1ExtractingStateLogicIntoReducerDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 4: Dispatch actions from event handlers </p>
        <Challenge1Messenger />
    </div>);
}

// Try out some challenges
/*
Challenge 2 of 4: Clear the input on sending a message 
- Currently, pressing “Send” doesn’t do anything. Add an event handler to the “Send” button that will:
- Show an alert with the recipient’s email and the message.
- Clear the message input.
 */
function messengerReducerChallenge2(state, action) {
    switch (action.type) {
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId,
                message: '',
            };
        }
        case 'edited_message': {
            return {
                ...state,
                message: action.message,
            };
        }
        case 'sent_message': {
            // alert("Hello ! " + message + " To " + contact.name);

            return {
                ...state,
                selectedId: action.contactId,
                message: '',
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

function Challenge2Chat({ contact, message, dispatch }) {
    function handleSendTo() {
        alert("Hello ! " + message + " To " + contact.name);

        dispatch({
            type: 'sent_message',
            contactId: contact.id,
        });
    }

    return (
        <section className="chat">
            <textarea
                value={message}
                placeholder={'Chat to ' + contact.name}
                onChange={(e) => {
                    //  dispatch edited_message | (Read the input value from e.target.value)
                    dispatch({
                        type: 'edited_message',
                        message: e.target.value,
                    });
                }}
            />
            <br />
            <button onClick={handleSendTo}>Send to {contact.email}</button>
        </section>
    );
}

const initialStateChallenge2 = {
    selectedId: 3,
    message: 'Yo!',
};

const contactsChallenge2 = [
    { id: 0, name: 'Challenge2', email: 'challenge2@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' },
    { id: 3, name: 'Lee', email: 'lee@mail.com' },
    { id: 4, name: 'Donny', email: 'don@mail.com' },
    { id: 5, name: 'Taylor', email: 'taylor@mail.com' },
];

function Challenge2Messenger() {
    const [state, dispatch] = useReducer(messengerReducerChallenge2, initialStateChallenge2);
    const message = state.message;
    const contact = contactsChallenge2.find((c) => c.id === state.selectedId);

    return (
        <div>
            <Challenge1ContactList
                contacts={contactsChallenge2}
                selectedId={state.selectedId}
                dispatch={dispatch}
            />
            <Challenge2Chat
                key={contact.id}
                message={message}
                contact={contact}
                dispatch={dispatch}
            />
        </div>
    );
}

function Challenge2ChatSolution({ contact, message, dispatch }) {
    return (
        <section className="chat">
            <textarea
                value={message}
                placeholder={'Chat to ' + contact.name}
                onChange={(e) => {
                    dispatch({
                        type: 'edited_message',
                        message: e.target.value,
                    });
                }}
            />
            <br />
            <button
                onClick={() => {
                    alert(`Sending "${message}" to ${contact.email}`);
                    dispatch({
                        type: 'edited_message',
                        message: '',
                    });
                }}>
                Send to {contact.email}
            </button>
        </section>
    );
}

function Challenge2MessengerSolution() {
    const [state, dispatch] = useReducer(messengerReducerChallenge1, initialStateChallenge2);
    const message = state.message;
    const contact = contactsChallenge2.find((c) => c.id === state.selectedId);

    return (
        <div>
            <Challenge1ContactList
                contacts={contactsChallenge2}
                selectedId={state.selectedId}
                dispatch={dispatch}
            />
            <Challenge2ChatSolution
                key={contact.id}
                message={message}
                contact={contact}
                dispatch={dispatch}
            />
        </div>
    );
}

function Challenge2ExtractingStateLogicIntoReducerDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 4: Clear the input on sending a message </p>
        <div className='App-row-container'>
            <Challenge2Messenger />
            <hr></hr>
            <Challenge2MessengerSolution />
        </div>
    </div>);
}

// Try out some challenges
/*
Challenge 3 of 4: Restore input values when switching between tabs 
- In this example, switching between different recipients always clears the text input:
 */
const contactsChallenge3 = [
    { id: 0, name: 'Challenge3', email: 'challenge3@mail.com' },
    { id: 1, name: 'Luffy', email: 'luffy@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' },
    { id: 3, name: 'Lee', email: 'lee@mail.com' },
    { id: 4, name: 'Donny', email: 'don@mail.com' },
    { id: 5, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 6, name: 'Alice', email: 'alice@mail.com' },
];

const initialStateChallenge3 = {
    selectedId: 1,
    messages: {
        0: 'Hello, Challenge3',
        1: 'Hello, Luffy',
        2: 'Hello, Bob',
        3: 'Hello, Lee',
        4: 'Hello, Donny',
        5: 'Hello, Taylor',
        6: 'Hello, Alice',
    },
};

function messengerReducerChallenge3(state, action) {
    switch (action.type) {
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId,
            };
        }
        case 'edited_message': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: action.message,
                },
            };
        }
        case 'sent_message': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: '',
                },
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

function Challenge3Messenger() {
    const [state, dispatch] = useReducer(messengerReducerChallenge3, initialStateChallenge3);
    const message = state.messages[state.selectedId];
    const contact = contactsChallenge3.find((c) => c.id === state.selectedId);

    return (
        <div>
            <Challenge1ContactList
                contacts={contactsChallenge3}
                selectedId={state.selectedId}
                dispatch={dispatch}
            />
            <Challenge2ChatSolution
                key={contact.id}
                message={message}
                contact={contact}
                dispatch={dispatch}
            />
        </div>
    );
}

function Challenge3ExtractingStateLogicIntoReducerDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 4: Restore input values when switching between tabs </p>
        <Challenge3Messenger />
    </div>);
}

// Try out some challenges
/*
Challenge 4 of 4: Implement useReducer from scratch 
- In the earlier examples, you imported the useReducer Hook from React. This time, you will implement the useReducer Hook itself! Here is a stub to get you started. It shouldn’t take more than 10 lines of code.
- To test your changes, try typing into the input or select a contact.
 */
function MyUseReducer(reducer, initialState) {
    const [state, setState] = useState(initialState);

    function dispatch(action) {
        const nextState = reducer(state, action);
        setState(nextState);
    }

    return [state, dispatch];
}

function Challenge4Chat({ contact, message, dispatch }) {
    return (
        <section className="chat">
            <textarea
                value={message}
                placeholder={'Chat to ' + contact.name}
                onChange={(e) => {
                    dispatch({
                        type: 'edited_message',
                        message: e.target.value,
                    });
                }}
            />
            <br />
            <button
                onClick={() => {
                    alert(`Sending "${message}" to ${contact.email}`);
                    dispatch({
                        type: 'sent_message',
                    });
                }}>
                Send to {contact.email}
            </button>
        </section>
    );
}

function Challenge4ContactList({ contacts, selectedId, dispatch }) {
    return (
        <section className="contact-list">
            <ul className='App-no-bullet-ul'>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <button
                            onClick={() => {
                                dispatch({
                                    type: 'changed_selection',
                                    contactId: contact.id,
                                });
                            }}>
                            {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function messengerReducerChallenge4(state, action) {
    switch (action.type) {
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId,
            };
        }
        case 'edited_message': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: action.message,
                },
            };
        }
        case 'sent_message': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: '',
                },
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const contactsChallenge4 = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

const initialStateChallenge4 = {
    selectedId: 0,
    messages: {
        0: 'Hello, Taylor',
        1: 'Hello, Alice',
        2: 'Hello, Bob',
    },
};

function Challenge4Messenger() {
    const [state, dispatch] = MyUseReducer(messengerReducerChallenge4, initialStateChallenge4);
    const message = state.messages[state.selectedId];
    const contact = contactsChallenge4.find((c) => c.id === state.selectedId);
    return (
        <div>
            <Challenge4ContactList
                contacts={contactsChallenge4}
                selectedId={state.selectedId}
                dispatch={dispatch}
            />
            <Challenge4Chat
                key={contact.id}
                message={message}
                contact={contact}
                dispatch={dispatch}
            />
        </div>
    );
}

function Challenge4ExtractingStateLogicIntoReducerDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 4: Implement useReducer from scratch </p>

        <div className='App-row-container'>
            <div className='App-left-aligned-small-box-border App-medium-font-size'>
                <p>function MyUseReducer(reducer, initialState) {'{'}</p>
                <div className='App-small-font-size'>
                    <p className='App-tabbed-content'> const [state, setState] = useState(initialState);</p>
                    <p className='App-tabbed-content'> function dispatch(action) {'{'}</p>
                    <div className='App-tabbed-content'>
                        <p className='App-tabbed-content'> const nextState = reducer(state, action);</p>
                        <p className='App-tabbed-content'> setState(nextState);</p>
                    </div>
                    <p className='App-tabbed-content'> {'}'}</p>
                    <p className='App-tabbed-content'> return [state, dispatch];</p>
                </div>
                <p>{'}'}</p>
            </div>

            <Challenge4Messenger />
        </div>
    </div>);
}

// Try out some challenges
function ChallengesExtractingStateLogicIntoReducerDemo() {
    return (<div className="App-left-aligned-content">
        <Challenge1ExtractingStateLogicIntoReducerDemo />
        <hr></hr>
        <Challenge2ExtractingStateLogicIntoReducerDemo />
        <hr></hr>
        <Challenge3ExtractingStateLogicIntoReducerDemo />
        <hr></hr>
        <Challenge4ExtractingStateLogicIntoReducerDemo />
        <hr></hr>
    </div>);
}