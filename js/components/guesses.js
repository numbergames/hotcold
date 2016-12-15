import React from 'react'

const Guesses = props =>(
  <ul className="guessbox">
    {props.guesses.map((n, i) =>
      <li key={i}>
        {n}
      </li>
    )}
  </ul>
);

export default Guesses;
