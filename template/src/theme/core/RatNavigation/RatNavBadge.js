import { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '0 7px',
        fontSize: 11,
        fontWeight: 600,
        height: 20,
        minWidth: 20,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
    },
}));

function RatNavBadge(props) {
    const classes = useStyles(props);
    const { className, badge } = props;

    return (
        <div
            className={clsx(classes.root, className, 'item-badge')}
            style={{
                backgroundColor: badge.bg,
                color: badge.fg,
            }}
        >
            {badge.title}
        </div>
    );
}

RatNavBadge.propTypes = {
    badge: PropTypes.shape({
        title: PropTypes.node,
        bg: PropTypes.string,
        fg: PropTypes.string,
    }),
};
RatNavBadge.defaultProps = {};

export default memo(RatNavBadge);
