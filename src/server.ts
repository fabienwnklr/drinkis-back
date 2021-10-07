import { config } from 'dotenv';
config();

import express, { Application, Request, Response } from 'express';
import { createDB } from './db';
import { Database } from './models';
import PatnerRoutes from './routes/partner.routes';

const app: Application = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('The sedulous hyena ate the antelope!');
});

PatnerRoutes(app);

try {
    Database.sync({ force: true }).then(() => {
        console.info('Re-sync db.');
        app.listen(port, () => {
            console.log(`API running on http://localhost:${port}`);
            createDB();
        });
    });
} catch (error) {
    console.log(`Error occurred: ${error.message}`);
}
