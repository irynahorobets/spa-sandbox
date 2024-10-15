
import { createStore, applyMiddleware, compose } from 'redux';

export function createReduxStore(rootReducer, preloadedState, middlewares = []) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(...middlewares))); // , thunk
}