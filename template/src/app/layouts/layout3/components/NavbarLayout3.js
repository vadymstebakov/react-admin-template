import RatScrollbars from '@theme/core/RatScrollbars';
import { makeStyles } from '@material-ui/core/styles';
import Navigation from '@layouts/shared-components/Navigation';
import clsx from 'clsx';
import { memo } from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
    },
}));
function NavbarLayout3(props) {
    const classes = useStyles(props);

    return (
        <div className={clsx('w-full shadow-md', classes.root, props.className)}>
            <div className={clsx('flex flex-auto items-center w-full h-full container px-16 lg:px-24')}>
                <RatScrollbars className="flex h-full items-center">
                    <Navigation className="w-full" layout="horizontal" dense />
                </RatScrollbars>
            </div>
        </div>
    );
}

export default memo(NavbarLayout3);
