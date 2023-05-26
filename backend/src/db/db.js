import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: '../../config.env' });

const connectionString=`mongodb://localhost:27017/ecom`

const Connection = async () => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
             
        });
        console.log('DB connection successful!');
    } catch (err) {
        console.log(err);
    }
};


export default Connection;