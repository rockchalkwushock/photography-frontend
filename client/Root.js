import React from 'react';
import { Router } from 'react-router/es';
import { history } from './redux';
import componentRoutes from './routing';

const Root = () => (
  <Router history={history} routes={componentRoutes} />
);

export default Root;
