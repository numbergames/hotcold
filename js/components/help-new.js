import React from 'react'

export default function HelpNew(props) {

	return (
		<div className="navbar">
      {"help"}
      <button type="submit" onSubmit={props.newGame}>New</button>
		</div>
	);
}
