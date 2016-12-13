import React from 'react'

export default function Guesses(props) {

	return (
		<div className="guessbox">
				{props.text.map(n => 
   					<li key={n}>{n}</li>
   					)}	
		</div>
		)
}