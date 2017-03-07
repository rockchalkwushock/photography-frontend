import Category from './model';
import { Validation } from '../../utils';

const validate = new Validation();

/**
 * CategoryApi
 * - @method fetchCategoryByName(arg, arg2)
 */
export class CategoryApi {
  /**
   * fetchCategoryByName(arg, arg2)
   * - @param {Object} req
   * - @param {Object} res
   * - @returns {Object} res
   */
  async fetchCategoryByName(req, res) {
    const { name } = req.params;
    validate.nameCheck(name, res);
    try {
      return res.status(200).json({
        error: false,
        category: await Category.findOne({ name }).exec(),
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
