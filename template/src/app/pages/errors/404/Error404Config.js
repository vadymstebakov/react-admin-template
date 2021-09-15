import { lazy } from 'react';
import { authRoles } from 'app/auth';

const Error404Config = {
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
            path: '/errors/404',
            auth: authRoles.user,
            component: lazy(() => import(/* webpackChunkName: 'error-404' */ './Error404')),
        },
    ],
};

export default Error404Config;
