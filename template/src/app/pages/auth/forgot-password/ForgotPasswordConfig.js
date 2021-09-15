import { lazy } from 'react';
import { authRoles } from 'app/auth';

const ForgotPasswordConfig = {
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
            path: '/auth/forgot-password',
            auth: authRoles.onlyGuest,
            component: lazy(() => import(/* webpackChunkName: 'forgot-password' */ './ForgotPassword')),
        },
    ],
};

export default ForgotPasswordConfig;
