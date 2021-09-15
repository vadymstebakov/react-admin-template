import jwtService from '@services/jwtService';
import { userAuthActions } from '@store/modules/auth/userAuth';
import * as types from './types';

// eslint-disable-next-line import/prefer-default-export
export const submitRegister =
    ({ displayName, password, email }) =>
    async dispatch => {
        return jwtService
            .createUser({
                displayName,
                password,
                email,
            })
            .then(user => {
                dispatch(userAuthActions.setUserData(user));
                return dispatch({
                    type: types.REGISTER_SUCCESS,
                });
            })
            .catch(errors => {
                return dispatch({
                    type: types.REGISTER_ERROR,
                    payload: errors,
                });
            });
    };
