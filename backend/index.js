import express from 'express';
import mongoose from "mongoose"
import Connection from './src/db/db.js';
import cors from 'cors';
import userRouter from './src/routes/user.js';
import productRouter from './src/routes/product.js';
import cartRouter from './src/routes/cart.js';


const port=process.env.PORT || 5000;;
const app = express();
Connection()
app.use(cors());
app.use(cors({ origin: "*" }));
app.use(express.json());
app.options("*", cors());




app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);




app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}
);