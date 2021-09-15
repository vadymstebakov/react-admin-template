import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import RatAnimate from '@theme/core/RatAnimate';

const Error500 = () => {
    return (
        <div className="flex flex-col flex-1 items-center justify-center p-16">
            <div className="max-w-512 text-center">
                <RatAnimate animation="transition.slideUpIn" duration={250}>
                    <Typography variant="h1" color="inherit" className="font-medium mb-16">
                        500
                    </Typography>
                </RatAnimate>

                <RatAnimate animation="transition.slideUpIn" duration={250} delay={200}>
                    <Typography variant="h5" color="textSecondary" className="mb-16 font-normal">
                        Well, you broke the internet!
                    </Typography>
                </RatAnimate>

                <RatAnimate animation="transition.slideUpIn" duration={250} delay={400}>
                    <Typography variant="subtitle1" color="textSecondary" className="mb-48">
                        Just kidding, looks like we have an internal issue, please try again in couple minutes
                    </Typography>
                </RatAnimate>

                <RatAnimate animation="transition.fadeIn" duration={250} delay={600}>
                    <Link className="font-normal" to="/">
                        Report this problem
                    </Link>
                </RatAnimate>
            </div>
        </div>
    );
};

export default Error500;
