import {
  FETCH_COLLECTION,
  FETCH_COLLECTION_ERROR
} from './types';

const initialState = {
  about: [],
  error: false,
  family: [],
  home: [],
  message: '',
  portrait: [],
  travel: [],
  wedding: []
};

/**
 * carouselReducer(arg1, arg2)
 * - @param {Object} state (initialState)
 * - @param {Object} action
 * - @returns {Object} state (new instance)
 * - returns current state object.
 * - NOTE:
 * - type = String
 * - name = String
 * - data = Object
 */
export default (state = initialState, action) => {
  const { data, name, type } = action;
  switch (type) {
    case FETCH_COLLECTION:
      return { ...state, [name]: data[name] };
    case FETCH_COLLECTION_ERROR:
      return { ...state, error: true, message: data.message };
    default:
      return state;
  }
};
