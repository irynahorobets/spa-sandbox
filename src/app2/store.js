import { createStore } from 'redux';

const INIT_APP2 = 'INIT_APP2';

export const initialState = {
    title: 'default title 2'
};

export function reducer(state = {...initialState}, action) {
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
