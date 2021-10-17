import { Optional, Model } from 'sequelize';

declare interface EventAttributes {
    id?: number;
    name: string;
    start_date: string;
    end_date: string;
    description: string;
    createdBy: string;
    updatedBy?: string;
}

declare interface EventCreationAttributes extends Optional<EventAttributes, 'id'> {}

declare interface EventInstance extends Model<EventAttributes, EventCreationAttributes>, EventAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}
