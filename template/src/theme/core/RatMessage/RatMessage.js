import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { amber, blue, green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { messageActions } from '@store/modules/global/message';

const useStyles = makeStyles(theme => ({
    root: {},
    success: {
        backgroundColor: green[600],
        color: '#FFFFFF',
    },
    error: {
        backgroundColor: theme.palette.error.dark,
        color: theme.palette.getContrastText(theme.palette.error.dark),
    },
    info: {
        backgroundColor: blue[600],
        color: '#FFFFFF',
    },
    warning: {
        backgroundColor: amber[600],
        color: '#FFFFFF',
    },
}));

const variantIcon = {
    success: 'check_circle',
    warning: 'warning',
    error: 'error_outline',
    info: 'info',
};

function RatMessage(props) {
    const dispatch = useDispatch();
    const state = useSelector(({ global }) => global.message.state);
    const options = useSelector(({ global }) => global.message.options);

    const classes = useStyles();

    return (
        <Snackbar
            {...options}
            open={state}
            onClose={() => dispatch(messageActions.hideMessage())}
            classes={{
                root: classes.root,
            }}
            ContentProps={{
                variant: 'body2',
                headlineMapping: {
                    body1: 'div',
                    body2: 'div',
                },
            }}
        >
            <SnackbarContent
                className={clsx(classes[options.variant])}
                message={
                    <div className="flex items-center">
                        {variantIcon[options.variant] && <Icon color="inherit">{variantIcon[options.variant]}</Icon>}
                        <Typography className="mx-8">{options.message}</Typography>
                    </div>
                }
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => dispatch(messageActions.hideMessage())}
                    >
                        <Icon>close</Icon>
                    </IconButton>,
                ]}
            />
        </Snackbar>
    );
}

export default memo(RatMessage);
