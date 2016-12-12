import * as actions from '../actions/index';

const emptyState = {
	guessedNumbers: [],
	answer: 0,
	feedback: 'make a guess'
}

export const mainReducer = (state = emptyState, action) => {
	if (action.type === actions.ADD_GUESS) {
		
		return { ...state, guessedNumbers: [...state.guessedNumbers, action.num], feedback: "try again"}
	}
	if(action.type === actions.NEW_GAME) {
		return { ...state, answer: action.magicNum }
	}
	return state;
};





