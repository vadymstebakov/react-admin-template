import { Component } from 'react';
import { connect } from 'react-redux';
import { matchRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';
import AppContext from '@context/AppContext';
import { ThemeUtils } from '@utils';

class RatAuthorization extends Component {
    constructor(props, context) {
        super(props);
        const { routes } = context;
        this.state = {
            accessGranted: true,
            routes,
        };
    }

    componentDidMount() {
        if (!this.state.accessGranted) {
            this.redirectRoute();
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.accessGranted !== this.state.accessGranted;
    }

    componentDidUpdate() {
        if (!this.state.accessGranted) {
            this.redirectRoute();
        }
    }

    static getDerivedStateFromProps(props, state) {
        const { location, userRole } = props;
        const { pathname } = location;

        const matched = matchRoutes(state.routes, pathname)[0];

        return {
            accessGranted: matched ? ThemeUtils.hasPermission(matched.route.auth, userRole) : true,
        };
    }

    redirectRoute() {
        const { location, userRole, history } = this.props;
        const { pathname, state } = location;
        const redirectUrl = state && state.redirectUrl ? state.redirectUrl : '/';

        /*
        User is guest
        Redirect to Login Page
        */
        if (!userRole || userRole.length === 0) {
            history.push({
                pathname: '/auth/login',
                state: { redirectUrl: pathname },
            });
        } else {
            /*
        User is member
        User must be on unAuthorized page or just logged in
        Redirect to dashboard or redirectUrl
        */
            history.push({
                pathname: redirectUrl,
            });
        }
    }

    render() {
        // console.info('T Authorization rendered', this.state.accessGranted);
        return this.state.accessGranted ? <>{this.props.children}</> : null;
    }
}

function mapStateToProps({ auth }) {
    return {
        userRole: auth.userAuth.role,
    };
}

RatAuthorization.contextType = AppContext;

export default withRouter(connect(mapStateToProps)(RatAuthorization));