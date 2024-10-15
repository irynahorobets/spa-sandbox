import { createStore } from 'redux';

const INIT_APP2 = 'INIT_APP2';

const initialState = {
    title: 'default title 2'
};

function reducer(state, action) {
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


export default createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
