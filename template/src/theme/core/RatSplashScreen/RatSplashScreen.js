import { memo } from 'react';

const RatSplashScreen = () => {
    return (
        <div id="rat-splash-screen">
            <div className="center">
                <div className="logo">
                    <img width="200" src="assets/images/logos/logo-octarine.svg" alt="logo" />
                </div>
                <div className="spinner-wrapper">
                    <div className="spinner">
                        <div className="inner">
                            <div className="gap" />
                            <div className="left">
                                <div className="half-circle" />
                            </div>
                            <div className="right">
                                <div className="half-circle" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(RatSplashScreen);
