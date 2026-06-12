import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test health check route
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'Online', message: 'Orion Hub backend is operational.' });
});

app.listen(PORT, () => {
  console.log(`[Backend] Server running on http://localhost:${PORT}`);
});