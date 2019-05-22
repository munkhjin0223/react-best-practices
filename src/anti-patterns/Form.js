import React from 'react';

class BadForm extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    
    console.log('text: ', document.getElementById('text').value);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input id="text" type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
  }

  focusTextInput = () => {
    this.textInput.current.focus();
  };

  componentDidMount() {
    this.focusTextInput();
  }

  onSubmit = e => {
    e.preventDefault();
    
    console.log('text: ', this.textInput.current.value);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input ref={this.textInput} onChange={this.onChange} type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

class BetterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  onChange = e => {
    this.setState({
      text: e.target.value
    }, () => {
      console.log('text: ', this.state.text);
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          {this.state.text}
          <input value={this.state.text} onChange={this.onChange} type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export {
  BadForm,
  Form,
  BetterForm
}