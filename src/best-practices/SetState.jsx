import React from 'react';

class SetStateBadCase extends React.Component {
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

class SetStateGoodCase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

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

export {
  SetStateBadCase,
  SetStateGoodCase
}