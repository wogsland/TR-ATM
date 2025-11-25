import express, { Request, Response } from 'express';
import { readFileSync } from 'fs';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/balance', (req: Request, res: Response) => {
  const balance = readFileSync('./balance', 'utf-8').trim();
  const balanceResponse = { "balance": balance }
  res.send(JSON.stringify(balanceResponse));
});

app.get('/pin', (req: Request, res: Response) => {
  const pinResponse = { "success": true }
  res.send(JSON.stringify(pinResponse));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
