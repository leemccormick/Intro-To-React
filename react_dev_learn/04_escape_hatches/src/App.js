import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
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

      <body >
        <div className="App-button-container">
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
          {/* {activeIndex === 0 && <Demo />} */}
        </div>
      </body>
    </div>
  );
}

// Escape Hatches
// Referencing Values with Refs
// Manipulating the DOM with Refs
// Synchronizing with Effects
// You Might Not Need an Effect
// Lifecycle of Reactive Effects
// Separating Events from Effects
// Removing Effect Dependencies
// Reusing Logic with Custom Hooks

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
    height: '100px' 
  };

  return (
    <div>
      <button style={topicStyle} onClick={onClick}>
        {title}
      </button>
    </div>
  );
}

export default App;

// This is a template for new section....
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