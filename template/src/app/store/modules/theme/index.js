import { combineReducers } from '@reduxjs/toolkit';
import settingsReducer from './settings/settingsSlice';
import navigationReducer from './navigation/navigationSlice';
import navbarReducer from './navbar';

const themeReducers = combineReducers({
    settings: settingsReducer,
    navigation: navigationReducer,
    navbar: navbarReducer,
});

export default themeReducers;
