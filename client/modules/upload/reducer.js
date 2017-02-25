import { FETCH_CATEGORY, FETCH_IMAGEURL } from './types';

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
    case FETCH_IMAGEURL:
      return {
        ...state,
        category: data.category.name,
        message: data.message,
        photos: [...state.photos, ...data.category.photos]
      };
    default:
      return state;
  }
};
