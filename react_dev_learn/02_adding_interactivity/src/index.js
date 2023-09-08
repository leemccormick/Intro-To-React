import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Image from './Image.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// This is a demo to render the image for root, uncomment this line to see example
// root.render(<Image />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
