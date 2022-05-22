import { Request, Response } from 'express';
import { PartnerModel } from '../models';
import { catchAsync } from '../utils';

// Types
import { PartnerAttributes } from '../types/partner';

export async function create(req: Request, res: Response) {
    try {
        const newPartner: PartnerAttributes = {
            name: req.body.name,
            description: req.body.description,
            createdBy: req.body.username
        };

        const creation = await PartnerModel.create(newPartner);
        const last = await PartnerModel.findByPk(creation.id);

        res.send({ message: 'Partner created successfully', data: last });
    } catch (error) {
        catchAsync(res, 'An error occured, please contact admin.', error);
    }
}

export async function getAll(req: Request, res: Response) {
    try {
        const partners = await PartnerModel.findAll();

        // if (partners.length === 0) {
            // res.send({});
        // } else {
            res.send(partners);
        // }
    } catch (error) {
        catchAsync(res, 'An error occured, please contact admin.', error);
    }
}

export async function getOne(req: Request, res: Response) {
    try {
        const id = req.body.id;
        const partner = PartnerModel.findOne(id);

        res.send(partner);
    } catch (error) {
        catchAsync(res, 'An error occured, please contact admin.', error);
    }
}

export async function update(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const values = req.body;

        const updatedPartner = await PartnerModel.update(values, { where: { id } });

        if (updatedPartner) {
            res.status(200).send({
                values,
                message: 'Changement(s) enregisté(s).',
            });
        }
    } catch (error) {
        catchAsync(res, 'An error occured, please contact admin.', error);
    }
}

export async function remove(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const removedPartner = await PartnerModel.destroy({ where: { id } });

        if (removedPartner === 1) {
            res.send({ message: 'Partner deleted successfully.'});
        } else {
            res.send({ message: `Cannot remove partner with id ${id}, maybe already removed.`});
        }
    } catch (error) {
        catchAsync(res, 'An error occured, please contact admin.', error);
    }
}

export async function removeAll(req: Request, res: Response) {
    try {
        const removedAll = await PartnerModel.destroy({ truncate: true });

        res.send({ message: `${removedAll} partenaires on bien été supprimé.` });
    } catch (error) {
        catchAsync(res, 'An error occured, please contact admin.', error);
    }
}
