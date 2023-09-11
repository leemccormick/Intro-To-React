import './App.css';
import { useState } from 'react';
import { useImmer } from 'use-immer';

// Main Default For Updating Arrays in State Demo
export default function UpdatingArraysInStateDemo() {
    return (
        <div>
            <h1 className="App-topic">Updating Arrays in State</h1>
            <p>Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in state. Just like with objects, when you want to update an array stored in state, you need to create a new one (or make a copy of an existing one), and then set state to use the new array.</p>

            <h2 className="App-title">Updating arrays without mutation</h2>
            <UpdatingArraysWithoutMutationDemo />

            <h2 className="App-title">Adding to an array</h2>
            <AddingToArrayDemo />

            <h2 className="App-title">Removing from an array</h2>
            <RemovingFromArrayDemo />

            <h2 className="App-title">Transforming an array</h2>
            <TransformingArrayDemo />

            <h2 className="App-title">Replacing items in an array</h2>
            <ReplacingItemsInArrayDemo />

            <h2 className="App-title">Inserting into an array</h2>
            <InsertingIntoAnArrayDemo />

            <h2 className="App-title">Making other changes to an array</h2>
            <MakingOtherChangesToArrayDemo />

            <h2 className="App-title">Updating objects inside arrays</h2>
            <UpdatingObjectsInsideArraysDemo />

            <h2 className="App-title">Write concise update logic with Immer</h2>
            <WriteConciseUpdateLogicWithImmerDemo />

            <h2 className="App-title">Recap</h2>
            <UpdatingArraysInStateRecapDemo />

            <h2 className="App-title">Try out some challenges</h2>
            <UpdatingArraysInStateChallengesDemo />
        </div>
    );
}

// Updating arrays without mutation 
function UpdatingArraysWithoutMutationDemo() {
    return (<div className="App-left-aligned-content">
        <p>Instead, every time you want to update an array, you’ll want to pass a new array to your state setting function. To do that, you can create a new array from the original array in your state by calling its non-mutating methods like filter() and map(). Then you can set your state to the resulting new array.</p>

        <table className='App-left-aligned-border'>
            <thead>
                <tr>
                    <th>Array Methods</th>
                    <th className='App-hilight-color'> | </th>
                    <th className='App-error-color '>Avoid (mutates the array)</th>
                    <th className='App-hilight-color'> | </th>
                    <th className='App-success-color'>Prefer (returns a new array)</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td colspan="5" className='App-hilight-color'>-----------------------------------------------------------------------------</td>
                </tr>

                <tr>
                    <td>adding</td>
                    <td className='App-hilight-color'> | </td>
                    <td className='App-error-color '>push, unshift</td>
                    <td className='App-hilight-color'> | </td>
                    <td className='App-success-color'>concat, [...arr] spread syntax</td>
                </tr>

                <tr>
                    <td>removing</td>
                    <td className='App-hilight-color'> | </td>
                    <td className='App-error-color '>pop, shift, splice</td>
                    <td className='App-hilight-color'> | </td>
                    <td className='App-success-color'>filter, slice </td>
                </tr>

                <tr>
                    <td>replacing</td>
                    <td className='App-hilight-color'> | </td>
                    <td className='App-error-color '>splice, arr[i] = ... assignment</td>
                    <td className='App-hilight-color'> | </td>
                    <td className='App-success-color'>map</td>
                </tr>

                <tr>
                    <td>sorting</td>
                    <td className='App-hilight-color'> | </td>
                    <td className='App-error-color '>reverse, sort	</td>
                    <td className='App-hilight-color'> | </td>
                    <td className='App-success-color'>copy the array first</td>
                </tr>
            </tbody>
        </table>
    </div>);
}

// Adding to an array 
function AddingToArrayList() {
    let nextId = 0;
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);
    const [artistsWithPush, setArtistsWithPush] = useState([]);

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <button onClick={() => {
                artistsWithPush.push({
                    id: nextId++,
                    name: name,
                });
            }}>Add With Push</button>

            <button onClick={() => {
                setArtists([
                    ...artists,
                    { id: nextId++, name: name }
                ]);
            }}>Add With Array Spread</button>

            <button onClick={() => {
                setArtists([]);
                setArtistsWithPush([]);
            }}>Reset Array To Empty</button>

            <ul>
                {artists.map(artist => (
                    <li className='App-success-color' key={artist.id}>{artist.name}</li>
                ))}

                {artistsWithPush.map(artist => (
                    <li className='App-error-color' key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    );
}

function AddingToArrayDemo() {
    return (<div className="App-left-aligned-content">
        <p className='App-error-color'>push() will mutate an array, which you don’t want:</p>
        <p className='App-success-color'>Instead, create a new array which contains the existing items and a new item at the end. There are multiple ways to do this, but the easiest one is to use the ... array spread syntax:</p>

        <p className='App-left-aligned-border' >{`{`} id: nextId++, name: name {`}`},...artists // Put old items at the end</p>
        <AddingToArrayList />
    </div>);
}

// Removing from an array 
let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' },
];

