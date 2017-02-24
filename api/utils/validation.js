/**
 * Validation
 * - @method nameCheck(arg, arg2)
 * - @method urlCheck(arg, arg2)
 */
export class Validation {
  /**
   * nameCheck(arg, arg2)
   * - @param {String} name
   * - @param {Object} res
   * - @return {Promise}
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
    /**
   * urlCheck(arg, arg2)
   * - @param {String} url
   * - @param {Object} res
   * - @return {Promise}
   */
  async urlCheck(url, res) {
    const ext = url.split('.').pop(); // get imageUrl extension.
    const ROOT_URL = process.env.ROOT_URL;
    if (!url) {
      return await res.status(400).json({
        error: true,
        message: 'Must provide an imageUrl.'
      });
    } else if (typeof url !== 'string') {
      return await res.status(400).json({
        error: true,
        message: 'imageUrl must be a string.'
      });
    } else if (!url.includes(ROOT_URL)) {
      return await res.status(400).json({
        error: true,
        message: 'imageUrl not accepted, check source.'
      });
    } else if (!/(jpg|png|jpeg)$/ig.test(ext)) {
      return await res.status(400).json({
        error: true,
        message: 'File extension not accepted.'
      });
    }
  }
}
