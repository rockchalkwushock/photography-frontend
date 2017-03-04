import axios from 'axios';
import './axiosConfig';

/**
 * Api
 * - @method fetchCategory(arg)
 */
export class Api {
  /**
   * Api.fetchCategory(arg)
   * - @param {String} name
   * - @return {Object} { data } = res || res.data
  */
  async fetchCategory(name) {
    try {
      const { data } = await axios.get(`/category/${name}`);
      return data;
    } catch (e) { console.log(e); }
  }
}
