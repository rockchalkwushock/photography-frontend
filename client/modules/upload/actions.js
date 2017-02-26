import { FETCH_CATEGORY, FETCH_IMAGEURL } from './types';
import { Api } from '../../utils/api';

const api = new Api();
/**
 * categoryAction(arg, arg2)
 * - @param {String} category
 * - @param {Object} data
 * - @return {Object} action
 */
const categoryAction = data => ({
  type: FETCH_CATEGORY,
  data
});

/**
 * fetchCategory(arg)
 * - @param {Stirng} category
 * - @return {Promise}
 */
export const fetchCategory = ({ category }) => async dispatch => {
  const data = await api.createCategory(category);
  return dispatch(categoryAction(data));
};

const imageAction = data => ({
  type: FETCH_IMAGEURL,
  data
});

export const fetchImageUrl = ({ cat_img, imageUrl }) => async dispatch => {
  const data = await api.uploadImageUrl(cat_img, imageUrl);
  return dispatch(imageAction(data));
};
