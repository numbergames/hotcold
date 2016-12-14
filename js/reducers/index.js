import * as actions from '../actions/index';

const emptyState = {
	guessedNumbers: [],
	answer: -1,
	feedback: 'welcome, prepare to be destroyed',
	count: 0,
  won: false
}

export const mainReducer = (state = emptyState, action) => {
	if (action.type === actions.ADD_GUESS) {
		let response;
		let diff = Math.abs(state.answer - action.num);
    let won = state.won;

    if (diff === 0) {
			response = 'YOU WON! You are freaking incredible, wow good job.';
      won = true;

		} else if (diff <= 10) {
 			response = 'you are so hot, i can\'t even compute'

		} else if (diff <= 20) {
			response = 'its okay... some of us are just not meant to win'

		} else if (diff <= 40) {
			response = 'maybe you should just give up'

		} else {
			response = 'i honestly dont know what to tell ya.. '
		}


		return { ...state,
			guessedNumbers: [...state.guessedNumbers, action.num],
			feedback: response,
			count: state.count + 1,
      won
			}
	}

	if (action.type === actions.NEW_GAME) {
		return {
      ...emptyState,
			answer: action.magicNum
    };
	}

	return state;
};
