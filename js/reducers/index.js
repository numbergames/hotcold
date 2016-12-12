import * as actions from '../actions/index';


// import { combineReducers } from 'redux';

// guessNUmber: 50,  
// 1, 70, 60

const emptyState = {
	guessedNumbers: [].
	answer: 0
}

export const mainReducer = (state = emptyState, action) => {
	if (action.type === actions.ADD_GUESS) {
		// var newState = {
		// 	guessedNumbers: [...state.guessedNumbers, action.guess]
		// }

		// return newState;
		
		return [...state, {num: action.num 
		}]
	}
	if(action.type === actions.NEW_GAME) {
		return {...state, answer: action.answer}
	}
	return state;
};

// const incrCountReducer = (state=[], action) => {
// 	return state;
// }

// const newGameReducer = (state=[], action) => {
// 	return state;
// }

// const addGuessReducer = (state=[], action) => {
// 	if (action.type === 'ADD_GUESS') {
// 		return [...state, {num: action.num
// 		}];
// 	}
// 	return state;
// };

// const newNumberReducer = (state=[], action) => {
// 	return state;
// }

// export const reducers = combineReducers({
// 	increment: incrCountReducer, 
// 	newGame: newGameReducer,
// 	addGuess: addGuessReducer,
// 	newNumber: newNumberReducer
// })

