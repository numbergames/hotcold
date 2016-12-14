require('babel-polyfill');
import * as actions from './actions/index';
import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import MainContainer from './components/';

ReactDOM.render(
	<Provider store={ store }>
		<MainContainer />
	</Provider>,
  document.getElementById('app')
);

store.subscribe(() => console.log(store.getState()));

store.dispatch(actions.newGame());
