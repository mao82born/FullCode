import express from 'express';
import Product from '../models/productModel.js';
import { isAdmin, isAuth } from '../utils.js';

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

/*
productRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      refnum: '0',
      image: 'sample.jpg',
      name: 'Name sample',
      description:
        'Voluptate nostrud est ipsum non voluptate proident cillum sint eiusmod laborum nostrud et exercitation.',
      countInStock: 0,
      price: 0,
    });
    const createdProduct = await product.save();
    res.send({ message: 'Nuevo producto ingresado.', product: createdProduct });
  })
);*/
