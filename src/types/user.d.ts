import { Optional, Model, DataTypes } from 'sequelize';

export interface UserAttributes {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    token: boolean;
    phoneNumber?: number;
    birthDate?: Date;
    createdBy: string;
    updatedBy: string;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}
