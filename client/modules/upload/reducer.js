import { FETCH_CATEGORY } from './types';

const initialState = {
  error: false,
  message: '',
};

export default (state = initialState, action) => {
  const { data, name, type } = action;
  switch (type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        data,
        name
      };
    default:
      return state;
  }
};
