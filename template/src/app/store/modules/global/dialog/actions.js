import * as types from './types';

export const closeDialog = () => {
    return {
        type: types.CLOSE_DIALOG,
    };
};

export const openDialog = options => {
    return {
        type: types.OPEN_DIALOG,
        options,
    };
};
