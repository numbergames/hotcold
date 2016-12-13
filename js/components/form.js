import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    console.log(this.textInput.value)

  }

	render() {
    return (
      <div>
  			<input 
          type="text" 
          ref={(input) => { this.textInput = input; }}
          className="input"
        />
  			<button 
          type="button" 
          className="submit" 
          onClick={this.onSubmit}>Guess
        </button>
      </div>
  	);
  }
}

