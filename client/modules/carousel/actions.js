import { FETCH_COLLECTION } from './types';

export const fetchCollection = name => async dispatch => {
  const data = await dispatch(fetchApiCollection(name));
  return {
    type: FETCH_COLLECTION,
    name,
    data
  };
};

export const fetchApiCollection = async name => {
  const { data } = axios.get(`/api/v1/collection/${name}`);
  return data;
};