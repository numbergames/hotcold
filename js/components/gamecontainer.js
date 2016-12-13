import React from 'react'
import Feedback from './feedback'
import Form from './form'
import GuessCount from './guess-count'
import Guesses from './guesses'

export default function GameContainer() {

	return(
		<div className="gameContainer">
			<Feedback />
			<Form />
			<GuessCount />
			<Guesses />
		</div>

		)
}