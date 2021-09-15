import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './login';
import registerReducer from './register';
import userAuthReducer from './userAuth';

const themeReducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    userAuth: userAuthReducer,
});

export default themeReducers;
