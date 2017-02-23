import { Router } from 'express';
import { PhotoApi } from './controller';

const photoApi = new PhotoApi();
const routes = new Router();

routes.route('/category/:name').post(photoApi.addPhoto);

export default routes;

/*
  async createPhoto(req, res) {
    const { name } = req.params; // pass category to be queried as param.
    const { url } = req.body; // pass url to add to db in body.
    // Create new instance of Photo.
    const photo = new Photo({ url });
    console.log(photo);
    // Query the requested category and find the list key.
    const category = await Category.findOneAndUpdate(
      { name },
      { $push: { collection: [photo] } }
      ).exec();
    console.log(category);
    try {
      return res.status(200).json({
        error: false,
        message: `Photo added to ${name} category!`,
        [name]: await Promise.all([photo.save(), category.save()]) // not a function.
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: true, message: 'Internal Server Error.' });
    }
  }
 */