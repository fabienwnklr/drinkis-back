import { Request, Response } from 'express';
import { catchAsync } from '../utils';
import { UserModel } from '../models';

// Types
import { UserAttributes } from '../types/user';

export async function create(req: Request, res: Response) {
    try {
        const newUser: UserAttributes = {
            firstName: req.params.firstName,
            lastName: req.params.lastName,
            email: req.params.email,
            password: req.params.password,
            phoneNumber: parseInt(req.params.phoneNumber),
            birthDate: req.params.birthDate,
        };

        const creation = await UserModel.create(newUser);
        const last = await UserModel.findByPk(creation.id);

        res.send({ message: 'User created successfully', data: last });
    } catch (error) {
        catchAsync(res, 'An error occured, please contact admin.', error);
    }
}

export async function getAll(req: Request, res: Response) {
    try {
        const users = await UserModel.findAll();

        if (users.length === 0) {
            res.send({ message: 'No user found.' });
        } else {
            res.send(users);
        }
    } catch (error) {
        catchAsync(res, 'An error occured, please contact admin.', error);
    }
}

export async function getOne(req: Request, res: Response) {
    try {
        const id = req.body.id;
        const user = UserModel.findOne(id);

        res.send(user);
    } catch (error) {
        catchAsync(res, 'An error occured, please contact admin.', error);
    }
}

export async function update(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const values = req.body;

        const updatedUser = await UserModel.update(values, { where: { id } });

        if (updatedUser) {
            res.status(200).send({
                values,
                message: 'Changement(s) enregisté(s).'
            });
        }
    } catch (error) {
        catchAsync(res, 'An error occured, please contact admin.', error);
    }
}

export async function remove(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const removedUser = await UserModel.destroy({ where: { id } });

        if (removedUser === 1) {
            res.send({ message: 'User deleted successfully.' });
        } else {
            res.send({ message: `Cannot remove user with id ${id}, maybe already removed.` });
        }
    } catch (error) {
        catchAsync(res, 'An error occured, please contact admin.', error);
    }
}

export async function removeAll(req: Request, res: Response) {
    try {
        const removedAll = await UserModel.destroy({ truncate: true });

        res.send({ message: `${removedAll} partenaires on bien été supprimé.` });
    } catch (error) {
        catchAsync(res, 'An error occured, please contact admin.', error);
    }
}
