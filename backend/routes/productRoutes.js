import express from 'express';
import Product from '../models/productModel.js';

const router = express.Router();

// @description Fetch all products
// @route GET /api/products
// @access Public

router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
  }
});

// @description Fetch single product
// @route GET /api/products/:id
// @access Public

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({
        message: 'Product not found',
      });
    }
  } catch (error) {
    console.error(error);
  }
});

export default router;
