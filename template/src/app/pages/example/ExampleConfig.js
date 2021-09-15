import { lazy } from 'react';
import i18next from 'i18next';
import { authRoles } from 'app/auth';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'examplePage', en);
i18next.addResourceBundle('tr', 'examplePage', tr);
i18next.addResourceBundle('ar', 'examplePage', ar);

const ExampleConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: '/example',
            auth: authRoles.user,
            component: lazy(() => import(/* webpackChunkName: 'example' */ './Example')),
        },
    ],
};

export default ExampleConfig;
