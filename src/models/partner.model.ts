import { DataTypes } from 'sequelize';
import { PartnerInstance } from '../types/partner';
import { Database } from './index';

export const PartnerModel = Database.define<PartnerInstance>(
    'Partner',
    {
        // Model attributes are defined here
        name: {
            allowNull: false,
            type: DataTypes.STRING(255)
        },
        createdBy: {
            allowNull: false,
            type: DataTypes.STRING(255)
        },
        description: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        imgUrl: {
            allowNull: true,
            type: DataTypes.STRING(255)
        },
        updatedBy: {
            allowNull: true,
            type: DataTypes.STRING(255)
        }
    },
    { freezeTableName: true }
);
