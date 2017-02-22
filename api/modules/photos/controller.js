import Photo from './model';
import Category from '../categories';

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
    const category = Category.find({ $query: { name } }).exec();
    // push Photo to collection.list.
    category.list.push(photo);
    try {
      return res.status(200).json({
        error: false,
        message: `Photo added to ${name} category!`,
        [name]: await Promise.all([photo.save(), category.save()])
      });
    } catch (error) {
      return res.status(500).json({ error: true, message: 'Internal Server Error.' });
    }
  }
}
