import './App.css';
import { useState, useMemo } from 'react';

// Main Default For You Might Not Need an Effect Demo
export default function YouMightNotNeedEffectDemo() {
    return (
        <div>
            <h1 className="App-topic">You Might Not Need an Effect</h1>
            <p>Effects are an escape hatch from the React paradigm. They let you “step outside” of React and synchronize your components with some external system like a non-React widget, network, or the browser DOM. If there is no external system involved (for example, if you want to update a component’s state when some props or state change), you shouldn’t need an Effect. Removing unnecessary Effects will make your code easier to follow, faster to run, and less error-prone.</p>

            <h2 className="App-title">How to remove unnecessary Effects </h2>
            <HowRemoveUnnecessaryEffectsDemo />

            <h2 className="App-title">Updating state based on props or state </h2>
            <UpdatingStateBasedOnPropsOrStateDemo />

            <h2 className="App-title">Caching expensive calculations </h2>
            <CachingExpensiveCalculationsDemo />

            <h2 className="App-title">Resetting all state when a prop changes </h2>
            <ResettingAllStateWhenPropChangesDemo />

            <h2 className="App-title">Adjusting some state when a prop changes </h2>
            <AdjustingSomeStateWhenPropChangesDemo />

            <h2 className="App-title">Sharing logic between event handlers </h2>
            <SharingLogicBetweenEventHandlersDemo />

            <h2 className="App-title">Sending a POST request </h2>
            <SendingPOSTRequestDemo />

            <h2 className="App-title">Chains of computations </h2>
            <ChainsComputationsDemo />

            <h2 className="App-title">Initializing the application </h2>
            <InitializingApplicationDemo />

            <h2 className="App-title">Notifying parent components about state changes </h2>
            <NotifyingParentComponentsAboutStateChangesDemo />

            <h2 className="App-title">Passing data to the parent </h2>
            <PassingDataParentDemo />

            <h2 className="App-title"> Subscribing to an external store </h2>
            <SubscribingToExternalStoreDemo />

            <h2 className="App-title">Fetching data </h2>
            <FetchingDataDemo />

            <h2 className="App-title">Recap</h2>
            <RecapYouMightNotNeedEffectDemo />

            <h2 className="App-title"> Try out some challenges</h2>
            <ChallengesYouMightNotNeedEffectDemo />
        </div>
    );
}

//--------------------------------------------------------------------------------------
// How to remove unnecessary Effects 
function HowRemoveUnnecessaryEffectsDemo() {
    return (<div className="App-left-aligned-content">
        <p>There are two common cases in which you don’t need Effects:</p>
        <ul>
            <li>You don’t need Effects to transform data for rendering. </li>
            <li>You don’t need Effects to handle user events. </li>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
// Updating state based on props or state 
function YouMightNotNeedAnEffectExample() {
    return (
        <div className="App-smallest-box-border-error-color App-small-font-size">
            <p className='App-medium-font-size App-error-color'>For example, you don’t need an Effect to adjust some state based on other state: </p>
            <hr></hr>

            <p>function Form() {'{'}</p>
            <div className='App-tabbed-content'>
                <p> const [firstName, setFirstName] = useState('Taylor');</p>
                <p> const [lastName, setLastName] = useState('Swift');</p>

                <div className='App-error-color'>
                    <p>{'//'} 🔴 Avoid: redundant state and unnecessary Effect</p>
                    <p>useEffect{'('}() ={'>'} {'{'}</p>
                </div>
                <div className='App-tabbed-content'>
                    <p> setFullName(firstName + ' ' + lastName);</p>
                </div>
                <p> {'}'}, [firstName, lastName]{')'};</p>
            </div>
            <p>{'}'}</p>
        </div>
    );
}

function YouMightNotNeedAnEffectCorrectExample() {
    return (<div className="App-smallest-box-border-success-color App-small-font-size">
        <p className='App-medium-font-size App-success-color'>Instead, calculate as much as you can while rendering:</p>
        <hr></hr>

        <p>function Form() {'{'}</p>
        <div className='App-tabbed-content'>
            <p> const [firstName, setFirstName] = useState('Taylor');</p>
            <p> const [lastName, setLastName] = useState('Swift');</p>

            <div className='App-success-color'>
                <p>{'//'}✅ Good: calculated during rendering</p>
                <p>const fullName = firstName + ' ' + lastName;</p>
            </div>
            <p>{'//'} ...</p>
        </div>
        <p>{'}'}</p>
    </div>);
}

function UpdatingStateBasedOnPropsOrStateDemo() {
    return (<div className="App-left-aligned-content">
        <p>When something can be calculated from the existing props or state, don’t put it in state. Instead, calculate it during rendering. </p>
        <div className='App-row-center-container'>
            <YouMightNotNeedAnEffectExample />
            <YouMightNotNeedAnEffectCorrectExample />
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Caching expensive calculations 
function CachingExpensiveCalculationsInCorrectExample1() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-error-color App-super-small-font-size">
        <p className='App-small-font-size App-error-color'>This component computes visibleTodos by taking the todos it receives by props and filtering them according to the filter prop. You might feel tempted to store the result in state and update it from an Effect:</p>
        <hr></hr>

        <p>function TodoList({'{'} todos, filter {'}'}){'{'}</p>
        <div className='App-tabbed-content'>
            <p>   const [newTodo, setNewTodo] = useState('');</p>

            <div className='App-hilight-color'>
                <p className='App-error-color'>{'//'} 🔴 Avoid: redundant state and unnecessary Effect</p>
                <p>  const [visibleTodos, setVisibleTodos] = useState([]);</p>
                <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                <p className='App-tabbed-content'> setVisibleTodos(getFilteredTodos(todos, filter));</p>
                <p>{'}'}, [todos, filter] {')'}; </p>
            </div>
            <p>{'//'} ...</p>
        </div>
        <p>{'}'}</p>
    </div>);
}

function CachingExpensiveCalculationsCorrectExample2() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-success-color App-super-small-font-size">
        <p className='App-medium-font-size App-success-color'>First, remove the state and the Effect :</p>
        <hr></hr>

        <p>function TodoList({'{'} todos, filter {'}'}){'{'}</p>
        <div className='App-tabbed-content'>
            <p>   const [newTodo, setNewTodo] = useState('');</p>

            <div className='App-hilight-color'>
                <p className='App-success-color'>{'//'} ✅ This is fine if getFilteredTodos() is not slow.</p>
                <p>    const visibleTodos = getFilteredTodos(todos, filter);
                    ;</p>
                <p> {'//'} ... </p>
            </div>
        </div>
        <p>{'}'}</p>

        <hr></hr>
        <p className='App-success-color'>Usually, this code is fine! But maybe getFilteredTodos() is slow or you have a lot of todos. In that case you don’t want to recalculate getFilteredTodos() if some unrelated state variable like newTodo has changed.</p>
    </div>);
}

