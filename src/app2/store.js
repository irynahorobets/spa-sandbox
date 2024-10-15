import { createStore } from 'redux';

const INIT_APP2 = 'INIT_APP2';

const initialState = {
    title: 'default title 2'
};

function reducer(state = {initialState}, action) {
    switch (action.type) {
        case INIT_APP2:
            return {
                ...state,
                title: action.title
            };

        default:
            return state;
    }
}
export class StoreManager {
    constructor() {
        this.store = null;
    }

    initStore(initialData) {
        if (!this.store) {
            this.store = createStore(
                reducer,
                initialData,
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            );
        }
    }

    getStore() {
        return this.store;
    }
}