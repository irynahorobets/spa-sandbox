import { createStore } from 'redux';

const INIT_APP1 = 'INIT_APP1';

export const initialState = {
    title: 'default title'
};

export function reducer(state, action) {
    switch (action.type) {
        case INIT_APP1:
            return {
                ...state,
                title: action.title
            };

        default:
            return state;
    }
}