function CachingExpensiveCalculationsCorrectExample3() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-success-color App-super-small-font-size">
        <p className='App-medium-font-size App-success-color'>You can cache (or “memoize”) an expensive calculation by wrapping it in a useMemo Hook:</p>
        <hr></hr>
        <p className='App-hilight-color'>import {'{'} useMemo, useState {'}'} from 'react';</p>
        <p>function TodoList({'{'} todos, filter {'}'}){'{'}</p>
        <div className='App-tabbed-content'>
            <p>   const [newTodo, setNewTodo] = useState('');</p>

            <div className='App-hilight-color'>
                <p className='App-success-color'>{'//'} ✅ Does not re-run unless todos or filter change</p>
                <p>    const visibleTodos = useMemo{'('}() ={'>'} {'{'}</p>
                <p>    return getFilteredTodos(todos, filter);</p>
                <p>{'}'}, [todos, filter] {')'}; </p>
                <p> {'//'} ... </p>
            </div>
        </div>
        <p>{'}'}</p>
    </div>);
}

function CachingExpensiveCalculationsCorrectExample4() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-success-color App-super-small-font-size">
        <p className='App-medium-font-size App-success-color'>Or, written as a single line:</p>
        <hr></hr>
        <p className='App-hilight-color'>import {'{'} useMemo, useState {'}'} from 'react';</p>
        <p>function TodoList({'{'} todos, filter {'}'}){'{'}</p>
        <div className='App-tabbed-content'>
            <p>   const [newTodo, setNewTodo] = useState('');</p>

            <div className='App-hilight-color'>
                <p className='App-success-color'>{'//'} ✅ Does not re-run getFilteredTodos() unless todos or filter change</p>
                <p>    const visibleTodos = useMemo{'('}() ={'>'} getFilteredTodos(todos, filter), [todos, filter] {')'}; </p>
                <p> {'//'} ... </p>
            </div>
        </div>
        <p>{'}'}</p>
    </div>);
}

function CachingExpensiveCalculationsDemo() {
    return (<div className="App-left-aligned-content">
        <p>You can cache (or “memoize”) an expensive calculation by wrapping it in a useMemo Hook.</p>
        <div className='App-row-center-container'>
            <CachingExpensiveCalculationsInCorrectExample1 />
            <CachingExpensiveCalculationsCorrectExample2 />
        </div>

        <div className='App-row-center-container'>
            <CachingExpensiveCalculationsCorrectExample3 />
            <CachingExpensiveCalculationsCorrectExample4 />
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Resetting all state when a prop changes 
function ResettingAllStateWhenPropChangesIncorrectExample1() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-error-color App-super-small-font-size">
        <p className='App-error-color'>This ProfilePage component receives a userId prop. The page contains a comment input, and you use a comment state variable to hold its value. One day, you notice a problem: when you navigate from one profile to another, the comment state does not get reset. As a result, it’s easy to accidentally post a comment on a wrong user’s profile. To fix the issue, you want to clear out the comment state variable whenever the userId changes:</p>
        <hr></hr>

        <p>export default function ProfilePage({'{'} userId {'}'}) {'{'}</p>
        <div className='App-tabbed-content'>
            <p>  const [comment, setComment] = useState('');</p>

            <div className='App-hilight-color'>
                <p className='App-error-color'>{'//'} 🔴 Avoid: Resetting state on prop change in an Effect </p>
                <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                <p className='App-tabbed-content'>setComment('');</p>
                <p>{'}'}, [userId] {')'}; </p>
            </div>
            <p>{'//'} ...</p>
        </div>
        <p>{'}'}</p>
    </div>);
}

function ResettingAllStateWhenPropChangesCorrectExample2() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-success-color App-super-small-font-size">
        <p className='App-success-color'>Instead, you can tell React that each user’s profile is conceptually a different profile by giving it an explicit key. Split your component in two and pass a key attribute from the outer component to the inner one:</p>
        <hr></hr>

        <p>export default function ProfilePage({'{'} userId {'}'}) {'{'}</p>
        <div className='App-tabbed-content'>
            <div className='App-hilight-color'>
                <p>return {'('}</p>
                <p className='App-tabbed-content'>   {'<'}Profile </p>
                <p className='App-tabbed-content App-tabbed-content'> userId={'{'}userId{'}'}</p>
                <p className='App-tabbed-content App-tabbed-content App-success-color'> key={'{'}userId{'}'}</p>
                <p className='App-tabbed-content'>/{'>'}</p>
                <p>{')'}; </p>
            </div>
            <p>{'}'}</p>
        </div>

        <p>function Profile({'{'} userId {'}'}) {'{'}</p>
        <div className='App-tabbed-content'>
            <p className='App-success-color'>  {'//'}  ✅ This and any other state below will reset on key change automatically</p>
            <p className='App-hilight-color'>  const [comment, setComment] = useState('');</p>
            <p className='App-hilight-color'>  {'//'} ...</p>
        </div>
        <p>{'}'}</p>
    </div>);
}

function ResettingAllStateWhenPropChangesDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-center-container'>
            <ResettingAllStateWhenPropChangesIncorrectExample1 />
            <ResettingAllStateWhenPropChangesCorrectExample2 />
        </div>
        <p>Normally, React preserves the state when the same component is rendered in the same spot. By passing userId as a key to the Profile component, you’re asking React to treat two Profile components with different userId as two different components that should not share any state</p>
    </div>);
}

