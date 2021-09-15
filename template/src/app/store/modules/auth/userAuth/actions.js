import history from '@history';
import _ from '@lodash';
import jwtService from '@services/jwtService';
import { messageActions } from '@store/modules/global/message';
import { setInitialSettings, setDefaultSettings } from '@store/modules/theme/settings/settingsSlice';
import * as types from './types';

export const setUserData = user => async (dispatch, getState) => {
    /*
    You can redirect the logged-in user to a specific route depending on his role
    */

    history.location.state = {
        redirectUrl: user.redirectUrl, // for example 'apps/academy'
    };

    /*
    Set User Settings
    */
    dispatch(setDefaultSettings(user.data.settings));
    dispatch({
        type: types.AUTH_SET_USER,
        payload: user,
    });

    return Promise.resolve();
};

export const updateUserSettings = settings => async (dispatch, getState) => {
    const oldUser = getState().auth.userAuth;
    const user = _.merge({}, oldUser, { data: { settings } });

    dispatch(updateUserData(user));

    return dispatch(setUserData(user));
};

export const updateUserShortcuts = shortcuts => async (dispatch, getState) => {
    const { user } = getState().auth;
    const newUser = {
        ...user,
        data: {
            ...user.data,
            shortcuts,
        },
    };

    dispatch(updateUserData(user));

    return dispatch(setUserData(newUser));
};

export const logoutUser = () => async (dispatch, getState) => {
    const { userAuth } = getState().auth;

    if (!userAuth.role || userAuth.role.length === 0) {
        // is guest
        return null;
    }

    history.push({
        pathname: '/auth/login',
    });

    jwtService.logout();

    dispatch(setInitialSettings());

    return dispatch({
        type: types.AUTH_USER_LOGGED_OUT,
    });
};

export const updateUserData = user => async (dispatch, getState) => {
    if (!user.role || user.role.length === 0) {
        // is guest
        return;
    }

    try {
        await jwtService.updateUserData(user);
        dispatch(messageActions.showMessage({ message: 'User data saved with api', variant: 'success' }));
    } catch (error) {
        dispatch(messageActions.showMessage({ message: error.message, variant: 'error' }));
    }
};
