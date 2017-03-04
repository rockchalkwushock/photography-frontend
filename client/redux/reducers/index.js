import { combineReducers } from 'redux/es';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form/es';
import { IntlReducer as Intl } from 'react-redux-multilingual';
import { carouselReducer } from '../../modules';
/**
 * rootReducer(arg)
 * - @param {Object} reducers
 * - @returns {Function}
 */
export default combineReducers({
  carousel: carouselReducer,
  form: formReducer,
  Intl,
  routing: routerReducer
});