//--------------------------------------------------------------------------------------
// Adjusting some state when a prop changes 
function AdjustingSomeStateWhenPropChangesIncorrectExample1() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-error-color App-super-small-font-size">
        <p className='App-error-color'>This, too, is not ideal. Every time the items change, the List and its child components will render with a stale selection value at first. Then React will update the DOM and run the Effects. Finally, the setSelection(null) call will cause another re-render of the List and its child components, restarting this whole process again.</p>
        <hr></hr>

        <p>function List({'{'} items {'}'}) {'{'}</p>
        <div className='App-tabbed-content'>
            <p>const [isReverse, setIsReverse] = useState(false);</p>
            <p>const [selection, setSelection] = useState(null);</p>

            <div className='App-hilight-color'>
                <p className='App-error-color'>{'//'} 🔴 Avoid: Adjusting state on prop change in an Effect </p>
                <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                <p className='App-tabbed-content'>setSelection(null);</p>
                <p>{'}'}, [items] {')'}; </p>
            </div>
            <p>{'//'} ...</p>
        </div>
        <p>{'}'}</p>
    </div>);
}

function AdjustingSomeStateWhenPropChangesCorrectExample2() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-success-color App-super-small-font-size">
        <p className='App-success-color'>Although this pattern is more efficient than an Effect, most components shouldn’t need it either. No matter how you do it, adjusting state based on props or other state makes your data flow more difficult to understand and debug. Always check whether you can reset all state with a key or calculate everything during rendering instead. For example, instead of storing (and resetting) the selected item, you can store the selected item ID:</p>
        <hr></hr>

        <p>function List({'{'} items {'}'}) {'{'}</p>
        <div className='App-tabbed-content'>
            <p>const [isReverse, setIsReverse] = useState(false);</p>
            <p className='App-hilight-color'>  const [selectedId, setSelectedId] = useState(null);</p>
            <p className='App-success-color'>  {'//'}  ✅ Best: Calculate everything during rendering</p>
            <p className='App-hilight-color'>  const selection = items.find(item = {'>'} item.id === selectedId) ?? null</p>
            <p>  {'//'}...</p>
            <p>{'}'}</p>
        </div>
    </div>);
}

function AdjustingSomeStateWhenPropChangesDemo() {
    return (<div className="App-left-aligned-content">
        <p>Sometimes, you might want to reset or adjust a part of the state on a prop change, but not all of it.</p>
        <div className='App-row-center-container'>
            <AdjustingSomeStateWhenPropChangesIncorrectExample1 />
            <AdjustingSomeStateWhenPropChangesCorrectExample2 />
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Sharing logic between event handlers 
function SharingLogicBetweenEventHandlersInCorrectExample1() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-error-color App-super-small-font-size">
        <p className='App-error-color'>This Effect is unnecessary. It will also most likely cause bugs. For example, let’s say that your app “remembers” the shopping cart between the page reloads. If you add a product to the cart once and refresh the page, the notification will appear again. It will keep appearing every time you refresh that product’s page. This is because product.isInCart will already be true on the page load, so the Effect above will call showNotification().</p>
        <hr></hr>

        <p>function ProductPage({'{'}  product, addToCart  {'}'}) {'{'}</p>
        <div className='App-tabbed-content'>
            <div className='App-hilight-color'>
                <p className='App-error-color'>{'//'} 🔴 Avoid: Event-specific logic inside an Effect </p>
                <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                <p className='App-tabbed-content'> if (product.isInCart) {'{'}</p>
                <p className='App-tabbed-content App-tabbed-content'>   showNotification(`Added ${'{'} product.name {'}'} to the shopping cart!`); </p>
                <p className='App-tabbed-content'>{'}'}</p>
                <p>{'}'}, [product] {')'}; </p>
            </div>

            <p>function handleBuyClick() {'{'}</p>
            <p className='App-tabbed-content'> addToCart(product);</p>
            <p>{'}'}</p>

            <p>function handleCheckoutClick() {'{'}</p>
            <p className='App-tabbed-content'> addToCart(product);</p>
            <p className='App-tabbed-content'>  navigateTo('/checkout');</p>
            <p>{'}'}</p>
            <p>{'//'} ...</p>
        </div>
        <p>{'}'}</p>
    </div>);
}

function SharingLogicBetweenEventHandlersCorrectExample2() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-success-color App-super-small-font-size">
        <p className='App-success-color'>When you’re not sure whether some code should be in an Effect or in an event handler, ask yourself why this code needs to run. Use Effects only for code that should run because the component was displayed to the user. In this example, the notification should appear because the user pressed the button, not because the page was displayed! Delete the Effect and put the shared logic into a function called from both event handlers:</p>
        <hr></hr>

        <p>function ProductPage({'{'}  product, addToCart  {'}'}) {'{'}</p>
        <div className='App-tabbed-content'>
            <p className='App-success-color'>  {'//'}  ✅ Good: Event-specific logic is called from event handlers</p>
            <div className='App-hilight-color'>
                <p>function buyProduct() {'{'}</p>
                <p className='App-tabbed-content'> addToCart(product);</p>
                <p className='App-tabbed-content'>  showNotification(`Added ${'{'} product.name {'}'} to the shopping cart!`); </p>
                <p>{'}'}</p>
            </div>

            <p>function handleBuyClick() {'{'}</p>
            <p className='App-tabbed-content'> buyProduct();</p>
            <p>{'}'}</p>

            <p>function handleCheckoutClick() {'{'}</p>
            <p className='App-tabbed-content'> buyProduct();</p>
            <p className='App-tabbed-content'>  navigateTo('/checkout');</p>
            <p>{'}'}</p>
            <p>{'//'} ...</p>
        </div>
        <p>{'}'}</p>
    </div>);
}

function SharingLogicBetweenEventHandlersDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-center-container'>
            <SharingLogicBetweenEventHandlersInCorrectExample1 />
            <SharingLogicBetweenEventHandlersCorrectExample2 />
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Sending a POST request 
function SendingPOSTRequestInCorrectExample1() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-error-color App-super-small-font-size">
        <p className='App-error-color'>This Form component sends two kinds of POST requests. It sends an analytics event when it mounts. When you fill in the form and click the Submit button, it will send a POST request to the /api/register endpoint:</p>
        <hr></hr>

        <p>function Form() {'{'}</p>
        <div className='App-tabbed-content'>
            <p>const [firstName, setFirstName] = useState('');</p>
            <p>const [lastName, setLastName] = useState('');</p>

            <div className='App-hilight-color'>
                <p className='App-success-color'>{'//'} ✅ Good: This logic should run because the component was displayed </p>
                <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                <p className='App-tabbed-content'> post('/analytics/event', {'{'}  eventName: 'visit_form' {'{'} );</p>
                <p className='App-tabbed-content'>{'}'}</p>
                <p>{'}'}, [ ] {')'}; </p>
            </div>

            <div className='App-hilight-color'>
                <p className='App-error-color'>{'//'} 🔴 Avoid: Event-specific logic inside an Effect </p>
                <p>  const [jsonToSubmit, setJsonToSubmit] = useState(null);</p>
                <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                <p className='App-tabbed-content'> if (jsonToSubmit !== null) {'{'}</p>
                <p className='App-tabbed-content App-tabbed-content'>  post('/api/register', jsonToSubmit); </p>
                <p className='App-tabbed-content'>{'}'}</p>
                <p>{'}'}, [jsonToSubmit] {')'}; </p>
            </div>

            <p>function handleSubmit(e)  {'{'}</p>
            <p className='App-tabbed-content'> e.preventDefault();</p>
            <p className='App-tabbed-content'>    setJsonToSubmit({'{'} firstName, lastName {'}'});</p>
            <p>{'}'}</p>
            <p>{'//'} ...</p>
        </div>
        <p>{'}'}</p>
    </div>);
}

