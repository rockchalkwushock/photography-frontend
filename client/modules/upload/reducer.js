import {
  FETCH_CATEGORY,
  FETCH_CATEGORY_ERROR,
  FETCH_IMAGEURL,
  FETCH_IMAGEURL_ERROR
} from './types';

const initialState = {
  category: '',
  error: false,
  message: '',
  photos: []
};

export default (state = initialState, action) => {
  const { data, type } = action;
  switch (type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        category: data.category.name,
        message: data.message,
        photos: [...data.category.photos]
      };
    case FETCH_CATEGORY_ERROR:
      return {
        ...state,
        error: data.error,
        message: data.message,
      };
    case FETCH_IMAGEURL:
      return {
        ...state,
        category: data.category.name,
        message: data.message,
        photos: [...data.category.photos] // still behind by one POST
      };
    case FETCH_IMAGEURL_ERROR:
      return {
        ...state,
        error: data.error,
        message: data.message,
      };
    default:
      return state;
  }
};
