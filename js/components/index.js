import React from 'react'
import HelpNew from './help-new'
import GameContainer from './gamecontainer'
import { connect } from 'react-redux'
import * as actions from '../actions'

export const MainContainer = (props) => {
  const resetGame = () => {
    props.dispatch(actions.newGame());
  };

	return (
		<div className="MainContainer">
			<HelpNew
        newGame={resetGame}
        serverFewestGuesses={props.serverFewestGuesses}
        userFewestGuesses={props.userFewestGuesses}
      />
			<GameContainer />
		</div>
	);
}

const mapStateToProps = (state, props) => ({
  serverFewestGuesses: state.serverFewestGuesses,
  userFewestGuesses: state.userFewestGuesses
});

export default connect(mapStateToProps)(MainContainer);