function SendingPOSTRequestCorrectExample2() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-success-color App-super-small-font-size">
        <p className='App-success-color'>However, the /api/register POST request is not caused by the form being displayed. You only want to send the request at one specific moment in time: when the user presses the button. It should only ever happen on that particular interaction. Delete the second Effect and move that POST request into the event handler:</p>
        <hr></hr>

        <p>function Form() {'{'}</p>
        <div className='App-tabbed-content'>
            <p>const [firstName, setFirstName] = useState('');</p>
            <p>const [lastName, setLastName] = useState('');</p>

            <div className='App-hilight-color'>
                <p className='App-success-color'>{'//'} ✅ Good: This logic should run because the component was displayed </p>
                <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                <p className='App-tabbed-content'> post('/analytics/event', {'{'}  eventName: 'visit_form' {'{'} );</p>
                <p className='App-tabbed-content'>{'}'}</p>
                <p>{'}'}, [ ] {')'}; </p>
            </div>

            <p>function handleSubmit(e)  {'{'}</p>
            <p className='App-tabbed-content'> e.preventDefault();</p>
            <p className='App-tabbed-content App-success-color'>{'//'}  ✅ Good: Event-specific logic is in the event handler</p>
            <p className='App-tabbed-content'>   post('/api/register', jsonToSubmit);</p>
            <p>{'}'}</p>
            <p>{'//'} ...</p>
        </div>
        <p>{'}'}</p>
    </div>);
}

function SendingPOSTRequestDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-center-container'>
            <SendingPOSTRequestInCorrectExample1 />
            <SendingPOSTRequestCorrectExample2 />
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Chains of computations 
function ChainsComputationsInCorrectExample1() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-error-color App-super-small-font-size">
        <p className='App-error-color'>One problem is that it is very inefficient: the component (and its children) have to re-render between each set call in the chain. In the example above, in the worst case (setCard → render → setGoldCardCount → render → setRound → render → setIsGameOver → render) there are three unnecessary re-renders of the tree below.</p>
        <hr></hr>

        <p>function Game()</p>
        <div className='App-tabbed-content'>
            <p>const [card, setCard] = useState(null);</p>
            <p>const [goldCardCount, setGoldCardCount] = useState(0);</p>
            <p>const [round, setRound] = useState(1);</p>
            <p>const [isGameOver, setIsGameOver] = useState(false);</p>

            <div className='App-hilight-color'>
                <p className='App-error-color'>{'//'} 🔴 Avoid: Chains of Effects that adjust the state solely to trigger each other </p>
                <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                <p className='App-tabbed-content'> if (card !== null && card.gold) {'{'}</p>
                <p className='App-tabbed-content App-tabbed-content'>  setGoldCardCount(c ={'>'} c + 1); </p>
                <p className='App-tabbed-content'>{'}'}</p>
                <p>{'}'}, [card] {')'}; </p>

                <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                <p className='App-tabbed-content'> if (goldCardCount {'>'} 3) {'{'}</p>
                <p className='App-tabbed-content App-tabbed-content'>  setRound(r ={'>'} r + 1);</p>
                <p className='App-tabbed-content App-tabbed-content'>  setGoldCardCount(0);</p>
                <p className='App-tabbed-content'>{'}'}</p>
                <p>{'}'}, [goldCardCount] {')'}; </p>

                <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                <p className='App-tabbed-content'> if (round {'>'} 5) {'{'}</p>
                <p className='App-tabbed-content App-tabbed-content'> setIsGameOver(true); </p>
                <p className='App-tabbed-content'>{'}'}</p>
                <p>{'}'}, [round] {')'}; </p>

                <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                <p className='App-tabbed-content'>     alert('Good game!');</p>
                <p>{'}'}, [isGameOver] {')'}; </p>
            </div>

            <p>function handlePlaceCard(nextCard) {'{'}</p>
            <div className='App-tabbed-content'>
                <p> if (isGameOver)  {'{'}</p>
                <p className='App-tabbed-content'>throw Error('Game already ended.');</p>
                <p> {'}'} else  {'{'}</p>
                <p className='App-tabbed-content'>setCard(nextCard);</p>
                <p>{'}'}</p>
            </div>
            <p>{'}'}</p>
            <p>{'//'} ...</p>
        </div>
        <p>{'}'}</p>
    </div>);
}

function ChainsComputationsCorrectExample2() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-success-color App-super-small-font-size">
        <p className='App-success-color'>This is a lot more efficient. Also, if you implement a way to view game history, now you will be able to set each state variable to a move from the past without triggering the Effect chain that adjusts every other value. If you need to reuse logic between several event handlers, you can extract a function and call it from those handlers.</p>
        <hr></hr>

        <p>function Game()</p>
        <div className='App-tabbed-content'>
            <p>const [card, setCard] = useState(null);</p>
            <p>const [goldCardCount, setGoldCardCount] = useState(0);</p>
            <p>const [round, setRound] = useState(1);</p>
            <p>const [isGameOver, setIsGameOver] = useState(false);</p>

            <p className='App-success-color'>  {'//'}  ✅  Calculate what you can during rendering</p>
            <div className='App-hilight-color'>
                <p>  const isGameOver = round {'>'}  5;</p>

                <p>functionhandlePlaceCard(nextCard) {'{'}</p>
                <div className='App-tabbed-content'>
                    <p> if (isGameOver)  {'{'}</p>
                    <p className='App-tabbed-content'>throw Error('Game already ended.');</p>
                    <p> {'}'}</p>

                    <p className='App-success-color'>  {'//'}  ✅   Calculate all the next state in the event handler</p>
                    <p>setCard(nextCard);</p>
                    <p> if (nextCard.gold)  {'{'}</p>
                    <div className='App-tabbed-content'>
                        <p> if (goldCardCount {'<'}= 3)  {'{'}</p>
                        <p className='App-tabbed-content'>setGoldCardCount(goldCardCount + 1);</p>
                        <p> {'}'} else {'{'} </p>
                        <div className='App-tabbed-content'>
                            <p>setGoldCardCount(0);</p>
                            <p>setRound(round + 1);</p>
                            <p> if (round === 5)  {'{'}</p>
                            <p className='App-tabbed-content'> alert('Good game!');</p>
                            <p> {'}'} </p>
                        </div>
                        <p> {'}'} </p>
                    </div>
                    <p> {'}'}</p>
                </div>
                <p>{'}'}</p>
            </div>
            <p>{'//'} ...</p>
        </div>
        <p>{'}'}</p>
    </div>);
}

function ChainsComputationsDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-center-container'>
            <ChainsComputationsInCorrectExample1 />
            <ChainsComputationsCorrectExample2 />
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Initializing the application 
function InitializingApplicationInCorrectExample1() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-error-color App-super-small-font-size">
        <p className='App-error-color'>You might be tempted to place it in an Effect in the top-level component:</p>
        <hr></hr>

        <p>function App() {'{'}</p>
        <div className='App-tabbed-content'>
            <div className='App-hilight-color'>
                <p className='App-error-color'>{'//'} 🔴 Avoid: Effects with logic that should only ever run once</p>
                <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                <p className='App-tabbed-content'>loadDataFromLocalStorage();</p>
                <p className='App-tabbed-content'>checkAuthToken(); </p>
                <p className='App-tabbed-content'>{'}'}</p>
                <p>{'}'}, [ ] {')'}; </p>
            </div>
            <p>{'//'} ...</p>
        </div>
        <p>{'}'}</p>

        <hr></hr>
        <p>However, you’ll quickly discover that it runs twice in development. This can cause issues—for example, maybe it invalidates the authentication token because the function wasn’t designed to be called twice. In general, your components should be resilient to being remounted. This includes your top-level App component.</p>
    </div>);
}

function InitializingApplicationCorrectExample2() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-success-color App-super-small-font-size">
        <p className='App-success-color'>Although it may not ever get remounted in practice in production, following the same constraints in all components makes it easier to move and reuse code. If some logic must run once per app load rather than once per component mount, add a top-level variable to track whether it has already executed:</p>
        <hr></hr>

        <p>let didInit = false;</p>
        <p>function App() {'{'}</p>
        <div className='App-tabbed-content'>
            <p className='App-success-color'>  {'//'}  ✅ Good: Event-specific logic is called from event handlers</p>
            <div className='App-hilight-color'>
                <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                <div className='App-tabbed-content'>
                    <p>  if (!didInit)  {'{'} </p>
                    <p>  didInit = true;</p>
                    <p className='App-success-color'>  {'//'}  ✅ Only runs once per app load </p>
                    <p className='App-tabbed-content'>loadDataFromLocalStorage();</p>
                    <p className='App-tabbed-content'>checkAuthToken(); </p>
                    <p>  {'}'} </p>
                    <p>{'}'}, [ ] {')'}; </p>
                </div>
                <p>{'}'}</p>
            </div>
            <p>{'//'} ...</p>
        </div>
        <p>{'}'}</p>

        <hr></hr>
        <p>You can also run it during module initialization and before the app renders:</p>
        <hr></hr>

        <p className='App-success-color'> {'//'} ✅ Only runs once per app load, so check if we're running in the browser.</p>
        <p>  if  (typeof window !== 'undefined') {'{'} </p>
        <p className='App-tabbed-content'>loadDataFromLocalStorage();</p>
        <p className='App-tabbed-content'>checkAuthToken(); </p>
        <p>  {'}'} </p>

        <p>function App() {'{'}</p>
        <p className='App-tabbed-content'>{'//'} ...</p>
        <p>{'}'}</p>
    </div>);
}

function InitializingApplicationDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-center-container'>
            <InitializingApplicationInCorrectExample1 />
            <InitializingApplicationCorrectExample2 />
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Notifying parent components about state changes 
function NotifyingParentComponentsAboutStateChangesInCorrectExample1() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-error-color App-super-small-font-size">
        <p className='App-error-color'>Let’s say you’re writing a Toggle component with an internal isOn state which can be either true or false. There are a few different ways to toggle it (by clicking or dragging). You want to notify the parent component whenever the Toggle internal state changes, so you expose an onChange event and call it from an Effect:</p>
        <hr></hr>

        <p>function Toggle({'{'}  onChange {'}'}) {'{'}</p>
        <div className='App-tabbed-content'>
            <p>  const [isOn, setIsOn] = useState(false);</p>
            <div className='App-hilight-color'>
                <p className='App-error-color'>{'//'} 🔴 Avoid: The onChange handler runs too late</p>
                <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                <p className='App-tabbed-content'> onChange(isOn);</p>
                <p>{'}'}, [isOn, onChange] {')'}; </p>
            </div>

            <p>function handleClick() {'{'}</p>
            <p className='App-tabbed-content'>   setIsOn(!isOn);</p>
            <p>{'}'}</p>

            <p>function handleDragEnd(e) {'{'}</p>
            <p className='App-tabbed-content'> if (isCloserToRightEdge(e)) {'{'} </p>
            <p className='App-tabbed-content App-tabbed-content'> setIsOn(true);</p>
            <p className='App-tabbed-content'> {'}'} else {'{'} </p>
            <p className='App-tabbed-content App-tabbed-content'> setIsOn(false);</p>
            <p className='App-tabbed-content'> {'}'} </p>
            <p>{'}'}</p>
            <p>{'//'} ...</p>
        </div>
        <p>{'}'}</p>
    </div>);
}

