import { combineReducers } from 'redux/es';
import { routerReducer } from 'react-router-redux';
import { carouselReducer } from '../../modules';

export default combineReducers({
  carousel: carouselReducer,
  routing: routerReducer
});
