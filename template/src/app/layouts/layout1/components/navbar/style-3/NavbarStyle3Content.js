import RatScrollbars from '@theme/core/RatScrollbars';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { ThemeProvider, makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import { memo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RatNavigation from '@theme/core/RatNavigation/RatNavigation';
import { selectNavigation } from '@store/modules/theme/navigation/navigationSlice';
import { navbarActions } from '@store/modules/theme/navbar';
import { selectContrastMainTheme } from '@store/modules/theme/settings/settingsSlice';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    sidePanel: {},
    panel: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        transition: theme.transitions.create(['opacity'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shortest,
        }),
        opacity: 0,
        pointerEvents: 'none',
        '&.opened': {
            opacity: 1,
            pointerEvents: 'initial',
        },
    },
}));

function needsToBeOpened(location, item) {
    return location && isUrlInChildren(item, location.pathname);
}

function isUrlInChildren(parent, url) {
    if (!parent.children) {
        return false;
    }

    for (let i = 0; i < parent.children.length; i += 1) {
        if (parent.children[i].children) {
            if (isUrlInChildren(parent.children[i], url)) {
                return true;
            }
        }

        if (parent.children[i].url === url) {
            return true;
        }
    }

    return false;
}

function NavbarStyle3Content(props) {
    const navigation = useSelector(selectNavigation);
    const [selectedNavigation, setSelectedNavigation] = useState([]);
    const classes = useStyles({ ...props, selectedNavigation });
    const [panelOpen, setPanelOpen] = useState(false);
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const dispatch = useDispatch();
    const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));
    const location = useLocation();

    useEffect(() => {
        navigation &&
            navigation.forEach(item => {
                needsToBeOpened(location, item) && setSelectedNavigation([item]);
            });
    }, [navigation, location]);

    function handleParentItemClick(selected) {
        /** if there is no child item do not set/open panel
         */
        if (!selected.children) {
            setSelectedNavigation([]);
            setPanelOpen(false);
            return;
        }

        /**
         * If navigation already selected toggle panel visibility
         */
        if (selectedNavigation[0]?.id === selected.id) {
            setPanelOpen(!panelOpen);
        } else {
            /**
             * Set navigation and open panel
             */
            setSelectedNavigation([selected]);
            setPanelOpen(true);
        }
    }

    function handleChildItemClick(selected) {
        setPanelOpen(false);
        mdDown && dispatch(navbarActions.navbarCloseMobile());
    }

    return (
        <ClickAwayListener onClickAway={() => setPanelOpen(false)}>
            <div className={clsx('flex flex-auto flex h-full', classes.root, props.className)}>
                <ThemeProvider theme={contrastTheme}>
                    <div
                        id="rat-navbar-side-panel"
                        className={clsx(classes.sidePanel, 'flex flex-shrink-0 flex-col items-center')}
                    >
                        <img className="w-45 my-32" src="assets/images/logos/logo-octarine.svg" alt="logo" />

                        <RatScrollbars
                            className="flex flex-1 min-h-0 justify-center w-full overflow-y-auto overflow-x-hidden"
                            option={{ suppressScrollX: true, wheelPropagation: false }}
                        >
                            <RatNavigation
                                className={clsx('navigation')}
                                navigation={navigation}
                                layout="vertical-2"
                                onItemClick={handleParentItemClick}
                                firstLevel
                                selectedId={selectedNavigation[0]?.id}
                                dense={props.dense}
                            />
                        </RatScrollbars>
                    </div>
                </ThemeProvider>

                {selectedNavigation.length > 0 && (
                    <RatScrollbars
                        id="rat-navbar-panel"
                        className={clsx(
                            classes.panel,
                            panelOpen && 'opened',
                            'shadow-5 overflow-y-auto overflow-x-hidden'
                        )}
                        option={{ suppressScrollX: true, wheelPropagation: false }}
                    >
                        <RatNavigation
                            className={clsx('navigation')}
                            navigation={selectedNavigation}
                            layout="vertical"
                            onItemClick={handleChildItemClick}
                        />
                    </RatScrollbars>
                )}
            </div>
        </ClickAwayListener>
    );
}

export default memo(NavbarStyle3Content);