function NotifyingParentComponentsAboutStateChangesCorrectExample2() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-success-color App-super-small-font-size">
        <p className='App-success-color'>Delete the Effect and instead update the state of both components within the same event handler:</p>
        <hr></hr>

        <p>function Toggle({'{'}  onChange {'}'}) {'{'}</p>
        <div className='App-tabbed-content'>
            <p>  const [isOn, setIsOn] = useState(false);</p>
            <div className='App-hilight-color'>
                <p className='App-success-color'>  {'//'}  ✅ Good: Perform all updates during the event that caused them </p>
                <p>function updateToggle(nextIsOn) {'{'}</p>
                <p className='App-tabbed-content'>   setIsOn(nextIsOn);</p>
                <p className='App-tabbed-content'>   onChange(nextIsOn); </p>
                <p>{'}'}</p>
            </div>

            <p>function handleClick() {'{'}</p>
            <p className='App-tabbed-content'>updateToggle(!isOn);;</p>
            <p>{'}'}</p>

            <p>function  handleDragEnd(e)  {'{'}</p>
            <p className='App-tabbed-content'> if (isCloserToRightEdge(e)) {'{'} </p>
            <p className='App-tabbed-content App-tabbed-content'> updateToggle(true);</p>
            <p className='App-tabbed-content'> {'}'} else {'{'} </p>
            <p className='App-tabbed-content App-tabbed-content'> updateToggle(false);</p>
            <p className='App-tabbed-content'> {'}'} </p>
            <p>{'}'}</p>
            <p>{'//'} ...</p>
        </div>
        <p>{'}'}</p>

        <hr></hr>
        <p className='App-success-color'>  {'//'}  ✅ Also good: the component is fully controlled by its parent </p>

        <p>function Toggle({'{'}  isOn, onChange {'}'}) {'{'}</p>
        <div className='App-tabbed-content'>

            <p>function handleClick() {'{'}</p>
            <p className='App-tabbed-content'>onChange(!isOn);;</p>
            <p>{'}'}</p>

            <p>function  handleDragEnd(e)  {'{'}</p>
            <p className='App-tabbed-content'> if (isCloserToRightEdge(e)) {'{'} </p>
            <p className='App-tabbed-content App-tabbed-content'> onChange(true);</p>
            <p className='App-tabbed-content'> {'}'} else {'{'} </p>
            <p className='App-tabbed-content App-tabbed-content'> onChange(false);</p>
            <p className='App-tabbed-content'> {'}'} </p>
            <p>{'}'}</p>
            <p>{'//'} ...</p>
        </div>
        <p>{'}'}</p>
    </div>);
}

function NotifyingParentComponentsAboutStateChangesDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-center-container'>
            <NotifyingParentComponentsAboutStateChangesInCorrectExample1 />
            <NotifyingParentComponentsAboutStateChangesCorrectExample2 />
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Passing data to the parent 
function PassingDataParentInCorrectExample1() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-error-color App-super-small-font-size">
        <p className='App-error-color'>This Child component fetches some data and then passes it to the Parent component in an Effect:</p>
        <hr></hr>

        <p>function Parent() {'{'}</p>
        <div className='App-tabbed-content'>
            <div className='App-hilight-color'>
                <p> const {'['}data, setData{']'} = useState(null);</p>
                <p>{'//'}... </p>
                <p>return {'<'}Child onFetched={'{'}setData{'}'}/{'>'};</p>
            </div>
        </div>
        <p>{'}'}</p>

        <p>function Child({'{'}  onFetched {'}'}) {'{'}</p>
        <div className='App-tabbed-content'>
            <div className='App-hilight-color'>
                <p>  const data = useSomeAPI();</p>
                <div className='App-hilight-color'>
                    <p className='App-error-color'>{'//'} 🔴 Avoid: Passing data to the parent in an Effect</p>
                    <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                    <div className='App-tabbed-content'>
                        <p>  if (data) {'{'} </p>
                        <p className='App-tabbed-content'>  onFetched(data);</p>
                        <p> {'}'} </p>
                    </div>
                    <p>{'}'}, [onFetched, data] {')'}; </p>
                </div>
                <p>{'//'}... </p>
            </div>
        </div>
        <p>{'}'}</p>
    </div>);
}

function PassingDataParentCorrectExample2() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-success-color App-super-small-font-size">
        <p className='App-success-color'>In React, data flows from the parent components to their children. When you see something wrong on the screen, you can trace where the information comes from by going up the component chain until you find which component passes the wrong prop or has the wrong state. When child components update the state of their parent components in Effects, the data flow becomes very difficult to trace. Since both the child and the parent need the same data, let the parent component fetch that data, and pass it down to the child instead:</p>
        <hr></hr>

        <p>function Parent() {'{'}</p>
        <div className='App-tabbed-content'>
            <div className='App-hilight-color'>
                <p>   const data = useSomeAPI();</p>
                <p>{'//'}... </p>
                <p className='App-success-color'> {'//'} ✅ Good: Passing data down to the child </p>
                <p>return {'<'}Child data={'{'}data{'}'}/{'>'};</p>
            </div>
        </div>
        <p>{'}'}</p>

        <p>function Child({'{'}  data {'}'}) {'{'}</p>
        <div className='App-tabbed-content'>
            <p>{'//'}... </p>
        </div>
        <p>{'}'}</p>
    </div>);
}

function PassingDataParentDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-center-container'>
            <PassingDataParentInCorrectExample1 />
            <PassingDataParentCorrectExample2 />
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Subscribing to an external store 
function SubscribingToExternalStoreDemo() {
    return (<div className="App-left-aligned-content">
        <p>Although it’s common to use Effects for this, React has a purpose-built Hook for subscribing to an external store that is preferred instead. Delete the Effect and replace it with a call to useSyncExternalStore:</p>
        <div className='App-tabbed-content App-left-aligned-border App-super-small-font-size'>

            <p>{'//'}... </p>
            <p>function useOnlineStatus() {'{'}</p>
            <p className='App-success-color'> {'//'} ✅ Good: Subscribing to an external store with a built-in Hook </p>
            <div className='App-tabbed-content'>
                <div className='App-hilight-color'>
                    <p>     return useSyncExternalStore{'('}</p>
                    <div className='App-tabbed-content'>
                        <p>  subscribe, {'//'} React won't resubscribe for as long as you pass the same function</p>
                        <p>   () = {'>'} navigator.onLine,  {'//'} How to get the value on the client</p>
                        <p>   () = {'>'} true {'//'}  How to get the value on the server</p>
                    </div>
                    <p>{')'};</p>
                </div>
            </div>
            <p>{'}'}</p>
            <p>{'//'}... </p>
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Fetching data 
function FetchingDataInCorrectExample1() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-error-color App-super-small-font-size">
        <p className='App-error-color'>Many apps use Effects to kick off data fetching. It is quite common to write a data fetching Effect like this:</p>
        <hr></hr>

        <p>function SearchResults({'{'}  query  {'}'}) {'{'}</p>
        <div className='App-tabbed-content'>
            <p>const [results, setResults] = useState([]);</p>
            <p>const [page, setPage] = useState(1); </p>

            <div className='App-hilight-color'>
                <p className='App-error-color'>{'//'} 🔴 Avoid: Fetching without cleanup logic </p>
                <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                <p className='App-tabbed-content'>  fetchResults(query, page).then{'('} json  ={'>'} {'{'} </p>
                <p className='App-tabbed-content App-tabbed-content'>  setResults(json);</p>
                <p className='App-tabbed-content'>{'}'}{')'}; </p>
                <p>{'}'}, [query, page] {')'}; </p>
            </div>

            <p>function handleNextPageClick() {'{'}</p>
            <p className='App-tabbed-content'>setPage(page + 1);</p>
            <p>{'}'}</p>
            <p>{'//'} ...</p>
        </div>
        <p>{'}'}</p>
    </div>);
}

