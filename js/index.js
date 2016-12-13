require('babel-polyfill');
import * as actions from './actions/index'
import store from './store'

// subscribe is a method that listens for changes on the store
let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
}) 

	store.dispatch(actions.addGuess(10))
	store.dispatch(actions.addGuess(13))
	store.dispatch(actions.addGuess(11))
	store.dispatch(actions.newGame())
	
unsubscribe();