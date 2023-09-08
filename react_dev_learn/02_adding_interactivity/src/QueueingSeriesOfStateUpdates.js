import './App.css';
import { useState } from 'react';

// Main Default For Queueing a Series of State Updates Demo
export default function QueueingSeriesOfStateUpdatesDemo() {
    return (
        <div>
            <h1 className="App-topic">Queueing a Series of State Updates </h1>
            <p>Setting a state variable will queue another render. But sometimes you might want to perform multiple operations on the value before queueing the next render. To do this, it helps to understand how React batches state updates.</p>

            <h2 className="App-title">React batches state updates</h2>
            <ReactBatchesStateUpdatesDemo />

            <h2 className="App-title">Updating the same state multiple times before the next render </h2>
            <UpdatingTheSameStateMultipleTimesBeforeTheNextRenderDemo />

            <h2 className="App-title">Naming conventions</h2>
            <NamingConventionsDemo />

            <h2 className="App-title">Recap</h2>
            <QueueingSeriesOfStateUpdatesRecapDemo />

            <h2 className="App-title">Try out some challenges</h2>
            <QueueingSeriesOfStateUpdatesChallengesDemo />
        </div>
    );
}

// React batches state updates 
function ReactBatchesStateUpdatesCounterNumberPlusOne() {
    const [number, setNumber] = useState(0);

    return (
        <div className="App-left-aligned-content">
            <h1>{number}</h1>
            <p className='App-small-font-size'>onClick() function | Call this line 3 times : </p>
            <h5>setNumber(number + 1);</h5>
            <button onClick={() => {
                setNumber(number + 1);
                setNumber(number + 1);
                setNumber(number + 1);
            }}>+3</button>

            <p className='App-error-color'>*** Call setNumber() 3 times | BUT STILL NOT WORKING ***  </p>
        </div>
    )
}

function ReactBatchesStateUpdatesDemo() {
    return (<div className="App-left-aligned-content">
        <p>React does not batch across multiple intentional events like clicks</p>
        <p>React waits until all code in the event handlers has run before processing your state updates. This is why the re-render only happens after all these setNumber() calls.</p>
        <ReactBatchesStateUpdatesCounterNumberPlusOne />
    </div>);
}

// Updating the same state multiple times before the next render 
function UpdatingTheSameStateMultipleTimesCounter() {
    const [number, setNumber] = useState(0);

    return (
        <div className="App-left-aligned-content">
            <h1>{number}</h1>
            <p className='App-small-font-size'>onClick() function | Call this line 3 times : </p>
            <h5>setNumber(n ={`>`}n + 1);</h5>

            <button onClick={() => {
                setNumber(n => n + 1);
                setNumber(number + 1);
                setNumber(number + 1);
            }}>+3</button>

            <p className='App-success-color'>*** Call setNumber() 3 times | BUT IT WORKS BECAUSE we pass a function that calculates the next state based on the previous one in the queue ***  </p>

            <div className='App-left-aligned-border'>
                <p className='App-hilight-color'>setNumber(n ={`>`}n + 1);</p>
                <p className='App-hilight-color'>setNumber(n ={`>`}n + 1);</p>
                <p className='App-hilight-color'>setNumber(n ={`>`}n + 1);</p>
            </div>
        </div>
    )
}

function WhatHappens1UpdatingTheSameStateMultipleTimesCounter() {
    const [number, setNumber] = useState(0);

    return (
        <div className="App-left-aligned-content">
            <h1>{number}</h1>
            <p className='App-small-font-size'>onClick() function | Call these 2 lines of code : </p>
            <h5>setNumber(number + 5);</h5>
            <h5>setNumber(n ={`>`}n + 1);</h5>

            <button onClick={() => {
                setNumber(number + 5);
                setNumber(n => n + 1);
            }}>Increase the number</button>

            <p className='App-success-color'>*** You may have noticed that setState(5) actually works like setState(n ={`>`} 5), but n is unused!***  </p>

            <div className='App-left-aligned-border'>
                <p className='App-hilight-color'>setNumber(number + 5);</p>
                <p className='App-small-font-size'>1. setNumber(number + 5): number is 0, so setNumber(0 + 5). React adds “replace with 5” to its queue.</p>
                <p className='App-hilight-color'>setNumber(n ={`>`}n + 1);</p>
                <p className='App-small-font-size'>2. setNumber(n ={`>`}n + 1) is an updater function. React adds that function to its queue.</p>
            </div>
        </div>
    )
}

