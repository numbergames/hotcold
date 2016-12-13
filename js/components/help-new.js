import React from 'react'

export default function HelpNew(props) {

	return (
		<div className="navbar">
      <Help />
      <New newGame={props.newGame} />
		</div>
	);
}
