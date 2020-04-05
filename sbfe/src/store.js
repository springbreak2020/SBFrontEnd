import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

/**
 * Thunk Middleware for Redux
 * @type {Array}
 */
const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
