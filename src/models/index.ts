import { Sequelize } from 'sequelize';

const Database = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql'
});

// Import all models
import { EventModel } from './event.model';
import { PartnerModel } from './partner.model';
import { UserModel } from './user.model';

// Export all .. import..export..import..export again..
export {
    PartnerModel,
    UserModel,
    EventModel,
    Database
};
