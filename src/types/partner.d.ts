import { Optional, Model } from 'sequelize';

interface PartnerAttributes {
    id?: number;
    name: string;
    description: string;
    imgUrl?: string;
    createdBy?: string;
    updatedBy?: string;
}

interface PartnerCreationAttributes extends Optional<PartnerAttributes, 'id'> {}

interface PartnerInstance extends Model<PartnerAttributes, PartnerCreationAttributes>, PartnerAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}