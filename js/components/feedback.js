import React from 'react'

const Feedback = props => {
	const className = `feedback${ props.won ? ' won' : '' }`;
	
	return (
		<div className={className}>
      		{props.text}
		</div>
	);
}

export default Feedback;