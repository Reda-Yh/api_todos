import express from 'express';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import goalRoutes from './routes/goalRouter.js';
import userRoutes from './routes/userRouter.js';
import cors from 'cors';

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route de test pour vérifier que l'API fonctionne
app.get('/', (req, res) => {
    res.send('API is working perfectly!');
});

// Routes
app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
