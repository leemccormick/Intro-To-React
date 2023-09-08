
import './App.css';
import Image from './Image.js';
import { useState, useEffect } from 'react';

// Main Default For Render and Commit Demo
export default function RenderAndCommitDemo() {
    return (
        <div>
            <h1 className="App-topic">Render and Commit</h1>
            <p>Before your components are displayed on screen, they must be rendered by React. Understanding the steps in this process will help you think about how your code executes and explain its behavior.</p>

            <h2 className="App-title">Step 1: Trigger a render</h2>
            <Step1TriggerRenderDemo />

            <h2 className="App-title">Step 2: React renders your component</h2>
            <Step2ReactRendersYourComponentsDemo />

            <h2 className="App-title">Step 3: React commits changes to the DOM</h2>
            <Step3ReactCommitsChangesToTheDOMDemo />

            <h2 className="App-title">Epilogue: Browser paint</h2>
            <EpilogueBrowserPaintDemo />

            <h2 className="App-title">Recap</h2>
            <RenderAndCommitRecapDemo />
        </div>
    );
}

// Step 1: Trigger a render 
function Step1TriggerRenderDemo() {
    return (<div className="App-left-aligned-content">
        <p>There are two reasons for a component to render :</p>
        <ul>
            <li>1.Initial render
                <p>When your app starts, you need to trigger the initial render. Frameworks and sandboxes sometimes hide this code, but it’s done by calling createRoot with the target DOM node, and then calling its render method with your component : </p>
                <ul className='App-hilight-color'>
                    <li>index.js | This is where the file to create root.</li>
                    <li>root.render() | This is where the web app start, it is a root of the app.</li>
                </ul>
            </li>

            <hr></hr>

            <li>2.Re-renders when state updates
                <div className='App-row-container '>
                    <div>
                        <img
                            src="https://react.dev/images/docs/illustrations/i_rerender1.png"
                            alt="State Update"
                            style={{ width: '200px', height: '200px' }}
                        />
                        <p className='App-hilight-color'>State Update</p>
                    </div>

                    <p className='App-hilight-color'>-----{`>`}</p>

                    <div>
                        <img
                            src="https://react.dev/images/docs/illustrations/i_rerender2.png"
                            alt="Triggers"
                            style={{ width: '200px', height: '200px' }}
                        />
                        <p className='App-hilight-color'>Triggers</p>
                    </div>

                    <p className='App-hilight-color'>-----{`>`}</p>

                    <div>
                        <img
                            src="https://react.dev/images/docs/illustrations/i_rerender3.png"
                            alt="Render"
                            style={{ width: '200px', height: '200px' }} />
                        <p className='App-hilight-color'>Render</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>);
}

// Step 2: React renders your components 
function ReactRendersYourComponentsGallery() {
    return (
        <section>
            <h1>Inspiring Sculptures</h1>
            <Image />
            <Image />
            <Image />
        </section>
    );
}

function Step2ReactRendersYourComponentsDemo() {
    return (<div className="App-left-aligned-content">
        <p>“Rendering” is React calling your components.</p>

        <ul>
            <li>
                On initial render, React will call the root component.
                <p className='App-hilight-color'>During the initial render, React will create the DOM nodes for {`<`}section{`>`}, {`<`}h1{`>`}, and three{`<`}img{`>`} tags.</p>
            </li>

            <li>
                For subsequent renders, React will call the function component whose state update triggered the render.
                <p className='App-hilight-color'>During a re-render, React will calculate which of their properties, if any, have changed since the previous render. It won’t do anything with that information until the next step, the commit phase.</p>
            </li>
        </ul>

        <ReactRendersYourComponentsGallery />
    </div>);
}

// Step 3: React commits changes to the DOM 
function ReactCommitsChangesToTheDOMClock({ time }) {
    return (
        <>
            <h1>{time}</h1>
            <input />
        </>
    );
}

function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

function Step3ReactCommitsChangesToTheDOMDemo() {
    const time = useTime();

    return (<div className="App-left-aligned-content">
        <p>After rendering (calling) your components, React will modify the DOM.</p>

        <ul>
            <li>
                For the initial render, React will use the appendChild() DOM API to put all the DOM nodes it has created on screen.
            </li>

            <li>
                For re-renders, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.
            </li>
        </ul>

        <ReactCommitsChangesToTheDOMClock time={time.toLocaleTimeString()} />
    </div>);
}

// Epilogue: Browser paint 
function EpilogueBrowserPaintDemo() {
    return (<div className="App-left-aligned-content">
        <p>After rendering is done and React updated the DOM, the browser will repaint the screen. Although this process is known as “browser rendering”, we’ll refer to it as “painting” to avoid confusion throughout the docs.</p>
    </div>);
}

// Recap
function RenderAndCommitRecapDemo() {
    return (<div className="App-left-aligned-content">
        <ul>
            <li>
                Any screen update in a React app happens in three steps : 1.Trigger 2.Render 3.Commit
            </li>
            <li>
                You can use Strict Mode to find mistakes in your components
            </li>
            <li>
                React does not touch the DOM if the rendering result is the same as last time
            </li>
        </ul>
    </div>);
}