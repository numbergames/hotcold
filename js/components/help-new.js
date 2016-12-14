import React from 'react'

export default function HelpNew(props) {

  const alertText = () => {
    window.alert("Type your guess in the box and press the Submit button.");
  };

	return (
		<div className="navbar">
      <button type="submit" onClick={alertText}>
        Help
      </button>
      <button type="submit" onClick={props.newGame}>
        New
      </button>
		</div>
	);
}
