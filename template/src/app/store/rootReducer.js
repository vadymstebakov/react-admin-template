import { combineReducers } from '@reduxjs/toolkit';
import { theme, global, i18n, auth } from './modules';
import { userAuthTypes } from './modules/auth/userAuth';

const createReducer = asyncReducers => (state, action) => {
    const combinedReducer = combineReducers({
        auth,
        i18n,
        theme,
        global,
        ...asyncReducers,
    });

    /*
    Reset the redux store when user logged out
    */
    if (action.type === userAuthTypes.AUTH_USER_LOGGED_OUT) {
        state = undefined;
    }

    return combinedReducer(state, action);
};

export default createReducer;
