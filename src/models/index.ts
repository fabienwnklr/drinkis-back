import { Sequelize } from 'sequelize';

const Database = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql'
});

// Import all models
import { EventModel } from './event.model';
import { PartnerModel } from './partner.model';
import { UserModel } from './user.model';
// import { Associate } from './associate';

EventModel.hasOne(PartnerModel, {
    foreignKey: 'event_id'
});

export {
    PartnerModel,
    UserModel,
    EventModel,
    Database
};
