import { createContext, useContext, useReducer } from 'react';
import { useState } from 'react';

let nextId = 4;
const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);
const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false },
    { id: 4, text: 'Sigle File', done: true }
];

export default function SigleFileTaskApp() {
    return (
        <TasksProvider>
            <h1>Day off in Kyoto Task App In Single File</h1>
            <AddTask />
            <TaskList />
        </TasksProvider>
    );
}

function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    );

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

function TaskList() {
    const tasks = useTasks();
    return (
        <ul className='App-no-bullet-ul'>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
}

function AddTask() {
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

function useTasks() {
    return useContext(TasksContext);
}

function useTasksDispatch() {
    return useContext(TasksDispatchContext);
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

function Task({ task }) {
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