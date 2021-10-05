import { Request, Response } from 'express';
import { EventModel } from '../models';
import { catchAsync } from '../utils';

// Types
import { EventAttributes } from '../types/event';

export async function create(req: Request, res: Response) {
    try {
        const newEvent: EventAttributes = {
            name: req.body.name,
            description: req.body.description,
            createdBy: req.body.username,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
        };

        const creation = await EventModel.create(newEvent);
        const last = await EventModel.findByPk(creation.id);

        res.send({ message: 'Event created successfully', data: last });
    } catch (error) {
        catchAsync(res, 'An error occured, please contact admin.', error);
    }
}

export async function getAll(req: Request, res: Response) {
    try {
        const events = await EventModel.findAll();

        if (events.length === 0) {
            res.send({ message: 'No event found.' });
        } else {
            res.send(events);
        }
    } catch (error) {
        catchAsync(res, 'An error occured, please contact admin.', error);
    }
}

export async function getOne(req: Request, res: Response) {
    try {
        const id = req.body.id;
        const event = EventModel.findOne(id);

        res.send(event);
    } catch (error) {
        catchAsync(res, 'An error occured, please contact admin.', error);
    }
}

export async function update(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const values = req.body;

        const updatedEvent = await EventModel.update(values, { where: { id } });

        if (updatedEvent) {
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
        const removedEvent = await EventModel.destroy({ where: { id } });

        if (removedEvent === 1) {
            res.send({ message: 'Event deleted successfully.' });
        } else {
            res.send({ message: `Cannot remove event with id ${id}, maybe already removed.` });
        }
    } catch (error) {
        catchAsync(res, 'An error occured, please contact admin.', error);
    }
}

export async function removeAll(req: Request, res: Response) {
    try {
        const removedAll = await EventModel.destroy({ truncate: true });

        res.send({ message: `${removedAll} partenaires on bien été supprimé.` });
    } catch (error) {
        catchAsync(res, 'An error occured, please contact admin.', error);
    }
}
