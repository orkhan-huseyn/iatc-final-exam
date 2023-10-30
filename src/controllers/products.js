const Product = require('../models/product');

async function createProduct(req, res) {
  try {
    // Extract product data from the request body
    const { name, price, description } = req.body;

    // Create a new product in the database
    const product = await Product.create({ name, price, description });

    // Return the newly created product in the response
    res.status(201).json(product);
  } catch (error) {
    // Handle any errors that occur during product creation
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateProduct(req, res) {
  try {
    // Extract product data from the request body
    const { name, price, description } = req.body;
    const productId = req.params.id; // Assuming the product ID is in the request parameters

    // Find the product by its ID
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Update the product with the new data
    product.name = name;
    product.price = price;
    product.description = description;

    // Save the updated product
    await product.save();

    // Return the updated product in the response
    res.json(product);
  } catch (error) {
    // Handle any errors that occur during product update
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Implement the logic for listProducts, getProduct, and deleteProduct functions similarly.

module.exports = {
  createProduct,
  updateProduct,
  listProducts,
  getProduct,
  deleteProduct,
};
