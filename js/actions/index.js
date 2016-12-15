/*jshint esversion: 6 */
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

export const FETCH_GUESSES_SUCCESS = 'FETCH_GUESSES_SUCCESS';
export const fetchGuessSuccess = fewestGuesses => ({
  type: FETCH_GUESSES_SUCCESS,
  fewestGuesses
});

export const FETCH_GUESSES = 'FETCH_GUESSES';
export const fetchGuesses = () => dispatch => {
  const url = 'http://localhost:8081/fewest-guesses';

  return fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    return dispatch(fetchGuessSuccess(data.fewestGuesses));
  })
  .catch(console.error);
};

export const POST_GUESSES = 'POST_GUESSES';
export const postGuesses = fewestGuesses => dispatch => {
  const url = 'http://localhost:8081/fewest-guesses';

  return fetch(url), {
    method: "POST",
    body: {
      fewestGuess: fewestGuesses
    }
  }
  .then(response => response.json())
  .then(data => {
    console.log(data);

    return dispatch(fetchGuessSuccess(data.fewestGuesses));
  })
  .catch(console.error);
};
