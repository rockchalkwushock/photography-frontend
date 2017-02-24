import { combineReducers } from 'redux/es';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form/es';
import { carouselReducer, uploadReducer } from '../../modules';
/**
 * rootReducer(arg)
 * - @param {Object} reducers
 * - @returns {Function}
 */
export default combineReducers({
  carousel: carouselReducer,
  form: formReducer,
  routing: routerReducer,
  upload: uploadReducer
});