function FetchingDataCorrectExample2() {
    return (<div className="App-tabbed-content App-right-tabbed-content App-smallest-box-border-success-color App-super-small-font-size">
        <p className='App-success-color'>To fix the race condition, you need to add a cleanup function to ignore stale responses:</p>
        <hr></hr>

        <p>function SearchResults({'{'}  query  {'}'}) {'{'}</p>
        <div className='App-tabbed-content'>
            <p>const [results, setResults] = useState([]);</p>
            <p>const [page, setPage] = useState(1); </p>

            <div className='App-hilight-color'>
                <p className='App-success-color'>{'//'} ✅ Good: Fetching without cleanup logic using ignore </p>
                <p>  useEffect{'('} () ={'>'}  {'{'} </p>
                <p className='App-success-color App-tabbed-content'>     let ignore = false; </p>
                <p className='App-tabbed-content'>  fetchResults(query, page).then{'('} json  ={'>'} {'{'} </p>
                <div className='App-success-color'>
                    <p className='App-tabbed-content App-tabbed-content'>    if (!ignore) {'{'} </p>
                    <p className='App-tabbed-content App-tabbed-content App-tabbed-content'>  setResults(json);</p>
                    <p className='App-tabbed-content App-tabbed-content'>  {'}'} </p>
                </div>
                <p className='App-tabbed-content'>{'}'}{')'}; </p>
                <p>{'}'}, [query, page] {')'}; </p>
                <p className='App-success-color'>return () ={'>'} {'{'}   ignore = true   {'}'};</p>
            </div>

            <p>function handleNextPageClick() {'{'}</p>
            <p className='App-tabbed-content'>setPage(page + 1);</p>
            <p>{'}'}</p>
            <p>{'//'} ...</p>
        </div>
        <p>{'}'}</p>
    </div>);
}

function FetchingDataDemo() {
    return (<div className="App-left-aligned-content">
        <div className='App-row-center-container'>
            <FetchingDataInCorrectExample1 />
            <FetchingDataCorrectExample2 />
        </div>
    </div>);
}

//--------------------------------------------------------------------------------------
// Recap
function RecapYouMightNotNeedEffectDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>If you can calculate something during render, you don’t need an Effect.</li>
            <li>To cache expensive calculations, add useMemo instead of useEffect.</li>
            <li>To reset the state of an entire component tree, pass a different key to it.</li>
            <li>To reset a particular bit of state in response to a prop change, set it during rendering.</li>
            <li>Code that runs because a component was displayed should be in Effects, the rest should be in events.</li>
            <li>If you need to update the state of several components, it’s better to do it during a single event.</li>
            <li>Whenever you try to synchronize state variables in different components, consider lifting state up.</li>
            <li>You can fetch data with Effects, but you need to implement cleanup to avoid race conditions.</li>
        </ul>
    </div>);
}

//--------------------------------------------------------------------------------------
//**************************************************************************************
// Try out some challenges
/*
Challenge 1 of 4: Transform data without Effects 
- The TodoList below displays a list of todos. When the “Show only active todos” checkbox is ticked, completed todos are not displayed in the list. Regardless of which todos are visible, the footer displays the count of todos that are not yet completed.
- Simplify this component by removing all the unnecessary state and Effects.
*/
let nextIdChallenge1 = 0;

function createTodoChallenge1(text, completed = false) {
    return {
        id: nextIdChallenge1++,
        text,
        completed
    };
}

function NewTodoChallenge1({ onAdd }) {
    const [text, setText] = useState('');

    function handleAddClick() {
        setText('');
        onAdd(createTodoChallenge1(text));
    }

    return (
        <>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={handleAddClick}>
                Add
            </button>
        </>
    );
}

const initialTodosChallenge1 = [
    createTodoChallenge1('Get apples', true),
    createTodoChallenge1('Get oranges', true),
    createTodoChallenge1('Get carrots'),
    createTodoChallenge1('Get water')
];

function Challenge1TodoList() {
    const [todos, setTodos] = useState(initialTodosChallenge1);
    const [showActive, setShowActive] = useState(false);
    const activeTodos = todos.filter(todo => !todo.completed);
    const visibleTodos = showActive ? activeTodos : todos;

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={showActive}
                    onChange={e => setShowActive(e.target.checked)}
                />
                Show only active todos
            </label>
            <br></br>
            <NewTodoChallenge1 onAdd={newTodo => setTodos([...todos, newTodo])} />
            <ul>
                {visibleTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.completed ? <s>{todo.text}</s> : todo.text}
                    </li>
                ))}
            </ul>
            <footer>
                {activeTodos.length} todos left
            </footer>
        </>
    );
}

function Challenges1YouMightNotNeedEffectDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 4: Transform data without Effects </p>
        <Challenge1TodoList />
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 2 of 4: Cache a calculation without Effects 
- In this example, filtering the todos was extracted into a separate function called getVisibleTodos(). This function contains a console.log() call inside of it which helps you notice when it’s being called. Toggle “Show only active todos” and notice that it causes getVisibleTodos() to re-run. This is expected because visible todos change when you toggle which ones to display.
- Your task is to remove the Effect that recomputes the visibleTodos list in the TodoList component. However, you need to make sure that getVisibleTodos() does not re-run (and so does not print any logs) when you type into the input.
*/
let nextIdChallenge2 = 0;
let callsChallenge2 = 0;

