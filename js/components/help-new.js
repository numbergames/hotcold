import React from 'react'

// What props it needs to receive:
// -- callback for game reset

export default function HelpNew(props) {

	return (
		<h2 className="navbar">
      {"help"}
      <button type="submit" onSubmit={props.newGame}>New</button>
		</h2>
	);
}
