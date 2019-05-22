import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Think in react</h3>
      <ul>
        <li>
          <Link to="/think-in-react">Think in react</Link>
        </li>
      </ul>
      <h3>Best practices</h3>
      <ul>
        <li>
          <Link to="/setstate-badcase">Set state (bad case)</Link>
        </li>
        <li>
          <Link to="/setstate-goodcase">Set state (good case)</Link>
        </li>
      </ul>
      <h3>Anti patterns</h3>
      <ul>
        <li>
          <Link to="/mutatestate-badcase">Mutate state (bad case)</Link>
        </li>
        <li>
          <Link to="/mutatestate-goodcase">Mutate state (good case)</Link>
        </li>
        <li>
          <Link to="/bad-form">Form (bad case)</Link>
        </li>
        <li>
          <Link to="/form">Form (Not bad case)</Link>
        </li>
        <li>
          <Link to="/better-form">Form (better case)</Link>
        </li>
      </ul>
      <h3>Performance</h3>
      <ul>
        <li>
          <Link to="/component">Component types</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
