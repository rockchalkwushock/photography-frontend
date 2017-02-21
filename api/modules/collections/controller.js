import Collection from './model';

/**
 * fetchCollectionByName(arg1, arg2)
 * - @param {Object} req
 * - @param {Object} res
 * - @return {Object} res
 */
export const fetchCollectionByName = async (req, res) => {
  const { name } = req.params;
  try {
    // NOTE: Note sure if Collection.find(name) will return the array stored at the key.
    return res.status(200).json({ error: false, [name]: await Collection.find(name) });
  } catch (e) {
    return res.status(500).json({ error: true, message: 'Internal Server Error.' });
  }
};

/**
 * res.data object
 * {
 *  error: boolean,
 *  [name]: array,
 *  message: string, // if error = true.
 * }
 */
