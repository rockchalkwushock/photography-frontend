/**
 * Validation
 * - @method nameCheck(arg, arg2)
 */
export class Validation {
  /**
   * nameCheck(arg, arg2)
   * - @param {String} name
   * - @param {Object} res
   * - @returns {Promise}
   */
  async nameCheck(name, res) {
    if (!name) {
      return await res.status(400).json({
        error: true,
        message: 'Must provide pathname.'
      });
    } else if (name === undefined) {
      return res.status(500).json({
        error: true,
        message: `Internal Server Error: ${name} not found.`
      });
    } else if (typeof name !== 'string') {
      return res.status(422).json({ error: true, message: 'Must be String!' });
    }
  }
}
