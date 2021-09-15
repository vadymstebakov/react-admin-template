import { Router } from 'react-router-dom';
import { create } from 'jss';
import Provider from 'react-redux/es/components/Provider';
import rtl from 'jss-rtl';
import jssExtend from 'jss-plugin-extend';
import { createGenerateClassName, jssPreset, StylesProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { SnackbarProvider } from 'notistack';
import DateFnsUtils from '@date-io/date-fns';
import AppContext from '@context/AppContext';
import RatAuthorization from '@theme/core/RatAuthorization';
import RatLayout from '@theme/core/RatLayout';
import RatTheme from '@theme/core/RatTheme';
import history from '@history';
import { Auth } from './auth';
import routes from './configs/routesConfig';
import store from './store';

const jss = create({
    ...jssPreset(),
    plugins: [...jssPreset().plugins, jssExtend(), rtl()],
    insertionPoint: document.getElementById('jss-insertion-point'),
});

const generateClassName = createGenerateClassName({ disableGlobal: true });

const App = () => {
    return (
        <AppContext.Provider
            value={{
                routes,
            }}
        >
            <StylesProvider jss={jss} generateClassName={generateClassName}>
                <Provider store={store}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Auth>
                            <Router history={history}>
                                <RatAuthorization>
                                    <RatTheme>
                                        <SnackbarProvider
                                            maxSnack={5}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right',
                                            }}
                                            classes={{
                                                containerRoot: 'bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99',
                                            }}
                                        >
                                            <RatLayout />
                                        </SnackbarProvider>
                                    </RatTheme>
                                </RatAuthorization>
                            </Router>
                        </Auth>
                    </MuiPickersUtilsProvider>
                </Provider>
            </StylesProvider>
        </AppContext.Provider>
    );
};

export default App;
