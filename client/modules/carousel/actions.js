import { FETCH_CATEGROY } from './types';
import { Api } from '../../utils/api';

const api = new Api();

/**
 * fetchPhotos(arg1, arg2)
 * - @param {String} name
 * - @param {Object} data
 * - @return {Object} action
 */
export const fetchPhotos = (name, data) => ({
  type: FETCH_CATEGROY,
  name,
  data
});

/**
 * fetchCategory(arg)
 * - @param {String} name
 * - @return {Promise}
 */
export const fetchCategory = name => async dispatch => {
  const data = await api.fetchCategory(name);
  return dispatch(fetchPhotos(name, data));
};
