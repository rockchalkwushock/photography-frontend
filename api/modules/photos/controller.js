import Photo from './model';
import { Category } from '../categories';

/**
 * PhotoApi
 * - @method addPhoto(arg1, arg2)
 */
export class PhotoApi {
  async addPhoto(req, res) {
    // 1. Take in req.params & req.body.
    const { name } = req.params;
    const { url } = req.body;
    // 2. Create a new instance of Photo.
    const photo = new Photo({ url });
    // 3. User 'name' to query correct category for Photo to be added too.
    const category = await Category.findOneAndUpdate(
      // Query object.
      { name },
      // Update object.
      { $push: { list: [photo] } }
    );
    // 4. Return success object or failure object.
    try {
      return res.status(200).json({
        error: false,
        message: `Photo added to ${name} category!`,
        [name]: await category.save(),
        photo: await photo.save()
      });
    } catch (e) {
      console.log(e);
    }
  }
}
