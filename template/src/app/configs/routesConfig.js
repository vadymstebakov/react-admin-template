import { Redirect } from 'react-router-dom';
import { ThemeUtils } from '@utils';
import { authRoles } from 'app/auth';
import Error404Config from '@pages/errors/404/Error404Config';
import Error500Config from '@pages/errors/500/Error500Config';
import LoginConfig from '@pages/auth/login/LoginConfig';
import RegisterConfig from '@pages/auth/register/RegisterConfig';
import ForgotPasswordConfig from '@pages/auth/forgot-password/ForgotPasswordConfig';
import ResetPasswordConfig from '@pages/auth/reset-password/ResetPasswordConfig';
import ExampleConfig from '@pages/example/ExampleConfig';

const routeConfigs = [
    Error404Config,
    Error500Config,
    LoginConfig,
    RegisterConfig,
    ForgotPasswordConfig,
    ResetPasswordConfig,
    ExampleConfig,
];

const routes = [
    // if you want to make whole app auth protected by default change defaultAuth for example:
    // ...ThemeUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
    // The individual route configs which has auth option won't be overridden.
    ...ThemeUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path: '/auth/login',
        auth: authRoles.onlyGuest,
        component: () => <Redirect to="/auth/login" />,
    },
    {
        auth: authRoles.user,
        component: () => <Redirect to="/errors/404" />,
    },
    {
        auth: authRoles.user,
        component: () => <Redirect to="/errors/500" />,
    },
];

export default routes;
