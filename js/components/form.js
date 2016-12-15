import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  onSubmit() {
    let userInput = parseInt(this.textInput.value);
    if (userInput >= 0 && userInput < 100) {
      this.props.onSubmit(this.textInput.value);
    }
  }

  handleKeyPress(e) {
    if (e.key === 'Enter' || e.key === 'Return') {
      this.onSubmit();
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="input"
          onKeyPress={this.handleKeyPress}
          ref={input => this.textInput = input}
        />
        <button
          type="button"
          className="submit"
          onClick={this.onSubmit}
        >
          Guess
        </button>
      </div>
    );
  }
}
