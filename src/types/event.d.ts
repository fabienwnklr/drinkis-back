import { Optional, Model } from 'sequelize';

export interface EventAttributes {
    id?: number;
    name: string;
    start_date: string;
    end_date: string;
    description: string;
    createdBy: string;
    updatedBy?: string;
}

export interface EventCreationAttributes extends Optional<EventAttributes, 'id'> {}

export interface EventInstance extends Model<EventAttributes, EventCreationAttributes>, EventAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}
