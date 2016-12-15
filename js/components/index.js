import React from 'react';
import HelpNew from './help-new';
import GameContainer from './gamecontainer';
import { connect } from 'react-redux';
import * as actions from '../actions';

export const MainContainer = (props) => {
  const resetGame = () => props.dispatch(actions.newGame());

	return (
		<div className="MainContainer">
			<HelpNew
        newGame={resetGame}
        fewestGuesses={props.fewestGuesses}
      />
			<GameContainer />
		</div>
	);
};

const mapStateToProps = (state, props) => ({
  fewestGuesses: state.fewestGuesses,
});

export default connect(mapStateToProps)(MainContainer);
