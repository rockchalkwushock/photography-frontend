import { applyMiddleware, createStore, compose } from 'redux/es';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router/es';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const routingMiddleware = routerMiddleware(browserHistory);
const middlewares = [promise(), routingMiddleware, reduxPackMiddleware];
let enhancers;

if (process.env.NODE_ENV !== 'production') {
  enhancers = composeWithDevTools(applyMiddleware(...middlewares));
} else {
  enhancers = compose(applyMiddleware(...middlewares));
}

const store = createStore(rootReducer, undefined, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);
export { store };