function getVisibleTodosChallenge2(todos, showActive) {
    console.log(`getVisibleTodos() was called ${++callsChallenge2} times`);
    const activeTodos = todos.filter(todo => !todo.completed);
    const visibleTodos = showActive ? activeTodos : todos;
    return visibleTodos;
}

function createTodoChallenge2(text, completed = false) {
    return {
        id: nextIdChallenge2++,
        text,
        completed
    };
}

const initialTodosChallenge2 = [
    createTodoChallenge2('Get mango challenge2'),
    createTodoChallenge2('Get apples', true),
    createTodoChallenge2('Get oranges', true),
    createTodoChallenge2('Get carrots'),
];

function Challenge2TodoList() {
    const [todos, setTodos] = useState(initialTodosChallenge2);
    const [showActive, setShowActive] = useState(false);
    const [text, setText] = useState('');
    const visibleTodos = useMemo(
        () => getVisibleTodosChallenge2(todos, showActive),
        [todos, showActive]
    );

    function handleAddClick() {
        setText('');
        setTodos([...todos, createTodoChallenge2(text)]);
    }

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={showActive}
                    onChange={e => setShowActive(e.target.checked)}
                />
                Show only active todos
            </label>
            <br></br>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={handleAddClick}>
                Add
            </button>
            <ul>
                {visibleTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.completed ? <s>{todo.text}</s> : todo.text}
                    </li>
                ))}
            </ul>
        </>
    );
}

function Challenges2YouMightNotNeedEffectDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 4: Cache a calculation without Effects </p>
        <Challenge2TodoList />
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 3 of 4: Reset state without Effects 
- This EditContact component receives a contact object shaped like { id, name, email } as the savedContact prop. Try editing the name and email input fields. When you press Save, the contact’s button above the form updates to the edited name. When you press Reset, any pending changes in the form are discarded. Play around with this UI to get a feel for it.
- When you select a contact with the buttons at the top, the form resets to reflect that contact’s details. This is done with an Effect inside EditContact.js. Remove this Effect. Find another way to reset the form when savedContact.id changes.
*/
function Challenge3EditForm({ savedContact, onSave }) {
    const [name, setName] = useState(savedContact.name);
    const [email, setEmail] = useState(savedContact.email);

    return (
        <section>
            <label>
                Name:{' '}
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <label>
                Email:{' '}
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </label>
            <button onClick={() => {
                const updatedData = {
                    id: savedContact.id,
                    name: name,
                    email: email
                };
                onSave(updatedData);
            }}>
                Save
            </button>
            <button onClick={() => {
                setName(savedContact.name);
                setEmail(savedContact.email);
            }}>
                Reset
            </button>
        </section>
    );
}

function Challenge3EditContact(props) {
    return (
        <Challenge3EditForm
            {...props}
            key={props.savedContact.id}
        />
    );
}

function Challenge3ContactList({
    contacts,
    selectedId,
    onSelect
}) {
    return (
        <section>
            <ul className='App-no-bullet-ul'>
                {contacts.map(contact =>
                    <li key={contact.id}>
                        <button onClick={() => {
                            onSelect(contact.id);
                        }}>
                            {contact.id === selectedId ?
                                <b>{contact.name}</b> :
                                contact.name
                            }
                        </button>
                    </li>
                )}
            </ul>
        </section>
    );
}

const initialContactsChallenge3 = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' },
    { id: 3, name: 'Lee', email: 'lee@mail.com' },
];

function Challenge3ContactManager() {
    const [
        contacts,
        setContacts
    ] = useState(initialContactsChallenge3);

    const [
        selectedId,
        setSelectedId
    ] = useState(0);

    const selectedContact = contacts.find(c =>
        c.id === selectedId
    );

    function handleSave(updatedData) {
        const nextContacts = contacts.map(c => {
            if (c.id === updatedData.id) {
                return updatedData;
            } else {
                return c;
            }
        });
        setContacts(nextContacts);
    }

    return (
        <div>
            <Challenge3ContactList
                contacts={contacts}
                selectedId={selectedId}
                onSelect={id => setSelectedId(id)}
            />
            <hr />
            <Challenge3EditContact
                savedContact={selectedContact}
                onSave={handleSave}
            />
        </div>
    )
}

function Challenges3YouMightNotNeedEffectDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 3 of 4: Reset state without Effects </p>
        <Challenge3ContactManager />
    </div>);
}

//**************************************************************************************
// Try out some challenges
/*
Challenge 4 of 4: Submit a form without Effects 
- This Form component lets you send a message to a friend. When you submit the form, the showForm state variable is set to false. This triggers an Effect calling sendMessage(message), which sends the message (you can see it in the console). After the message is sent, you see a “Thank you” dialog with an “Open chat” button that lets you get back to the form.
- Your app’s users are sending way too many messages. To make chatting a little bit more difficult, you’ve decided to show the “Thank you” dialog first rather than the form. Change the showForm state variable to initialize to false instead of true. As soon as you make that change, the console will show that an empty message was sent. Something in this logic is wrong!
- What’s the root cause of this problem? And how can you fix it?
*/
function sendMessageChallenge4(message) {
    console.log('Sending message: ' + message);
}

function Challenge4Form() {
    const [showForm, setShowForm] = useState(true);
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setShowForm(false);
        sendMessageChallenge4(message);
    }

    if (!showForm) {
        return (
            <>
                <h1>Thanks for using our services!</h1>
                <button onClick={() => {
                    setMessage('');
                    setShowForm(true);
                }}>
                    Open chat
                </button>
            </>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <br></br>
            <button type="submit" disabled={message === ''}>
                Send
            </button>
        </form>
    );
}

function Challenges4YouMightNotNeedEffectDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 4 of 4: Submit a form without Effects </p>
        <Challenge4Form />
    </div>);
}

//**************************************************************************************
// Try out some challenges
function ChallengesYouMightNotNeedEffectDemo() {
    return (<div className="App-left-aligned-content">
        <Challenges1YouMightNotNeedEffectDemo />
        <hr></hr>
        <Challenges2YouMightNotNeedEffectDemo />
        <hr></hr>
        <Challenges3YouMightNotNeedEffectDemo />
        <hr></hr>
        <Challenges4YouMightNotNeedEffectDemo />
    </div>);
}