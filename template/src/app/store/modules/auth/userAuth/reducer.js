import { createReducer } from '@reduxjs/toolkit';
import * as types from './types';

const initialState = {
    role: [], // guest
    data: null,
    redirectUrl: '/auth/login',
};

const userAuthReducer = createReducer(initialState, {
    [types.AUTH_SET_USER]: (state, action) => {
        console.log(action);

        return {
            ...state,
            ...action.payload,
        };
    },
    [types.AUTH_USER_LOGGED_OUT]: () => initialState,
});

export default userAuthReducer;
