import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { setDefaultSettings } from '@store/modules/theme/settings/settingsSlice';
import _ from '@lodash';
import { navbarActions } from '@store/modules/theme/navbar';

function NavbarToggleButton(props) {
    const dispatch = useDispatch();
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const settings = useSelector(store => store.theme.settings.current);
    const { config } = settings.layout;

    return (
        <IconButton
            className={props.className}
            onClick={ev =>
                dispatch(
                    mdDown
                        ? navbarActions.navbarToggleMobile()
                        : config.navbar.style === 'style-2'
                        ? dispatch(
                              setDefaultSettings(
                                  _.set({}, 'layout.config.navbar.folded', !settings.layout.config.navbar.folded)
                              )
                          )
                        : navbarActions.navbarToggle()
                )
            }
            color="inherit"
            size="small"
        >
            {props.children}
        </IconButton>
    );
}

NavbarToggleButton.defaultProps = {
    children: <Icon fontSize="inherit">menu_open</Icon>,
};

export default NavbarToggleButton;
