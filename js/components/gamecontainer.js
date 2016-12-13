import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import Feedback from './feedback'
import Form from './form'
import GuessCount from './guess-count'
import Guesses from './guesses'

function GameContainer(props) {
  console.log(props);

  const newGuess = (guess) => {
    console.log('guess', guess);
    props.dispatch(actions.addGuess(guess));
  };

	return (
		<div className="gameContainer">
			<Feedback text={ props.feedback }/>
			<Form onSubmit={newGuess}/>
			<GuessCount text={ props.count } />
			<Guesses text={ props.guessedNumbers } />
		</div>
	)
}

const mapStateToProps = (state, props) => ({
	feedback: state.feedback ,
	count: state.count,
	guessedNumbers: state.guessedNumbers
});


export default connect(mapStateToProps)(GameContainer);
