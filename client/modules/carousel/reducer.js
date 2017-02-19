import { FAMILY, PORTRAIT, TRAVEL, WEDDING } from './types';

const initialState = {

};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FAMILY:
    case PORTRAIT:
    case TRAVEL:
    case WEDDING:
      return {
        ...state,
        payload
      };
    default:
      return state;
  }
};
