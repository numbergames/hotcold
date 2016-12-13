import * as actions from '../actions/index';

const emptyState = {
	guessedNumbers: [],
	answer: 0,
	feedback: 'make a guess'
}

export const mainReducer = (state = emptyState, action) => {

	if (action.type === actions.ADD_GUESS) {
		
		let feedback = 'You won!'
		let guessDiff = Math.abs(action.num - state.answer);
		console.log(guessDiff);

		if (guessDiff <= 10){
			feedback = 'hot';
		}
		else if((guessDiff > 10) && (guessDiff <= 20)){
			feedback = 'kinda hot';
		}
		else if((guessDiff > 20) && (guessDiff <= 30)){
			feedback = 'kindof cold';
		}
		else {
			feedback = 'cold'
		} 

		return { ...state, guessedNumbers: [...state.guessedNumbers, action.num], feedback}
	}
	if(action.type === actions.NEW_GAME) {
		return { ...state, answer: action.magicNum }
	}
	return state;
};





