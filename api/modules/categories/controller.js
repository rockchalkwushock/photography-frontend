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
      return res.status(201).json({
        error: false,
        category: await Category.addPhoto(name, { url }),
        message: 'Photo successfully added!'
      });
    } catch (e) {
      return res.status(400).json({
        error: true,
        message: 'Photo cannot be added to category!'
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
    const category = Category({ name });
    try {
      return res.status(201).json({
        [name]: await category.save(),
        error: false,
        message: `${name} created!`
      });
    } catch (e) {
      return res.status(422).json({
        error: true,
        message: 'Cannot create category.'
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
        categories: await Category.find({}).exec(),
        message: 'Categories retrieved.'
      });
    } catch (e) {
      return res.status(500).json({
        error: true,
        message: 'Internal Server Error.'
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
        category: await Category.findOne({ name }),
        message: `${name} found!`
      });
    } catch (e) {
      return res.status(500).json({
        error: true,
        message: 'Internal Server Error.'
      });
    }
  }
}
