import express from 'express';
import Product from '../models/productModel.js';

export const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

productRouter.get('/refnum/:refnum', async (req, res) => {
  const product = await Product.findOne({ refnum: req.params.refnum });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Producto no encontrado.' });
  }
});

productRouter.get('/:refnum', async (req, res) => {
  const product = await Product.findById(req.params.refnum);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Producto no encontrado.' });
  }
});
