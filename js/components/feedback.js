import React from 'react'

const Feedback = props => (
  <div className={`feedback${ props.won ? ' won' : '' }`}>
    {props.text}
  </div>
);

export default Feedback;
