import { FETCH_CATEGROY, FETCH_CATEGROY_ERROR } from './types';

const initialState = {
  error: false,
  message: ''
};

/**
 * carouselReducer(arg1, arg2)
 * - @param {Object} state
 * - @param {Object} action
 * - @return {Object} state
 */
export default (state = initialState, action) => {
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
