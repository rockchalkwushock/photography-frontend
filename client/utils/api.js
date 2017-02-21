import axios from 'axios';
import './axiosConfig';

/**
 * CollectionApi
 * - @method fetchCollection(name)
 */
export class CollectionApi {
  /**
   * CollectionApi.fetchCollection(arg)
   * - @param {String} name
   * - @return {Object} { data } = res || res.data
  */
  async fetchCollection(name) {
    try {
      const { data } = await axios.get(`/api/v1/collection/${name}`);
      return data;
    } catch (e) {
      // Want to access data.error so that if it is true
      // I can return to the front-end only data.message.
      console.log(e);
    }
  }
}

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
