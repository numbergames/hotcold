import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export class HelpNew extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(
      actions.fetchGuesses()
    );
  }

  render() {
    return (
    	<div className="navbar">
        <button
        type="submit"
        onClick={() => window.alert("Type your guess in the box and press the Submit button.")}>
          Help
        </button>
        <button
        type="submit"
        onClick={this.props.newGame}>
          New
        </button>
        <h2 className="fewest-guesses">
          The fewest number of guesses from other users is:  <strong>{this.props.fewestGuesses}</strong>.
        </h2>
    	</div>
    );
  }
}

export default connect()(HelpNew);
