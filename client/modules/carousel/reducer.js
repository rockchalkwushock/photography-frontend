import { FETCH_COLLECTION } from './types';

const initialState = {
  about: [],
  family: [],
  home: [],
  portrait: [],
  travel: [],
  wedding: []
};


export default (state = initialState, action) => {
  const { data, name, type } = action;
  switch (type) {
    case FETCH_COLLECTION:
      return { ...state, [name]: [data] };
    default:
      return state;
  }
};
