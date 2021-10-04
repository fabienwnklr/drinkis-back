import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { PartnerModel } from '../models';

// Types
import { PartnerAttributes } from '../types/partner';

export async function create(req: Request, res: Response) {
    const newPartner: PartnerAttributes = {
        name: req.body.name,
        description: req.body.description
    };

    const creation = await PartnerModel.create(newPartner);
    // const last = await PartnerModel.findByPk(creation.id);

    // res.send(last);
}

export async function getAll(req: Request, res: Response) {
    const partners = await PartnerModel.findAll();

    if (partners.length === 0) {
        res.send({message: 'No partner found.'});
    } else {
        res.send(partners);
    }
}
