import jwtService from '@services/jwtService';
import { userAuthActions } from '@store/modules/auth/userAuth';
import * as types from './types';

// eslint-disable-next-line import/prefer-default-export
export const submitLogin =
    ({ email, password }) =>
    async dispatch => {
        return jwtService
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                dispatch(userAuthActions.setUserData(user));

                return dispatch({
                    type: types.LOGIN_SUCCESS,
                });
            })
            .catch(errors => {
                return dispatch({
                    type: types.LOGIN_ERROR,
                    payload: errors,
                });
            });
    };
