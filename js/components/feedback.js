import React from 'react';

const Feedback = props => {

  const className = `feedback ${props.won ? 'won' : ''}`;

  return (
  	<div className={className}>
  		{props.feedback}
  	</div>
  );
}

export default Feedback;
