import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { memo, useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import RatNavBadge from '../../RatNavBadge';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: 48,
        '&.active': {
            backgroundColor: `${theme.palette.secondary.main}!important`,
            color: `${theme.palette.secondary.contrastText}!important`,
            pointerEvents: 'none',
            '& .rat-list-item-text-primary': {
                color: 'inherit',
            },
            '& .rat-list-item-icon': {
                color: 'inherit',
            },
        },
        '& .rat-list-item-icon': {},
        '& .rat-list-item-text': {
            padding: '0 0 0 16px',
        },
        color: theme.palette.text.primary,
        textDecoration: 'none!important',
    },
}));

function RatNavHorizontalLink(props) {
    const classes = useStyles(props);
    const { item } = props;

    return useMemo(
        () => (
            <ListItem
                button
                component="a"
                href={item.url}
                target={item.target ? item.target : '_blank'}
                className={clsx('rat-list-item', classes.root)}
                role="button"
            >
                {item.icon && (
                    <Icon className="rat-list-item-icon text-16 flex-shrink-0" color="action">
                        {item.icon}
                    </Icon>
                )}

                <ListItemText
                    className="rat-list-item-text"
                    primary={item.title}
                    classes={{ primary: 'text-13 rat-list-item-text-primary' }}
                />

                {item.badge && <RatNavBadge className="ltr:ml-8 rtl:mr-8" badge={item.badge} />}
            </ListItem>
        ),
        [classes.root, item.badge, item.icon, item.target, item.title, item.url]
    );
}

RatNavHorizontalLink.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        icon: PropTypes.string,
        url: PropTypes.string,
        target: PropTypes.string,
    }),
};

RatNavHorizontalLink.defaultProps = {};

const NavHorizontalLink = withRouter(memo(RatNavHorizontalLink));

export default NavHorizontalLink;
