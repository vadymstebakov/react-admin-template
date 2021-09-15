import { createReducer } from '@reduxjs/toolkit';
import * as types from './types';

const initialState = {
    success: false,
    errors: [],
};

const registerReducer = createReducer(initialState, {
    [types.REGISTER_SUCCESS]: state => ({
        ...state,
        success: true,
        errors: [],
    }),
    [types.REGISTER_ERROR]: (state, action) => ({
        ...state,
        success: false,
        errors: action.payload,
    }),
});

export default registerReducer;
