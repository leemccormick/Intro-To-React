import logo from './logo.svg';
import './App.css';
import AddInteractivityDemo from './AddInteractivity';
import RespondingToEventsDemo from './RespondingToEvent';

function App() {
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
        <AddInteractivityDemo />
        <RespondingToEventsDemo />
      </body>
    </div>
  );
}

export default App;

// This is a template for new section....
/*
import './App.css';
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
  return (<div className="App-left-aligned-content"></div>);
}
*/