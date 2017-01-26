import React from 'react';
import { Provider } from 'react-redux/es';
import { Router } from 'react-router/es';
import { history, store } from './redux/store';
import componentRoutes from './dynamicRouting';

const Root = () => (
  <Provider store={store}>
    <Router history={history} routes={componentRoutes} />
  </Provider>
);

export default Root;
