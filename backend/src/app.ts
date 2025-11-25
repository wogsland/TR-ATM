import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/pin', (req: Request, res: Response) => {
  const pinResponse = { "success": true }
  res.send(JSON.stringify(pinResponse));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
