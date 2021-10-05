import { Response } from 'express';

export function catchAsync(res: Response, message: string, error: Error) {
    res.status(500).send({message, error});
}
