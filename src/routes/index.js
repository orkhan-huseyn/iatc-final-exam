const {Router} = require('express');
const productsRouter = require('./products');

const V1_ROUTER = new Router();

V1_ROUTER.use('/products', productsRouter);

module.exports = {
  V1_ROUTER,
};
