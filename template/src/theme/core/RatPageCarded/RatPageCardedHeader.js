import { useTheme, ThemeProvider } from '@material-ui/core/styles';
import { selectContrastMainTheme } from '@store/modules/theme/settings/settingsSlice';
import { useSelector } from 'react-redux';

function RatPageCardedHeader(props) {
    const theme = useTheme();
    const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));

    return (
        <div className={props.classes.header}>
            {props.header && <ThemeProvider theme={contrastTheme}>{props.header}</ThemeProvider>}
        </div>
    );
}

export default RatPageCardedHeader;
