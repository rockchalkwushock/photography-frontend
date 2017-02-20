import { FETCH_COLLECTION } from './types';
/**
 * fetchCollection(name)
 * - @param name: string
 * - Awaits return of fetchApiCollection.
 * - Dispatches to Redux Store.
 */
export const fetchCollection = name => async dispatch => {
  const data = await dispatch(fetchApiCollection(name));
  return {
    type: FETCH_COLLECTION,
    name,
    data
  };
};
/**
 * fetchApiCollection(name)
 * - @param name: string
 * - GET Request to 'api/v1/collection'.
 * - returns collection of images by name from database.
 */
export const fetchApiCollection = async name => {
  const { data } = axios.get(`/api/v1/collection/${name}`);
  return data;
};
