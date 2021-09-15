import RatScrollbars from '@theme/core/RatScrollbars';
import { useTheme, ThemeProvider } from '@material-ui/core/styles';
import { selectContrastMainTheme } from '@store/modules/theme/settings/settingsSlice';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

function RatPageCardedSidebarContent(props) {
    const theme = useTheme();
    const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));

    const { classes } = props;

    return (
        <>
            {props.header && (
                <ThemeProvider theme={contrastTheme}>
                    <div className={clsx(classes.sidebarHeader, props.variant)}>{props.header}</div>
                </ThemeProvider>
            )}

            {props.content && (
                <RatScrollbars className={classes.sidebarContent} enable={props.innerScroll}>
                    {props.content}
                </RatScrollbars>
            )}
        </>
    );
}

export default RatPageCardedSidebarContent;
