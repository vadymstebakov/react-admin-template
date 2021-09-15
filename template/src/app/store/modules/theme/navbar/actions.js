import * as types from './types';

export const navbarToggleFolded = () => {
    return {
        type: types.NAVBAR_TOGGLE_FOLDED,
    };
};

export const navbarOpenFolded = () => {
    return {
        type: types.NAVBAR_OPEN_FOLDED,
    };
};

export const navbarCloseFolded = () => {
    return {
        type: types.NAVBAR_CLOSE_FOLDED,
    };
};

export const navbarToggleMobile = () => {
    return {
        type: types.NAVBAR_TOGGLE_MOBILE,
    };
};

export const navbarOpenMobile = () => {
    return {
        type: types.NAVBAR_OPEN_MOBILE,
    };
};

export const navbarCloseMobile = () => {
    return {
        type: types.NAVBAR_CLOSE_MOBILE,
    };
};
