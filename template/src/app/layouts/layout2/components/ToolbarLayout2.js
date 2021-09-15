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

function ToolbarLayout2(props) {
    const config = useSelector(({ theme }) => theme.settings.current.layout.config);
    const toolbarTheme = useSelector(selectToolbarTheme);

    const classes = useStyles(props);

    return (
        <ThemeProvider theme={toolbarTheme}>
            <AppBar
                id="rat-toolbar"
                className={clsx(classes.root, 'flex relative z-20 shadow-md', props.className)}
                color="default"
                style={{ backgroundColor: toolbarTheme.palette.background.paper }}
            >
                <Toolbar className="container p-0 lg:px-24 min-h-48 md:min-h-64">
                    {config.navbar.display && (
                        <Hidden lgUp>
                            <NavbarToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8" />
                        </Hidden>
                    )}

                    <div className="flex flex-1">
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
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default memo(ToolbarLayout2);
