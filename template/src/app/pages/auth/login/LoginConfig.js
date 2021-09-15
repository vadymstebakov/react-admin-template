import { lazy } from 'react';
import { authRoles } from 'app/auth';

const LoginConfig = {
    settings: {
        layout: {
            config: {
                navbar: {
                    display: false,
                },
                toolbar: {
                    display: false,
                },
                footer: {
                    display: false,
                },
                leftSidePanel: {
                    display: false,
                },
                rightSidePanel: {
                    display: false,
                },
            },
        },
    },
    routes: [
        {
            path: '/auth/login',
            auth: authRoles.onlyGuest,
            component: lazy(() => import(/* webpackChunkName: 'login' */ './Login')),
        },
    ],
};

export default LoginConfig;
