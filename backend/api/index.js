import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from "../routes/user.route.js";

dotenv.config()

const app = express();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Successfully connected to Mongo Database')
})
.catch((err) => {
    console.log(err)
})

app.use("/api/user", userRoutes);

app.listen(4000,()=> {
    console.log('Server is running on port 4000')
})

