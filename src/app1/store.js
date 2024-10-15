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
        ...action.payload,
      };
    default:
      return state;
  }
}

export class StoreManager {
  constructor() {
    this.store = null;
  }

  initializeStore(initialData) {
    if (!this.store) {
      this.store = createStore(
        reducer,
        initialData,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );
    } else {
      this.store.dispatch({
        type: INIT_APP1,
        payload: initialData,
      });
    }
  }

  getStore() {
    return this.store;
  }
}
