import Category from './model';

export const fetchPhotos = async (req, res) => {
  // Must discern the collection to query.
  const { collection } = req.body;

  // Must verify it is one of the 4 collections.


  // Must query db for collection.
  try {
      res.status(200).json({ error: false, images: await Category.find({}) });
    } catch (e) {
      res.status(e.status).json({ error: true, message: e.message });
    }
};
