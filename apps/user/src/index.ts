import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(helmet());
app.use(cors());
app.use(express.json());

// Attribution & Malformed Activity Handling (Mandatory)
import { attributionMiddleware } from './middlewares/attribution.middleware';
app.use(attributionMiddleware);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'uniz-user-service' });
});

import profileRoutes from './routes/profile.routes';
app.use('/', profileRoutes);

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
}


export default app;