import React from 'react';
import { Router } from 'react-router/es';
import { history } from './redux';
import App from './layout/App';
import Home from './pages/Home';

const errorLoading = err =>
 console.error('Dynamic page loading failed', err);

const componentRoutes = {
  component: App,
  path: '/',
  indexRoute: { component: Home },
  childRoutes: [
    {
      path: '/about',
      async getComponent(location, cb) {
        try {
          const module = await import('./pages/About');
          cb(null, module.default);
        } catch (e) {
          errorLoading(e);
        }
      }
    },
    {
      path: '/portfolio/:collection',
      async getComponent(location, cb) {
        try {
          const module = await import('./pages/Portfolio');
          cb(null, module.default);
        } catch (e) {
          errorLoading(e);
        }
      }
    },
    {
      path: '/upload',
      async getComponent(location, cb) {
        try {
          const module = await import('./pages/Upload');
          cb(null, module.default);
        } catch (e) {
          errorLoading(e);
        }
      }
    },
    {
      path: '*',
      async getComponent(location, cb) {
        try {
          const module = await import('./pages/Page404');
          cb(null, module.default);
        } catch (e) {
          errorLoading(e);
        }
      }
    }
  ]
};

export default () => (
  <Router history={history} key={Math.random()} routes={componentRoutes} />
);
