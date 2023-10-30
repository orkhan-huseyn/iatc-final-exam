/**
 * @typedef {import('express').Request} express.Request
 * @typedef {import('express').Response} express.Response
 */
const Product = require('../models/product');

/**
 * Creates a product in database
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function createProduct(req, res) {
  const {title, description, price, stockCount} = req.body;
  const product = await Product.create({
    title,
    description,
    price,
    stockCount,
  });
  res.status(201).send(product);
}

/**
 * Updates a product by ID in database
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function updateProduct(req, res) {
  const {id} = req.params;
  const {title, description, price, stockCount} = req.body;

  const product = await Product.findByPk(id);

  product.title = title;
  product.description = description;
  product.price = price;
  product.stockCount = stockCount;

  await product.save();

  res.send(product);
}

/**
 * Lists all products in database
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function listProducts(req, res) {
  const products = await Product.findAll();
  res.send(products);
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
    return res.status(404).send();
  }
  res.send(product);
}

/**
 * Deletes a product by ID
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function deleteProduct(req, res) {
  const {id} = req.params;
  const product = await Product.findByPk(id);
  product.destroy();
  res.status(204).send();
}

module.exports = {
  createProduct,
  updateProduct,
  listProducts,
  getProduct,
  deleteProduct,
};
