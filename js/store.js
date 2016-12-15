/*jshint esversion: 6 */
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import { mainReducer } from './reducers/index';

export default createStore(mainReducer, applyMiddleware(thunk));
