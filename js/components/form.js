import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guess:
    };
    this.onSubmit = this.submit.bind(this)
  }

  onSubmit() {
    console.log('tetst')
    // console.log(this.refs);
  }

	render() {
    return (
      <div>
  			<input 
          type="text" 
          value={this.state.guess}
          ref="newGuess" 
          className="input"/>
  			<button 
          type="button" 
          className="submit" 
          onClick={this.onSubmit}>Guess
        </button>
      </div>
  	);
  }
}
