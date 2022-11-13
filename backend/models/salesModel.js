import mongoose from 'mongoose';

const salesSchema = new mongoose.Schema(
    {
        dateSale: { type: String, required: true, unique: true },
        docUser: { type: String, required: true },
        price: { type: String, required: true },
        descriptionSale: [
            {
                refnum: { type: String, required: true, unique: true },
                quantity: { type: Number, required: true },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Sales = mongoose.model('Sales', salesSchema);
export default Sales;