function WhatHappens2UpdatingTheSameStateMultipleTimesCounter() {
    const [number, setNumber] = useState(0);

    return (
        <div className="App-left-aligned-content">
            <h1>{number}</h1>
            <p className='App-small-font-size'>onClick() function | Call these 3 lines of code : </p>
            <h5>setNumber(number + 5);</h5>
            <h5>setNumber(n ={`>`}n + 1);</h5>
            <h5>setNumber(42);</h5>

            <button onClick={() => {
                setNumber(number + 5);
                setNumber(n => n + 1);
                setNumber(42);
            }}>Increase the number</button>

            <p className='App-error-color'>*** This will always be 42 ***  </p>

            <div className='App-left-aligned-border'>
                <p className='App-hilight-color'>setNumber(number + 5);</p>
                <p className='App-small-font-size'>1. setNumber(number + 5): number is 0, so setNumber(0 + 5). React adds “replace with 5” to its queue.</p>
                <p className='App-hilight-color'>setNumber(n ={`>`}n + 1);</p>
                <p className='App-small-font-size'>2. setNumber(n ={`>`}n + 1) is an updater function. React adds that function to its queue.</p>
                <p className='App-hilight-color'>setNumber(42);</p>
                <p className='App-small-font-size'>3. setNumber(42); : React adds “replace with 42” to its queue.</p>
            </div>
        </div>
    )
}
function UpdatingTheSameStateMultipleTimesBeforeTheNextRenderDemo() {
    return (<div className="App-left-aligned-content">
        <UpdatingTheSameStateMultipleTimesCounter />
        <hr></hr>

        <div className='App-row-container'>
            <h2 className='App-hilight-color'>Example 1 | </h2>
            <p>What happens if you update state after replacing it : </p>
        </div>
        <WhatHappens1UpdatingTheSameStateMultipleTimesCounter />
        <hr></hr>

        <div className='App-row-container'>
            <h2 className='App-hilight-color'>Example 2 | </h2>
            <p>What happens if you update state after replacing it : </p>
        </div>
        <WhatHappens2UpdatingTheSameStateMultipleTimesCounter />
        <hr></hr>
    </div>);
}

// Naming conventions 
function NamingConventionsDemo() {
    return (<div className="App-left-aligned-content">
        <p>It’s common to name the updater function argument by the first letters of the corresponding state variable : </p>
        <ul>
            <li>setLastName(ln ={`>`} ln.reverse());</li>
            <li>setFriendCount(fc ={`>`} fc * 2);</li>
            <li> setEnabled(e ={`>`} !e);</li>
        </ul>
    </div>);
}

// Recap
function QueueingSeriesOfStateUpdatesRecapDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>
                Setting state does not change the variable in the existing render, but it requests a new render.
            </li>
            <li>
                React processes state updates after event handlers have finished running. This is called batching.
            </li>
            <li>
                To update some state multiple times in one event, you can use setNumber(n ={`>`} n + 1) updater function.
            </li>
        </ul>
    </div>);
}

// Try out some challenges
/*
Challenge 1 of 2: Fix a request counter 
- You’re working on an art marketplace app that lets the user submit multiple orders for an art item at the same time. Each time the user presses the “Buy” button, the “Pending” counter should increase by one. After three seconds, the “Pending” counter should decrease, and the “Completed” counter should increase.
- However, the “Pending” counter does not behave as intended. When you press “Buy”, it decreases to -1 (which should not be possible!). And if you click fast twice, both counters seem to behave unpredictably.
- Why does this happen? Fix both counters.
 */
