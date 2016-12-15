import * as actions from '../actions/index';

const emptyState = {
	guessedNumbers: [],
	answer: -1,
	feedback: 'make a guess',
	count: 0,
  fewestGuesses: "none"
}

export const mainReducer = (state = emptyState, action) => {

  if (action.type === actions.FETCH_GUESSES_SUCCESS) {

    return {
      ...state,
      fewestGuesses: (action.fewestGuesses === -1) ? "none" : action.fewestGuesses
    };
  }

	if (action.type === actions.ADD_GUESS) {
		var feedback = '';
    var guess = action.num;
		var diff = Math.abs(state.answer - guess)
		var won = false;

		if (state.guessedNumbers.indexOf(guess) >= 0) {
			feedback = `you already guessed ${guess}`;

			return {...state, feedback};
		}

    if (diff === 0) {
			feedback = 'eureka!';
			won = true;
      if (state.fewestGuesses === "none" || state.count + 1 < state.fewestGuesses) {

        return {
          ...state,
    			guessedNumbers: [...state.guessedNumbers, action.num],
    			count: state.count + 1,
    			feedback,
    			won,
          fewestGuesses: state.count + 1
    		};
      }
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

		return {
      ...state,
			guessedNumbers: [...state.guessedNumbers, action.num],
			count: state.count + 1,
			feedback,
			won
		};
	}

	if (action.type === actions.NEW_GAME) {

		return {
      ...emptyState,
			answer: action.magicNum,
		};
	}

	return state;
};
