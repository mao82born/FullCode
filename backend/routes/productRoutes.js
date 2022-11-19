import express from 'express';
import Product from '../models/productModel.js';
import { isAdmin, isAuth } from '../utils.js';
import expressAsyncHandler from 'express-async-handler';

export const productRouter = express.Router();

//Operaciones CRUD de los productos

//Listar productos
productRouter.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

//Visualiza un producto y sus detalles al dar clic
productRouter.get('/refnum/:refnum', async (req, res) => {
    const product = await Product.findOne({ refnum: req.params.refnum });
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Producto no encontrado.' });
    }
});

//Añadir el producto al carrito
productRouter.get('/:refnum', async (req, res) => {
    const product = await Product.findById(req.params.refnum);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Producto no encontrado.' });
    }
});

//Modificar un producto
productRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if (product) {
            product.name = req.body.name;
            product.refnum = req.body.refnum;
            product.price = req.body.price;
            product.image = req.body.image;
            product.countInStock = req.body.countInStock;
            product.description = req.body.description;
            await product.save();
            res.send({ message: 'Producto editado' });
        } else {
            res.status(404).send({ message: 'No se encuentra el producto.' });
        }
    })
);

//Crear nuevo producto
productRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const newProduct = new Product({
            refnum: req.body.refnum,
            image: req.body.image,
            name: req.body.name,
            description: req.body.description,
            countInStock: req.body.countInStock,
            price: req.body.price,
        });
        const product = await newProduct.save();
        res.send({ message: 'Nuevo producto ingresado.', product });
    })
);

//Eliminar un producto
productRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {
            await product.remove();
            res.send({ message: 'Producto eliminado.' });
        } else {
            res.status(404).send({ message: 'No se encontró el producto.' });
        }
    })
);
