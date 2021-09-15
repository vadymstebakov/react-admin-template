import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import RatAnimate from '@theme/core/RatAnimate';

const Error404 = () => {
    return (
        <div className="flex flex-col flex-1 items-center justify-center p-16">
            <div className="max-w-512 text-center">
                <RatAnimate animation="transition.slideUpIn" duration={250}>
                    <Typography variant="h1" color="inherit" className="font-medium mb-16">
                        404
                    </Typography>
                </RatAnimate>

                <RatAnimate animation="transition.slideUpIn" duration={250} delay={200}>
                    <Typography variant="h5" color="textSecondary" className="mb-16 font-normal">
                        Sorry but we could not find the page you are looking for
                    </Typography>
                </RatAnimate>

                <RatAnimate animation="transition.fadeIn" duration={250} delay={400}>
                    <Link className="font-normal" to="/example">
                        Go back to dashboard
                    </Link>
                </RatAnimate>
            </div>
        </div>
    );
};

export default Error404;
