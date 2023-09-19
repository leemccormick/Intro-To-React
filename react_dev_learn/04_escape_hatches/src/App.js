import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import EscapeHatchesDemo from './00EscapeHaches';
import ReferencingValuesWithRefsDemo from './01ReferencingValuesWithRefs';
import ManipulatingTheDOMWithRefsDemo from './02ManipulatingDOMWithRefs';
import SynchronizingWithEffectsDemo from './03SynchronizingWithEffects';
import YouMightNotNeedEffectDemo from './04YouMightNotNeedEffect';
import LifecycleReactiveEffectsDemo from './05LifecycleOfReactiveEffects';
import SeparatingEventsFromEffectsDemo from './06SeparatingEventsFromEffects';
import RemovingEffectDependenciesDemo from './07RemovingEffectDependencies';
import ReusingLogicWithCustomHooksDemo from './08ReusingLogicWithCustomHooks';

function Topic({
  title,
  isActive,
  onClick
}) {
  const topicStyle = {
    backgroundColor: isActive ? 'lightblue' : 'darkblue',
    color: isActive ? 'black' : 'white',
    border: '2px solid',
    fontWeight: 'bold',
    borderColor: isActive ? 'orange' : 'red',
    fontSize: '24px',
    paddingTop: '10px',
    paddingBottom: '10px',
    minHeight: '120px'
  };

  return (
    <div>
      <button style={topicStyle} onClick={onClick}>
        {title}
      </button>
    </div>
  );
}

function App() {
  const [activeIndex, setActiveIndex] = useState(6);
  const topics = ['Escape Hatches', 'Referencing Values with Refs', 'Manipulating the DOM with Refs', 'Synchronizing with Effects', 'You Might Not Need an Effect', 'Lifecycle of Reactive Effects', 'Separating Events from Effects', 'Removing Effect Dependencies', 'Reusing Logic with Custom Hooks'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React By Lee McCormick
        </a>
      </header>

      <body className='App-dark-background'>
        <div className="App-navigation-container">
          {topics.map((topicTitle, index) => (
            <Topic
              key={index}
              title={topicTitle}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div >

        <div className="App-container">
          {activeIndex === 0 && <EscapeHatchesDemo />}
          {activeIndex === 1 && <ReferencingValuesWithRefsDemo />}
          {activeIndex === 2 && <ManipulatingTheDOMWithRefsDemo />}
          {activeIndex === 3 && <SynchronizingWithEffectsDemo />}
          {activeIndex === 4 && <YouMightNotNeedEffectDemo />}
          {activeIndex === 5 && <LifecycleReactiveEffectsDemo />}
          {activeIndex === 6 && <SeparatingEventsFromEffectsDemo />}
          {activeIndex === 7 && <RemovingEffectDependenciesDemo />}
          {activeIndex === 8 && <ReusingLogicWithCustomHooksDemo />}
        </div>
      </body>
    </div>
  );
}

export default App;

/*
import './App.css';
import { useState } from 'react';

// Main Default For Some Demo
export default function SomeDefaultDemo() {
    return (
        <div>
            <h1 className="App-topic">Topic Here</h1>
            <h2 className="App-title">Title Here</h2>
            <Demo />
        </div>
    );
}

function Demo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
    </div>);
}
*/