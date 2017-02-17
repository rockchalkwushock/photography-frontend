import App from './layout/App';

// const errorLoading = err =>
//  console.error('Dynamic page loading failed', err);

const componentRoutes = {
  component: App,
  path: '/',
  // childRoutes: [
  //   {
  //     path: '/posts',
  //     async getComponent(location, cb) {
  //       try {
  //         const module = await import('');
  //         cb(null, module.default);
  //       } catch (e) {
  //         errorLoading(e);
  //       }
  //     }
  //   },
  //   {
  //     path: '/posts/:id',
  //     async getComponent(location, cb) {
  //       try {
  //         const module = await import('');
  //         cb(null, module.default);
  //       } catch (e) {
  //         errorLoading(e);
  //       }
  //     }
  //   }
  // ]
};

export default componentRoutes;
