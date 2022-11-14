import express from 'express';
import Product from '../models/productModel.js';
import { data } from '../data.js';
import User from '../models/userModel.js';
import { dataU } from '../dataUsers.js';
import Sales from '../models/salesModel.js';
import { dataSales } from '../dataSales.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    await User.remove({});
    const createdUsers = await User.insertMany(dataU.users);
    await Sales.remove({});
    const createdSales = await Sales.insertMany(dataSales.sales);

    res.send({ createdProducts, createdUsers, createdSales });
});
export default seedRouter;
