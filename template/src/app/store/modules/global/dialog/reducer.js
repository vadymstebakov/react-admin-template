import { createReducer } from '@reduxjs/toolkit';
import * as types from './types';

const initialState = {
    state: false,
    options: {
        children: 'Hi',
    },
};

const dialogReducer = createReducer(initialState, {
    [types.OPEN_DIALOG]: (state, action) => ({
        ...state,
        state: true,
        options: {
            ...state.options,
            ...action.options,
        },
    }),
    [types.CLOSE_DIALOG]: state => ({
        ...state,
        state: false,
    }),
});

export default dialogReducer;
