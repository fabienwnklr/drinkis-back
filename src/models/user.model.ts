import { DataTypes } from 'sequelize';
import { UserInstance } from '../types/user';
import { Database } from './index';

export const UserModel = Database.define<UserInstance>(
    'User',
    {
        email: {
            allowNull: false,
            type: DataTypes.STRING(255)
        },
        firstName: {
            allowNull: false,
            type: DataTypes.STRING(255)
        },
        lastName: {
            allowNull: false,
            type: DataTypes.STRING(255)
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING(255)
        },
        token: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        phoneNumber: {
            allowNull: true,
            type: DataTypes.INTEGER()
        },
        birthDate: {
            allowNull: false,
            type: DataTypes.DATE()
        },
        createdBy: {
            allowNull: false,
            type: DataTypes.STRING(255)
        },
        updatedBy: {
            allowNull: true,
            type: DataTypes.STRING(255)
        }
    },
    { freezeTableName: true }
);
