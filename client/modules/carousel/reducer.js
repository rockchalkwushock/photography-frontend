import { FETCH_COLLECTION } from './types';

/**
 * initialState
 * - Six arrays matching collections on database.
 */
const initialState = {
  about: [],
  family: [],
  home: [],
  portrait: [],
  travel: [],
  wedding: []
};

/**
 * carouselReducer
 * - @param state: object
 * - @param action: object
 * - returns current state object.
 */
export default (state = initialState, action) => {
  const { data, name, type } = action;
  switch (type) {
    case FETCH_COLLECTION:
      return { ...state, [name]: [data] };
    default:
      return state;
  }
};
