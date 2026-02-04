import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import fileRoutes from './routes/file.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3005;

app.use(helmet());
app.use(cors());
app.use(express.json());

// Attribution & Malformed Activity Handling (Mandatory)
import { attributionMiddleware } from './middlewares/attribution.middleware';
app.use(attributionMiddleware);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'uniz-files-service' });
});

app.use('/', fileRoutes);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Files Service running on port ${PORT}`);
});