function RemovingFromArrayList() {
    const [artists, setArtists] = useState(initialArtists);

    return (
        <>
            <h1>Inspiring sculptors:</h1>

            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>
                        {artist.name}{' '}
                        <button onClick={() => {
                            setArtists(
                                artists.filter(a =>
                                    a.id !== artist.id
                                )
                            );
                        }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

function RemovingFromArrayDemo() {
    return (<div className="App-left-aligned-content">
        <p>The easiest way to remove an item from an array is to filter.</p>
        <p className='App-left-aligned-border'> artists.filter(a ={`>`} a.id !== artist.id)</p>
        <RemovingFromArrayList />
    </div>);
}

// Transforming an array 
let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 },
];

function TransformingArraShapeEditor() {
    const [shapes, setShapes] = useState(
        initialShapes
    );

    function handleClick() {
        const nextShapes = shapes.map(shape => {
            if (shape.type === 'square') {
                // No change
                return shape;
            } else {
                // Return a new circle 50px below
                return {
                    ...shape,
                    y: shape.y + 50,
                };
            }
        });
        // Re-render with the new array
        setShapes(nextShapes);
    }

    return (
        <>
            <button onClick={handleClick}>
                Move circles down!
            </button>
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    style={{
                        background: 'yellow',
                        position: 'absolute',
                        left: shape.x,
                        top: shape.y,
                        borderRadius:
                            shape.type === 'circle'
                                ? '50%' : '',
                        width: 20,
                        height: 20,
                    }} />
            ))}
        </>
    );
}

function TransformingArrayDemo() {
    return (<div className="App-left-aligned-content">
        <p>To change some or all items of the array, you can use map() to create a new array. </p>
        <TransformingArraShapeEditor />
    </div>);
}

// Replacing items in an array 
let initialCounters = [
    0, 0, 0
];

function ReplacingItemsInArrayCounterList() {
    const [counters, setCounters] = useState(
        initialCounters
    );

    function handleIncrementClick(index) {
        const nextCounters = counters.map((c, i) => {
            if (i === index) {
                // Increment the clicked counter
                return c + 1;
            } else {
                // The rest haven't changed
                return c;
            }
        });
        setCounters(nextCounters);
    }

    return (
        <ul>
            {counters.map((counter, i) => (
                <li key={i}>
                    {counter}
                    <button onClick={() => {
                        handleIncrementClick(i);
                    }}>+1</button>
                </li>
            ))}
        </ul>
    );
}

function ReplacingItemsInArrayDemo() {
    return (<div className="App-left-aligned-content">
        <p>To replace an item, create a new array with map. Inside your map call</p>
        <ReplacingItemsInArrayCounterList />
    </div>);
}

// Inserting into an array 
let nextId = 3;

function InsertingIntoAnArrayList() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState(
        initialArtists
    );

    function handleClick() {
        const insertAt = 1; // Could be any index
        const nextArtists = [
            // Items before the insertion point:
            ...artists.slice(0, insertAt),
            // New item:
            { id: nextId++, name: name },
            // Items after the insertion point:
            ...artists.slice(insertAt)
        ];
        setArtists(nextArtists);
        setName('');
    }

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <button onClick={handleClick}>
                Insert
            </button>

            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    );
}

function InsertingIntoAnArrayDemo() {
    return (<div className="App-left-aligned-content">
        <p>The slice() method lets you cut a “slice” of the array. To insert an item, you will create an array that spreads the slice before the insertion point, then the new item, and then the rest of the original array.</p>
        <div className='App-left-aligned-border'>
            <ul>
                <li>...artists.slice(0, insertAt), // 1.Items before the insertion point </li>
                <li>{`{`} id: nextId++, name: name {`}`}, // 2.New item</li>
                <li>...artists.slice(insertAt) // 3.Items after the insertion point</li>
            </ul>
        </div>

        <InsertingIntoAnArrayList />
    </div>);
}

