import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h3>Think in react</h3>
      <ul>
        <li>
          <Link to="/step-one">Step one</Link>
        </li>
        <li>
          <Link to="/step-two">Step two</Link>
        </li>
        <li>
          <Link to="/last-step">Last step</Link>
        </li>
      </ul>
      <h3>Best practices</h3>
      <ul>
        <li>
          <Link to="/setstate">Set state</Link>
        </li>
        <li>
          <Link to="/mutatestate">Mutate state</Link>
        </li>
        <li>
          <Link to="/form">Form field</Link>
        </li>
        <li>
          <Link to="/bind-function">Bind function</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
