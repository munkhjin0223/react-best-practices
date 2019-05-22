import React from 'react';

class MutateStateGoodCase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['foo', 'bar']
    };
  }

  handleClick = () => {
    this.setState({
      items: this.state.items.concat('lorem')
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.items.length}
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}

class MutateStateBadCase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['foo', 'bar']
    };
  }

  handleClick = () => {
    this.state.items.push('lorem');

    this.setState({
      items: this.state.items
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.items.length}
        <button onClick={this.handleClickAnti}>Add</button>
      </div>
    )
  }
}

export {
  MutateStateGoodCase,
  MutateStateBadCase
}