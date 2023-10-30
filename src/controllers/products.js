const Product = require('../models/product');

/**
 * @typedef {import('express').Request} express.Request
 * @typedef {import('express').Response} express.Response
 */

/**
 * Creates a product in database
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function createProduct(req, res) {
  const {title, description, price, stockCount} = req.body;

  const product = await Product.create({title, description, price, stockCount});
  return res.status(201).json(product);
}

/**
 * Updates a product by ID in database
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function updateProduct(req, res) {
  const id = req.params.id;
  const {title, description, price, stockCount} = req.body;
  const existingProduct = await Product.findByPk(id);
  if (!existingProduct) {
    return res.status(404).json({error: 'There is no product'});
  }

  await existingProduct.update({
    title: title,
    description: description,
    price: price,
    stockCount: stockCount,
  });
  return res.status(200).json(existingProduct);
}

/**
 * Lists all products in database
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function listProducts(req, res) {
  const products = await Product.findAll();
  return res.status(200).json(products);
}

/**
 * Get single product by ID
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function getProduct(req, res) {
  const id = req.params.id;
  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({error: 'There is no product'});
  }
  return res.status(200).json(product);
}

/**
 * Deletes a product by ID
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function deleteProduct(req, res) {
  const id = req.params.id;
  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({error: 'There is no product'});
  }

  await product.destroy();
  return res.status(204).send();
}

module.exports = {
  createProduct,
  updateProduct,
  listProducts,
  getProduct,
  deleteProduct,
};
