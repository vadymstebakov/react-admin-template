import { lazy } from 'react';
import { authRoles } from 'app/auth';

const ResetPasswordConfig = {
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
            path: '/auth/reset-password',
            auth: authRoles.onlyGuest,
            component: lazy(() => import(/* webpackChunkName: 'reset-password' */ './ResetPassword')),
        },
    ],
};

export default ResetPasswordConfig;
