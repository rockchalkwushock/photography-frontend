import AppContainer from './modules/entry/AppContainer';
import HomePage from './modules/pages/home/HomePage';

const errorLoading = err => (
  console.error('Dynamic page loading failed', err)
);
const loadRoute = cb => (
  module => cb(null, module.default)
);

const componentRoutes = {
  component: AppContainer,
  path: '/',
  indexRoute: { component: HomePage },
  childRoutes: [
    {
      path: '/about',
      getComponent(location, cb) {
        System.import('./modules/pages/about/AboutContainer')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }
    },
    {
      path: '/portfolio/:collection',
      getComponent(location, cb) {
        System.import('./modules/portfolio/Portfolio')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }
    },
    {
      path: '*',
      getComponent(location, cb) {
        System.import('./modules/layout/Page404')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }
    }
  ]
};

export default componentRoutes;
