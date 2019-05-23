import React from 'react';

class BadForm extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    
    alert(document.getElementById('text').value);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input id="text" placeholder="getElementById" type="text" />
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
    
    alert(this.textInput.current.value);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input ref={this.textInput} placeholder="Ref" onChange={this.onChange} type="text" />
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
    const { text } = this.state;
    
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <div>{text}</div>
          <input value={text} placeholder="State" onChange={this.onChange} type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default () => (
  <>
    <BadForm />
    <Form />
    <BetterForm />
  </>
)