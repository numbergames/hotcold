import React from 'react'

export default function GuessCount(props) {

	return (
		<div className="guess-count">
      {props.children.guessCount}
		</div>
	);
}
