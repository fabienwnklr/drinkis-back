import { Application } from 'express';
import { Router } from 'express';
import { getAll } from '../controllers/partner.controller';
import { verifyToken } from '../middleware/authJwt';

export default function PartnerRoutes(app: Application) {
    const router = Router();

    router.get('/', getAll);

    app.use('/api/partner', router);
}