function Challenge1RequestTracker() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
        // This is a short version and using naming conventions
        setPending(p => p + 1);
        await delay(3000);
        setPending(p => p - 1);
        setCompleted(c => c + 1);

        // This is a long version and not using naming conventions
        /*
      setPending(pending => pending + 1);
      await delay(3000);
      setPending(pending => pending - 1);
      setCompleted(completed => completed + 1);
      */
    }

    return (
        <>
            <h3>
                Pending: {pending}
            </h3>

            <h3>
                Completed: {completed}
            </h3>

            <button onClick={handleClick}>
                Buy
            </button>
        </>
    );
}

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

function QueueingSeriesOfStateUpdatesChallenge1FixRequestCounterDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 2: Fix a request counter </p>
        <Challenge1RequestTracker />
    </div>);
}

// Try out some challenges
/*
Challenge 2 of 2: Implement the state queue yourself 
- In this challenge, you will reimplement a tiny part of React from scratch! It’s not as hard as it sounds.
- Scroll through the sandbox preview. Notice that it shows four test cases. They correspond to the examples you’ve seen earlier on this page. Your task is to implement the getFinalState function so that it returns the correct result for each of those cases. If you implement it correctly, all four tests should pass.
- You will receive two arguments: baseState is the initial state (like 0), and the queue is an array which contains a mix of numbers (like 5) and updater functions (like n => n + 1) in the order they were added.
- Your task is to return the final state, just like the tables on this page show!
 */
function challenge2GetFinalStateFunction(baseState, queue) {
    let finalState = baseState;

    for (let update of queue) {
        if (typeof update === 'function') {
            // Apply the updater function.
            finalState = update(finalState);
        } else {
            // Replace the next state.
            finalState = update;
        }
    }
    return finalState;
}

function increment(n) {
    return n + 1;
}

function TestCase({
    baseState,
    queue,
    expected
}) {
    const actual = challenge2GetFinalStateFunction(baseState, queue);
    return (
        <>
            <p>Base state: <b>{baseState}</b></p>
            <p>Queue: <b>[{queue.join(', ')}]</b></p>
            <p>Expected result: <b>{expected}</b></p>
            <p style={{
                color: actual === expected ?
                    'green' :
                    'red'
            }}>
                Your result: <b>{actual}</b>
                {' '}
                ({actual === expected ?
                    'correct' :
                    'wrong'
                })
            </p>
        </>
    );
}

increment.toString = () => 'n => n+1';

function Challenge2GetFinalState() {
    return (
        <>
            <TestCase
                baseState={0}
                queue={[1, 1, 1]}
                expected={1}
            />
            <hr />
            <TestCase
                baseState={0}
                queue={[
                    increment,
                    increment,
                    increment
                ]}
                expected={3}
            />
            <hr />
            <TestCase
                baseState={0}
                queue={[
                    5,
                    increment,
                ]}
                expected={6}
            />
            <hr />
            <TestCase
                baseState={0}
                queue={[
                    5,
                    increment,
                    42,
                ]}
                expected={42}
            />
        </>
    );
}

function QueueingSeriesOfStateUpdatesChallenge2ImplementTheStateQueueYourselfDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 2 of 2: Implement the state queue yourself</p>
        <Challenge2GetFinalState />
    </div>);
}

// Try out some challenges
function QueueingSeriesOfStateUpdatesChallengesDemo() {
    return (<div className="App-left-aligned-content">
        <QueueingSeriesOfStateUpdatesChallenge1FixRequestCounterDemo />
        <hr></hr>
        <QueueingSeriesOfStateUpdatesChallenge2ImplementTheStateQueueYourselfDemo />
    </div>);
}