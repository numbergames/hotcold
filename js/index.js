require('babel-polyfill');

import * as actions from './actions/index'

import store from './store'



console.log('hello');

console.log(store);
console.log(store.getState);

let unsubscribe = store.subscribe(() =>
	console.log(store.getState())
)

store.dispatch(actions.addGuess(3))

unsubscribe();