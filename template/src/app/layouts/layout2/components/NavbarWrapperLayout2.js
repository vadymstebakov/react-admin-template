import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import NavbarMobileLayout2 from '@layouts/layout2/components/NavbarMobileLayout2';
import NavbarToggleFab from '@layouts/shared-components/NavbarToggleFab';
import { navbarActions } from '@store/modules/theme/navbar';
import clsx from 'clsx';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNavbarTheme } from '@store/modules/theme/settings/settingsSlice';
import NavbarLayout2 from './NavbarLayout2';

const navbarWidth = 280;

const useStyles = makeStyles(theme => ({
    navbar: {
        height: 64,
        minHeight: 64,
        maxHeight: 64,
    },
    navbarMobile: {
        width: navbarWidth,
        minWidth: navbarWidth,
        transition: theme.transitions.create(['width', 'min-width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shorter,
        }),
    },
}));

function NavbarWrapperLayout2(props) {
    const dispatch = useDispatch();
    const config = useSelector(({ theme }) => theme.settings.current.layout.config);
    const navbarTheme = useSelector(selectNavbarTheme);
    const navbar = useSelector(({ theme }) => theme.navbar);

    const classes = useStyles(props);

    return (
        <>
            <ThemeProvider theme={navbarTheme}>
                <Hidden mdDown>
                    <NavbarLayout2 className={clsx(classes.navbar, props.className)} />
                </Hidden>

                <Hidden lgUp>
                    <SwipeableDrawer
                        anchor="left"
                        variant="temporary"
                        open={navbar.mobileOpen}
                        classes={{
                            paper: clsx(classes.navbarMobile, 'flex-col flex-auto h-full'),
                        }}
                        onClose={() => dispatch(navbarActions.navbarCloseMobile())}
                        onOpen={() => {}}
                        disableSwipeToOpen
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <NavbarMobileLayout2 />
                    </SwipeableDrawer>
                </Hidden>
            </ThemeProvider>

            {config.navbar.display && !config.toolbar.display && (
                <Hidden lgUp>
                    <NavbarToggleFab />
                </Hidden>
            )}
        </>
    );
}

export default memo(NavbarWrapperLayout2);
