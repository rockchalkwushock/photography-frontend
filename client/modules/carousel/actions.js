import { FETCH_COLLECTION } from './types';
import { CollectionApi } from '../../utils';

/**
 * fetchPhotos(arg1, arg2)
 * - @param {String} name
 * - @param {Object} data
 * - @return {Object} action
 */
export const fetchPhotos = (name, data) => ({
  type: FETCH_COLLECTION,
  name,
  data
});

/**
 * fetchCollection(arg)
 * - @param {String} name
 * - @return {Promise}
 */
export const fetchCollection = name => async dispatch => {
  const data = await CollectionApi.fetchCollection(name);
  return dispatch(fetchPhotos(name, data));
};
