import React from 'react';

const Guesses = props => {
  const heading = (props.text.length)
    ? 'Your guesses so far:'
    : '';

  return (
    <div className="guessbox">
      <h3 className="guessbox-heading">
        {heading}
      </h3>
      <ul className="guesses">
    		{props.text.map((n, i) =>
    			<li key={i}>
            {n}
          </li>
    		)}
    	</ul>
    </div>
  );
}
export default Guesses;
