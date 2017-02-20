import { combineReducers } from 'redux/es';
import { routerReducer } from 'react-router-redux';
import { carouselReducer } from '../../modules';
/**
 * rootReducer(arg)
 * - @param {Object} reducers
 * - @returns {Function}
 */
export default combineReducers({
  carousel: carouselReducer,
  routing: routerReducer
});
