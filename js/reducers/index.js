import * as actions from '../actions/index';

const emptyState = {
	guessedNumbers: [],
	answer: -1,
	feedback: 'make a guess',
	count: 0,
  userFewestGuesses: Infinity,
  serverFewestGuesses: Infinity
}

export const mainReducer = (state = emptyState, action) => {
	if (action.type === actions.ADD_GUESS) {
		var feedback = '';
		var ln = state.answer;
		var un = action.num;
		var diff = Math.abs(ln - un)
		var won = false;

		if (state.guessedNumbers.indexOf(un) >= 0) {
			feedback = `you already guessed ${un}`;

			return {...state, feedback};
		}

    if (diff === 0) {
			feedback = 'eureka!';
			won = true;
		} else if (diff <= 10) {
 			feedback = 'hot';
 		} else if (diff <= 20) {
			feedback = 'warm';
		} else if (diff <= 30) {
			feedback = 'coolish';
		} else if (diff <= 40) {
			feedback = 'cool';
		} else if (diff <= 50) {
			feedback = 'ice';
		} else {
			feedback = 'frozen';
		}

		return {...state,
			guessedNumbers: [...state.guessedNumbers, action.num],
			count: state.count + 1,
			feedback,
			won
		};
	}

	if (action.type === actions.NEW_GAME) {
		return {...emptyState,
			answer: action.magicNum,
		};
	}

	return state;
};
