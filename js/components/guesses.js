import React from 'react'

export default function Guesses() {

	return (
		<div className="guessbox">
			<ul className="numbers">
        {[1,2,3,4,5].map(n =>
          <li key={n}>{n}</li>
        )}
      </ul>
		</div>
		)
}
