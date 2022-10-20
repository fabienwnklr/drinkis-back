import { config } from 'dotenv';
config();

import cors from 'cors';
import express, { Application } from 'express';
import { createDB } from './db';
import { Database } from './models';
import PatnerRoutes from './routes/partner.routes';
const app: Application = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

PatnerRoutes(app);

try {
    Database.sync({ force: false })
        .then(() => {
            console.info('Re-sync db.');
            app.listen(port, () => {
                console.log(`API running on http://localhost:${port}`);
                createDB();
            });
        })
        .catch((error) => {
            console.error('Error running', error);
        });
} catch (error) {
    console.log(`Error occurred: ${error.message}`);
}
