const Product = require('../models/product');

/**
 *
 * @typedef {import('express').Request} express.Request
 * @typedef {import('express').Response} express.Response
 */

/**
 * Creates a product in database
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function createProduct(req, res) {
  const {title, price, description, stockCount} = req.body;

  // Create a new product in the database
  const product = await Product.create({title, price, description, stockCount});

  res.status(201).json(product);
}

/**
 * Updates a product by ID in database
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function updateProduct(req, res) {
  const productId = req.params.id;
  const {title, description, price, stockCount} = req.body;
  const product = await Product.findByPk(productId);

  if (!product) {
    return res.status(404).json({error: 'Product not found'});
  }

  await product.update({title, description, price, stockCount});
  res.status(200).json(product);
}

/**
 * Lists all products in database
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function listProducts(req, res) {
  const products = await Product.findAll();

  res.status(200).json(products);
}

/**
 * Get single product by ID
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function getProduct(req, res) {
  const {id} = req.params;

  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({error: 'Product not found.'});
  }

  res.status(200).json(product);
}

/**
 * Deletes a product by ID
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function deleteProduct(req, res) {
  const {id} = req.params;

  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({error: 'Product not found.'});
  }

  await product.destroy();

  res.status(204).send(); // No content (product deleted successfully)}
}

module.exports = {
  createProduct,
  updateProduct,
  listProducts,
  getProduct,
  deleteProduct,
};
