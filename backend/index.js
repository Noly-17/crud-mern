import express from 'express';
import colors from 'colors'
import dotenv from 'dotenv';
import goalRouter from './routes/goalRoutes.js'
import { errorHandler } from './middleware/errorMiddleware.js';
import { connectDB } from './config/db.js';

const denv = dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', goalRouter)

app.use(errorHandler)

app.listen(PORT, console.log(`Server listening to port: ${PORT}`))