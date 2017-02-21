import Photo from './model';
import Collection from '../collections';

/**
 * PhotoApi
 * - @method createPhoto(arg1, arg2)
 */
export class PhotoApi {
  /**
   * createPhoto(arg1, arg2)
   * - @param {Object} req
   * - @param {Object} res
   * - @return {Object} res
   */
  async createPhoto(req, res) {
    const { name, url } = req.body;
    // create new Photo.
    const photo = new Photo({ url });
    // find collection to put Photo in.
    const collection = Collection.find(name);
    // push Photo to collection.list.
    collection.list.push(photo);
    try {
      return res.status(200).json({
        error: false,
        message: `Photo added to ${name} collection!`,
        [name]: await Promise.all([photo.save(), collection.save()])
      });
    } catch (error) {
      return res.status(500).json({ error: true, message: 'Internal Server Error.' });
    }
  }
}