// Making other changes to an array 
const initialList = [
    { id: 0, title: 'Big Bellies' },
    { id: 1, title: 'Lunar Landscape' },
    { id: 2, title: 'Terracotta Army' },
];

function MakingOtherChangesToArrayList() {
    const [list, setList] = useState(initialList);

    function handleClick() {
        const nextList = [...list];
        nextList.reverse();
        setList(nextList);
    }

    return (
        <>
            <button onClick={handleClick}>
                Reverse
            </button>
            <ul>
                {list.map(artwork => (
                    <li key={artwork.id}>{artwork.title}</li>
                ))}
            </ul>
        </>
    );
}

function MakingOtherChangesToArrayDemo() {
    return (<div className="App-left-aligned-content">
        <p>However, you can copy the array first, and then make changes to it..</p>
        <div className='App-left-aligned-border'>
            <ul>
                <li>const nextList = [...list]; </li>
                <li>nextList.reverse();</li>
                <li>setList(nextList);</li>
            </ul>
        </div>
        <MakingOtherChangesToArrayList />
    </div>);
}

// Updating objects inside arrays 
function UpdatingObjectsInsideArraysItemList({ artworks, onToggle }) {
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

function UpdatingObjectsInsideArraysBucketList() {
    const [myList, setMyList] = useState(initialList);
    const [yourList, setYourList] = useState(
        initialList
    );

    function handleToggleMyList(artworkId, nextSeen) {
        const myNextList = [...myList];
        const artwork = myNextList.find(
            a => a.id === artworkId
        );
        artwork.seen = nextSeen;
        setMyList(myNextList);
    }

    function handleToggleYourList(artworkId, nextSeen) {
        const yourNextList = [...yourList];
        const artwork = yourNextList.find(
            a => a.id === artworkId
        );
        artwork.seen = nextSeen;
        setYourList(yourNextList);
    }

    return (
        <div className='App-row-container'>
            <div >
                <h1 className='App-error-color'>Art Bucket List Error</h1>

                <h2>My list of art to see:</h2>
                <UpdatingObjectsInsideArraysItemList
                    artworks={myList}
                    onToggle={handleToggleMyList} />

                <h2>Your list of art to see:</h2>
                <UpdatingObjectsInsideArraysItemList
                    artworks={yourList}
                    onToggle={handleToggleYourList} />

                <p className='App-error-color'>***Although the myNextList array itself is new, the items themselves are the same as in the original myList array.</p>
                <p> So changing artwork.seen changes the original artwork item. </p>
            </div>
        </div>
    );
}

function UpdatingObjectsInsideArraysBucketListWithMap() {
    const [myList, setMyList] = useState(initialList);
    const [yourList, setYourList] = useState(
        initialList
    );

    function handleToggleMyListWithMap(artworkId, nextSeen) {
        setMyList(myList.map(artwork => {
            if (artwork.id === artworkId) {
                // Create a *new* object with changes
                return { ...artwork, seen: nextSeen };
            } else {
                // No changes
                return artwork;
            }
        }));
    }

    function handleToggleYourListWithMap(artworkId, nextSeen) {
        setYourList(yourList.map(artwork => {
            if (artwork.id === artworkId) {
                // Create a *new* object with changes
                return { ...artwork, seen: nextSeen };
            } else {
                // No changes
                return artwork;
            }
        }));
    }

    return (
        <div>
            <h1 className='App-success-color'>Art Bucket List Success With Map</h1>

            <h2>My list of art to see:</h2>
            <UpdatingObjectsInsideArraysItemList
                artworks={myList}
                onToggle={handleToggleMyListWithMap} />

            <h2>Your list of art to see:</h2>
            <UpdatingObjectsInsideArraysItemList
                artworks={yourList}
                onToggle={handleToggleYourListWithMap} />

            <p className='App-success-color'>***You can use map to substitute an old item with its updated version without mutation.</p>
        </div>
    );
}

function UpdatingObjectsInsideArraysDemo() {
    return (<div className="App-left-aligned-content">
        <p>When updating nested state, you need to create copies from the point where you want to update, and all the way up to the top level. </p>

        <div className='App-row-container'>
            <UpdatingObjectsInsideArraysBucketList />
            <hr></hr>
            <UpdatingObjectsInsideArraysBucketListWithMap />
        </div>
    </div>);
}

// Write concise update logic with Immer 
function WriteConciseUpdateLogicWithImmerBucketList() {
    const [myList, updateMyList] = useImmer(
        initialList
    );
    const [yourList, updateYourList] = useImmer(
        initialList
    );

    function handleToggleMyList(id, nextSeen) {
        updateMyList(draft => {
            const artwork = draft.find(a =>
                a.id === id
            );
            artwork.seen = nextSeen;
        });
    }

    function handleToggleYourList(artworkId, nextSeen) {
        updateYourList(draft => {
            const artwork = draft.find(a =>
                a.id === artworkId
            );
            artwork.seen = nextSeen;
        });
    }

    return (
        <div>
            <h1 className='App-success-color'>Art Bucket List Success With Immer</h1>

            <h2>My list of art to see:</h2>
            <UpdatingObjectsInsideArraysItemList
                artworks={myList}
                onToggle={handleToggleMyList} />

            <h2>Your list of art to see:</h2>
            <UpdatingObjectsInsideArraysItemList
                artworks={yourList}
                onToggle={handleToggleYourList} />
        </div>
    );
}

function WriteConciseUpdateLogicWithImmerDemo() {
    return (<div className="App-left-aligned-content">
        <p>This is because you’re not mutating the original state, but you’re mutating a special draft object provided by Immer. Similarly, you can apply mutating methods like push() and pop() to the content of the draft.</p>
        <WriteConciseUpdateLogicWithImmerBucketList />
    </div>);
}

// Recap
function UpdatingArraysInStateRecapDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>
                You can put arrays into state, but you can’t change them.
            </li>
            <li>
                Instead of mutating an array, create a new version of it, and update the state to it.
            </li>
            <li>
                You can use the [...arr, newItem] array spread syntax to create arrays with new items.
            </li>
            <li>
                You can use filter() and map() to create new arrays with filtered or transformed items.
            </li>
            <li>
                You can use Immer to keep your code concise.
            </li>
        </ul>
    </div>);
}

