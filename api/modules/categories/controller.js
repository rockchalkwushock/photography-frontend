import Category from './model';

/**
 * CategoryApi
 * - @method createCategory(arg1, arg2)
 * - @method fetchCategories(arg1, arg2)
 * - @method fetchCategoryByName(arg1, arg2)
 */
export class CategoryApi {
    /**
   * createCategory(arg1, arg2)
   * - @param {Object} req
   * - @param {Object} res
   * - @return {Object} res
   */
  async createCategory(req, res) {
    const { name } = req.body;
    console.log(name);
    const category = new Category({ name, list: [] });
    console.log(category);
    try {
      return res.status(200).json({
        [name]: await category.save(),
        error: false,
        message: `${name} create!`
      });
    } catch (e) {
      return res.status(422).json({ success: false, message: e });
    }
  }

  /**
   * fetchCategories(arg1, arg2)
   * - @param {Object} req
   * - @param {Object} res
   * - @return {Object} res
   */
  // async fetchCategories(req, res) {
  //   try {
  //     return res.status(200).json({
  //       error: false,
  //       categories: await Category.find({}).exec()
  //     });
  //   } catch (e) {
  //     return res.status(500).json({
  //       error: true,
  //       usr_msg: 'Internal Server Error.',
  //       e_msg: e
  //     });
  //   }
  // }
    /**
   * fetchCategoryByName(arg1, arg2)
   * - @param {Object} req
   * - @param {Object} res
   * - @return {Object} res
   */
  async fetchCategoryByName(req, res) {
    const { name } = req.params;
    if (name === undefined) {
      return res.status(500).json({
        error: true,
        message: `Internal Server Error: ${name} not found.`
      });
    }
    if (typeof name !== 'string') {
      return res.status(422).json({ error: true, message: 'Must be String!' });
    }
    try {
      // NOTE: Note sure if Category.find(name) will return the array stored at the key.
      return res.status(200).json({ error: false, [name]: await Category.find({ $query: { name } }).exec() });
    } catch (e) {
      return res.status(500).json({ error: true, message: 'Internal Server Error.' });
    }
  }
}
