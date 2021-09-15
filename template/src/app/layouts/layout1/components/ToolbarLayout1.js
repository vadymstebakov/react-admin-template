import RatSearch from '@theme/core/RatSearch';
import RatShortcuts from '@theme/core/RatShortcuts';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import NavbarToggleButton from '@layouts/shared-components/NavbarToggleButton';
import QuickPanelToggleButton from '@layouts/shared-components/quickPanel/QuickPanelToggleButton';
import UserMenu from '@layouts/shared-components/UserMenu';
import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectToolbarTheme } from '@store/modules/theme/settings/settingsSlice';
import AdjustFontSize from '@layouts/shared-components/AdjustFontSize';
import FullScreenToggle from '@layouts/shared-components/FullScreenToggle';
import LanguageSwitcher from '@layouts/shared-components/LanguageSwitcher';

const useStyles = makeStyles(theme => ({
    root: {},
}));

function ToolbarLayout1(props) {
    const config = useSelector(({ theme }) => theme.settings.current.layout.config);
    const navbar = useSelector(({ theme }) => theme.navbar);
    const toolbarTheme = useSelector(selectToolbarTheme);

    const classes = useStyles(props);

    return (
        <ThemeProvider theme={toolbarTheme}>
            <AppBar
                id="rat-toolbar"
                className={clsx(classes.root, 'flex relative z-20 shadow-md', props.className)}
                color="default"
                style={{ backgroundColor: toolbarTheme.palette.background.paper }}
                position="static"
            >
                <Toolbar className="p-0 min-h-48 md:min-h-64">
                    <div className="flex flex-1 px-16">
                        {config.navbar.display && config.navbar.position === 'left' && (
                            <>
                                <Hidden mdDown>
                                    {(config.navbar.style === 'style-3' || config.navbar.style === 'style-3-dense') && (
                                        <NavbarToggleButton className="w-40 h-40 p-0 mx-0" />
                                    )}

                                    {config.navbar.style === 'style-1' && !navbar.open && (
                                        <NavbarToggleButton className="w-40 h-40 p-0 mx-0" />
                                    )}
                                </Hidden>

                                <Hidden lgUp>
                                    <NavbarToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8" />
                                </Hidden>
                            </>
                        )}

                        <Hidden mdDown>
                            <RatShortcuts />
                        </Hidden>
                    </div>

                    <div className="flex items-center px-8 h-full overflow-x-auto">
                        <LanguageSwitcher />

                        <AdjustFontSize />

                        <FullScreenToggle />

                        <RatSearch />

                        <QuickPanelToggleButton />

                        <UserMenu />
                    </div>

                    {config.navbar.display && config.navbar.position === 'right' && (
                        <>
                            <Hidden mdDown>
                                {!navbar.open && <NavbarToggleButton className="w-40 h-40 p-0 mx-0" />}
                            </Hidden>

                            <Hidden lgUp>
                                <NavbarToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8" />
                            </Hidden>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default memo(ToolbarLayout1);
