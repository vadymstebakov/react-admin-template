import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useTimeout } from '@hooks';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

function RatLoading(props) {
    const [showLoading, setShowLoading] = useState(!props.delay);

    useTimeout(() => {
        setShowLoading(true);
    }, props.delay);

    return (
        <div className={clsx('flex flex-1 flex-col items-center justify-center p-24', !showLoading && 'hidden')}>
            <Typography className="text-13 sm:text-20 mb-16" color="textSecondary">
                Loading...
            </Typography>
            <LinearProgress className="w-192 sm:w-320 max-w-full rounded-2" color="secondary" />
        </div>
    );
}

RatLoading.propTypes = {
    delay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

RatLoading.defaultProps = {
    delay: false,
};

export default RatLoading;
