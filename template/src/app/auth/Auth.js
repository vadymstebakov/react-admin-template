import RatSplashScreen from '@theme/core/RatSplashScreen';
import jwtService from 'app/services/jwtService';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { messageActions } from '@store/modules/global/message';
import { userAuthActions } from '@store/modules/auth/userAuth';

class Auth extends Component {
    state = {
        waitAuthCheck: true,
    };

    componentDidMount() {
        return Promise.all([
            // this.jwtCheck()
        ]).then(() => {
            this.setState({ waitAuthCheck: false });
        });
    }

    jwtCheck = () =>
        new Promise(resolve => {
            jwtService.on('onAutoLogin', () => {
                this.props.showMessage({ message: 'Logging in with JWT' });

                /**
                 * Sign in and retrieve user data from Api
                 */
                jwtService
                    .signInWithToken()
                    .then(user => {
                        this.props.setUserData(user);

                        resolve();

                        this.props.showMessage({ message: 'Logged in with JWT' });
                    })
                    .catch(error => {
                        this.props.showMessage({ message: error.message });

                        resolve();
                    });
            });

            jwtService.on('onAutoLogout', message => {
                if (message) {
                    this.props.showMessage({ message });
                }

                this.props.logout();

                resolve();
            });

            jwtService.on('onNoAccessToken', () => {
                resolve();
            });

            jwtService.init();

            return Promise.resolve();
        });

    render() {
        return this.state.waitAuthCheck ? <RatSplashScreen /> : <>{this.props.children}</>;
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            logout: userAuthActions.logoutUser,
            setUserData: userAuthActions.setUserData,
            showMessage: messageActions.showMessage,
            hideMessage: messageActions.hideMessage,
        },
        dispatch
    );
}

export default connect(null, mapDispatchToProps)(Auth);
