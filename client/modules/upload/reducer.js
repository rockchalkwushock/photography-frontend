import {
  ADD_CATEGORY,
  ADD_CATEGORY_ERROR,
  ADD_IMAGEURL,
  ADD_IMAGEURL_ERROR
} from './types';

/**
 * uploadReducer(arg, arg2)
 * - @param {Object} state
 * - @param {Object} action
 * - @return {Object} state
 */
export default (state = {}, action) => {
  const { data, type } = action;
  switch (type) {
    case ADD_CATEGORY:
      return {
        ...state,
        category: data.category.name,
        message: data.message,
        photos: [...data.category.photos]
      };
    case ADD_CATEGORY_ERROR:
      return {
        ...state,
        error: data.error,
        message: data.message,
      };
    case ADD_IMAGEURL:
      return {
        ...state,
        category: data.category.name,
        message: data.message,
        photos: [...data.category.photos] // still behind by one POST
      };
    case ADD_IMAGEURL_ERROR:
      return {
        ...state,
        error: data.error,
        message: data.message,
      };
    default:
      return state;
  }
};
