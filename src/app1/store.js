import { createStore } from 'redux';

export const INIT_APP1 = 'INIT_APP1';

const defaultInitialState = {
  title: 'default title',
};

function reducer(state = defaultInitialState, action) {
  switch (action.type) {
    case INIT_APP1:
      return {
        ...state,
        ...action.payload, // Update state with new data
      };
    default:
      return state;
  }
}

let store;

export function getStore(preloadedState) {
  if (!store) {
    store = createStore(
      reducer,
      preloadedState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }
  return store;
}