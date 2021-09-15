import { lazy } from 'react';
import { authRoles } from 'app/auth';

const RegisterConfig = {
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
            path: '/auth/register',
            auth: authRoles.onlyGuest,
            component: lazy(() => import(/* webpackChunkName: 'register' */ './Register')),
        },
    ],
};

export default RegisterConfig;
