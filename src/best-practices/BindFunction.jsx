import React from 'react';

class BindFunctionBadCase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div className="App">
        <span>{this.state.counter}</span>
        <button onClick={() => {
          this.increment();
          this.increment();
        }}>Increment</button>
      </div>
    );
  }
}

class BindFunctionGoodCase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleClick = () => {
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div className="App">
        <span>{this.state.counter}</span>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default () => (
  <>
    <BindFunctionBadCase />
    <BindFunctionGoodCase />
  </>
)