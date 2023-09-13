import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import ManagingStateDemo from './00ManagingState';
import ReactingInputWithStateDemo from './01ReactingToInputWithState';
import ChoosingTheStateStructureDemo from './02ChoosingTheStateStructure';
import SharingStateBetweenComponentsDemo from './03SharingStateBetweenComponents';
import PreservingAndResettingStateDemo from './04PreservingAndResettingState';
import ExtractingStateLogicIntoReducerDemo from './05ExtractingStateLogicIntoReducer';
import PassingDataDeeplyWithContextDemo from './06PassingDataDeeplyWithContext';
import ScalingUpWithReducerAndContextDemo from './07ScalingUpWithReducerAndContext';

/* NOTE : Here are the steps to create a new React application:

1) Install Node.js and npm --> Before you start, make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from the official website: Node.js.

2) Create a New React Application --> Open a terminal or command prompt and run the following command to create a new React application:
| npx create-react-app my-app |
- Replace my-app with the desired name of your application. This command will create a new directory named my-app with all the necessary files and dependencies to start a React project.

3) Navigate to Your New Application --> Once the command completes, navigate into your new application directory:
| cd my-app | 

4) Start the Development Server --> To start the development server and run your React application, use the following command:
| npm start |
- This will open a new browser window displaying your React app. By default, the development server runs on http://localhost:3000.

5) Begin Coding --> You can now open the project directory in your preferred code editor and start building your React application by modifying the files in the src directory.

6) Additional Configuration (Optional) --> If you need to add additional dependencies or configure your project further, you can do so by modifying the package.json file or by installing additional packages using npm.
*/

