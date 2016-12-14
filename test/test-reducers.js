import { mainReducer } from '../js/reducers'
import * as actions from '../js/actions'

describe('game reducers', () => {
	it('return initial state', () => {
		const state = mainReducer(undefined, {});
		console.log(state)
		state.guessedNumbers.should.be.an('array')
		state.answer.should.equal(-1)
		state.feedback.should.equal('make a guess')
		state.count.should.equal(0)
		})
	it('should handle ADD_GUESS', () => {
		const currentState = {
			guessedNumbers: [],
			answer: 8,
			feedback: 'make a guess',
			count: 0
		}
		const addGuessState = mainReducer(currentState, {
			type: actions.ADD_GUESS,
			num: 7});
		console.log(addGuessState)	
	})
})