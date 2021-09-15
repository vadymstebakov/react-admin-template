import { memo } from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import _ from '@lodash';
import RatNavHorizontalLayout1 from './horizontal/RatNavHorizontalLayout1';
import RatNavVerticalLayout1 from './vertical/RatNavVerticalLayout1';
import RatNavVerticalLayout2 from './vertical/RatNavVerticalLayout2';
import RatNavHorizontalCollapse from './horizontal/types/RatNavHorizontalCollapse';
import RatNavHorizontalGroup from './horizontal/types/RatNavHorizontalGroup';
import RatNavHorizontalItem from './horizontal/types/RatNavHorizontalItem';
import RatNavHorizontalLink from './horizontal/types/RatNavHorizontalLink';
import RatNavVerticalCollapse from './vertical/types/RatNavVerticalCollapse';
import RatNavVerticalGroup from './vertical/types/RatNavVerticalGroup';
import RatNavVerticalItem from './vertical/types/RatNavVerticalItem';
import RatNavVerticalLink from './vertical/types/RatNavVerticalLink';
import { registerComponent } from './RatNavItem';

registerComponent('vertical-group', RatNavVerticalGroup);
registerComponent('vertical-collapse', RatNavVerticalCollapse);
registerComponent('vertical-item', RatNavVerticalItem);
registerComponent('vertical-link', RatNavVerticalLink);
registerComponent('horizontal-group', RatNavHorizontalGroup);
registerComponent('horizontal-collapse', RatNavHorizontalCollapse);
registerComponent('horizontal-item', RatNavHorizontalItem);
registerComponent('horizontal-link', RatNavHorizontalLink);
registerComponent('vertical-divider', () => <Divider className="my-16" />);
registerComponent('horizontal-divider', () => <Divider className="my-16" />);

const useStyles = makeStyles(theme => ({
    '@global': {
        '.popper-navigation-list': {
            '& .rat-list-item': {
                padding: '8px 12px 8px 12px',
                height: 40,
                minHeight: 40,
                '& .rat-list-item-text': {
                    padding: '0 0 0 8px',
                },
            },
            '&.dense': {
                '& .rat-list-item': {
                    minHeight: 32,
                    height: 32,
                    '& .rat-list-item-text': {
                        padding: '0 0 0 8px',
                    },
                },
            },
        },
    },
}));

function RatNavigation(props) {
    const classes = useStyles(props);
    const options = _.pick(props, [
        'navigation',
        'layout',
        'active',
        'dense',
        'className',
        'onItemClick',
        'firstLevel',
        'selectedId',
    ]);
    if (props.navigation.length > 0) {
        switch (props.layout) {
            case 'horizontal': {
                return <RatNavHorizontalLayout1 {...options} />;
            }
            case 'vertical': {
                return <RatNavVerticalLayout1 {...options} />;
            }
            case 'vertical-2': {
                return <RatNavVerticalLayout2 {...options} />;
            }
            default: {
                return <RatNavVerticalLayout1 {...options} />;
            }
        }
    } else {
        return null;
    }
}

RatNavigation.propTypes = {
    navigation: PropTypes.array.isRequired,
};

RatNavigation.defaultProps = {
    layout: 'vertical',
};

export default memo(RatNavigation);
