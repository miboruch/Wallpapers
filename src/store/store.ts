import { createStore, applyMiddleware, compose } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AppState, rootReducer } from '../reducers/rootReducer';
import { AppActions } from '../types/actionTypes';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>));
const store = createStore(rootReducer, enhancer);

export default store;
