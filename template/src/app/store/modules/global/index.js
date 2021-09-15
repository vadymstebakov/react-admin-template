import { combineReducers } from '@reduxjs/toolkit';
import messageReducer from './message';
import dialogReducer from './dialog';

const globalReducers = combineReducers({
    message: messageReducer,
    dialog: dialogReducer,
});

export default globalReducers;