// Try out some challenges
/*
Challenge 1 of 4: Update an item in the shopping cart 
- Fill in the handleIncreaseClick logic so that pressing ”+” increases the corresponding number:
 */
const initialProducts = [{
    id: 0,
    name: 'Baklava',
    count: 1,
}, {
    id: 1,
    name: 'Cheese',
    count: 5,
}, {
    id: 2,
    name: 'Spaghetti',
    count: 2,
}];

function Challenge1ShoppingCart() {
    const [
        products,
        setProducts
    ] = useState(initialProducts)

    function handleIncreaseClick(productId) {
        setProducts(products.map(produce => {
            if (produce.id === productId) {
                // Create a *new* object with changes
                return { ...produce, count: produce.count + 1 };
            } else {
                // No changes
                return produce;
            }
        }));
    }

    return (
        <ul className='App-no-bullet-ul'>
            {products.map(product => (
                <li className='App-hilight-color' key={product.id}>
                    {product.name}
                    {' '}
                    (<b>{product.count}</b>)
                    <button onClick={() => {
                        handleIncreaseClick(product.id);
                    }}>
                        +
                    </button>
                </li>
            ))}
        </ul>
    );
}

function UpdatingArraysInStateChallenge1Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 4: Update an item in the shopping cart</p>
        <Challenge1ShoppingCart />
    </div>);
}

// Try out some challenges
/*
Challenge 2 of 4: Remove an item from the shopping cart 
-This shopping cart has a working ”+” button, but the ”–” button doesn’t do anything. You need to add an event handler to it so that pressing it decreases the count of the corresponding product. If you press ”–” when the count is 1, the product should automatically get removed from the cart. Make sure it never shows 0.
 */
function Challenge2ShoppingCart() {
    const [
        products,
        setProducts
    ] = useState(initialProducts)

    function handleIncreaseClick(productId) {
        setProducts(products.map(produce => {
            if (produce.id === productId) {
                // Create a *new* object with changes
                return { ...produce, count: produce.count + 1 };
            } else {
                // No changes
                return produce;
            }
        }));
    }

    function handleDecreaseClick(productId) {
        let nextProducts = products.map(produce => {
            if (produce.id === productId && produce.count > 0) {
                // Create a *new* object with changes
                return { ...produce, count: produce.count - 1 };
            } else {
                // No changes
                return produce;
            }
        });

        nextProducts.filter(p => p.count > 0);
        setProducts(nextProducts);
    }
    return (
        <ul className='App-no-bullet-ul'>
            {products.map(product => (
                <li className='App-hilight-color' key={product.id}>
                    {product.name}
                    {' '}
                    (<b>{product.count}</b>)

                    <button onClick={() => {
                        handleIncreaseClick(product.id);
                    }}>
                        +
                    </button>

                    <button onClick={() => {
                        handleDecreaseClick(product.id);
                    }}>
                        -
                    </button>
                </li>
            ))}
        </ul>
    );
}

