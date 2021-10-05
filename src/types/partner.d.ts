import { Optional, Model } from 'sequelize';

export interface PartnerAttributes {
    id?: number;
    name: string;
    description: string;
    imgUrl?: string;
    createdBy?: string;
    updatedBy?: string;
}

export interface PartnerCreationAttributes extends Optional<PartnerAttributes, 'id'> {}

export interface PartnerInstance extends Model<PartnerAttributes, PartnerCreationAttributes>, PartnerAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}