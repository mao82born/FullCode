import express from 'express';
import Sale from '../models/salesModel.js';
import { isAdmin, isAuth } from '../utils.js';
import expressAsyncHandler from 'express-async-handler';

export const salesRouter = express.Router();

salesRouter.get('/', async (req, res) => {
    const sales = await Sale.find();
    //console.log(sales);
    res.send(sales);
});

salesRouter.post(
    '/',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const newSale = new Sale({
            dateSale: Date.now(),
            docUser: '222222',
            price: 12,
            descriptionSale: {
                refnum: req.body.refnum,
                quantity: req.body.quantity,
            },
        });
        const sale = await newSale.save();
        res.send({ message: 'Nueva venta registrada.', sale });
        console.log(newSale);
    })
);
