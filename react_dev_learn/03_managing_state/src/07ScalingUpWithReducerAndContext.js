import './App.css';
import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import SigleFileTaskApp from './07TaskContext';

// Main Default For Scaling Up with Reducer and Context Demo
export default function ScalingUpWithReducerAndContextDemo() {
    return (
        <div>
            <hr></hr>
            <p>Reducers let you consolidate a component’s state update logic. Context lets you pass information deep down to other components. You can combine reducers and context together to manage state of a complex screen.</p>

            <h2 className="App-title"> Combining a reducer with context </h2>
            <CombiningReducerWithContextDemo />

            <h2 className="App-title"> Step 1: Create the context </h2>
            <Step1CreateContextDemo />

            <h2 className="App-title"> Step 2: Put state and dispatch into context </h2>
            <Step2PutStateAndDispatchDemo />

            <h2 className="App-title"> Step 3: Use context anywhere in the tree </h2>
            <Step3UseContextDemo />

            <h2 className="App-title"> Moving all wiring into a single file </h2>
            <MovingAllWiringIntoASingleFileDemo />

            <h2 className="App-title"> Recap </h2>
            <RecapScalingUpWithReducerAndContextDemo />
        </div>
    );
}

// Combining a reducer with context 
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

let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];

function TaskApp() {
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
            <h1>Day off in Kyoto</h1>
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

function CombiningReducerWithContextDemo() {
    return (<div className="App-left-aligned-content">
        <p>This is Take App with Reducer Demo : </p>
        <TaskApp />
        <hr></hr>
        <p>A reducer helps keep the event handlers short and concise. However, as your app grows, you might run into another difficulty. Currently, the tasks state and the dispatch function are only available in the top-level TaskApp component. To let other components read the list of tasks or change it, you have to explicitly pass down the current state and the event handlers that change it as props.</p>
        <ul>
            <ol>
                <li>Create the context.</li>
                <li>Put state and dispatch into context.</li>
                <li>Use context anywhere in the tree.</li>
            </ol>
        </ul>
    </div>);
}

// Step 1: Create the context 
function Step1CreateContextDemo() {
    return (<div className="App-left-aligned-content">
        <p>To pass them down the tree, you will create two separate contexts:</p>
        <ul>
            <li>TasksContext provides the current list of tasks.</li>
            <li>TasksDispatchContext provides the function that lets components dispatch actions.</li>
        </ul>

        <div className='App-left-aligned-border '>
            <p> import {'{'} createContext  {'}'} from 'react';</p>
            <p> export const TasksContext = createContext(null);</p>
            <p> export const TasksDispatchContext = createContext(null);</p>
        </div>
    </div>);
}

// Step 2: Put state and dispatch into context 
const Step2TasksContext = createContext(null);
const Step2TasksDispatchContext = createContext(null);

function Step2AddTask({ onAddTask }) {
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

function Step2TaskList({
    tasks,
    onChangeTask,
    onDeleteTask
}) {
    return (
        <ul className='App-no-bullet-ul'>
            {tasks.map(task => (
                <li key={task.id}>
                    <Step2Task
                        task={task}
                        onChange={onChangeTask}
                        onDelete={onDeleteTask}
                    />
                </li>
            ))}
        </ul>
    );
}

function Step2Task({ task, onChange, onDelete }) {
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

function tasksReducerStep2(tasks, action) {
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

let nextIdStep2 = 4;
const initialTasksStep2 = [
    { id: 0, text: 'Step2 Demo', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false },
    { id: 3, text: 'Philosopher’s Path', done: true },
];

function Step2TaskApp() {
    const [tasks, dispatch] = useReducer(
        tasksReducerStep2,
        initialTasksStep2
    );

    function handleAddTask(text) {
        dispatch({
            type: 'added',
            id: nextIdStep2++,
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
        <Step2TasksContext.Provider value={tasks}>
            <Step2TasksDispatchContext.Provider value={dispatch}>
                <h1>Day off in Kyoto | Step 2 Demo</h1>
                <Step2AddTask
                    onAddTask={handleAddTask}
                />
                <Step2TaskList
                    tasks={tasks}
                    onChangeTask={handleChangeTask}
                    onDeleteTask={handleDeleteTask}
                />
            </Step2TasksDispatchContext.Provider>
        </Step2TasksContext.Provider>
    );
}

function Step2PutStateAndDispatchDemo() {
    return (<div className="App-left-aligned-content">
        <p>Now you can import both contexts in your TaskApp component. Take the tasks and dispatch returned by useReducer() and provide them to the entire tree below:</p>
        <Step2TaskApp />

        <div className='App-left-aligned-border App-small-font-size'>
            <p>import  {'{'} TasksContext, TasksDispatchContext{'}'} from './TasksContext.js';</p>
            <p>export default function TaskApp() {'{'} </p>
            <div className='App-tabbed-content'>
                <p>  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);</p>
                <p>   return {'('}  </p>
                <div className='App-tabbed-content'>
                    <p> {'<'} TasksContext.Provider value= {'{'} tasks{'}'} {'>'} </p>
                    <div className='App-tabbed-content'>
                        <p> {'<'} TasksDispatchContext.Provider value= {'{'} dispatch{'}'} {'>'} </p>
                        <p>...</p>
                        <p> {'<'} /TasksDispatchContext.Provider{'>'} </p>
                    </div>
                    <p> {'<'} /TasksContext.Provider{'>'} </p>
                </div>
                <p>{')'} ; </p>
            </div>
            <p>{'}'} </p>
        </div>
    </div>);
}

// Step 3: Use context anywhere in the tree 
const Step3TasksContext = createContext(null);
const Step3TasksDispatchContext = createContext(null);

function Step3AddTask() {
    const [text, setText] = useState('');
    const dispatch = useContext(Step3TasksDispatchContext);

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
                    id: nextIdStep3++,
                    text: text,
                });
            }}>Add</button>
        </>
    )
}

