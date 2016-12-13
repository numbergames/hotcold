import React from 'react'
import HelpNew from './help-new'
import GameContainer from './gamecontainer'

export default function MainContainer() {

	return (
		<div className="MainContainer">
			<HelpNew newGame={() => {console.log('new game')}} />
			<GameContainer/>
		</div>

		)
}