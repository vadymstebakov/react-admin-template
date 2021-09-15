import { lazy } from 'react';
import { authRoles } from 'app/auth';

const Error500Config = {
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
            path: '/errors/500',
            auth: authRoles.user,
            component: lazy(() => import(/* webpackChunkName: 'error-500' */ './Error500')),
        },
    ],
};

export default Error500Config;
