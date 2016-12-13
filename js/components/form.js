import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);

  }

  onSubmit() {
    console.log('tetst')
    // console.log(this.refs);
  }

	render() {
    return (
      <div>
  			<input type="text" ref="newGuess" className="input"/>
  			<button type="button" className="submit" onClick={this.onSubmit}>
          Guess
        </button>
      </div>
  	);
  }
}
