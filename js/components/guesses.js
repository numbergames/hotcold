import React from 'react'

const Guesses = props => {

	return (
		<div className="guessbox">
				{props.text.map((n, i) => 
   					<li 
   					key={i}>{n}
   					</li>
   					)}	
		</div>
		)
}

export default Guesses;