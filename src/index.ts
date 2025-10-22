import express from 'express';
import type { Request, Response } from 'express';
import { ServerOpts } from './interfaces/options.js';


let options! : ServerOpts;
const app = express();

const PORT = options.portNumber;

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send("Server is running!");
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
