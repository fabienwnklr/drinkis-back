import { DataTypes } from 'sequelize';
import { EventInstance } from '../types/event';
import { Database } from './index';

export const EventModel = Database.define<EventInstance>(
    'Event',
    {
        // Model attributes are defined here
        name: {
            allowNull: false,
            type: DataTypes.STRING(255)
        },
        start_date: {
            allowNull: false,
            type: DataTypes.STRING(15)
        },
        end_date: {
            allowNull: false,
            type: DataTypes.STRING(15)
        },
        createdBy: {
            allowNull: false,
            type: DataTypes.STRING(255)
        },
        description: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        updatedBy: {
            allowNull: true,
            type: DataTypes.STRING(255)
        }
    },
    { freezeTableName: true }
);
