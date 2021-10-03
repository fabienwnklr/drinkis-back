import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
/**
 * @param {Request} req
 * @param {Response} res
 * @param {CallableFunction} next
 */
export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const bearerHeader = req.headers.authorization;
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            const token = bearerToken;
            jwt.verify(token, 'secretkey', (err, user) => {
                if (err) {
                    if (err instanceof jwt.TokenExpiredError) {
                        res.status(401).send({
                            message: 'Connection timed out'
                        });
                    } else {
                        res.status(401).send({
                            message: 'Invalid token'
                        });
                    }
                }
                next();
            });
        } else {
            res.status(403).send({
                message: `No token provided`
            });
        }
    } catch (err) {
        res.status(401).send({
            errorThrow: err,
            error: new Error(`Invalid request`)
        });
    }
};
