import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
}).catch(() =>{
    console.log(err);
});

const app = express();

app.listen(3000, () => { 
    console.log('Server listning on port 3000');
});