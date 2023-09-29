import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';
import products from '../frontend/src/products.mjs';

const port = process.env.PORT || 5000;
connectDB();//connect to mongoDB
const app = express();

app.get('/', (req, res) => {

    res.send('api is running');
});

app.get('/api/products', (req, res) => {

    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find( (p) => p._id ===req.params.id );
    res.json(product);
});


app.listen(port, () => console.log(`Servering running on port ${port}`));