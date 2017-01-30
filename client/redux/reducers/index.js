import { combineReducers } from 'redux/es';
import { routerReducer } from 'react-router-redux';
import { IntlReducer as Intl } from 'react-redux-multilingual';

export default combineReducers({
  Intl,
  routing: routerReducer
});
