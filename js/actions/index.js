export const NEW_GAME = 'NEW_GAME';
export const newGame = range => ({
	type: NEW_GAME,
	magicNum: Math.floor(Math.random() * (range || 100)) + 1
});


export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = num => ({
	type: ADD_GUESS,
	num: num
});
