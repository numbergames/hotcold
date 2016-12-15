import React from 'react'

const HelpNew = props => {

	return (
		<div className="navbar">
      <button
      type="submit"
      onClick={() => window.alert("Type your guess in the box and press the Submit button.")}>
        Help
      </button>
      <button
      type="submit"
      onClick={props.newGame}>
        New
      </button>
      <h2>
        The fewest number of guesses from other users is:
        {props.serverFewestGuesses}.
      </h2>
		</div>
	);
}

export default HelpNew;
