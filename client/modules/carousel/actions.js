import axios from 'axios';
import { FETCH_COLLECTION } from './types';
/**
 * fetchCollection(arg)
 * - @param {String} name
 * - @returns {Object}
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
 * fetchApiCollection(arg)
 * - @param {String} name
 * - @returns {Object} res.data
 */
export const fetchApiCollection = async name => {
  const { data } = axios.get(`/api/v1/collection/${name}`);
  return data;
};

// NOTE: res.data
/**
 * CODE 200
 * {
 *  error: false,
 *  [name]: array,
 * }
 *
 * CODE 500
 * {
 *  error: true,
 *  message: 'Internal Server Error.',
 * }
 */