const {Router} = require('express');
const productController = require('../controllers/products');

const router = new Router();

router.post('/', productController.createProduct);
router.get('/', productController.listProducts);
router.get('/:id', productController.getProduct);
router.put('/:id', productController.updateProduct);
router.delete('/', productController.deleteProduct);

module.exports = router;
