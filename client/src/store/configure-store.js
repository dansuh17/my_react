import { createStore } from 'redux';
import rootReducer from '../reducers/index';

// create a store based on the reducer and an initial state
export default initialState => createStore(rootReducer, initialState);
