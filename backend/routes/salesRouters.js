import express from 'express';
import Sales from '../models/salesModel';

export const salesRouter = express.Router();

salesRouter.get('/sales', async (req, res) => {
    const sales = await Sales.find();
    res.send(sales);
});