function App() {
  const [topicIndex, setTopicIndex] = useState(1);
  const [highlightedTopic0, setHighlightedTopic0] = useState(false);
  const [highlightedTopic1, setHighlightedTopic1] = useState(true);
  const [highlightedTopic2, setHighlightedTopic2] = useState(false);
  const [highlightedTopic3, setHighlightedTopic3] = useState(false);
  const [highlightedTopic4, setHighlightedTopic4] = useState(false);
  const [highlightedTopic5, setHighlightedTopic5] = useState(false);
  const [highlightedTopic6, setHighlightedTopic6] = useState(false);
  const [highlightedTopic7, setHighlightedTopic7] = useState(false);

  const buttonStyle0 = {
    backgroundColor: highlightedTopic0 ? 'lightblue' : 'darkblue',
    color: highlightedTopic0 ? 'black' : 'white',
    border: '2px solid',
    fontWeight: 'bold',
    borderColor: highlightedTopic0 ? 'orange' : 'red',
  };

  const buttonStyle1 = {
    backgroundColor: highlightedTopic1 ? 'lightblue' : 'darkblue',
    color: highlightedTopic1 ? 'black' : 'white',
    border: '2px solid',
    fontWeight: 'bold',
    borderColor: highlightedTopic1 ? 'orange' : 'red',
  };

  const buttonStyle2 = {
    backgroundColor: highlightedTopic2 ? 'lightblue' : 'darkblue',
    color: highlightedTopic2 ? 'black' : 'white',
    border: '2px solid',
    fontWeight: 'bold',
    borderColor: highlightedTopic2 ? 'orange' : 'red',
  };

  const buttonStyle3 = {
    backgroundColor: highlightedTopic3 ? 'lightblue' : 'darkblue',
    color: highlightedTopic3 ? 'black' : 'white',
    border: '2px solid',
    fontWeight: 'bold',
    borderColor: highlightedTopic3 ? 'orange' : 'red',
  };

  const buttonStyle4 = {
    backgroundColor: highlightedTopic4 ? 'lightblue' : 'darkblue',
    color: highlightedTopic4 ? 'black' : 'white',
    border: '2px solid',
    fontWeight: 'bold',
    borderColor: highlightedTopic4 ? 'orange' : 'red',
  };

  const buttonStyle5 = {
    backgroundColor: highlightedTopic5 ? 'lightblue' : 'darkblue',
    color: highlightedTopic5 ? 'black' : 'white',
    border: '2px solid',
    fontWeight: 'bold',
    borderColor: highlightedTopic5 ? 'orange' : 'red',
  };

  const buttonStyle6 = {
    backgroundColor: highlightedTopic6 ? 'lightblue' : 'darkblue',
    color: highlightedTopic6 ? 'black' : 'white',
    border: '2px solid',
    fontWeight: 'bold',
    borderColor: highlightedTopic6 ? 'orange' : 'red',
  };

  const buttonStyle7 = {
    backgroundColor: highlightedTopic7 ? 'lightblue' : 'darkblue',
    color: highlightedTopic7 ? 'black' : 'white',
    border: '2px solid',
    fontWeight: 'bold',
    borderColor: highlightedTopic7 ? 'orange' : 'red',
  };

  const handleTopicClick = (index) => {
    setTopicIndex(index);

    if (index === 0) {
      setHighlightedTopic0(true);
      setHighlightedTopic1(false);
      setHighlightedTopic2(false);
      setHighlightedTopic3(false);
      setHighlightedTopic4(false);
      setHighlightedTopic5(false);
      setHighlightedTopic6(false);
      setHighlightedTopic7(false);
    } else if (index === 1) {
      setHighlightedTopic0(false);
      setHighlightedTopic1(true);
      setHighlightedTopic2(false);
      setHighlightedTopic3(false);
      setHighlightedTopic4(false);
      setHighlightedTopic5(false);
      setHighlightedTopic6(false);
      setHighlightedTopic7(false);
    } else if (index === 2) {
      setHighlightedTopic0(false);
      setHighlightedTopic1(false);
      setHighlightedTopic2(true);
      setHighlightedTopic3(false);
      setHighlightedTopic4(false);
      setHighlightedTopic5(false);
      setHighlightedTopic6(false);
      setHighlightedTopic7(false);
    } else if (index === 3) {
      setHighlightedTopic0(false);
      setHighlightedTopic1(false);
      setHighlightedTopic2(false);
      setHighlightedTopic3(true);
      setHighlightedTopic4(false);
      setHighlightedTopic5(false);
      setHighlightedTopic6(false);
      setHighlightedTopic7(false);
    } else if (index === 4) {
      setHighlightedTopic0(false);
      setHighlightedTopic1(false);
      setHighlightedTopic2(false);
      setHighlightedTopic3(false);
      setHighlightedTopic4(true);
      setHighlightedTopic5(false);
      setHighlightedTopic6(false);
      setHighlightedTopic7(false);
    } else if (index === 5) {
      setHighlightedTopic0(false);
      setHighlightedTopic1(false);
      setHighlightedTopic2(false);
      setHighlightedTopic3(false);
      setHighlightedTopic4(false);
      setHighlightedTopic5(true);
      setHighlightedTopic6(false);
      setHighlightedTopic7(false);
    } else if (index === 6) {
      setHighlightedTopic0(false);
      setHighlightedTopic1(false);
      setHighlightedTopic2(false);
      setHighlightedTopic3(false);
      setHighlightedTopic4(false);
      setHighlightedTopic5(false);
      setHighlightedTopic6(true);
      setHighlightedTopic7(false);
    } else if (index === 7) {
      setHighlightedTopic0(false);
      setHighlightedTopic1(false);
      setHighlightedTopic2(false);
      setHighlightedTopic3(false);
      setHighlightedTopic4(false);
      setHighlightedTopic5(false);
      setHighlightedTopic6(false);
      setHighlightedTopic7(true);
    } else {
      setHighlightedTopic0(false);
      setHighlightedTopic1(false);
      setHighlightedTopic2(false);
      setHighlightedTopic3(false);
      setHighlightedTopic4(false);
      setHighlightedTopic5(false);
      setHighlightedTopic6(false);
      setHighlightedTopic7(false);
    }
  };

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

      <body className="App-container">
        <div className='App-row-container'>
          <button className="App-topic" style={buttonStyle0} onClick={() => handleTopicClick(0)}>Managing State</button>
          <button className="App-topic" style={buttonStyle1} onClick={() => handleTopicClick(1)}>Reacting to Input with State</button>
          <button className="App-topic" style={buttonStyle2} onClick={() => handleTopicClick(2)}>Choosing the State Structure </button>
        </div>

        <div className='App-row-container'>
          <button className="App-topic" style={buttonStyle3} onClick={() => handleTopicClick(3)}>Sharing State Between Components</button>
          <button className="App-topic" style={buttonStyle4} onClick={() => handleTopicClick(4)}>Preserving and Resetting State</button>
          <button className="App-topic" style={buttonStyle5} onClick={() => handleTopicClick(5)}>Extracting State Logic into a Reducer</button>
        </div>

        <div className='App-row-container '>
          <button className="App-topic" style={buttonStyle6} onClick={() => handleTopicClick(6)}>Passing Data Deeply with Context</button>
          <button className="App-topic" style={buttonStyle7} onClick={() => handleTopicClick(7)}>Scaling Up with Reducer and Context</button>
        </div>

        <div>
          {topicIndex === 0 && <ManagingStateDemo />}
          {topicIndex === 1 && <ReactingInputWithStateDemo />}
          {topicIndex === 2 && <ChoosingTheStateStructureDemo />}
          {topicIndex === 3 && <SharingStateBetweenComponentsDemo />}
          {topicIndex === 4 && <PreservingAndResettingStateDemo />}
          {topicIndex === 5 && <ExtractingStateLogicIntoReducerDemo />}
          {topicIndex === 6 && <PassingDataDeeplyWithContextDemo />}
          {topicIndex === 7 && <ScalingUpWithReducerAndContextDemo />}
        </div>
      </body>
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