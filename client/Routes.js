import React from 'react';
import ReactGA from 'react-ga';
import { Router } from 'react-router/es';
import { history } from './redux';
import App from './layout/App';
import Home from './pages/Home';

ReactGA.initialize(process.env.G_ANALYTICS, { debug: true });

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

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
  <Router
  history={history}
  key={Math.random()}
  onUpdate={logPageView}
  routes={componentRoutes}
  />
);
