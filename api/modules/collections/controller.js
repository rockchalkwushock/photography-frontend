import Collection from './model';

/**
 * CollectionApi
 * - @method createCollection(arg1, arg2)
 * - @method fetchCollectionByName(arg1, arg2)
 */
export class CollectionApi {
  /**
   * createCollection(arg1, arg2)
   * - @param {Object} req
   * - @param {Object} res
   * - @return {Object} res
   */
  async createCollection(req, res) {
    const { name } = req.body;
    const collection = new Collection({ category: name, list: [] });
    try {
      return res.status(200).json({
        collection: await collection.save(),
        error: false,
        message: `${name} created!`
      });
    } catch (error) {
      return res.status(500).json({ error: true, message: 'Internal Server Error.' });
    }
  }
  /**
   * fetchCollectionByName(arg1, arg2)
   * - @param {Object} req
   * - @param {Object} res
   * - @return {Object} res
   */
  async fetchCollectionByName(req, res) {
    const { name } = req.params;
    try {
      // NOTE: Note sure if Collection.find(name) will return the array stored at the key.
      return res.status(200).json({ error: false, [name]: await Collection.find(name) });
    } catch (e) {
      return res.status(500).json({ error: true, message: 'Internal Server Error.' });
    }
  }
}

/**
 * res.data object
 * {
 *  error: boolean,
 *  [name]: array,
 *  message: string, // if error = true.
 * }
 */
