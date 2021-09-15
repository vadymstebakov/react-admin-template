import { createReducer } from '@reduxjs/toolkit';
import * as types from './types';

const initialState = {
    state: false,
    options: {
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
        },
        autoHideDuration: 3000,
        message: 'Hi',
        variant: null,
    },
};

const messageReducer = createReducer(initialState, {
    [types.SHOW_MESSAGE]: (state, action) => ({
        ...state,
        state: true,
        options: {
            ...state.options,
            ...action.options,
        },
    }),
    [types.HIDE_MESSAGE]: state => ({
        ...state,
        state: false,
    }),
});

export default messageReducer;
