import express from 'express'
import accountRoutes from './routes/v1/accounts/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/v1/accounts', accountRoutes);

export default app;