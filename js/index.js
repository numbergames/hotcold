require('babel-polyfill');

import * as actions from './actions/index'

import store from './store'

console.log(store);

//learn about this
// subscribe is a method that listens for changes on the store
let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
}) 


	store.dispatch(actions.newGame())
	store.dispatch(actions.addGuess(45))
	store.dispatch(actions.addGuess(3))


unsubscribe();