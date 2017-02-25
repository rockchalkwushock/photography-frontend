import axios from 'axios';
import './axiosConfig';

/**
 * CollectionApi
 * - @method createCategory(arg)
 * - @method fetchCollection(arg)
 */
export class CollectionApi {
  /**
   * CollectionApi.fetchCollection(arg)
   * - @param {String} name
   * - @return {Object} { data } = res || res.data
  */
  async fetchCollection(name) {
    try {
      const { data } = await axios.get(`/collection/${name}`); // This is not right!!!!
      return data;
    } catch (e) {
      // Want to access data.error so that if it is true
      // I can return to the front-end only data.message.
      console.log(e);
    }
  }
  async createCategory(name) {
    console.log(`createCategory: ${name}`);
    try {
      const { data } = await axios.post('/category', { name });
      return data;
    } catch (e) {
      console.log(e);
    }
  }
  async uploadImageUrl(name, url) {
    console.log(name);
    try {
      const { data } = await axios.post(`/category/${name}`, { url });
      console.log(data);
      return data;
    } catch (e) {
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
