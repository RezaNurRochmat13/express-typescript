import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = 8081 || process.env.PORT;

app.get('/', (request: Request, response: Response) => {
	response.json({ message: 'Index page' });
});

app.listen(PORT, () => {
	console.log(`Application running at http://localhost:${PORT}`);
});
