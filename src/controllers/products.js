const Product = require('../models/product');

async function createProduct(req, res) {
  try {
    const { title, description, price, stockCount } = req.body;
    const product = await Product.create({
      title,
      description,
      price,
      stockCount,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function listProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getProduct(req, res) {
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateProduct(req, res) {
  try {
    const id = req.params.id;
    const { title, description, price, stockCount } = req.body;
    const product = await Product.findByPk(id);
    if (product) {
      await product.update({ title, description, price, stockCount });
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteProduct(req, res) {
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    if (product) {
      await product.destroy();
      res.status(204).json({ message: 'Product deleted' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  createProduct,
  listProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
