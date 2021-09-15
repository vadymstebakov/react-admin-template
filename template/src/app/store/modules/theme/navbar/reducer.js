import { createReducer } from '@reduxjs/toolkit';
import * as types from './types';

const initialState = {
    foldedOpen: false,
    mobileOpen: false,
};

const navbarReducer = createReducer(initialState, {
    [types.NAVBAR_OPEN_FOLDED]: state => ({
        ...state,
        foldedOpen: true,
    }),
    [types.NAVBAR_CLOSE_FOLDED]: state => ({
        ...state,
        foldedOpen: false,
    }),
    [types.NAVBAR_TOGGLE_FOLDED]: state => ({
        ...state,
        foldedOpen: !state.foldedOpen,
    }),
    [types.NAVBAR_OPEN_MOBILE]: state => ({
        ...state,
        mobileOpen: true,
    }),
    [types.NAVBAR_CLOSE_MOBILE]: state => ({
        ...state,
        mobileOpen: false,
    }),
    [types.NAVBAR_TOGGLE_MOBILE]: state => ({
        ...state,
        mobileOpen: !state.mobileOpen,
    }),
});

export default navbarReducer;
