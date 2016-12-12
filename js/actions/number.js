your number

if your number is x away from number === cold
if x === 30 ice cold
if x === 5 hot 

	increment the count
	add your guess to a table / div

export const INCR_COUNT = 'INCR_COUNT';
export const incrCount = currentCount => ({
	type: INCR_COUNT,
	currentCount: currentCount + 1
})

export const NEW_GAME = 'NEW_GAME';
export const newGame = {
	type: NEW_GAME
}

export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = num => ({
	type: ADD_GUESS, 
	num: num
});

export const NEW_NUMBER = 'NEW_NUMBER';
export const newNumber = {
	type: NEW_NUMBER,
	number: function() {
	    return Math.floor(Math.random() * 100) + 1;  
		}
	}
}
