import { Sequelize } from 'sequelize';
import { PartnerModel } from './partner.model';

const mySequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
});

const partner = PartnerModel(mySequelize, Sequelize);

export { Sequelize, mySequelize, partner };
