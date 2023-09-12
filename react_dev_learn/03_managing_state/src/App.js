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
  const [topicIndex, setTopicIndex] = useState(0);


  const handleTopicClick = (index) => {
    console.log('Clicked with index:', index);
    setTopicIndex(index);
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
        <div>
          <button className="App-topic" onClick={() => handleTopicClick(0)}>Managing State</button>
          {topicIndex === 0 && <ManagingStateDemo />}
        </div>

        <div>
          <button className="App-topic" onClick={() => handleTopicClick(1)}>Reacting to Input with State</button>
          {topicIndex === 1 && <ReactingInputWithStateDemo />}
        </div>

        <div>
          <button className="App-topic" onClick={() => handleTopicClick(2)}>Choosing the State Structure</button>
          {topicIndex === 2 && <ChoosingTheStateStructureDemo />}
        </div>

        <div>
          <button className="App-topic" onClick={() => handleTopicClick(3)}>Sharing State Between Components</button>
          {topicIndex === 3 && <SharingStateBetweenComponentsDemo />}
        </div>

        <div>
          <button className="App-topic" onClick={() => handleTopicClick(4)}>Preserving and Resetting State</button>
          {topicIndex === 4 && <PreservingAndResettingStateDemo />}
        </div>

        <div>
          <button className="App-topic" onClick={() => handleTopicClick(5)}>Extracting State Logic into a Reducer</button>
          {topicIndex === 5 && <ExtractingStateLogicIntoReducerDemo />}
        </div>

        <div>
          <button className="App-topic" onClick={() => handleTopicClick(6)}>Passing Data Deeply with Context</button>
          {topicIndex === 6 && <PassingDataDeeplyWithContextDemo />}
        </div>

        <div>
          <button className="App-topic" onClick={() => handleTopicClick(7)}>Scaling Up with Reducer and Context</button>
          {topicIndex === 1 && <ScalingUpWithReducerAndContextDemo />}
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