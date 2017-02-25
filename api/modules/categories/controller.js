import Category from './model';
import { Validation } from '../../utils';

const validate = new Validation();

/**
 * CategoryApi
 * - @method addPhotoToCategory(arg, arg2)
 * - @method createCategory(arg, arg2)
 * - @method fetchCategories(arg, arg2)
 * - @method fetchCategoryByName(arg, arg2)
 */
export class CategoryApi {
  /**
   * addPhotoToCategory(arg, arg2)
   * - @param {Object} req
   * - @param {Object} res
   * - @return {Object} res
   */
  async addPhotoToCategory(req, res) {
    const { name } = req.params;
    const { url } = req.body;
    validate.nameCheck(name, res);
    validate.urlCheck(url, res);
    try {
      const list = await Category.addPhoto(name, { url });
      return res.status(201).json({
        error: false,
        category: list,
        message: 'Photo successfully added!'
      });
    } catch (e) {
      return res.status(400).json({
        error: true,
        usr_msg: 'Photo cannot be added to category!',
        e_msg: e
      });
    }
  }
  /**
   * createCategory(arg, arg2)
   * - @param {Object} req
   * - @param {Object} res
   * - @return {Object} res
   */
  async createCategory(req, res) {
    const { name } = req.body;
    validate.nameCheck(name, res);
    const category = new Category({ name, photos: [] });
    try {
      return res.status(200).json({
        category: await category.save(),
        error: false,
        message: `${name} created!`
      });
    } catch (e) {
      return res.status(422).json({
        error: true,
        usr_msg: 'Cannot create category.',
        e_msg: e
      });
    }
  }
  /**
   * fetchCategories(arg, arg2)
   * - @param {Object} req
   * - @param {Object} res
   * - @return {Object} res
   */
  async fetchCategories(req, res) {
    try {
      return res.status(200).json({
        error: false,
        categories: await Category.find({}).exec()
      });
    } catch (e) {
      return res.status(500).json({
        error: true,
        usr_msg: 'Internal Server Error.',
        e_msg: e
      });
    }
  }
  /**
   * fetchCategoryByName(arg, arg2)
   * - @param {Object} req
   * - @param {Object} res
   * - @return {Object} res
   */
  async fetchCategoryByName(req, res) {
    const { name } = req.params;
    validate.nameCheck(name, res);
    try {
      return res.status(200).json({
        error: false,
        [name]: await Category.find({ $query: { name } }).exec()
      });
    } catch (e) {
      return res.status(500).json({
        error: true,
        usr_msg: 'Internal Server Error.',
        e_msg: e
      });
    }
  }
}
