import axios from 'axios';
import './axiosConfig';

/**
 * Api
 * - @method createCategory(arg)
 * - @method fetchCategory(arg)
 * - @method uploadImageUrl(arg, arg2)
 */
export class Api {
  /**
   * Api.createCategory(arg)
   * - @param {String} name
   * - @return {Object} { data } = res || res.data
  */
  async createCategory(name) {
    try {
      const { data } = await axios.post('/category', { name });
      return data;
    } catch (e) { console.log(e); }
  }
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
  /**
   * Api.uploadImageUrl(arg, arg2)
   * - @param {String} name
   * - @param {String} url
   * - @return {Object} { data } = res || res.data
  */
  async uploadImageUrl(name, url) {
    try {
      const { data } = await axios.post(`/category/${name}`, { url });
      return data;
    } catch (e) { console.log(e); }
  }
}
