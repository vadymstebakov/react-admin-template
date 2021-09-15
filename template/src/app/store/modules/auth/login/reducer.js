import { createReducer } from '@reduxjs/toolkit';
import * as types from './types';

const initialState = {
    success: false,
    errors: [],
};

const loginReducer = createReducer(initialState, {
    [types.LOGIN_SUCCESS]: state => ({
        ...state,
        success: true,
        errors: [],
    }),
    [types.LOGIN_ERROR]: (state, action) => ({
        ...state,
        success: false,
        errors: action.payload,
    }),
});

export default loginReducer;
