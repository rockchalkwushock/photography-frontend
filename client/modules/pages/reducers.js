import { handle } from 'redux-pack';
import { ABOUT_PAGE, HOME_PAGE } from './types';

const initialState = {
  error: false,
  isFetched: false,
  message: '',
  images: []
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ABOUT_PAGE:
    case HOME_PAGE:
      return handle(state, action, {
        start: s => ({ ...s, isFetched: false }),
        finish: s => ({ ...s, isFetched: true }),
        failure: s => ({ ...s, error: true, message: 'Upload failed!' }),
        success: s => ({ ...s, message: 'Upload Successful!', images: payload }),
      });
    default:
      return state;
  }
};
