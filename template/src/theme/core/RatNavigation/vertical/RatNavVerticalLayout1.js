import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import { useDispatch } from 'react-redux';
import RatNavItem from '../RatNavItem';

const useStyles = makeStyles(theme => ({
    navigation: {
        '& .rat-list-item': {
            '&:hover': {
                backgroundColor: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0,0,0,.04)',
            },
            '&:focus:not(.active)': {
                backgroundColor: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0,0,0,.05)',
            },
        },
        '&.active-square-list': {
            '& .rat-list-item, & .active.rat-list-item': {
                width: '100%',
                borderRadius: '0',
            },
        },
        '&.dense': {
            '& .rat-list-item': {
                paddingTop: 0,
                paddingBottom: 0,
                height: 32,
            },
        },
    },
}));

function RatNavVerticalLayout1(props) {
    const classes = useStyles(props);
    const { navigation, layout, active, dense, className, onItemClick } = props;
    const dispatch = useDispatch();

    function handleItemClick(item) {
        onItemClick && onItemClick(item);
    }

    return (
        <List
            className={clsx(
                'navigation whitespace-nowrap px-12',
                classes.navigation,
                `active-${active}-list`,
                dense && 'dense',
                className
            )}
        >
            {navigation.map(_item => (
                <RatNavItem
                    key={_item.id}
                    type={`vertical-${_item.type}`}
                    item={_item}
                    nestedLevel={0}
                    onItemClick={handleItemClick}
                />
            ))}
        </List>
    );
}

export default RatNavVerticalLayout1;
