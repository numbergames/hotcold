import React from 'react'

export default function Feedback(props) {

	return (
		<div className="feedback">
      {props.children.feedbackMessage}
		</div>
	);
}
