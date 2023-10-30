const Product = require('../models/product');

/**
 * Creates a product in the database
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function createProduct(req, res) {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal Server Error'});
  }
}

/**
 * Updates a product by ID in the database
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function updateProduct(req, res) {
  const productId = req.params.id;
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({error: 'Product not found'});
    }
    await product.update(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({error: 'Error updating the product'});
  }
}

/**
 * Lists all products in the database
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function listProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({error: 'Error retrieving products'});
  }
}

/**
 * Get a single product by ID
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function getProduct(req, res) {
  const productId = req.params.id;
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({error: 'Product not found'});
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({error: 'Error retrieving the product'});
  }
}

/**
 * Deletes a product by ID
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function deleteProduct(req, res) {
  const productId = req.params.id;
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({error: 'Product not found'});
    }
    await product.destroy();
    res.status(204).end(); // No content, successful deletion
  } catch (error) {
    res.status(500).json({error: 'Error deleting the product'});
  }
}

module.exports = {
  createProduct,
  updateProduct,
  listProducts,
  getProduct,
  deleteProduct,
};