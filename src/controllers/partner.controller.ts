import { Request, Response } from 'express';
import { catchAsync } from '../utils';
import { PartnerModel } from '../models';

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

        res.send(last);
    } catch (error) {
        catchAsync(res, 'Une erreur est survenue, veuillez contacter un admin.', error);
    }
}

export async function getAll(req: Request, res: Response) {
    try {
        const partners = await PartnerModel.findAll();

        if (partners.length === 0) {
            res.send({ message: 'No partner found.' });
        } else {
            res.send(partners);
        }
    } catch (error) {
        catchAsync(res, 'Une erreur est survenue, veuillez contacter un admin.', error);
    }
}

export async function getOne(req: Request, res: Response) {
    try {
        const id = req.body.id;
        const partner = PartnerModel.findOne(id);

        res.send(partner);
    } catch (error) {
        catchAsync(res, 'Une erreur est survenue, veuillez contacter un admin.', error);
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
                message: "Changement(s) enregisté(s).",
            });
        }
    } catch (error) {
        catchAsync(res, 'Une erreur est survenue, veuillez contacter un admin.', error);
    }
};

export async function remove(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const removedPartner = await PartnerModel.destroy({ where: { id } });
        
        if (removedPartner === 1) {
            res.send({ message: 'Partenaire supprimé.'})
        } else {
            res.send({ message: 'Nous ne pouvons supprimé le partenaire.. Peut-être est il déjà supprimé.'})
        }
    } catch (error) {
        catchAsync(res, 'Une erreur est survenue, veuillez contacter un admin.', error);
    }
}

export async function removeAll(req: Request, res: Response) {
    try {
        const removedAll = await PartnerModel.destroy({ truncate: true });

        res.send({ message: `${removedAll} partenaires on bien été supprimé.` });
    } catch (error) {
        catchAsync(res, 'Une erreur est survenue, veuillez contacter un admin.', error);
    }
}