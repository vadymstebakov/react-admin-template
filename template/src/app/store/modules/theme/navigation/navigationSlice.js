import { createSelector, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import navigationConfig from 'app/configs/navigationConfig';
import { ThemeUtils } from '@utils';
import i18next from 'i18next';
import _ from '@lodash';

const navigationAdapter = createEntityAdapter();
const emptyInitialState = navigationAdapter.getInitialState();
const initialState = navigationAdapter.upsertMany(emptyInitialState, navigationConfig);

export const appendNavigationItem = (item, parentId) => (dispatch, getState) => {
    const navigation = selectNavigationAll(getState());

    return dispatch(setNavigation(ThemeUtils.appendNavItem(navigation, item, parentId)));
};

export const prependNavigationItem = (item, parentId) => (dispatch, getState) => {
    const navigation = selectNavigationAll(getState());

    return dispatch(setNavigation(ThemeUtils.prependNavItem(navigation, item, parentId)));
};

export const updateNavigationItem = (id, item) => (dispatch, getState) => {
    const navigation = selectNavigationAll(getState());

    return dispatch(setNavigation(ThemeUtils.updateNavItem(navigation, id, item)));
};

export const removeNavigationItem = id => (dispatch, getState) => {
    const navigation = selectNavigationAll(getState());

    return dispatch(setNavigation(ThemeUtils.removeNavItem(navigation, id)));
};

export const {
    selectAll: selectNavigationAll,
    selectIds: selectNavigationIds,
    selectById: selectNavigationItemById,
} = navigationAdapter.getSelectors(state => state.theme.navigation);

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setNavigation: navigationAdapter.setAll,
        resetNavigation: (state, action) => initialState,
    },
});

export const { setNavigation, resetNavigation } = navigationSlice.actions;

const getUserRole = state => state.auth.userAuth.role;

export const selectNavigation = createSelector(
    [selectNavigationAll, ({ i18n }) => i18n.language, getUserRole],
    (navigation, language, userRole) => {
        function setTranslationValues(data) {
            // loop through every object in the array
            return data.map(item => {
                if (item.translate && item.title) {
                    item.title = i18next.t(`navigation:${item.translate}`);
                }

                // see if there is a children node
                if (item.children) {
                    // run this function recursively on the children array
                    item.children = setTranslationValues(item.children);
                }
                return item;
            });
        }

        return setTranslationValues(
            _.merge(
                [],
                ThemeUtils.filterRecursive(navigation, item => ThemeUtils.hasPermission(item.auth, userRole))
            )
        );
    }
);

export const selectFlatNavigation = createSelector([selectNavigation], navigation =>
    ThemeUtils.getFlatNavigation(navigation)
);

export default navigationSlice.reducer;
