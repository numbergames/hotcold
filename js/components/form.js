import React from 'react'

export default function Form(props) {
	return (
		<form className={"form"}>
			<input onChange={props} type="text" className="input"/>
			<input type="submit" className="submit"/>
		</form>
 		)
}