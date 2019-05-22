import React from 'react';

class Component extends React.Component {
  render() {
    return (
      <div className="App">
        <h3>I am Component</h3>
        <ul>
          <li>Component life cycle</li>
        </ul>
      </div>
    )
  }
}

class PureComponent extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <h3>I am PureComponent.</h3>
        <ul>
          <li>Pure</li>
          <li>Component life cycle</li>
          <li>Shallow Comparison. </li>
        </ul>
      </div>
    )
  }
}

const FunctionComponent = () => {
  return (
    <div className="App">
      <h3>I am Function component</h3>
      <ul>
        <li>Just render</li>
        <li>No life cycle</li>
      </ul>
    </div>
  )
}

const PureFunctionComponent = React.memo(() => {
  return (
    <div className="App">
      <h3>I am Pure function component</h3>
      <ul>
        <li>Pure</li>
        <li>Just render</li>
        <li>No life cycle</li>
      </ul>
    </div>
  )
});

export default () => <>
  <Component /> 
  <PureComponent /> 
  <FunctionComponent />
  <PureFunctionComponent/>
</>