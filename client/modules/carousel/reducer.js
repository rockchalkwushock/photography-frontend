import { FETCH_CATEGROY, FETCH_CATEGROY_ERROR } from './types';

/**
 * carouselReducer(arg, arg2)
 * - @param {Object} state
 * - @param {Object} action
 * - @return {Object} state
 */
export default (state = {}, action) => {
  const { data, name, type } = action;
  switch (type) {
    case FETCH_CATEGROY:
      return {
        ...state,
        [name]: data.category.photos,
        message: data.message
      };
    case FETCH_CATEGROY_ERROR:
      return {
        ...state,
        error: data.error,
        message: data.message
      };
    default:
      return state;
  }
};