function UpdatingArraysInStateChallenge2Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 4: Remove an item from the shopping cart </p>
        <Challenge2ShoppingCart />
    </div>);
}

// Try out some challenges
/*
Challenge 3 of 4: Fix the mutations using non-mutative methods 
- In this example, all of the event handlers in App.js use mutation. As a result, editing and deleting todos doesn’t work. Rewrite handleAddTodo, handleChangeTodo, and handleDeleteTodo to use the non-mutative methods:
 */
function AddTodo({ onAddTodo }) {
    const [title, setTitle] = useState('');
    return (
        <>
            <input
                placeholder="Add todo"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button onClick={() => {
                setTitle('');
                onAddTodo(title);
            }}>Add</button>
        </>
    )
}

function TaskList({
    todos,
    onChangeTodo,
    onDeleteTodo
}) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <Task
                        todo={todo}
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task({ todo, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent;
    if (isEditing) {
        todoContent = (
            <>
                <input
                    value={todo.title}
                    onChange={e => {
                        onChange({
                            ...todo,
                            title: e.target.value
                        });
                    }} />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        todoContent = (
            <>
                {todo.title}
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
                checked={todo.done}
                onChange={e => {
                    onChange({
                        ...todo,
                        done: e.target.checked
                    });
                }}
            />
            {todoContent}
            <button onClick={() => onDelete(todo.id)}>
                Delete
            </button>
        </label>
    );
}

let taskAppnextId = 3;
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];

function Challenge3TaskApp() {
    const [todos, setTodos] = useState(
        initialTodos
    );

    function handleAddTodo(title) {
        setTodos([
            ...todos,
            {
                id: taskAppnextId++,
                title: title,
                done: false
            }
        ]);
    }

    function handleChangeTodo(nextTodo) {
        setTodos(todos.map(t => {
            if (t.id === nextTodo.id) {
                return nextTodo;
            } else {
                return t;
            }
        }));
    }

    function handleDeleteTodo(todoId) {
        setTodos(
            todos.filter(t => t.id !== todoId)
        );
    }

    return (
        <>
            <AddTodo
                onAddTodo={handleAddTodo}
            />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}

function UpdatingArraysInStateChallenge3Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 4: Fix the mutations using non-mutative methods </p>
        <Challenge3TaskApp />
    </div>);
}

// Try out some challenges
/*
Challenge 4 of 4: Fix the mutations using Immer 
- This is the same example as in the previous challenge. This time, fix the mutations by using Immer. For your convenience, useImmer is already imported, so you need to change the todos state variable to use it.
 */
function Challenge4TaskAppWithImmer() {
    const [todos, updateTodos] = useImmer(
        initialTodos
    );

    function handleAddTodo(title) {
        updateTodos(draft => {
            draft.push({
                id: nextId++,
                title: title,
                done: false
            });
        });
    }

    function handleChangeTodo(nextTodo) {
        updateTodos(draft => {
            const todo = draft.find(t =>
                t.id === nextTodo.id
            );
            todo.title = nextTodo.title;
            todo.done = nextTodo.done;
        });
    }

    function handleDeleteTodo(todoId) {
        updateTodos(draft => {
            const index = draft.findIndex(t =>
                t.id === todoId
            );
            draft.splice(index, 1);
        });
    }

    return (
        <>
            <AddTodo
                onAddTodo={handleAddTodo}
            />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}

function UpdatingArraysInStateChallenge4Demo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 4: Fix the mutations using Immer</p>
        <Challenge4TaskAppWithImmer />
    </div>);
}

// Try out some challenges
function UpdatingArraysInStateChallengesDemo() {
    return (<div className="App-left-aligned-content">
        <UpdatingArraysInStateChallenge1Demo />
        <hr></hr>
        <UpdatingArraysInStateChallenge2Demo />
        <hr></hr>
        <UpdatingArraysInStateChallenge3Demo />
        <hr></hr>
        <UpdatingArraysInStateChallenge4Demo />
        <hr></hr>
    </div>);
}