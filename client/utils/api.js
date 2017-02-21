import axios from 'axios';
import './axiosConfig';

/**
 * fetchApiCollection(arg)
 * - @param {String} name
 * - @returns {Object} res.data
 */
export const fetchApiCollection = async name => {
  const { data } = await axios.get(`/api/v1/collection/${name}`);
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
