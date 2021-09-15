import { Suspense } from 'react';
import PropTypes from 'prop-types';
import RatLoading from '@theme/core/RatLoading';

const RatSuspense = props => <Suspense fallback={<RatLoading {...props.loadingProps} />}>{props.children}</Suspense>;

RatSuspense.propTypes = {
    loadingProps: PropTypes.object,
};

RatSuspense.defaultProps = {
    loadingProps: {
        delay: 0,
    },
};

export default RatSuspense;
