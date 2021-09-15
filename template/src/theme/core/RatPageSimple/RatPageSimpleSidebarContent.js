import { useSelector } from 'react-redux';
import RatScrollbars from '@theme/core/RatScrollbars';
import { useTheme, ThemeProvider } from '@material-ui/core/styles';
import { selectContrastMainTheme } from '@store/modules/theme/settings/settingsSlice';
import clsx from 'clsx';

function RatPageSimpleSidebarContent(props) {
    const theme = useTheme();
    const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));

    const { classes } = props;

    return (
        <RatScrollbars enable={props.innerScroll}>
            {props.header && (
                <ThemeProvider theme={contrastTheme}>
                    <div
                        className={clsx(
                            classes.sidebarHeader,
                            props.variant,
                            props.sidebarInner && classes.sidebarHeaderInnerSidebar
                        )}
                    >
                        {props.header}
                    </div>
                </ThemeProvider>
            )}

            {props.content && <div className={classes.sidebarContent}>{props.content}</div>}
        </RatScrollbars>
    );
}

export default RatPageSimpleSidebarContent;
