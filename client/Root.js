import React from 'react';
import { Provider } from 'react-redux/es';
import { IntlProvider } from 'react-redux-multilingual';
import { Router } from 'react-router/es';
import { history, store } from './redux/store';
import componentRoutes from './dynamicRouting';
import { translations } from './modules';

const Root = () => (
  <Provider store={store}>
    <IntlProvider translations={translations}>
      <Router history={history} routes={componentRoutes} />
    </IntlProvider>
  </Provider>
);

export default Root;
