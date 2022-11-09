import express from 'express';
import { data } from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conexión exitosa.');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
//prueba

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/products/id/:_id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params._id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Producto no encontrado.' });
  }
  res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Producto no encontrado.' });
  }
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http;//localhost:${port}`);
});
