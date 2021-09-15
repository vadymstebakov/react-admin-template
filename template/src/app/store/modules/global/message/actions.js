import * as types from './types';

export const hideMessage = () => {
    return {
        type: types.HIDE_MESSAGE,
    };
};

export const showMessage = options => {
    return {
        type: types.SHOW_MESSAGE,
        options,
    };
};
