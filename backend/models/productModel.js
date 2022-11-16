import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        refnum: { type: String, required: true, unique: true },
        name: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        countInStock: { type: Number, required: true },
        //slug: { type: String, required: true, unique: true },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
