
/**
 * fetchCollectionByName(arg1, arg2)
 * - @param {Object} req
 * - @param {Object} res
 * - @returns {Object} res.data
 */
export const fetchCollectionByName = async (req, res) => {
  const { name } = req.params;
  try {
    return res.status(200).json({ error: false, [name]: await Schema.find(name) });
  } catch (e) {
    return res.status(500).json({ error: true, message: 'Internal Server Error.' });
  }
};

/**
 * res.data object
 * {
 *  error: boolean,
 *  [name]: array,
 *  message: string,
 * }
 */
