import { FETCH_CATEGORY } from './types';
import { CollectionApi } from '../../utils/api';

const api = new CollectionApi();
/**
 * categoryAction(arg, arg2)
 * - @param {String} category
 * - @param {Object} data // maybe not but probably.
 * - @return {Object} action
 */
const categoryAction = (category, data) => ({
  type: FETCH_CATEGORY,
  category,
  data
});

/**
 * fetchCategory(arg)
 * - @param {Object || String} values.category || category
 * - @return {Promise}
 */
export const fetchCategory = values => async dispatch => {
  const { category } = values;
  console.log(category); // values is not getting passed async dispatch()
  const data = await api.createCategory(category);
  return dispatch(categoryAction(category, data));
};