function Step3TaskList() {
    const tasks = useContext(Step3TasksContext);

    return (
        <ul className='App-no-bullet-ul'>
            {tasks.map(task => (
                <li key={task.id}>
                    <Step3Task
                        task={task}
                    />
                </li>
            ))}
        </ul>
    );
}

function Step3Task({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(Step3TasksDispatchContext);

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

function tasksReducerStep3(tasks, action) {
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

let nextIdStep3 = 4;
const initialTasksStep3 = [
    { id: 0, text: 'Step3 Demo', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false },
    { id: 3, text: 'Philosopher’s Path', done: true },
];

function Step3TaskApp() {
    const [tasks, dispatch] = useReducer(
        tasksReducerStep3,
        initialTasksStep3
    );

    return (
        <Step3TasksContext.Provider value={tasks}>
            <Step3TasksDispatchContext.Provider value={dispatch}>
                <h1>Day off in Kyoto | Step 3 Demo</h1>
                <Step3AddTask />
                <Step3TaskList />
            </Step3TasksDispatchContext.Provider>
        </Step3TasksContext.Provider>
    );
}

function Step3UseContextDemo() {
    return (<div className="App-left-aligned-content">
        <p>Now you don’t need to pass the list of tasks or the event handlers down the tree, Instead, any component that needs the task list can read it from the TaskContext:</p>
        <div className='App-left-aligned-border'>
            <ul>
                <li>  const tasks = useContext(TasksContext);</li>
                <li>  const dispatch = useContext(TasksDispatchContext);</li>
            </ul>
        </div>
        <p>The TaskApp component does not pass any event handlers down, and the TaskList does not pass any event handlers to the Task component either. Each component reads the context that it needs:</p>
        <Step3TaskApp />
    </div>);
}

// Moving all wiring into a single file 
function MovingAllWiringIntoASingleFileDemo() {
    return (<div className="App-left-aligned-content">
        <p>Now all of the context and reducer wiring is in TasksContext.js. This keeps the components clean and uncluttered, focused on what they display rather than where they get the data:</p>
        <SigleFileTaskApp />
    </div>);
}

// Recap
function RecapScalingUpWithReducerAndContextDemo() {
    return (<div className="App-left-aligned-content">
        <ui>
            <li>

                You can combine reducer with context to let any component read and update state above it.
            </li>
            <li>
                To provide state and the dispatch function to components below:
                <ui>
                    <div className='App-left-aligned-border'>
                        <li className='App-small-font-size'>
                            1.Create two contexts (for state and for dispatch functions).
                        </li>
                        <li className='App-small-font-size'>
                            2.Provide both contexts from the component that uses the reducer.
                        </li>
                        <li className='App-small-font-size'>
                            3.Use either context from components that need to read them.
                        </li>
                    </div >
                </ui>
            </li>
            <li>
                You can further declutter the components by moving all wiring into one file.
            </li>
            <li>
                You can export a component like TasksProvider that provides context.
            </li>
            <li>
                You can also export custom Hooks like useTasks and useTasksDispatch to read it.
            </li>
            <li>
                You can have many context-reducer pairs like this in your app.
            </li>
        </ui>
    </div >);
}