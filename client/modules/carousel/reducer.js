import {
  FETCH_CATEGROY,
  FETCH_CATEGROY_ERROR
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
 * - @return {Object} state (new instance)
 * - NOTE:
 * - type = String
 * - name = String
 * - data = Object { error, message, [name] }
 */
export default (state = initialState, action) => {
  console.log(action);
  const { data, name, type } = action;
  switch (type) {
    case FETCH_CATEGROY:
      return {
        ...state,
        [name]: name
        // message: data.message
      };
    case FETCH_CATEGROY_ERROR:
      return { ...state, error: data.error, message: data.message };
    default:
      return state;
  }
};
