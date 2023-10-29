/**
 * @typedef {import('express').Request} express.Request
 * @typedef {import('express').Response} express.Response
 */

/**
 * Creates a product in database
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function createProduct(req, res) {}

/**
 * Updates a product by ID in database
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function updateProduct(req, res) {}

/**
 * Lists all products in database
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function listProducts(req, res) {}

/**
 * Get single product by ID
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function getProduct(req, res) {}

/**
 * Deletes a product by ID
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function deleteProduct(req, res) {}

module.exports = {
  createProduct,
  updateProduct,
  listProducts,
  getProduct,
  deleteProduct,
};
