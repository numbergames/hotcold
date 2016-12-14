import React from 'react'

const GuessCount = props => {

	return (
		<div className="guess-count">
      		<p>Guess Count: {props.count} </p>
		</div>
	);
}

export default GuessCount;
