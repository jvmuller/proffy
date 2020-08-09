import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes';

dotenv.config();
const PROFFY_SERVER_PORT = 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PROFFY_SERVER_PORT, () => {
    console.log(`[*] Server running on ${PROFFY_SERVER_PORT}`);
});
