import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import * as actions from '../js/actions/index'
const should = chai.should();

describe('actions', () => {
	it('should make a new guess', () => {
		const num = 45; 
		const expectedAction = {
			type: actions.ADD_GUESS,
			num
		}
		const result = actions.addGuess(num);
		result.type.should.equal(actions.ADD_GUESS);
		result.num.should.equal(num);
	})
	it('start a new game', () => {
		const expectedAction = {
			type: actions.NEW_GAME 
		}
		const range = 200;
		const result = actions.newGame(200);
		result.type.should.equal(actions.NEW_GAME);
		result.magicNum.should.be.above(0);
		result.magicNum.should.be.below(range)

	})
})

